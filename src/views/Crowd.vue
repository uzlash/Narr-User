<template>
  <v-app class="grey lighten-4">
    <v-container>
      <v-row>
        <v-col cols="12" class="d-flex">
          <span class="text-h4 font-weight-thin"
            >Crowd Funding - Fund a Research</span
          >
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="4" v-for="(crowdFund, index) in 6" :key="index">
          <v-card class="mx-auto" max-width="374">
            <v-img
              height="200"
              src="https://miro.medium.com/max/1146/1*KhUes1b3TtkStUXseSseEA.png"
            ></v-img>
            <v-card-title>Support SVM & Regression Research</v-card-title>
            <v-card-text>
              <v-row align="center" class="mx-0"> </v-row>
              <div>
                <span class="body-1"
                  >Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Incidunt molestias nostrum ab dolorem saepe alias voluptatum
                  recusandae nemo ratione esse!</span
                >
              </div>
            </v-card-text>
            <v-divider class="mx-4"></v-divider>
            <div class="px-4 py-2">
              <span class="body-1 font-weight-light">Funding</span>
              <v-progress-linear
                class="my-2"
                color="#00a368"
                height="10"
                value="30"
              ></v-progress-linear>
              <span class="font-weight-bold">N3000</span> raised of
              <span class="font-weight-bold">N10,000 </span>
            </div>
            <v-card-actions>
              <v-btn outlined color="#00a368">
                Fund Research
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      search: "",
    };
  },
  methods: {
    clicked(id) {
      console.log("clicked " + id);
    },
  },
};
</script>

<style>
.custom__research-card:hover {
  cursor: pointer;
  background-color: #fafafa;
  /* background-color: #F5F5F5; */
  /* background-color: #EEEEEE; */
}
</style>
