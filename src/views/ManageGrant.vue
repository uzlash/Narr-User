<template>
  <v-app class="grey lighten-4">
    <v-container>
      <v-row>
        <v-col cols="12">
          <span class="text-h4 font-weight-thin">Manage Grants</span>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-data-table
            :headers="headers"
            :items="grants"
            sort-by="title"
            class="elevation-1"
          >
            <template v-slot:top>
              <v-toolbar flat>
                <v-toolbar-title>My Research Grants</v-toolbar-title>
                <v-divider class="mx-4" inset vertical></v-divider>
                <v-spacer></v-spacer>

                <!-- Dialog Edit -->
                <v-dialog v-model="dialogEdit" max-width="800px">
                  <v-card>
                    <v-card-title class="font-weight-light"
                      >Edit Research Grant</v-card-title
                    >
                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col cols="12">
                            <v-text-field
                              hide-details
                              color="#00a368"
                              filled
                              v-model="editedGrant.title"
                              label="Title"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12">
                            <v-text-field
                              hide-details
                              color="#00a368"
                              filled
                              v-model="editedGrant.budget"
                              label="Budget"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12">
                            <v-text-field
                              hide-details
                              color="#00a368"
                              filled
                              v-model="editedGrant.duration"
                              label="Duration"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12">
                            <v-textarea
                              hide-details
                              color="#00a368"
                              filled
                              v-model="editedGrant.description"
                              label="Description"
                            ></v-textarea>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="red" text @click="close">
                        Cancel
                      </v-btn>
                      <v-btn color="#00a368" text @click="save">
                        Update Grant
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>

                <v-dialog v-model="dialogDelete" max-width="600px">
                  <v-card>
                    <v-card-title class="text-h6 font-weight-light"
                      >Are you sure you want to delete this item?</v-card-title
                    >
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="red" text @click="closeDelete"
                        >Cancel</v-btn
                      >
                      <v-btn color="#00a368" text @click="deleteItemConfirm"
                        >OK</v-btn
                      >
                      <v-spacer></v-spacer>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-toolbar>
            </template>
            <template v-slot:[`item.actions`]="{ item }">
              <v-icon color="blue" class="mr-2" @click="viewGrant(item.id)">
                mdi-eye
              </v-icon>
              <v-icon color="#00a368" class="mr-2" @click="editGrant(item)">
                mdi-pencil
              </v-icon>
              <v-icon color="red" @click="deleteGrant(item)">
                mdi-delete
              </v-icon>
            </template>
          </v-data-table>
        </v-col>
      </v-row>
    </v-container>
    <!-- Dialog Add -->
    <v-dialog v-model="dialogAdd" max-width="800px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          fab
          color="#00a368"
          dark
          class="mb-2 custom__btn"
          v-bind="attrs"
          v-on="on"
          >Add</v-btn
        >
      </template>
      <v-card>
        <v-card-title class="font-weight-light"
          >Add New Research Grant</v-card-title
        >
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  hide-details
                  color="#00a368"
                  filled
                  v-model="newItem.title"
                  label="Title"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  hide-details
                  color="#00a368"
                  filled
                  v-model="newItem.budget"
                  label="Budget"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  hide-details
                  color="#00a368"
                  filled
                  v-model="newItem.duration"
                  label="Duration"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-textarea
                  hide-details
                  color="#00a368"
                  filled
                  v-model="newItem.description"
                  label="Description"
                ></v-textarea>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red" text @click="close">
            Cancel
          </v-btn>
          <v-btn color="#00a368" text @click="save">
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
      { text: "Title", align: "start", value: "title", sortable: false },
      { text: "Date Created", value: "date" },
      { text: "Budget", value: "budget" },
      { text: "Estimated Duration", value: "duration", sortable: false },
      { text: "Applicants", value: "applicants" },
      { text: "Edit/Update", value: "actions", sortable: false },
    ],
    grants: [],
    editedIndex: -1,
    editedGrant: {
      title: "",
      date: "",
      budget: 0,
      duration: "",
      applicants: 0,
      description: "",
    },
    newItem: {
      title: "",
      date: "",
      budget: 0,
      duration: "",
      applicants: 0,
      description: "",
    },
  }),
  watch: {
    dialogAdd(val) {
      val || this.close();
    },
    dialogEdit(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },
  created() {
    this.initialize();
  },
  methods: {
    initialize() {
      this.grants = [
        {
          id: 1,
          title: "Undertake research on the superposition of quantum qubits 1",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, dolores? Mollitia animi numquam, repellendus deserunt ab quasi cum dicta! Nesciunt laudantium beatae saepe, reprehenderit fugit similique, veritatis quisquam illum aut officia nihil dolores voluptate porro ipsum neque. At dolorum molestias iusto debitis cum officiis numquam magnam aliquam nostrum dolores obcaecati eaque ut, iste molestiae dolore hic laudantium, corrupti atque veritatis deserunt. Excepturi, culpa deleniti. Nobis aspernatur a voluptates omnis beatae odio qui maxime iusto at, repudiandae magni, quibusdam eos eveniet eligendi, dignissimos dolores voluptatum sit voluptas possimus deleniti rem adipisci illo labore! Facere dolorum aliquam, harum quod quas officiis animi. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, dolores? Mollitia animi numquam, repellendus deserunt ab quasi cum dicta! Nesciunt laudantium beatae saepe, reprehenderit fugit similique, veritatis quisquam illum aut officia nihil dolores voluptate porro ipsum neque. At dolorum molestias iusto debitis cum officiis numquam magnam aliquam nostrum dolores obcaecati eaque ut, iste molestiae dolore hic laudantium, corrupti atque veritatis deserunt. Excepturi, culpa deleniti. Nobis aspernatur a voluptates omnis beatae odio qui maxime iusto at, repudiandae magni, quibusdam eos eveniet eligendi, dignissimos dolores voluptatum sit voluptas possimus deleniti rem adipisci illo labore! Facere dolorum aliquam, harum quod quas officiis animi.",
          date: new Date(Date.now()).toDateString(),
          budget: "N" + 1700000,
          duration: "7 Months",
          applicants: 15,
        },
        {
          id: 2,
          title: "Undertake research on the superposition of quantum qubits 2",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, dolores? Mollitia animi numquam, repellendus deserunt ab quasi cum dicta! Nesciunt laudantium beatae saepe, reprehenderit fugit similique, veritatis quisquam illum aut officia nihil dolores voluptate porro ipsum neque. At dolorum molestias iusto debitis cum officiis numquam magnam aliquam nostrum dolores obcaecati eaque ut, iste molestiae dolore hic laudantium, corrupti atque veritatis deserunt. Excepturi, culpa deleniti. Nobis aspernatur a voluptates omnis beatae odio qui maxime iusto at, repudiandae magni, quibusdam eos eveniet eligendi, dignissimos dolores voluptatum sit voluptas possimus deleniti rem adipisci illo labore! Facere dolorum aliquam, harum quod quas officiis animi. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, dolores? Mollitia animi numquam, repellendus deserunt ab quasi cum dicta! Nesciunt laudantium beatae saepe, reprehenderit fugit similique, veritatis quisquam illum aut officia nihil dolores voluptate porro ipsum neque. At dolorum molestias iusto debitis cum officiis numquam magnam aliquam nostrum dolores obcaecati eaque ut, iste molestiae dolore hic laudantium, corrupti atque veritatis deserunt. Excepturi, culpa deleniti. Nobis aspernatur a voluptates omnis beatae odio qui maxime iusto at, repudiandae magni, quibusdam eos eveniet eligendi, dignissimos dolores voluptatum sit voluptas possimus deleniti rem adipisci illo labore! Facere dolorum aliquam, harum quod quas officiis animi.",
          date: new Date(Date.now()).toDateString(),
          budget: "N" + 1500000,
          duration: "5 Months",
          applicants: 10,
        },
        {
          id: 3,
          title: "Undertake research on the superposition of quantum qubits 3",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, dolores? Mollitia animi numquam, repellendus deserunt ab quasi cum dicta! Nesciunt laudantium beatae saepe, reprehenderit fugit similique, veritatis quisquam illum aut officia nihil dolores voluptate porro ipsum neque. At dolorum molestias iusto debitis cum officiis numquam magnam aliquam nostrum dolores obcaecati eaque ut, iste molestiae dolore hic laudantium, corrupti atque veritatis deserunt. Excepturi, culpa deleniti. Nobis aspernatur a voluptates omnis beatae odio qui maxime iusto at, repudiandae magni, quibusdam eos eveniet eligendi, dignissimos dolores voluptatum sit voluptas possimus deleniti rem adipisci illo labore! Facere dolorum aliquam, harum quod quas officiis animi. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, dolores? Mollitia animi numquam, repellendus deserunt ab quasi cum dicta! Nesciunt laudantium beatae saepe, reprehenderit fugit similique, veritatis quisquam illum aut officia nihil dolores voluptate porro ipsum neque. At dolorum molestias iusto debitis cum officiis numquam magnam aliquam nostrum dolores obcaecati eaque ut, iste molestiae dolore hic laudantium, corrupti atque veritatis deserunt. Excepturi, culpa deleniti. Nobis aspernatur a voluptates omnis beatae odio qui maxime iusto at, repudiandae magni, quibusdam eos eveniet eligendi, dignissimos dolores voluptatum sit voluptas possimus deleniti rem adipisci illo labore! Facere dolorum aliquam, harum quod quas officiis animi.",
          date: new Date(Date.now()).toDateString(),
          budget: "N" + 1600000,
          duration: "6 Months",
          applicants: 5,
        },
        {
          id: 4,
          title: "Undertake research on the superposition of quantum qubits 4",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, dolores? Mollitia animi numquam, repellendus deserunt ab quasi cum dicta! Nesciunt laudantium beatae saepe, reprehenderit fugit similique, veritatis quisquam illum aut officia nihil dolores voluptate porro ipsum neque. At dolorum molestias iusto debitis cum officiis numquam magnam aliquam nostrum dolores obcaecati eaque ut, iste molestiae dolore hic laudantium, corrupti atque veritatis deserunt. Excepturi, culpa deleniti. Nobis aspernatur a voluptates omnis beatae odio qui maxime iusto at, repudiandae magni, quibusdam eos eveniet eligendi, dignissimos dolores voluptatum sit voluptas possimus deleniti rem adipisci illo labore! Facere dolorum aliquam, harum quod quas officiis animi. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, dolores? Mollitia animi numquam, repellendus deserunt ab quasi cum dicta! Nesciunt laudantium beatae saepe, reprehenderit fugit similique, veritatis quisquam illum aut officia nihil dolores voluptate porro ipsum neque. At dolorum molestias iusto debitis cum officiis numquam magnam aliquam nostrum dolores obcaecati eaque ut, iste molestiae dolore hic laudantium, corrupti atque veritatis deserunt. Excepturi, culpa deleniti. Nobis aspernatur a voluptates omnis beatae odio qui maxime iusto at, repudiandae magni, quibusdam eos eveniet eligendi, dignissimos dolores voluptatum sit voluptas possimus deleniti rem adipisci illo labore! Facere dolorum aliquam, harum quod quas officiis animi.",
          date: new Date(Date.now()).toDateString(),
          budget: "N" + 1600000,
          duration: "6 Months",
          applicants: 13,
        },
        {
          id: 5,
          title: "Undertake research on the superposition of quantum qubits 5",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, dolores? Mollitia animi numquam, repellendus deserunt ab quasi cum dicta! Nesciunt laudantium beatae saepe, reprehenderit fugit similique, veritatis quisquam illum aut officia nihil dolores voluptate porro ipsum neque. At dolorum molestias iusto debitis cum officiis numquam magnam aliquam nostrum dolores obcaecati eaque ut, iste molestiae dolore hic laudantium, corrupti atque veritatis deserunt. Excepturi, culpa deleniti. Nobis aspernatur a voluptates omnis beatae odio qui maxime iusto at, repudiandae magni, quibusdam eos eveniet eligendi, dignissimos dolores voluptatum sit voluptas possimus deleniti rem adipisci illo labore! Facere dolorum aliquam, harum quod quas officiis animi. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, dolores? Mollitia animi numquam, repellendus deserunt ab quasi cum dicta! Nesciunt laudantium beatae saepe, reprehenderit fugit similique, veritatis quisquam illum aut officia nihil dolores voluptate porro ipsum neque. At dolorum molestias iusto debitis cum officiis numquam magnam aliquam nostrum dolores obcaecati eaque ut, iste molestiae dolore hic laudantium, corrupti atque veritatis deserunt. Excepturi, culpa deleniti. Nobis aspernatur a voluptates omnis beatae odio qui maxime iusto at, repudiandae magni, quibusdam eos eveniet eligendi, dignissimos dolores voluptatum sit voluptas possimus deleniti rem adipisci illo labore! Facere dolorum aliquam, harum quod quas officiis animi.",
          date: new Date(Date.now()).toDateString(),
          budget: "N" + 1500000,
          duration: "8 Months",
          applicants: 20,
        },
        {
          id: 6,
          title: "Undertake research on the superposition of quantum qubits 6",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, dolores? Mollitia animi numquam, repellendus deserunt ab quasi cum dicta! Nesciunt laudantium beatae saepe, reprehenderit fugit similique, veritatis quisquam illum aut officia nihil dolores voluptate porro ipsum neque. At dolorum molestias iusto debitis cum officiis numquam magnam aliquam nostrum dolores obcaecati eaque ut, iste molestiae dolore hic laudantium, corrupti atque veritatis deserunt. Excepturi, culpa deleniti. Nobis aspernatur a voluptates omnis beatae odio qui maxime iusto at, repudiandae magni, quibusdam eos eveniet eligendi, dignissimos dolores voluptatum sit voluptas possimus deleniti rem adipisci illo labore! Facere dolorum aliquam, harum quod quas officiis animi. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, dolores? Mollitia animi numquam, repellendus deserunt ab quasi cum dicta! Nesciunt laudantium beatae saepe, reprehenderit fugit similique, veritatis quisquam illum aut officia nihil dolores voluptate porro ipsum neque. At dolorum molestias iusto debitis cum officiis numquam magnam aliquam nostrum dolores obcaecati eaque ut, iste molestiae dolore hic laudantium, corrupti atque veritatis deserunt. Excepturi, culpa deleniti. Nobis aspernatur a voluptates omnis beatae odio qui maxime iusto at, repudiandae magni, quibusdam eos eveniet eligendi, dignissimos dolores voluptatum sit voluptas possimus deleniti rem adipisci illo labore! Facere dolorum aliquam, harum quod quas officiis animi.",
          date: new Date(Date.now()).toDateString(),
          budget: "N" + 15000,
          duration: "2 Months",
          applicants: 15,
        },
        {
          id: 7,
          title: "Undertake research on the superposition of quantum qubits 7",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, dolores? Mollitia animi numquam, repellendus deserunt ab quasi cum dicta! Nesciunt laudantium beatae saepe, reprehenderit fugit similique, veritatis quisquam illum aut officia nihil dolores voluptate porro ipsum neque. At dolorum molestias iusto debitis cum officiis numquam magnam aliquam nostrum dolores obcaecati eaque ut, iste molestiae dolore hic laudantium, corrupti atque veritatis deserunt. Excepturi, culpa deleniti. Nobis aspernatur a voluptates omnis beatae odio qui maxime iusto at, repudiandae magni, quibusdam eos eveniet eligendi, dignissimos dolores voluptatum sit voluptas possimus deleniti rem adipisci illo labore! Facere dolorum aliquam, harum quod quas officiis animi. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, dolores? Mollitia animi numquam, repellendus deserunt ab quasi cum dicta! Nesciunt laudantium beatae saepe, reprehenderit fugit similique, veritatis quisquam illum aut officia nihil dolores voluptate porro ipsum neque. At dolorum molestias iusto debitis cum officiis numquam magnam aliquam nostrum dolores obcaecati eaque ut, iste molestiae dolore hic laudantium, corrupti atque veritatis deserunt. Excepturi, culpa deleniti. Nobis aspernatur a voluptates omnis beatae odio qui maxime iusto at, repudiandae magni, quibusdam eos eveniet eligendi, dignissimos dolores voluptatum sit voluptas possimus deleniti rem adipisci illo labore! Facere dolorum aliquam, harum quod quas officiis animi.",
          date: new Date(Date.now()).toDateString(),
          budget: "N" + 18000000,
          duration: "12 Months",
          applicants: 0,
        },
      ];
    },
    viewGrant(id) {
      console.log("Current Grant" + id);
      this.$router.push(`/manageGrant/${id}`);
    },
    editGrant(item) {
      this.editedIndex = this.grants.indexOf(item);
      this.editedGrant = Object.assign({}, item);
      this.dialogEdit = true;
    },
    deleteGrant(item) {
      this.editedIndex = this.grants.indexOf(item);
      this.editedGrant = Object.assign({}, item);
      this.dialogDelete = true;
    },
    deleteItemConfirm() {
      this.grants.splice(this.editedIndex, 1);
      this.closeDelete();
    },
    close() {
      this.dialogEdit = false;
      this.dialogAdd = false;
    },
    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem);
      } else {
        this.desserts.push(this.editedItem);
      }
      this.close();
    },
  },
};
</script>
<style>
.custom__btn {
  position: fixed;
  bottom: 70px;
  right: 40px;
}
</style>
