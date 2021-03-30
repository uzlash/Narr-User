<template>
  <v-app class="grey lighten-4">
    <v-container>
      <v-row>
        <v-col cols="12" md="8" sm="8">
          <span class="text-h4 font-weight-thin">ICT Works</span>
        </v-col>
      </v-row>
      <v-row no-gutters v-for="work in works" :key="work.guid">
        <v-col cols="12">
          <v-card class="mb-2 px-4" tile>
            <v-row class="py-2">
              <v-col cols="9" class="px-0 pb-0">
                <v-card tile outlined class="px-1" color="transparent">
                  <span class="accent--text body-1 font-weight-bold">
                    {{ work.title }}
                  </span>
                </v-card>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="3">
                <v-card tile outlined class="pa-2">
                  <v-img :src="work.imgSrc" height="224"></v-img>
                </v-card>
              </v-col>
              <v-col cols="6">
                <v-card tile outlined class="px-1 mt-1">
                  <span class="accent--text body-2">Creator: </span>
                  <span class="grey--text text--darken-2 body-2">
                    {{ work.creator }}
                  </span>
                  <!-- <v-row>
                    <v-col cols="4" class="py-0 pb-0">
                      <span class="accent--text body-2">Creator: </span>
                      <span class="grey--text text--darken-2 body-2">
                        {{ work.creator }}
                      </span>
                    </v-col>
                  </v-row> -->
                </v-card>
                <v-row>
                  <v-col cols="12" class="py-0">
                    <v-card tile outlined class="px-1 mt-1" height="180">
                      <v-card-title class="pa-1">
                        <span class="accent--text body-2">Description: </span>
                      </v-card-title>
                      <v-divider></v-divider>
                      <v-card-text class="pa-1">
                        <span
                          class="grey--text text--darken-2 body-2 font-weight-regular"
                          >{{
                            work["content:encodedSnippet"].slice(0, 500) + "..."
                          }}</span
                        >
                      </v-card-text>
                    </v-card>
                  </v-col>
                </v-row>
                <div class="mt-2 d-flex justify-end">
                  <v-btn
                    depressed
                    tile
                    @click="readMore(work)"
                    small
                    class="text-capitalize mx-2"
                    color="accent"
                  >
                    Read More
                  </v-btn>
                  <v-btn
                    depressed
                    tile
                    small
                    target="_blank"
                    :href="work.link"
                    class="text-capitalize"
                    color="info"
                  >
                    Visit Site
                  </v-btn>
                </div>
              </v-col>
              <v-col cols="3">
                <v-row>
                  <v-col cols="4" class="py-1 pb-0">
                    <v-card tile outlined class="px-1">
                      <span class="accent--text body-2">Date: </span>
                    </v-card>
                  </v-col>
                  <v-col cols="8" class="px-0 pt-1 pb-0">
                    <v-card tile outlined class="px-1">
                      <span class="grey--text text--darken-2 body-2">
                        {{
                          new Date(work.isoDate).toLocaleString("en-GB", {
                            hour12: true,
                          })
                        }}
                      </span></v-card
                    >
                  </v-col>
                </v-row>

                <v-row>
                  <v-col cols="12" class="py-1 pb-0">
                    <v-card tile outlined class="px-1">
                      <span class="accent--text body-2">Categories: </span>
                    </v-card>
                  </v-col>
                  <v-col cols="12" class="py-1 pb-0">
                    <v-card tile outlined class="px-1" height="152">
                      <v-chip
                        v-for="(item, index) in work.categories.slice(0, 8)"
                        :key="index"
                        x-small
                        class="ma-1 white--text"
                        color="accent"
                        >{{ item }}</v-chip
                      >
                    </v-card>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
      <div class="text-center">
        <v-dialog v-model="dialogview" max-height="80vh" max-width="80vw">
          <v-card class="pa-2 custom__card-image">
            <v-card-title>
              <span class="accent--text body-1 font-weight-bold">{{
                viewItem.title
              }}</span>
              <v-spacer></v-spacer>
              <v-btn @click="dialogview = false" icon>
                <v-icon color="red">mdi-close</v-icon>
              </v-btn>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text
              class="mt-2"
              v-html="viewItem['content:encoded']"
            ></v-card-text>
          </v-card>
        </v-dialog>
      </div>
    </v-container>
  </v-app>
</template>

<script>
import feed from "@/services/feed";
// import helpers from "../services/helpers";
export default {
  data() {
    return {
      search: "",
      dialogview: false,
      works: [],
      viewItem: {},
    };
  },
  methods: {
    readMore(item) {
      console.log("Item", item);
      this.itemIndex = this.works.indexOf(item);
      this.viewItem = Object.assign({}, item);
      this.dialogview = true;
    },
  },
  created() {
    const data = feed;
    const tData = [];

    data.forEach((element) => {
      const data = element["content:encoded"].split("<p>")[1];
      const result = data.split("src=")[1];
      if (result == null) {
        element.imgSrc = "https://i.stack.imgur.com/y9DpT.jpg";
        tData.push(element);
        console.log("Error on Result");
      } else {
        const res = result.split('"')[1];
        element.imgSrc = res;
        tData.push(element);
      }
    });

    this.works = tData;
    // helpers
    //   .fetchWorks()
    //   .then((response) => {
    //     console.log("Response", response);
    //     this.works = response;
    //   })
    //   .catch((error) => {
    //     console.log("Error>>>", error);
    //   });
  },
};
</script>

<style>
.custom__research-card:hover {
  background-color: #fafafa;
}
.grant__body-info:hover {
  cursor: pointer;
}
.custom__btn-up {
  position: fixed;
  top: 55px;
  right: 40px;
}
</style>
