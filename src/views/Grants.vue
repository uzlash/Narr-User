<template>
  <v-app class="grey lighten-4">
    <v-container>
      <v-row>
        <v-col cols="12" md="8" sm="8">
          <span class="text-h4 font-weight-thin">Research Grants</span>
        </v-col>
        <!-- <v-col cols="12" md="12" sm="12">
          <v-card>
            <v-card-title class="font-weight-light">
              Available Grants
              <v-spacer></v-spacer>
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
              ></v-text-field>
            </v-card-title>
            <v-data-table :headers="headers" :items="research" :search="search">
            </v-data-table>
          </v-card>
        </v-col> -->
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-card>
            <v-card-title class="text-h5 font-weight-light">Research Grants Feed</v-card-title>
            <v-divider></v-divider>
            <v-card-text v-for="(grant, index) in 10" :key="index" class="custom__research-card pb-0" @click="clicked(index)">
              <div class="d-flex text-h6 font-weight-bold grey--text text--darken-3">
                <span>Undertake research on the superposition of quantum qubits</span>
                <v-spacer></v-spacer>
                <v-btn fab outlined small color="grey lighten-4" elevation="2">
                  <v-icon color="green">mdi-heart-outline</v-icon>
                </v-btn>
                <v-btn fab outlined small color="grey lighten-4" elevation="2" class="ml-4">
                  <v-icon color="green">mdi-thumb-down-outline</v-icon>
                </v-btn>
              </div>
              <div>
                <span class="mr-4 body-1 font-weight-medium">Research Budget - <span class="green--text">N17,000,000</span></span>
                <span class="body-1 font-weight-medium">Estimated Project Duration - <span class="blue--text">7 months</span></span>
              </div>
              <div class="mt-2">
                <span class="body-1">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, dolores? Mollitia animi numquam, repellendus deserunt ab quasi cum dicta! Nesciunt laudantium beatae saepe, reprehenderit fugit similique, veritatis quisquam illum aut officia nihil dolores voluptate porro ipsum neque. At dolorum molestias iusto debitis cum officiis numquam magnam aliquam nostrum dolores obcaecati eaque ut, iste molestiae dolore hic laudantium, corrupti atque veritatis deserunt. Excepturi, culpa deleniti. Nobis aspernatur a voluptates omnis beatae odio qui maxime iusto at, repudiandae magni, quibusdam eos eveniet eligendi, dignissimos dolores voluptatum sit voluptas possimus deleniti rem adipisci illo labore! Facere dolorum aliquam, harum quod quas officiis animi.
                </span>
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
    };
  },
  methods: {
    clicked(id) {
      console.log('clicked ' + id)
    }
  }
};
</script>

<style>
.custom__research-card:hover {
  cursor: pointer;
  background-color: #FAFAFA;
  /* background-color: #F5F5F5; */
  /* background-color: #EEEEEE; */
}
</style>