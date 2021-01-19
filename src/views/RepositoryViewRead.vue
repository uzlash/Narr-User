<template>
  <v-app class="grey lighten-4">
    <v-container>
      <v-row no-gutters>
        <v-col cols="12">
          <v-card tile outlined>
            <v-row align="center">
              <v-col cols="1">
                <v-btn @click="goBack()" icon class="mr-4" color="">
                  <v-icon size="30">mdi-arrow-left</v-icon>
                </v-btn>
              </v-col>
              <v-col cols="5">
                <div class="font-weight-bold pl-2 green--text text--darken-4">
                  Title: {{ research.researchTitle }}
                </div>
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="6">
                <div class="font-weight-bold yellow--text text--darken-2">
                  <span>
                    Authors:
                  </span>
                  <span v-for="(r, i) in research.authors" :key="i">{{
                    r + ' '
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
            <v-img
              @click="dialog = true"
              class="custom__image"
              :class="
                darkMode === true
                  ? 'invert__image image__box custom__image-zoomin'
                  : 'image__box custom__image-zoomin white'
              "
              width="100%"
              :src="
                `${imageUrl}${this.research.readPath}${
                  this.page
                }.jpg?token=${savedToken}&nPages=${
                  this.research.nPages
                }&${Date.now()}${
                  this.page === this.research.nPages ||
                  this.selectedPage === this.research.nPages
                    ? '&end=true'
                    : ''
                }`
              "
            ></v-img>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <div class="d-flex justify-center">
      <div class="custom__static d-flex flex-column">
        <div class="d-flex align-center">
          <v-btn large icon color="white" @click="firstPage()">
            <v-icon>mdi-skip-previous</v-icon>
          </v-btn>
          <v-btn large icon color="white" @click="prevPage()">
            <v-icon>mdi-rewind</v-icon>
          </v-btn>
          <span class="text-center grey lighten-3 my-3 px-4">{{ page }}</span>
          <v-btn large icon color="white" @click="nextPage()">
            <v-icon>mdi-fast-forward</v-icon>
          </v-btn>
          <v-btn large icon color="white" @click="lastPage()">
            <v-icon>mdi-skip-next</v-icon>
          </v-btn>
          <div class="d-flex align-center justify-center">
            <label for="page" class="white--text hidden-sm-and-down mx-2"
              >Jump to page:
            </label>
            <select
              @change="changePage($event)"
              v-model="selectedPage"
              name="page"
              id="page"
              class="grey lighten-4 mx-4 px-4"
            >
              <option
                v-for="page in research.nPages"
                :key="page"
                :value="page"
                >{{ page }}</option
              >
            </select>
          </div>
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
    <div class="text-center">
      <v-dialog v-model="dialog" width="90%">
        <v-img
          @click="dialog = false"
          class="custom__image"
          :class="
            darkMode === true
              ? 'invert__image image__box custom__image-zoomout'
              : 'image__box custom__image-zoomout white'
          "
          width="100%"
          :src="
            `${imageUrl}${this.research.readPath}${this.page}.jpg?token=${savedToken}`
          "
        ></v-img>
      </v-dialog>
    </div>
  </v-app>
</template>

<script>
import helpers from '../services/helpers'

export default {
  props: ['id'],
  data: () => ({
    a: 0,
    b: 1,
    research: {},
    hits: '',
    page: 1,
    first: 1,
    selectedPage: 1,
    darkMode: false,
    next: false,
    dialog: false,
  }),
  methods: {
    goBack() {
      this.$router.go(-2)
    },
    fetchResearch() {
      helpers
        .fetchSingleResearch(this.id)
        .then((response) => {
          console.log('Reader Response', response)
          this.research = response.data.payload.research
          this.hits = response.data.payload.hits
          this.$store.dispatch('ADD_TO_READING_LIST', response.data.payload)
        })
        .catch((error) => {
          console.log('Error>>>', error)
        })
    },
    firstPage() {
      // this.fetchResearch()
      this.page = this.first
    },
    nextPage() {
      if (this.page >= this.research.nPages) {
        console.log('Last Page Reached')
        //        this.$store.dispatch('REMOVE_FROM_READING_LIST', this.research)
      } else if (this.page + 1 === this.research.nPages) {
        this.page++
        console.log('Last Page, Removing from Reading List')
      } else {
        console.log('Next Page')
        // this.fetchResearch()
        this.page++
      }
    },
    prevPage() {
      if (this.page <= 1) {
        console.log('First Page')
      } else {
        // this.fetchResearch()
        this.page--
      }
    },
    lastPage() {
      // this.fetchResearch()
      this.page = this.research.nPages
    },
    changePage(event) {
      // this.fetchResearch()
      this.page = event.target.value
      this.selectedPage = event.target.value
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
    this.fetchResearch()
  },
}
</script>

<style>
.custom__container {
  overflow-x: hidden;
  overflow-y: auto;
  height: '500px';
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
.custom__image-zoomin:hover {
  cursor: zoom-in;
}
.custom__image-zoomout:hover {
  cursor: zoom-out;
}
</style>
