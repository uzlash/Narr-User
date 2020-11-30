<template>
  <v-app class="grey lighten-4">
    <v-container>
      <!-- <v-row>
        <v-col cols="12" md="8" sm="8">
          <span class="text-h4 font-weight-thin">Repository</span>
        </v-col>
      </v-row> -->
      <v-row>
        <v-col cols="12" sm="6" md="3">
          <v-text-field
            dense
            solo
            hide-details
            color="#00a368"
            class="mb-2"
            label="Search Repository"
            append-icon="search"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="1" md="1" class="px-0 pt-4 pl-2">
          <span class="body-1">Filter By: </span>
        </v-col>
        <v-col cols="6" sm="6" md="2">
          <v-select
            hide-details
            class="d-inline"
            dense
            :items="[
              'Art',
              'Engineering',
              'Law',
              'Sciences',
              'Social Sciences',
            ]"
            label="By Category"
            solo
          ></v-select>
        </v-col>
        <v-col cols="6" sm="6" md="2">
          <v-select
            hide-details
            class="d-inline"
            dense
            :items="[
              'Ahmadu Bello University',
              'Abubakar Tafawa Balewa University',
              'Bayero University Kano',
            ]"
            label="By Institution"
            solo
          ></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="12"
          lg="3"
          md="4"
          sm="6"
          class="pa-2"
          v-for="research in Repository"
          :key="research._id"
        >
          <v-card class="pa-2" tile>
            <v-card
              outlined
              @click="goResearchView(research._id)"
              tile
              class="mx-auto custom__card"
              max-width="344"
            >
              <!-- :src="'https://narr.ng/' + research.thumbnail" -->
              <v-img
                :src="`https://narr.ng/${research.thumbnail}`"
                height="200px"
              ></v-img>
              <v-card-title
                class="font-weight-bold px-2 body-2 green--text text--darken-4"
              >
                <span>{{ research.researchTitle }}</span>
              </v-card-title>
              <v-divider></v-divider>
              <v-divider class="grey lighten-1"></v-divider>
              <v-card-subtitle class="pa-0 px-2">
                <span class="font-weight-bold green--text text--darken-4 mr-1"
                  >Authors:</span
                >
                <span>{{
                  research.authors.toString().replace(/,/g, " and ")
                }}</span>
              </v-card-subtitle>
              <v-card-subtitle class="pa-0 px-2">
                <span
                  class="caption font-weight-bold amber--text text--darken-4"
                  >Published:
                </span>
                <span class="caption mr-2">{{ research.year }}</span>
                <span
                  class="caption font-weight-bold amber--text text--darken-4"
                  >Pages:</span
                >
                <span class="caption ml-1">{{ research.nPages }}</span>
              </v-card-subtitle>
            </v-card>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import helpers from "../services/helpers";
export default {
  data: () => ({
    Repository: [],
  }),
  methods: {
    goResearchView(id) {
      this.$router.push("/repository/" + id);
      console.log(id);
    },
  },
  created() {
    helpers
      .fetchResearches()
      .then((response) => {
        console.log("Response -> Data -> Payload", response.data.payload);
        this.Repository = response.data.payload;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style>
.custom__card {
  cursor: pointer;
}
</style>
