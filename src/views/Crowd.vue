<template>
  <v-app class="grey lighten-4">
    <v-container>
      <v-row>
        <v-col cols="12">
          <span class="text-h4 font-weight-thin"
            >Crowd Funding - Fund a Research</span
          >
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="12"
          md="6"
          lg="3"
          v-for="(crowdFund, index) in 6"
          :key="index"
        >
          <v-card tile outlined class="mx-auto" max-width="374">
            <v-img
              height="200"
              src="https://miro.medium.com/max/1146/1*KhUes1b3TtkStUXseSseEA.png"
            ></v-img>
            <v-card-title
              class="body-2 font-weight-medium green--text text--darken-4 py-2"
              >Support Vector Machines & Regression Research
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text class="py-1">
              <span class="body-2 font-weight-regular black--text"
                >Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt molestias nostrum ab dolorem saepe alias voluptatum
                recusandae nemo ratione esse!</span
              >
            </v-card-text>
            <v-divider class="mx-4"></v-divider>
            <div class="px-4 py-1">
              <span class="body-2 font-weight-bold">Funding</span>
              <v-progress-linear
                class="my-1"
                color="#00a368"
                height="10"
                value="30"
              ></v-progress-linear>
              <span class="font-weight-bold body-2">N7,000,000</span> raised of
              <span class="font-weight-bold body-2">N10,000,000 </span>
            </div>
            <v-card-actions>
              <v-btn outlined small color="#00a368" @click="goCrowdView(index)">
                Fund Research
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <v-speed-dial
        v-model="fab"
        direction="left"
        transition="slide-x"
        class="custom__btn-up"
      >
        <template v-slot:activator>
          <v-btn v-model="fab" x-large color="#00a368" dark fab>
            <v-icon v-if="fab">
              mdi-close
            </v-icon>
            <span v-else class="body-2 font-weight-bold">
              Manage
            </span>
          </v-btn>
        </template>
        <v-btn fab dark small color="#00a368" @click="goManageCrowd()">
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
        <v-btn fab dark small color="indigo">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
        <v-btn fab dark small color="red">
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </v-speed-dial>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      fab: false,
    };
  },
  methods: {
    goManageCrowd() {
      this.$router.push("/managecrowd");
    },
    goCrowdView(id) {
      console.log("clicked " + id);
      this.$router.push(`/viewcrowd/${id}`);
    },
  },
};
</script>

<style>
.custom__research-card:hover {
  cursor: pointer;
  background-color: #fafafa;
}
.custom__btn-up {
  position: fixed;
  top: 55px;
  right: 40px;
}
</style>
