<template>
  <v-app class="grey lighten-4">
    <v-container>
      <v-row>
        <v-col cols="12" md="8" sm="8">
          <span class="text-h4 font-weight-thin">Manage Crowd Fundings</span>
        </v-col>
      </v-row>
      <v-row>
          <v-col cols="12">
            <v-data-table
                :headers="headers"
                :items="fundings"
                sort-by="title"
                class="elevation-1"
            >
                <template v-slot:top>
                <v-toolbar
                    flat
                >
                    <v-toolbar-title>My Crowd Funding</v-toolbar-title>
                    <v-divider
                    class="mx-4"
                    inset
                    vertical
                    ></v-divider>
                    <v-spacer></v-spacer>

                    <!-- Dialog Edit -->
                <v-dialog
                    v-model="dialogEdit"
                    max-width="500px"
                    >
                    <v-card>
                        <v-card-title class="font-weight-light">Edit Crowd Fund</v-card-title>
                        <v-card-text>
                        <v-container>
                            <v-row>
                            <v-col cols="12">
                                <v-text-field
                                color="#00a368"
                                filled
                                v-model="editedCrowdFund.title"
                                label="Title"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field
                                color="#00a368"
                                filled
                                v-model="editedCrowdFund.goal"
                                label="Goal"
                                ></v-text-field>
                            </v-col>
                            <v-col
                                cols="12">
                                <v-textarea
                                color="#00a368"
                                filled
                                v-model="editedCrowdFund.description"
                                label="Description"
                                ></v-textarea>
                            </v-col>
                            </v-row>
                        </v-container>
                        </v-card-text>
                        <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="#00a368"
                            text
                            @click="close"
                        >
                            Cancel
                        </v-btn>
                        <v-btn
                            color="#00a368"
                            text
                            @click="save"
                        >
                            Update
                        </v-btn>
                        </v-card-actions>
                    </v-card>
                    </v-dialog>

                    <v-dialog v-model="dialogDelete" max-width="600px">
                    <v-card>
                        <v-card-title class="red--text text-h6 font-weight-light">Are you sure you want to delete this item?</v-card-title>
                        <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="#00a368" text @click="closeDelete">Cancel</v-btn>
                        <v-btn color="#00a368" text @click="deleteItemConfirm">OK</v-btn>
                        <v-spacer></v-spacer>
                        </v-card-actions>
                    </v-card>
                    </v-dialog>
                </v-toolbar>
                </template>
                <template v-slot:[`item.actions`]="{ item }">
                <v-icon
                    color="blue"
                    class="mr-2"
                    @click="viewCrowdFund(item.id)"
                >
                    mdi-eye
                </v-icon>
                <v-icon
                    color="#00a368"
                    class="mr-2"
                    @click="editCrowdFund(item)"
                >
                    mdi-pencil
                </v-icon>
                <v-icon
                    color="red"
                    @click="deleteCrowdFund(item)"
                >
                    mdi-delete
                </v-icon>
                </template>
            </v-data-table>
          </v-col>
      </v-row>
    </v-container>
    <!-- Dialog Add -->
    <v-dialog
    v-model="dialogAdd"
    max-width="500px"
    >
        <template v-slot:activator="{ on, attrs }">
            <v-btn
            color="#00a368"
            dark
            fab
            class="mb-2 custom__btn"
            v-bind="attrs"
            v-on="on"
            >
            Add
            </v-btn>
        </template>
        <v-card>
            <v-card-title class="font-weight-light">Add New Crowd Funding</v-card-title>
            <v-card-text>
            <v-container>
                <v-row>
                <v-col cols="12">
                    <v-text-field
                    color="#00a368"
                    filled
                    v-model="newCrowdFund.title"
                    label="Title"
                    ></v-text-field>
                </v-col>
                <v-col cols="12">
                    <v-text-field
                    color="#00a368"
                    filled
                    v-model="newCrowdFund.goal"
                    label="Goal"
                    ></v-text-field>
                </v-col>
                <v-col
                    cols="12">
                    <v-textarea
                    color="#00a368"
                    filled
                    v-model="newCrowdFund.description"
                    label="Description"
                    ></v-textarea>
                </v-col>
                </v-row>
            </v-container>
            </v-card-text>
            <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                color="#00a368"
                text
                @click="close"
            >
                Cancel
            </v-btn>
            <v-btn
                color="#00a368"
                text
                @click="save"
            >
                Add
            </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
  </v-app>
</template>


<script>
  export default {
    data: () => ({
      dialogAdd: false,
      dialogEdit: false,
      dialogDelete: false,
      headers: [
        { text: 'Title', align: 'start', value: 'title', sortable: false },
        { text: 'Date Created', value: 'date' },
        { text: 'Funding Goal', value: 'goal', },
        { text: 'Amount Gotten', value: 'amountgotten', sortable: false },
        { text: 'Edit/Update', value: 'actions', sortable: false },
      ],
      fundings: [],
      editedIndex: -1,
      editedCrowdFund: {
        title: '',
        goal: 0,
        amount: 0,
        description: ''
      },
      newCrowdFund: {
        title: '',
        goal: 0,
        description: ''
      },
    }),

    watch: {
    dialogAdd (val) {
        val || this.close()
      },
      dialogEdit (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.fundings = [
        {
            id: 1,
            title: 'Support SVM & Regression Research 1',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, dolores? Mollitia animi numquam, repellendus deserunt ab quasi cum dicta! Nesciunt laudantium beatae saepe, reprehenderit fugit similique, veritatis quisquam illum aut officia nihil dolores voluptate porro ipsum neque. At dolorum molestias iusto debitis cum officiis numquam magnam aliquam nostrum dolores obcaecati eaque ut, iste molestiae dolore hic laudantium, corrupti atque veritatis deserunt. Excepturi, culpa deleniti. Nobis aspernatur a voluptates omnis beatae odio qui maxime iusto at, repudiandae magni, quibusdam eos eveniet eligendi, dignissimos dolores voluptatum sit voluptas possimus deleniti rem adipisci illo labore! Facere dolorum aliquam, harum quod quas officiis animi. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, dolores? Mollitia animi numquam, repellendus deserunt ab quasi cum dicta! Nesciunt laudantium beatae saepe, reprehenderit fugit similique, veritatis quisquam illum aut officia nihil dolores voluptate porro ipsum neque. At dolorum molestias iusto debitis cum officiis numquam magnam aliquam nostrum dolores obcaecati eaque ut, iste molestiae dolore hic laudantium, corrupti atque veritatis deserunt. Excepturi, culpa deleniti. Nobis aspernatur a voluptates omnis beatae odio qui maxime iusto at, repudiandae magni, quibusdam eos eveniet eligendi, dignissimos dolores voluptatum sit voluptas possimus deleniti rem adipisci illo labore! Facere dolorum aliquam, harum quod quas officiis animi.', 
            date: new Date(Date.now()).toDateString(),
            goal: 'N'+1700000,
            amountgotten: 'N'+3400
          },
        {
            id: 2,
            title: 'Support SVM & Regression Research 2',                                                                                        
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, dolores? Mollitia animi numquam, repellendus deserunt ab quasi cum dicta! Nesciunt laudantium beatae saepe, reprehenderit fugit similique, veritatis quisquam illum aut officia nihil dolores voluptate porro ipsum neque. At dolorum molestias iusto debitis cum officiis numquam magnam aliquam nostrum dolores obcaecati eaque ut, iste molestiae dolore hic laudantium, corrupti atque veritatis deserunt. Excepturi, culpa deleniti. Nobis aspernatur a voluptates omnis beatae odio qui maxime iusto at, repudiandae magni, quibusdam eos eveniet eligendi, dignissimos dolores voluptatum sit voluptas possimus deleniti rem adipisci illo labore! Facere dolorum aliquam, harum quod quas officiis animi. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, dolores? Mollitia animi numquam, repellendus deserunt ab quasi cum dicta! Nesciunt laudantium beatae saepe, reprehenderit fugit similique, veritatis quisquam illum aut officia nihil dolores voluptate porro ipsum neque. At dolorum molestias iusto debitis cum officiis numquam magnam aliquam nostrum dolores obcaecati eaque ut, iste molestiae dolore hic laudantium, corrupti atque veritatis deserunt. Excepturi, culpa deleniti. Nobis aspernatur a voluptates omnis beatae odio qui maxime iusto at, repudiandae magni, quibusdam eos eveniet eligendi, dignissimos dolores voluptatum sit voluptas possimus deleniti rem adipisci illo labore! Facere dolorum aliquam, harum quod quas officiis animi.',
            date: new Date(Date.now()).toDateString(),
            goal: 'N'+1500000,
            amountgotten: 'N'+32400,
          },
        {
            id: 3,
            title: 'Support SVM & Regression Research 3',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, dolores? Mollitia animi numquam, repellendus deserunt ab quasi cum dicta! Nesciunt laudantium beatae saepe, reprehenderit fugit similique, veritatis quisquam illum aut officia nihil dolores voluptate porro ipsum neque. At dolorum molestias iusto debitis cum officiis numquam magnam aliquam nostrum dolores obcaecati eaque ut, iste molestiae dolore hic laudantium, corrupti atque veritatis deserunt. Excepturi, culpa deleniti. Nobis aspernatur a voluptates omnis beatae odio qui maxime iusto at, repudiandae magni, quibusdam eos eveniet eligendi, dignissimos dolores voluptatum sit voluptas possimus deleniti rem adipisci illo labore! Facere dolorum aliquam, harum quod quas officiis animi. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, dolores? Mollitia animi numquam, repellendus deserunt ab quasi cum dicta! Nesciunt laudantium beatae saepe, reprehenderit fugit similique, veritatis quisquam illum aut officia nihil dolores voluptate porro ipsum neque. At dolorum molestias iusto debitis cum officiis numquam magnam aliquam nostrum dolores obcaecati eaque ut, iste molestiae dolore hic laudantium, corrupti atque veritatis deserunt. Excepturi, culpa deleniti. Nobis aspernatur a voluptates omnis beatae odio qui maxime iusto at, repudiandae magni, quibusdam eos eveniet eligendi, dignissimos dolores voluptatum sit voluptas possimus deleniti rem adipisci illo labore! Facere dolorum aliquam, harum quod quas officiis animi.',
            date: new Date(Date.now()).toDateString(),
            goal: 'N'+200000,
            amountgotten: 'N'+123400,
          },
        {
            id: 4,
            title: 'Support SVM & Regression Research 4',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, dolores? Mollitia animi numquam, repellendus deserunt ab quasi cum dicta! Nesciunt laudantium beatae saepe, reprehenderit fugit similique, veritatis quisquam illum aut officia nihil dolores voluptate porro ipsum neque. At dolorum molestias iusto debitis cum officiis numquam magnam aliquam nostrum dolores obcaecati eaque ut, iste molestiae dolore hic laudantium, corrupti atque veritatis deserunt. Excepturi, culpa deleniti. Nobis aspernatur a voluptates omnis beatae odio qui maxime iusto at, repudiandae magni, quibusdam eos eveniet eligendi, dignissimos dolores voluptatum sit voluptas possimus deleniti rem adipisci illo labore! Facere dolorum aliquam, harum quod quas officiis animi. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, dolores? Mollitia animi numquam, repellendus deserunt ab quasi cum dicta! Nesciunt laudantium beatae saepe, reprehenderit fugit similique, veritatis quisquam illum aut officia nihil dolores voluptate porro ipsum neque. At dolorum molestias iusto debitis cum officiis numquam magnam aliquam nostrum dolores obcaecati eaque ut, iste molestiae dolore hic laudantium, corrupti atque veritatis deserunt. Excepturi, culpa deleniti. Nobis aspernatur a voluptates omnis beatae odio qui maxime iusto at, repudiandae magni, quibusdam eos eveniet eligendi, dignissimos dolores voluptatum sit voluptas possimus deleniti rem adipisci illo labore! Facere dolorum aliquam, harum quod quas officiis animi.',
            date: new Date(Date.now()).toDateString(),
            goal: 'N'+168000,
            amountgotten: 'N'+400,
          },
        {
            id: 5,
            title: 'Support SVM & Regression Research 5',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, dolores? Mollitia animi numquam, repellendus deserunt ab quasi cum dicta! Nesciunt laudantium beatae saepe, reprehenderit fugit similique, veritatis quisquam illum aut officia nihil dolores voluptate porro ipsum neque. At dolorum molestias iusto debitis cum officiis numquam magnam aliquam nostrum dolores obcaecati eaque ut, iste molestiae dolore hic laudantium, corrupti atque veritatis deserunt. Excepturi, culpa deleniti. Nobis aspernatur a voluptates omnis beatae odio qui maxime iusto at, repudiandae magni, quibusdam eos eveniet eligendi, dignissimos dolores voluptatum sit voluptas possimus deleniti rem adipisci illo labore! Facere dolorum aliquam, harum quod quas officiis animi. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, dolores? Mollitia animi numquam, repellendus deserunt ab quasi cum dicta! Nesciunt laudantium beatae saepe, reprehenderit fugit similique, veritatis quisquam illum aut officia nihil dolores voluptate porro ipsum neque. At dolorum molestias iusto debitis cum officiis numquam magnam aliquam nostrum dolores obcaecati eaque ut, iste molestiae dolore hic laudantium, corrupti atque veritatis deserunt. Excepturi, culpa deleniti. Nobis aspernatur a voluptates omnis beatae odio qui maxime iusto at, repudiandae magni, quibusdam eos eveniet eligendi, dignissimos dolores voluptatum sit voluptas possimus deleniti rem adipisci illo labore! Facere dolorum aliquam, harum quod quas officiis animi.',
            date: new Date(Date.now()).toDateString(),
            goal: 'N'+120000,
            amountgotten: 'N'+110500,
          },
        {
            id: 6,
            title: 'Support SVM & Regression Research 6',                                      
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, dolores? Mollitia animi numquam, repellendus deserunt ab quasi cum dicta! Nesciunt laudantium beatae saepe, reprehenderit fugit similique, veritatis quisquam illum aut officia nihil dolores voluptate porro ipsum neque. At dolorum molestias iusto debitis cum officiis numquam magnam aliquam nostrum dolores obcaecati eaque ut, iste molestiae dolore hic laudantium, corrupti atque veritatis deserunt. Excepturi, culpa deleniti. Nobis aspernatur a voluptates omnis beatae odio qui maxime iusto at, repudiandae magni, quibusdam eos eveniet eligendi, dignissimos dolores voluptatum sit voluptas possimus deleniti rem adipisci illo labore! Facere dolorum aliquam, harum quod quas officiis animi. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, dolores? Mollitia animi numquam, repellendus deserunt ab quasi cum dicta! Nesciunt laudantium beatae saepe, reprehenderit fugit similique, veritatis quisquam illum aut officia nihil dolores voluptate porro ipsum neque. At dolorum molestias iusto debitis cum officiis numquam magnam aliquam nostrum dolores obcaecati eaque ut, iste molestiae dolore hic laudantium, corrupti atque veritatis deserunt. Excepturi, culpa deleniti. Nobis aspernatur a voluptates omnis beatae odio qui maxime iusto at, repudiandae magni, quibusdam eos eveniet eligendi, dignissimos dolores voluptatum sit voluptas possimus deleniti rem adipisci illo labore! Facere dolorum aliquam, harum quod quas officiis animi.',
            date: new Date(Date.now()).toDateString(),
            goal: 'N'+90000,
            amountgotten: 'N'+45000,
          },
        {
            id: 7,
            title: 'Support SVM & Regression Research 7', 
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, dolores? Mollitia animi numquam, repellendus deserunt ab quasi cum dicta! Nesciunt laudantium beatae saepe, reprehenderit fugit similique, veritatis quisquam illum aut officia nihil dolores voluptate porro ipsum neque. At dolorum molestias iusto debitis cum officiis numquam magnam aliquam nostrum dolores obcaecati eaque ut, iste molestiae dolore hic laudantium, corrupti atque veritatis deserunt. Excepturi, culpa deleniti. Nobis aspernatur a voluptates omnis beatae odio qui maxime iusto at, repudiandae magni, quibusdam eos eveniet eligendi, dignissimos dolores voluptatum sit voluptas possimus deleniti rem adipisci illo labore! Facere dolorum aliquam, harum quod quas officiis animi. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, dolores? Mollitia animi numquam, repellendus deserunt ab quasi cum dicta! Nesciunt laudantium beatae saepe, reprehenderit fugit similique, veritatis quisquam illum aut officia nihil dolores voluptate porro ipsum neque. At dolorum molestias iusto debitis cum officiis numquam magnam aliquam nostrum dolores obcaecati eaque ut, iste molestiae dolore hic laudantium, corrupti atque veritatis deserunt. Excepturi, culpa deleniti. Nobis aspernatur a voluptates omnis beatae odio qui maxime iusto at, repudiandae magni, quibusdam eos eveniet eligendi, dignissimos dolores voluptatum sit voluptas possimus deleniti rem adipisci illo labore! Facere dolorum aliquam, harum quod quas officiis animi.',
            date: new Date(Date.now()).toDateString(),
            goal: 'N'+800000,
            amountgotten: 'N'+650000,
          },
        ]
      },

      viewCrowdFund (id) {
        console.log('Current Crowd Funding' + id)
         this.$router.push(`/managecrowd/${id}`)
      },

      editCrowdFund (item) {
        this.editedIndex = this.fundings.indexOf(item)
        this.editedCrowdFund = Object.assign({}, item)
        this.dialogEdit = true
      },

      deleteCrowdFund (item) {
        this.editedIndex = this.fundings.indexOf(item)
        this.editedCrowdFund = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.fundings.splice(this.editedIndex, 1)
        this.closeDelete()
      },

      close () {
        this.dialogEdit = false
        this.dialogAdd = false
      },

      closeDelete () {
        this.dialogDelete = false
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.fundings[this.editedIndex], this.editedCrowdFund)
        } else {
          this.fundings.push(this.editedCrowdFund)
        }
        this.close()
      },
    },
  }
</script>

<style>
.custom__btn {
  position: fixed;
  bottom: 70px;
  right: 40px;
}
</style>