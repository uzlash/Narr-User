<template>
  <v-app class="grey lighten-4">
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card outlined tile>
            <v-card-text class="pb-0">
              <div class="d-flex text-h6 font-weight-medium grey--text text--darken-3">
                <span>Undertake research on the superposition of quantum qubits</span>
              </div>
              <div>
                <span class="mr-4 body-1 font-weight-medium">Research Budget - <span class="green--text">N17,000,000</span></span>
                <span class="body-1 font-weight-medium">Estimated Project Duration - <span class="blue--text">7 months</span></span>
              </div>
              <div class="mt-2">
                <span class="body-1">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, dolores? Mollitia animi numquam,
                  repellendus deserunt ab quasi cum dicta! Nesciunt laudantium beatae saepe, reprehenderit fugit similique,
                  veritatis quisquam illum aut officia nihil dolores voluptate porro ipsum neque. At dolorum molestias iusto
                  debitis cum officiis numquam magnam aliquam nostrum dolores obcaecati eaque ut, iste molestiae dolore hic 
                  laudantium, corrupti atque veritatis deserunt. Excepturi, culpa deleniti. Nobis aspernatur a voluptates omnis 
                  beatae odio qui maxime iusto at, repudiandae magni, quibusdam eos eveniet eligendi, dignissimos dolores voluptatum 
                  sit voluptas possimus deleniti rem adipisci illo labore! Facere dolorum aliquam, harum quod quas officiis animi.
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, dolores? Mollitia animi numquam,
                  repellendus deserunt ab quasi cum dicta! Nesciunt laudantium beatae saepe, reprehenderit fugit similique,
                  veritatis quisquam illum aut officia nihil dolores voluptate porro ipsum neque. At dolorum molestias iusto
                  debitis cum officiis numquam magnam aliquam nostrum dolores obcaecati eaque ut, iste molestiae dolore hic 
                  laudantium, corrupti atque veritatis deserunt. Excepturi, culpa deleniti. Nobis aspernatur a voluptates omnis 
                  beatae odio qui maxime iusto at, repudiandae magni, quibusdam eos eveniet eligendi, dignissimos dolores voluptatum 
                  sit voluptas possimus deleniti rem adipisci illo labore! Facere dolorum aliquam, harum quod quas officiis animi.
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
            <v-card-text>
                <div class="d-flex text-h6 font-weight-medium grey--text text--darken-3">
                    <span>Submit a Proposal</span>
                </div>
                <div>
                    <span class="red--text text-h6">*</span>
                    <span class="body-1"> Fill out the form field below with the required information following these guidelines: </span>
                    <ol class="body-1">
                        <li>Why are you the perfect candidate for the job?</li>
                        <li>Have you worked on a similar research/project?</li>
                        <li>How long will it take to complete? (estimate)</li>
                    </ol>
                </div>
                <div>
                    <v-form @submit.prevent ref="form" class="mt-4">
                        <v-textarea auto-grow autofocus clearable filled color="#00a368" label="Write your proposal in this form field." v-model="proposal"></v-textarea>
                        <v-btn @click="submitProposal()" dark color="#00a368">Submit Proposal</v-btn>
                    </v-form>
                </div>        
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
      proposal: ''

    };
  },
  methods: {
      submitProposal() {
          const data = {
              proposal: this.proposal
          }
          console.log('Got proposal data', data)
      }
  }
};
</script>

<style>
</style>