<template>
  <v-app class="grey lighten-4">
    <v-container v-if="Repository.length">
      <v-row align="center" justify="center">
        <v-col cols="12" md="8" sm="8" class="py-0">
          <v-text-field
            color="accent"
            dense
            solo
            hide-details
            class="mb-2"
            label="Search NARR"
            append-icon="search"
          ></v-text-field>
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
              max-height="320"
            >
              <v-img
                :src="
                  `${imageUrl}${research.thumbnail}?action=thumbnail&token=${savedToken}`
                "
                height="200px"
              ></v-img>
              <v-card-title class="px-2 py-1 green--text text--darken-4">
                <span class="body-2 font-weight-bold">{{
                  research.researchTitle
                }}</span>
              </v-card-title>
              <v-divider></v-divider>
              <v-divider class="grey lighten-1"></v-divider>
              <v-card-subtitle class="pa-0 px-2">
                <span
                  class="font-weight-bold caption green--text text--darken-4 mr-1"
                  >Authors:</span
                >
                <span class="caption">{{
                  research.authors.toString().replace(/,/g, ' and ')
                }}</span>
              </v-card-subtitle>
              <v-card-subtitle class="pa-0 px-2">
                <span
                  class="caption font-weight-bold yellow--text text--darken-2"
                  >Published:
                </span>
                <span class="caption mr-2">{{ research.year }}</span>
                <span
                  class="caption font-weight-bold yellow--text text--darken-2"
                  >Pages:</span
                >
                <span class="caption ml-1">{{ research.nPages }}</span>
              </v-card-subtitle>
            </v-card>
          </v-card>
        </v-col>
      </v-row>
      <v-btn
        color="indigo"
        dark
        class="custom__btn text-capitalize px-2 mt-3"
        @click="goUpload()"
      >
        <span class="caption">
          Upload New Document
        </span>
      </v-btn>
    </v-container>
    <v-container v-else>
      <v-card
        tile
        outlined
        class="d-flex align-center justify-center"
        color="transparent"
        height="80vh"
        width="100vw"
      >
        <v-progress-circular
          :size="200"
          color="accent"
          indeterminate
        ></v-progress-circular>
      </v-card>
    </v-container>
  </v-app>
</template>

<script>
import helpers from '../services/helpers'
export default {
  data: () => ({
    Repository: [],
  }),
  methods: {
    goResearchView(id) {
      this.$router.push('/repository/' + id)
    },
    goUpload() {
      this.$router.push('/upload')
    },
  },
  computed: {
    imageUrl() {
      return helpers.apiBaseUrl
    },
    savedToken() {
      return this.$store.state.token
    },
  },
  created() {
    helpers
      .fetchResearches()
      .then((response) => {
        this.Repository = response.data.payload
      })
      .catch((error) => {
        console.log('Error>>>', error)
      })
  },
}
</script>

<style>
.custom__card {
  cursor: pointer;
}
.custom__btn {
  position: fixed;
  bottom: 70px;
  right: 40px;
}
</style>
