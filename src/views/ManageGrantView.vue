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
                <span class="mr-4 body-1 font-weight-medium"><v-icon size="20">mdi-account</v-icon>Client: <span class="">IBM-DNA Africa</span></span>
                <span class="body-1 font-weight-medium"><v-icon size="20">mdi-map-marker</v-icon> Location: <span class="">Lagos, Nigeria</span></span>
              </div>
              <v-divider class="mt-4"></v-divider>
            </v-card-text>
           
          </v-card>
        </v-col>
      </v-row>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">
                Name
              </th>
              <th class="text-left">
                Number of Applicants
              </th>
              <th class="text-center">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="item in desserts"
              :key="item.title"
            >
              <td>{{ item.title }}</td>
              <td>{{ item.applicants }}</td>
              <td>
                <v-btn
                    class="ma-2"
                    color="primary"
                    dark
                >
                    Accept
                    <v-icon
                      dark
                      right
                    >
                      mdi-checkbox-marked-circle
                    </v-icon>
                </v-btn>

                <v-btn
                    class="ma-2"
                    color="red"
                    dark
                >
                    Decline
                    <v-icon
                      dark
                      right
                    >
                      mdi-cancel
                    </v-icon>
                </v-btn>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-container>
  </v-app>    
</template>

<script>
export default {
    data () {
      return {
        desserts: [
          {
            title: 'Undertake research on the superposition of quantum qubits 1',
            applicants: 159,
          },
          {
            title: 'Undertake research on the superposition of quantum qubits 2',
            applicants: 159,
          },
          {
            title: 'Undertake research on the superposition of quantum qubits 3',
            applicants: 159,
          },
          {
            title: 'Undertake research on the superposition of quantum qubits 4',
            applicants: 159,
          },
          {
            title: 'Undertake research on the superposition of quantum qubits 5',
            applicants: 159,
          },
          {
            title: 'Undertake research on the superposition of quantum qubits 6',
            applicants: 159,
          },
          {
            title: 'Undertake research on the superposition of quantum qubits 7',
           applicants: 159,
          },
          {
            title: 'Undertake research on the superposition of quantum qubits 8',
            applicants: 159,
          },
          {
            title: 'Undertake research on the superposition of quantum qubits 9',
            applicants: 159,
          },
          {
            title: 'Undertake research on the superposition of quantum qubits 10',
            applicants: 159,
          },
        ],
      }
    },
}
</script>