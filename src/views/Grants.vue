<template>
  <v-app class="grey lighten-4">
    <v-container>
      <v-row>
        <v-col cols="12" md="8" sm="8">
          <span class="text-h4 font-weight-thin">Research Grants</span>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-card tile outlined>
            <v-card-title class="text-h6 font-weight-light"
              >Research Grants Feed</v-card-title
            >
            <v-divider></v-divider>
            <v-card-text
              v-for="(grant, index) in 10"
              :key="index"
              class="custom__research-card pb-0"
            >
              <div
                class="d-flex body-1 font-weight-medium grey--text text--darken-3"
              >
                <span
                  >Undertake research on the superposition of quantum
                  qubits</span
                >
                <v-spacer></v-spacer>
                <v-btn
                  @click="clickedFavorite(index)"
                  outlined
                  fab
                  small
                  color="grey lighten-4"
                  elevation="2"
                >
                  <v-icon v-if="grantFavorite" color="pink">mdi-heart</v-icon>
                  <v-icon v-show="!grantFavorite" color="#00a368"
                    >mdi-heart-outline</v-icon
                  >
                </v-btn>
                <v-btn
                  outlined
                  @click="clickedFlag(index)"
                  fab
                  small
                  color="grey lighten-4"
                  elevation="2"
                  class="ml-4"
                >
                  <v-icon v-if="grantFlag" color="#00a368"
                    >mdi-thumb-down</v-icon
                  >
                  <v-icon v-show="!grantFlag" color="#00a368"
                    >mdi-thumb-down-outline</v-icon
                  >
                </v-btn>
              </div>
              <div @click="clickedGrant(index)" class="grant__body-info">
                <div>
                  <span class="mr-4 body-2 font-weight-medium"
                    >Research Budget -
                    <span class="green--text text--darken-4"
                      >N17,000,000</span
                    ></span
                  >
                  <span class="body-2 font-weight-medium"
                    >Estimated Project Duration -
                    <span class="yellow--text text--darken-2"
                      >7 months</span
                    ></span
                  >
                </div>
                <div class="mt-2">
                  <p class="body-2 grey--text text--darken-3">
                    The concept of this project is to illustrate the application
                    of machine learning in email spam filtering. First of all,
                    one might ask, what is learning? Learning can be defined
                    roughly as the process of converting experience into
                    expertise or knowledge. One might also ask what then is
                    Machine Learning? Machine learning can be defined as a field
                    of computer science that uses statistical techniques to give
                    computer systems the ability to “learn” (i.e. progressively
                    improve performance on a specific task) with data, without
                    being explicitly programmed. Now to really talk about
                    learning, let’s take an example from naturally occurring
                    animal learning. Some of the most fundamental issues in ML
                    arise already in that context.
                  </p>
                </div>
                <div>
                  <v-chip-group>
                    <v-chip
                      small
                      class="ma-2 grey--text text--darken-4"
                      color="grey lighten-3"
                      >Qunatum Computing</v-chip
                    >
                    <v-chip
                      small
                      class="ma-2 grey--text text--darken-4"
                      color="grey lighten-3"
                      >Bits/Qubits</v-chip
                    >
                    <v-chip
                      small
                      class="ma-2 grey--text text--darken-4"
                      color="grey lighten-3"
                      >Superposition</v-chip
                    >
                    <v-chip
                      small
                      class="ma-2 grey--text text--darken-4"
                      color="grey lighten-3"
                      >Entanglement</v-chip
                    >
                    <v-chip
                      small
                      class="ma-2 grey--text text--darken-4"
                      color="grey lighten-3"
                      >Computation</v-chip
                    >
                  </v-chip-group>
                </div>
                <div>
                  <span class="mr-4 body-1 font-weight-medium"
                    ><v-icon size="20">mdi-account</v-icon>Client:
                    <span class="">IBM-DNA Africa</span></span
                  >
                  <span class="body-1 font-weight-medium"
                    ><v-icon size="20">mdi-map-marker</v-icon> Location:
                    <span class="">Lagos, Nigeria</span></span
                  >
                </div>
              </div>
              <v-divider class="mt-4"></v-divider>
            </v-card-text>
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
        <v-btn fab dark small color="#00a368" @click="goManageGrants()">
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
      search: '',
      grantFavorite: false,
      grantFlag: false,
      fab: false,
    }
  },
  methods: {
    clickedFavorite(id) {
      console.log('Liked research', id)
      this.grantFavorite = !this.grantFavorite
    },
    clickedFlag(id) {
      console.log('Flagged research', id)
      this.grantFlag = !this.grantFlag
    },
    clickedGrant(id) {
      console.log('clicked ' + id)
      this.$router.push(`/viewgrant/${id}`)
    },
    goManageGrants() {
      this.$router.push('/managegrant')
    },
  },
}
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
