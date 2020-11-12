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
          <v-card outlined tile>
            <v-card-title class="text-h5 font-weight-light">Research Grants Feed</v-card-title>
            <v-divider></v-divider>
            <v-card-text v-for="(grant, index) in 10" :key="index" class="custom__research-card pb-0">
              <div class="d-flex text-h6 font-weight-medium grey--text text--darken-3">
                <span>Undertake research on the superposition of quantum qubits</span>
                <v-spacer></v-spacer>
                <v-btn @click="clickedFavorite(index)" fab outlined small color="grey lighten-4" elevation="2">
                  <v-icon v-if="grantFavorite" color="pink">mdi-heart</v-icon>
                  <v-icon v-show="!grantFavorite" color="#00a368">mdi-heart-outline</v-icon>
                </v-btn>
                <v-btn @click="clickedFlag(index)" fab outlined small color="grey lighten-4" elevation="2" class="ml-4">
                  <v-icon v-if="grantFlag" color="#00a368">mdi-thumb-down</v-icon>
                  <v-icon v-show="!grantFlag" color="#00a368">mdi-thumb-down-outline</v-icon>
                </v-btn>
              </div>
              <div @click="clickedGrant(index)" class="grant__body-info">
                <div>
                  <span class="mr-4 body-1 font-weight-medium">Research Budget - <span class="green--text">N17,000,000</span></span>
                  <span class="body-1 font-weight-medium">Estimated Project Duration - <span class="blue--text">7 months</span></span>
                </div>
                <div class="mt-2">
                  <p class="body-1 grey--text text--darken-3">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, dolores? Mollitia animi numquam, repellendus deserunt ab quasi cum dicta! Nesciunt laudantium beatae saepe, reprehenderit fugit similique, veritatis quisquam illum aut officia nihil dolores voluptate porro ipsum neque. At dolorum molestias iusto debitis cum officiis numquam magnam aliquam nostrum dolores obcaecati eaque ut, iste molestiae dolore hic laudantium, corrupti atque veritatis deserunt. Excepturi, culpa deleniti. Nobis aspernatur a voluptates omnis beatae odio qui maxime iusto at, repudiandae magni, quibusdam eos eveniet eligendi, dignissimos dolores voluptatum sit voluptas possimus deleniti rem adipisci illo labore! Facere dolorum aliquam, harum quod quas officiis animi.
                  </p>
                </div>
                <div>
                  <v-chip-group>
                    <v-chip class="ma-2 grey--text text--darken-4" color="grey lighten-3">Qunatum Computing</v-chip>
                    <v-chip class="ma-2 grey--text text--darken-4" color="grey lighten-3">Bits/Qubits</v-chip>
                    <v-chip class="ma-2 grey--text text--darken-4" color="grey lighten-3">Superposition</v-chip>
                    <v-chip class="ma-2 grey--text text--darken-4" color="grey lighten-3">Entanglement</v-chip>
                    <v-chip class="ma-2 grey--text text--darken-4" color="grey lighten-3">Computation</v-chip>
                  </v-chip-group>
                </div>
                <div>
                  <span class="mr-4 body-1 font-weight-medium"><v-icon size="20">mdi-account</v-icon>Client: <span class="">IBM-DNA Africa</span></span>
                  <span class="body-1 font-weight-medium"><v-icon size="20">mdi-map-marker</v-icon> Location: <span class="">Lagos, Nigeria</span></span>
                </div>
              </div>
              <v-divider class="mt-4"></v-divider>
            </v-card-text>
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
      grantFavorite: false,
      grantFlag: false
    };
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
    }
  }
};
</script>

<style>
.custom__research-card:hover {
  background-color: #FAFAFA;
  /* background-color: #F5F5F5; */
  /* background-color: #EEEEEE; */
}
.grant__body-info:hover {
  cursor: pointer;
}
</style>