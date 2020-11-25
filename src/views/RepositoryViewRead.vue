<template>
  <v-app class="grey lighten-4">
    <v-container>
      <v-row no-gutters>
        <v-col cols="12">
          <v-card outlined tile class="">
            <v-row>
              <v-col cols="6">
                <div class="font-weight-bold pl-2">
                  Title: {{ research.title }}
                </div>
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="6">
                <div class="font-weight-bold">
                  Authors: {{ research.author }}
                </div>
              </v-col>
            </v-row>
          </v-card>
          <!-- <div class="body-1 font-weight-regular">
            <v-spacer></v-spacer>
          </div> -->
          <div class="body-1 font-weight-regular"></div>
        </v-col>
        <!-- <v-col cols="12">
          <div class="">
            <v-img
              v-for="research in researchData.slice(a, b)"
              :key="research.id"
              :src="research.src"
            ></v-img>
          </div>
        </v-col> -->
        <v-col cols="12">
          <div
            :class="
              darkMode === true
                ? 'cropper__container d-flex justify-center black'
                : 'cropper__container d-flex justify-center white'
            "
          >
            <!-- v-for="element in researchData.slice(a, b)" :key="element.id" -->
            <vue-cropper
              v-for="research in researchData.slice(a, b)"
              :key="research.id"
              :class="
                darkMode === true
                  ? 'invert__image image__box'
                  : 'image__box white'
              "
              ref="cropper"
              :src="research.src"
              alt="Research Page"
              :autoCrop="false"
              :autoCropArea="1"
              :zoomOnWheel="false"
              :center="false"
              dragMode="none"
            >
            </vue-cropper>
            <!-- <v-img
              v-for="element in researchData.slice(a, b)"
              :key="element.id"
              width="100%"
              :src="element.src"
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
          <span class="text-center grey lighten-3 my-3 px-4">{{ b }}</span>
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
            <select name="page" id="page" class="grey lighten-4 mx-4 px-4">
              <option
                v-for="(page, index) in researchData"
                :key="index"
                :value="page.length"
                @select="changePage(index)"
                >{{ index + 1 }}</option
              >
            </select>
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
          <!-- <div class="d-inline">
            <v-autocomplete
              class="d-inline"
              dense
              :items="['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']"
              label="Go to page"
              solo
            ></v-autocomplete>
          </div> -->
        </div>
      </div>
    </div>
  </v-app>
</template>

<script>
import helpers from "../services/helpers";

import VueCropper from "vue-cropperjs";
import "cropperjs/dist/cropper.css";

export default {
  props: ["id"],
  components: { VueCropper },
  data: () => ({
    a: 0,
    b: 1,
    research: {},
    researchData: [],
    imgSrc: "https://i.imgur.com/aA9SSMA.jpg",
    autoCrop: false,
    darkMode: false,
    next: false,
  }),
  methods: {
    zoom(percent) {
      this.$refs.cropper[0].relativeZoom(percent);
    },
    move(offsetX, offsetY) {
      this.$refs.cropper[0].move(offsetX, offsetY);
    },
    nextPage() {
      if (this.researchData.length - 1 == this.a) {
        console.log("Finished");
      } else {
        console.log("Next Page");
        this.a++;
        this.b++;
      }
    },
    prevPage() {
      if (this.a === 0) {
        console.log("First Page");
      } else {
        console.log("Previous Page");
        this.a--;
        this.b--;
      }
    },
    changePage(e) {
      console.log(e);
    },
  },
  created() {
    helpers
      .fetchSingleResearch(this.id)
      .then((response) => {
        this.research = response.data.payload;
        console.log("Research", this.research);
        this.researchData = response.data.payload.researchData;
        console.log("Research Data", this.researchData);
        this.current = response.data.payload.researchData[0];
        console.log("Current", this.images);
      })
      .catch((error) => {
        console.log(error);
      });
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
