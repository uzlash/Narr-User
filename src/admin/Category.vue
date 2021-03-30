<template>
  <v-app class="grey lighten-4">
    <v-container>
      <v-row>
        <v-col cols="12" md="8" sm="8">
          <span class="text-h4 font-weight-thin">All Categories</span>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-card outlined tile>
            <v-data-table
              :headers="categoryHeaders"
              :items="categories"
              sort-by="title"
              class="elevation-1"
            >
              <template v-slot:top>
                <v-toolbar flat>
                  <v-toolbar-title>Categories</v-toolbar-title>
                  <v-divider class="mx-4" inset vertical></v-divider>
                  <v-spacer></v-spacer>
                  <v-dialog v-model="dialog" persistent max-width="600px">
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        class="text-capitalize"
                        color="#00a368"
                        dark
                        v-bind="attrs"
                        v-on="on"
                      >
                        Add Category
                      </v-btn>
                    </template>
                    <v-card>
                      <v-card-title>
                        <span class="text-h5 font-weight-thin ml-2"
                          >Add Category</span
                        ></v-card-title
                      >
                      <v-card-text class="py-0">
                        <v-container>
                          <v-row>
                            <v-col cols="12" class="py-0 px-2">
                              <v-text-field
                                color="accent"
                                label="Category Name"
                                solo
                                prepend-inner-icon="mdi-clipboard-edit"
                              ></v-text-field>
                            </v-col>
                          </v-row>
                        </v-container>
                      </v-card-text>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                          color="red white--text text-capitalize"
                          @click="dialog = false"
                        >
                          Close
                        </v-btn>
                        <v-btn
                          color="accent white--text text-capitalize"
                          @click="dialog = false"
                        >
                          Add
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </v-toolbar>
              </template>
              <template v-slot:item="{ item }">
                <tr>
                  <td>{{ item.name }}</td>
                  <td>
                    <v-icon color="#00a368" class="mr-2"> mdi-pencil </v-icon>
                    <v-icon color="red"> mdi-delete </v-icon>
                  </td>
                </tr>
              </template>
            </v-data-table>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
<script>
// import helpers from "../services/helpers";
export default {
  data: () => ({
    image: null,
    imageUrlPreview: null,
    rules: {
      required: (v) => !!v || "Field is required",
      counter: (v) => (v && v.length >= 3) || "Minimum length is 3 characters",
      email: (value) => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || "Invalid e-mail.";
      },
      password: (value) =>
        (value && value.length >= 6) || "Minimum length is 6 characters",
    },
    dialog: false,
    categoryHeaders: [
      { text: "Category Name", value: "name", sortable: true },
      { text: "Actions", sortable: false },
    ],
    categories: [
      { name: "Arts" },
      { name: "Education" },
      { name: "Engineering" },
      { name: "Sciences" },
      { name: "Social Sciences" },
    ],
  }),
  methods: {
    editCategory(data) {
      console.log("Edit Category", data);
    },
    deleteCategory(data) {
      console.log("Delete Category", data);
    },
  },
  computed: {},
  created() {
    // helpers
    //   .fetchUsers()
    //   .then((response) => {
    //     this.admins = response.data.payload;
    //   })
    //   .catch((error) => console.log("Error>>>", error));
  },
};
</script>
