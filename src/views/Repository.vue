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
      <v-row
        no-gutters
        class="custom__card"
        @click="goResearchView(research._id)"
        v-for="research in Repository"
        :key="research._id"
      >
        <v-col cols="12">
          <v-card class="mb-2 px-4" tile>
            <v-row>
              <v-col cols="3">
                <v-card tile outlined class="pa-2">
                  <v-img
                    :src="
                      `${imageUrl}${research.thumbnail}?action=thumbnail&token=${savedToken}`
                    "
                    height="150px"
                  ></v-img>
                </v-card>
              </v-col>
              <v-col cols="6">
                <v-row>
                  <v-col cols="3" class="py-1 pb-0">
                    <v-card tile outlined class="px-1">
                      <span class="accent--text body-2">Title: </span>
                    </v-card>
                  </v-col>
                  <v-col cols="9" class="px-0 pt-1 pb-0">
                    <v-card tile outlined class="px-1">
                      <span class="grey--text text--darken-2 body-2">
                        {{ research.researchTitle }}
                      </span></v-card
                    >
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="3" class="py-1 pb-0">
                    <v-card tile outlined class="px-1">
                      <span class="accent--text body-2">Authors: </span>
                    </v-card>
                  </v-col>
                  <v-col cols="9" class="px-0 pt-1 pb-0">
                    <v-card tile outlined class="px-1">
                      <span class="grey--text text--darken-2 body-2">
                        {{ research.authors.toString().replace(/,/g, ' and ') }}
                      </span></v-card
                    >
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="3" class="py-1 pb-0">
                    <v-card tile outlined class="px-1">
                      <span class="accent--text body-2">Year: </span>
                    </v-card>
                  </v-col>
                  <v-col
                    cols="9
                  "
                    class="px-0 pt-1 pb-0"
                  >
                    <v-card tile outlined class="px-1">
                      <span class="grey--text text--darken-2 body-2">
                        {{ research.year }}
                      </span></v-card
                    >
                  </v-col>
                </v-row>

                <v-row>
                  <v-col cols="3" class="py-1 pb-0">
                    <v-card tile outlined class="px-1">
                      <span class="accent--text body-2">Pages: </span>
                    </v-card>
                  </v-col>
                  <v-col cols="9" class="px-0 pt-1 pb-0">
                    <v-card tile outlined class="px-1">
                      <span class="grey--text text--darken-2 body-2">
                        {{ research.nPages }}
                      </span></v-card
                    >
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="3" class="py-1 pb-0">
                    <v-card tile outlined class="px-1">
                      <span class="accent--text body-2">Category: </span>
                    </v-card>
                  </v-col>
                  <v-col cols="9" class="px-0 pt-1 pb-0">
                    <v-card tile outlined class="px-1">
                      <span class="grey--text text--darken-2 body-2">
                        {{ research.category }}
                      </span></v-card
                    >
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="3" class="py-1 pb-0">
                    <v-card tile outlined class="px-1">
                      <span class="accent--text body-2">Ratings: </span>
                    </v-card>
                  </v-col>
                  <v-col cols="9" class="px-0 pt-1 pb-0">
                    <v-card tile outlined class="px-1">
                      <!-- <v-rating
                        class="d-inline"
                        :value="4"
                        color="amber"
                        size="14"
                        readonly
                        dense
                      ></v-rating> -->
                      <span class="grey--text text--darken-2 body-2">
                        <span class="accent--text body-2"> 80% </span> |
                        (413,974,005) ratings
                      </span>
                    </v-card>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="3">
                <v-row>
                  <v-col cols="12" class="py-1 pb-0">
                    <v-card tile outlined class="px-1">
                      <span class="accent--text body-2">Description: </span>
                    </v-card>
                  </v-col>
                </v-row>
                <v-card tile outlined class="px-1 mt-1" height="146px">
                  <span class="grey--text text--darken-2 body-2">{{
                    research.description | trimLength
                  }}</span>
                </v-card>
              </v-col>
            </v-row>
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
      <div class="loader">Loading</div>
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
  filters: {
    trimLength(val) {
      if (val.length < 200) {
        return val
      }
      return `${val.substring(0, 200)}...`
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

.loader {
  height: 100vh;
}
.loader,
.loader:before,
.loader:after {
  background: rgba(0, 163, 104, 0.75);
  -webkit-animation: load1 1s infinite ease-in-out;
  animation: load1 1s infinite ease-in-out;
  width: 1em;
  height: 4em;
}
.loader {
  color: rgba(0, 163, 104, 0.75);
  text-indent: -9999em;
  margin: 20% auto;
  position: relative;
  font-size: 11px;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}
.loader:before,
.loader:after {
  position: absolute;
  top: 0;
  content: '';
}
.loader:before {
  left: -1.5em;
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}
.loader:after {
  left: 1.5em;
}
@-webkit-keyframes load1 {
  0%,
  80%,
  100% {
    box-shadow: 0 0;
    height: 4em;
  }
  40% {
    box-shadow: 0 -2em;
    height: 5em;
  }
}
@keyframes load1 {
  0%,
  80%,
  100% {
    box-shadow: 0 0;
    height: 4em;
  }
  40% {
    box-shadow: 0 -2em;
    height: 5em;
  }
}
</style>
