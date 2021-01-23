<template>
  <v-app class="grey lighten-4">
    <v-container v-if="Object.keys(research).length !== 0">
      <v-row>
        <v-col cols="12" class="py-0">
          <v-card outlined tile class="py-1 px-2">
            <span class="accent--text mr-8">Title:</span>
            <span class="body-2">{{ research.researchTitle }}</span>
          </v-card>
        </v-col>
        <v-col cols="12" class="py-0 mt-n1">
          <v-card outlined tile class="py-1 px-2">
            <span class="accent--text mr-2">Authors:</span>
            <span class="body-2">{{
              research.authors.toString().replace(/,/g, ' and ')
            }}</span>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="6" md="6" lg="6">
          <v-card tile class="pa-4">
            <v-card outlined tile @click="dialog = true" class="pa-2">
              <v-img
                v-if="research"
                :src="
                  `${imageUrl}${research.thumbnail}?action=thumbnail&token=${savedToken}`
                "
                width="100%"
                height="250"
              ></v-img>
            </v-card>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="6" lg="6">
          <v-card tile height="300">
            <v-card-text>
              <v-row>
                <v-col cols="4" class="pt-1 pb-0">
                  <v-card tile outlined class="px-1">
                    <span class="accent--text">Category: </span>
                  </v-card>
                </v-col>
                <v-col cols="8" class="px-0 pt-1 pb-0">
                  <v-card tile outlined class="px-1">
                    <span class="grey--text text--darken-2 body-2">
                      {{ research.category }}
                    </span></v-card
                  >
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4" class="pt-1 pb-0">
                  <v-card tile outlined class="px-1">
                    <span class="accent--text">Genre: </span>
                  </v-card>
                </v-col>
                <v-col cols="8" class="px-0 pt-1 pb-0">
                  <v-card tile outlined class="px-1">
                    <span class="grey--text text--darken-2 body-2">
                      {{ research.genre }}
                    </span></v-card
                  >
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4" class="pt-1 pb-0">
                  <v-card tile outlined class="px-1">
                    <span class="accent--text">Access Type: </span>
                  </v-card>
                </v-col>
                <v-col cols="8" class="px-0 pt-1 pb-0">
                  <v-card tile outlined class="px-1">
                    <span class="grey--text text--darken-2 body-2">
                      {{ research.accessType }}
                    </span></v-card
                  >
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4" class="pt-1 pb-0">
                  <v-card tile outlined class="px-1">
                    <span class="accent--text">Monthly Fee: </span>
                  </v-card>
                </v-col>
                <v-col cols="8" class="px-0 pt-1 pb-0">
                  <v-card tile outlined class="px-1">
                    <span class="grey--text text--darken-2 body-2">
                      {{ research.monthlyFee }}
                    </span></v-card
                  >
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4" class="pt-1 pb-0">
                  <v-card tile outlined class="px-1">
                    <span class="accent--text">Pages: </span>
                  </v-card>
                </v-col>
                <v-col cols="8" class="px-0 pt-1 pb-0">
                  <v-card tile outlined class="px-1">
                    <span class="grey--text text--darken-2 body-2">
                      {{ research.nPages }}
                    </span></v-card
                  >
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4" class="pt-1 pb-0">
                  <v-card tile outlined class="px-1">
                    <span class="accent--text">Views/Hits: </span>
                  </v-card>
                </v-col>
                <v-col cols="8" class="px-0 pt-1 pb-0">
                  <v-card tile outlined class="px-1">
                    <span class="grey--text text--darken-2 body-2">
                      {{ hits }}
                    </span></v-card
                  >
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4" class="pt-1 pb-0">
                  <v-card tile outlined class="px-1">
                    <span class="accent--text">Status: </span>
                  </v-card>
                </v-col>
                <v-col cols="8" class="px-0 pt-1 pb-0">
                  <v-card tile outlined class="px-1">
                    <span class="grey--text text--darken-2 body-2">
                      {{ research.status }}
                    </span></v-card
                  >
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4" class="pt-1 pb-0">
                  <v-card tile outlined class="px-1">
                    <span class="accent--text">Year: </span>
                  </v-card>
                </v-col>
                <v-col cols="8" class="px-0 pt-1 pb-0">
                  <v-card tile outlined class="px-1">
                    <span class="grey--text text--darken-2 body-2">
                      {{
                        new Date(research.year).toLocaleString('en-GB', {
                          hour12: true,
                        })
                      }}
                    </span></v-card
                  >
                </v-col>
              </v-row>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions class="d-flex align-center">
              <v-btn
                @click="readResearch(research._id)"
                class="px-4 text-capitalize"
                color="accent"
                dark
                small
                >Read</v-btn
              >
              <v-divider vertical class="ml-2"></v-divider>
              <span class="mx-2 body-2 grey--text text--darken-2"
                >Viewed:
              </span>
              <span class="body-2 grey--text text--darken-2"
                >20 minutes ago</span
              >
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="6" md="6" lg="6">
          <v-tabs class="elevation-1" color="#00a368" align-with-title>
            <v-tab>
              Description
            </v-tab>
            <v-tab-item>
              <v-card>
                <v-card-text class="pa-4 body-2 grey--text text--darken-2">
                  {{ research.description }}
                </v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs>
        </v-col>
        <v-col cols="12" sm="6" md="6" lg="6">
          <v-tabs class="elevation-1" color="#00a368" align-with-title>
            <v-tab>
              Analytics
            </v-tab>
            <v-tab-item class="pa-4">
              <v-row>
                <v-col cols="6" class="py-1 pb-0">
                  <v-card tile outlined>
                    <v-icon color="accent" class="mr-2"
                      >mdi-book-open-variant</v-icon
                    >
                    <span class="accent--text body-2">Currently Reading: </span>
                  </v-card>
                </v-col>
                <v-col cols="6" class="px-0 pt-1 pb-0">
                  <v-card tile outlined class="px-1">
                    <span class="grey--text text--darken-2 body-2">
                      20
                    </span></v-card
                  >
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="6" class="py-1 pb-0">
                  <v-card tile outlined>
                    <v-icon color="accent" class="mr-2">mdi-book-check</v-icon>
                    <span class="accent--text body-2">Read by: </span>
                  </v-card>
                </v-col>
                <v-col cols="6" class="px-0 pt-1 pb-0">
                  <v-card tile outlined class="px-1">
                    <span class="grey--text text--darken-2 body-2">
                      70
                    </span></v-card
                  >
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="6" class="py-1 pb-0">
                  <v-card tile outlined>
                    <v-icon color="accent" class="mr-2"
                      >mdi-thumb-up-outline</v-icon
                    >
                    <span class="accent--text body-2">Liked by: </span>
                  </v-card>
                </v-col>
                <v-col cols="6" class="px-0 pt-1 pb-0">
                  <v-card tile outlined class="px-1">
                    <span class="grey--text text--darken-2 body-2">
                      55
                    </span></v-card
                  >
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="6" class="py-1 pb-0">
                  <v-card tile outlined>
                    <v-icon color="accent" class="mr-2"
                      >mdi-star-outline</v-icon
                    >
                    <span class="accent--text body-2">Ratings: </span>
                  </v-card>
                </v-col>
                <v-col cols="6" class="px-0 pt-1 pb-0">
                  <v-card tile outlined class="px-1">
                    <span class="grey--text text--darken-2 body-2">
                      <span class="accent--text">80%</span> (413,974,005)
                      ratings
                    </span></v-card
                  >
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="6" class="py-1">
                  <v-card tile outlined height="32">
                    <v-icon color="accent" class="mr-2">mdi-star</v-icon>
                    <span class="accent--text body-2">Rate now: </span>
                  </v-card>
                </v-col>
                <v-col cols="6" class="px-0 pt-1 pb-0">
                  <v-card tile outlined class="px-1">
                    <v-rating
                      class="d-inline"
                      :value="0"
                      color="amber"
                      size="14"
                    ></v-rating>
                  </v-card>
                </v-col>
              </v-row>
            </v-tab-item>
          </v-tabs>
        </v-col>
      </v-row>
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
    <div class="text-center">
      <v-dialog v-model="dialog" width="1000">
        <v-img
          v-if="research"
          :src="
            `${imageUrl}${research.thumbnail}?action=thumbnail&token=${savedToken}`
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
    research: {},
    hits: '',
    rating: 5,
    dialog: false,
  }),
  methods: {
    readResearch(id) {
      this.$router.push(id + '/read')
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
      .fetchSingleResearch(this.id)
      .then((response) => {
        console.log('Response>>>', response)
        this.research = response.data.payload.research
        this.hits = response.data.payload.hits
      })
      .catch((error) => {
        console.log('Error>>>', error)
      })
  },
}
</script>

<style></style>
