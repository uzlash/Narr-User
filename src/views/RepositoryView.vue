<template>
  <v-app class="grey lighten-4">
    <v-container>
      <v-row>
        <v-col cols="12">
          <span class="text-h4 font-weight-thin">Research View</span>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="6" md="6" lg="6">
          <v-img
            v-if="research"
            :src="research.image"
            height="400px"
            width="100%"
          ></v-img>
          <!-- <span class="text-h4" v-else>Loading...</span> -->
        </v-col>
        <v-divider vertical class="my-3 hidden-sm-and-down"></v-divider>
        <v-col cols="12" sm="6" md="5" lg="5">
          <v-card tile outlined min-height="400px">
            <v-card-title>
              {{ research.title }}
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text class="body-1 font-weight-bold">
              Authors(s):
              <span class="grey--text text--darken-3 font-weight-light">{{
                research.author
              }}</span>
            </v-card-text>
            <v-card-text class="body-1 font-weight-bold">
              Category:
              <span class="grey--text text--darken-3 font-weight-light">{{
                research.category
              }}</span>
            </v-card-text>
            <v-card-text class="body-1 font-weight-bold">
              Date Published:
              <span class="grey--text text--darken-3 font-weight-light">{{
                research.date
              }}</span>
            </v-card-text>
            <v-card-text class="body-1 font-weight-bold">
              Pages:
              <span class="grey--text text--darken-3 font-weight-light">{{
                research.pages
              }}</span>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-btn
                @click="readResearch(research.id)"
                class="mt-4 px-4 text-capitalize"
                color="#00a368"
                depressed
                dark
                outlined
                >Read</v-btn
              >
              <v-divider vertical class="mt-4 ml-2"></v-divider>
              <span class="mt-4 mx-2 body-2 grey--text text--darken-4"
                >Viewed:
              </span>
              <span class="mt-4 body-2 grey--text text--darken-3"
                >20 minutes ago</span
              >
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="11" lg="11">
          <v-tabs class="elevation-1" color="#00a368" align-with-title>
            <!-- <v-tabs-slider color="green"></v-tabs-slider> -->
            <v-tab>
              Description
            </v-tab>
            <v-tab-item class="pa-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea magni
              neque unde itaque officia explicabo quod. Debitis recusandae illum
              tenetur harum! Quos illo pariatur non modi repudiandae vero enim
              eos praesentium similique, explicabo corporis vitae natus minima
              iure porro! Ipsa doloremque quidem nostrum maiores natus molestias
              cumque quasi repellendus ipsum! Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Ea magni neque unde itaque officia
              explicabo quod. Debitis recusandae illum tenetur harum! Quos illo
              pariatur non modi repudiandae vero enim eos praesentium similique,
              explicabo corporis vitae natus minima iure porro! Ipsa doloremque
              quidem nostrum maiores natus molestias cumque quasi repellendus
              ipsum! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Ea magni neque unde itaque officia explicabo quod. Debitis
              recusandae illum tenetur harum! Quos illo pariatur non modi
              repudiandae vero enim eos praesentium similique, explicabo
              corporis vitae natus minima iure porro! Ipsa doloremque quidem
              nostrum maiores natus molestias cumque quasi repellendus ipsum!
            </v-tab-item>
          </v-tabs>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import helpers from "../services/helpers";
export default {
  props: ["id"],
  data: () => ({
    research: [],
    current: {},
  }),
  methods: {
    readResearch(id) {
      this.$router.push(`${id}/read`);
    },
  },
  created() {
    helpers
      .fetchSingleResearch(this.id)
      .then((response) => {
        console.log("Response", response.data.payload);
        this.research = response.data.payload;
        console.log("Research", this.research);
        this.current = this.research.researchData[0];
        console.log("Current", this.current);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style></style>
