<template>
  <v-app class="grey lighten-4">
    <v-container>
      <v-row no-gutters>
        <v-col cols="12">
          <v-card tile outlined>
            <v-row>
              <v-col cols="6">
                <div class="font-weight-bold pl-2 green--text text--darken-4">
                  Title: {{ research.researchTitle }}
                </div>
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="6">
                <div class="font-weight-bold amber--text text--darken-4">
                  <span v-for="(r, i) in research.authors" :key="i">{{
                    r + " "
                  }}</span>
                </div>
              </v-col>
            </v-row>
          </v-card>
          <div class="body-1 font-weight-regular"></div>
        </v-col>
        <v-col cols="12">
          <div
            :class="
              darkMode === true
                ? 'cropper__container d-flex justify-center black'
                : 'cropper__container d-flex justify-center white'
            "
          >
            <vue-cropper
              :class="
                darkMode === true
                  ? 'invert__image image__box'
                  : 'image__box white'
              "
              :src="`https://narr.ng/${research.readPath}${page}.jpg`"
              ref="cropper"
              alt="Research Page"
              :autoCrop="false"
              :autoCropArea="1"
              :zoomOnWheel="false"
              :center="false"
              dragMode="none"
            >
            </vue-cropper>
            <!-- <vue-cropper
              :class="
                darkMode === true
                  ? 'invert__image image__box'
                  : 'image__box white'
              "
              ref="cropper"
              :src="src"
              alt="Research Page"
              :autoCrop="false"
              :autoCropArea="1"
              :zoomOnWheel="false"
              :center="false"
              dragMode="none"
            >
            </vue-cropper> -->
            <!-- <v-img
              width="100%"
              :src="`https://narr.ng/${research.readPath}${page}.jpg`"
            ></v-img> -->
          </div>
        </v-col>
      </v-row>
    </v-container>
    <div class="d-flex justify-center">
      <div class="custom__static d-flex flex-column">
        <div class="d-flex align-center">
          <v-btn large icon color="white">
            <v-icon>mdi-rewind</v-icon>
          </v-btn>
          <v-btn large icon color="white" @click="prevPage()">
            <v-icon>mdi-skip-previous</v-icon>
          </v-btn>
          <span class="text-center grey lighten-3 my-3 px-4">{{ page }}</span>
          <v-btn large icon color="white" @click="nextPage()">
            <v-icon>mdi-skip-next</v-icon>
          </v-btn>
          <v-btn large icon color="white">
            <v-icon>mdi-fast-forward</v-icon>
          </v-btn>
          <div class="d-flex align-center justify-center">
            <label for="page" class="white--text hidden-sm-and-down mx-2"
              >Jump to page:
            </label>
            <!-- <select name="page" id="page" class="grey lighten-4 mx-4 px-4">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select> -->
            <!-- <select name="page" id="page" class="grey lighten-4 mx-4 px-4">
              <option
                v-for="(page, index) in researchData"
                :key="index"
                :value="page.length"
                @select="changePage(index)"
                >{{ index + 1 }}</option
              >
            </select> -->
          </div>
          <v-btn
            large
            icon
            class="hidden-sm-and-down"
            color="white"
            @click="zoom(0.2)"
          >
            <v-icon>mdi-magnify-plus-outline</v-icon>
          </v-btn>
          <v-btn
            large
            icon
            class="hidden-sm-and-down"
            color="white"
            @click="zoom(-0.2)"
          >
            <v-icon>mdi-magnify-minus-outline</v-icon>
          </v-btn>
          <v-btn
            large
            icon
            class="hidden-sm-and-down"
            color="white"
            @click.prevent="move(0, 50)"
          >
            <v-icon>mdi-arrow-up-drop-circle-outline</v-icon>
          </v-btn>
          <v-btn
            large
            icon
            class="hidden-sm-and-down"
            color="white"
            @click.prevent="move(0, -50)"
          >
            <v-icon>mdi-arrow-down-drop-circle-outline</v-icon>
          </v-btn>
          <v-btn
            large
            icon
            class="hidden-sm-and-down"
            color="white"
            @click.prevent="move(50, 0)"
          >
            <v-icon>mdi-arrow-left-drop-circle-outline</v-icon>
          </v-btn>
          <v-btn
            large
            icon
            class="hidden-sm-and-down"
            color="white"
            @click.prevent="move(-50, 0)"
          >
            <v-icon>mdi-arrow-right-drop-circle-outline</v-icon>
          </v-btn>
          <div class="mr-2 white--text">
            Dark <span class="hidden-sm-and-down">Mode:</span>
          </div>
          <v-checkbox
            v-model="darkMode"
            dark
            hide-details
            class="mt-n1"
          ></v-checkbox>
        </div>
      </div>
    </div>
  </v-app>
</template>

<script>
import store from "../store/index";
import VueCropper from "vue-cropperjs";
import "cropperjs/dist/cropper.css";

export default {
  props: ["id"],
  components: { VueCropper },
  data: () => ({
    a: 0,
    b: 1,
    research: {},
    page: 1,
    darkMode: false,
    next: false,
    showCropper: false,
    src: "https://i.imgur.com/aA9SSMA.jpg",
  }),
  methods: {
    fetchResearch() {
      fetch("https://narr.ng/api/v1/research/" + this.id, {
        headers: {
          "x-token": store.state.token,
        },
      })
        .then((r) => r.json())
        .then((data) => {
          console.log("DATA", data);
          this.research = data.payload;
          console.log("research", this.research);
        })
        .catch((e) => console.log(e));
    },
    zoom(percent) {
      console.log(this.$refs.cropper.getCanvasData());
      this.$refs.cropper.relativeZoom(percent);
    },
    move(offsetX, offsetY) {
      this.$refs.cropper[0].move(offsetX, offsetY);
    },
    nextPage() {
      // if (this.researchData.length - 1 == this.a) {
      //   console.log("Finished");
      // } else {
      //   console.log("Next Page");
      //   this.a++;
      //   this.b++;
      // }
      this.page++;
      this.fetchResearch();
    },
    prevPage() {
      this.page--;
      this.fetchResearch();
      // if (this.a === 0) {
      //   console.log("First Page");
      // } else {
      //   console.log("Previous Page");
      //   this.a--;
      //   this.b--;
      // }
    },
    changePage(e) {
      console.log(e);
    },
  },
  created() {
    this.fetchResearch();
  },
};
</script>

<style>
.custom__container {
  overflow-x: hidden;
  overflow-y: auto;
  height: "500px";
}
.custom__static {
  position: fixed;
  bottom: 20px;
  z-index: 1;
  background-color: #00a368;
}
.image__box {
  display: block;
  max-width: 100%;
}

.invert__image {
  -webkit-filter: invert(1);
  filter: invert(1);
  background-color: white;
}
.cropper__container {
  width: 100%;
}
</style>
