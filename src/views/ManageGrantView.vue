<template>
  <v-app class="grey lighten-4">
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card tile outlined>
            <v-card-text class="pb-0">
              <div
                class="d-flex text-h6 font-weight-medium grey--text text--darken-3"
              >
                <span
                  >Undertake research on the superposition of quantum
                  qubits</span
                >
              </div>
              <v-divider class="my-2"></v-divider>
              <div>
                <span class="mr-4 body-1 font-weight-medium"
                  >Research Budget -
                  <span class="green--text text--darken-4"
                    >N17,000,000</span
                  ></span
                >
                <span class="body-1 font-weight-medium"
                  >Estimated Project Duration -
                  <span class="yellow--text text--darken-2"
                    >7 months</span
                  ></span
                >
              </div>
              <div class="mt-2">
                <span class="body-1">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Reiciendis, dolores? Mollitia animi numquam, repellendus
                  deserunt ab quasi cum dicta! Nesciunt laudantium beatae saepe,
                  reprehenderit fugit similique, veritatis quisquam illum aut
                  officia nihil dolores voluptate porro ipsum neque. At dolorum
                  molestias iusto debitis cum officiis numquam magnam aliquam
                  nostrum dolores obcaecati eaque ut, iste molestiae dolore hic
                  laudantium, corrupti atque veritatis deserunt. Excepturi,
                  culpa deleniti. Nobis aspernatur a voluptates omnis beatae
                  odio qui maxime iusto at, repudiandae magni, quibusdam eos
                  eveniet eligendi, dignissimos dolores voluptatum sit voluptas
                  possimus deleniti rem adipisci illo labore! Facere dolorum
                  aliquam, harum quod quas officiis animi. Lorem ipsum dolor,
                  sit amet consectetur adipisicing elit. Reiciendis, dolores?
                  Mollitia animi numquam, repellendus deserunt ab quasi cum
                  dicta! Nesciunt laudantium beatae saepe, reprehenderit fugit
                  similique, veritatis quisquam illum aut officia nihil dolores
                  voluptate porro ipsum neque. At dolorum molestias iusto
                  debitis cum officiis numquam magnam aliquam nostrum dolores
                  obcaecati eaque ut, iste molestiae dolore hic laudantium,
                  corrupti atque veritatis deserunt. Excepturi, culpa deleniti.
                  Nobis aspernatur a voluptates omnis beatae odio qui maxime
                  iusto at, repudiandae magni, quibusdam eos eveniet eligendi,
                  dignissimos dolores voluptatum sit voluptas possimus deleniti
                  rem adipisci illo labore! Facere dolorum aliquam, harum quod
                  quas officiis animi.
                </span>
              </div>
              <v-divider></v-divider>
              <div class="my-2">
                <span class="mr-4 body-1 font-weight-medium"
                  ><v-icon size="20">mdi-account</v-icon>Client:
                  <span class="">IBM-DNA Africa</span></span
                >
                <span class="body-1 font-weight-medium"
                  ><v-icon size="20">mdi-map-marker</v-icon> Location:
                  <span class="">Lagos, Nigeria</span></span
                >
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <div>
        <span class="text-h6 font-weight-medium grey--text text--darken-3 ml-1"
          >Applicants: 8</span
        >
      </div>
      <v-row>
        <v-col>
          <v-card
            outlined
            tile
            class="mx-auto"
            width="auto"
            v-for="(name, index) in names"
            :key="index"
          >
            <v-card-text class="py-0">
              <div class="mt-2">Name of Researcher:</div>
              <div>
                <span
                  class="text-h6 font-weight-medium grey--text text--darken-3"
                >
                  {{ name.researcher }}
                </span>
              </div>
              <div class="mb-2">
                <span class="font-weight-medium">{{ name.title }}</span>
              </div>
              <div class="text--primary">
                To contribute in the on going research work.<br />
                "in concept of quantum computing."
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn
                class="ma-2 text-capitalize"
                color="#00a368"
                dark
                text
                small
              >
                Accept
                <v-icon dark right>
                  mdi-checkbox-marked-circle
                </v-icon>
              </v-btn>

              <v-btn class="ma-2 text-capitalize" color="red" dark text small>
                Decline
                <v-icon dark right>
                  mdi-cancel
                </v-icon>
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn text color="blue" class="text-capitalize">
                View Profile
              </v-btn>
            </v-card-actions>
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
      names: [
        { researcher: 'Dr. Abdulsalam Gital', title: 'B.Tech, M.sc, Ph.D' },
        {
          researcher: 'Prof. Bakari Souley',
          title: 'B.Tech, PGDE, M.sc, Ph.D',
        },
        { researcher: 'Mrs. Fatima Zambuk', title: 'ND, HND, M.sc, Ph.D' },
        { researcher: 'Mr. Sunusi Kabir Alaramma', title: 'B.Sc, M.sc, Ph.D' },
        { researcher: 'Sir. Abubakar Umar', title: 'B.Tech, M.sc' },
        { researcher: 'Mr. Ismail Ahmad', title: 'B.Sc, M.sc, Ph.D' },
        { researcher: 'Dr. Abdulsalam Gital', title: 'B.Sc, M.sc' },
        { researcher: 'Dr. Abdulsalam Gital', title: 'B.Tech, M.sc, Ph.D' },
      ],
    }
  },
}
</script>
