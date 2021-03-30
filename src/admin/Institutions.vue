<template>
  <v-app class="grey lighten-4">
    <v-container>
      <v-row>
        <v-col cols="12" md="8" sm="8">
          <span class="text-h4 font-weight-thin">All Institutions</span>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-card outlined tile>
            <v-data-table
              :headers="institutionHeaders"
              :items="institutions"
              sort-by="title"
              class="elevation-1"
            >
              <template v-slot:top>
                <v-toolbar flat>
                  <v-toolbar-title>Institutions</v-toolbar-title>
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
                        Add Institution
                      </v-btn>
                    </template>
                    <v-card>
                      <v-card-title>
                        <span class="text-h5 font-weight-thin ml-2"
                          >Add Institution</span
                        ></v-card-title
                      >
                      <v-card-text class="py-0">
                        <v-container>
                          <v-row>
                            <v-col cols="12" sm="6" md="6" class="py-0 px-2">
                              <v-text-field
                                color="accent"
                                label="Institution Name"
                                solo
                                prepend-inner-icon="mdi-school"
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="6" class="py-0 px-2">
                              <v-select
                                prepend-inner-icon="mdi-school"
                                hide-details="auto"
                                solo
                                label="Institution Type"
                                :items="[
                                  'University',
                                  'Polytechnic',
                                  'College of Education',
                                  'Monotechnic',
                                ]"
                                :rules="[rules.required]"
                                color="accent"
                              />
                            </v-col>
                            <v-col cols="12" sm="6" md="6" class="py-0 px-2">
                              <v-select
                                prepend-inner-icon="mdi-office-building"
                                hide-details="auto"
                                solo
                                label="Institution Ownership"
                                :items="['Federal', 'State', 'Private']"
                                :rules="[rules.required]"
                                color="accent"
                              />
                            </v-col>
                            <v-col cols="12" sm="6" md="6" class="py-0 px-2">
                              <v-text-field
                                color="accent"
                                label="Year Established"
                                type="number"
                                solo
                                prepend-inner-icon="mdi-school"
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="6" class="py-0 px-2">
                              <v-text-field
                                color="accent"
                                label="Website*"
                                solo
                                prepend-inner-icon="mdi-link"
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="6" class="py-0 px-2">
                              <v-text-field
                                color="accent"
                                label="Acronym*"
                                solo
                                prepend-inner-icon="mdi-school"
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="6" class="py-0 px-2">
                              <v-file-input
                                @change="Preview_image"
                                v-model="image"
                                color="accent"
                                prepend-icon="mdi-camera"
                                accept="image/*"
                                show-size
                                :clearable="false"
                                solo
                                label="Institution Logo"
                                hide-details="auto"
                              ></v-file-input>
                            </v-col>
                            <v-col cols="12" sm="6" md="6">
                              <img
                                v-if="image"
                                height="200"
                                width="100%"
                                :src="imageUrlPreview"
                              />
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
                  <td class="pa-2">
                    <v-avatar size="50">
                      <v-img :src="item.image"></v-img
                    ></v-avatar>
                  </td>
                  <td>{{ item.name }}</td>
                  <td>{{ item.type }}</td>
                  <td>{{ item.ownership }}</td>
                  <td>{{ item.established }}</td>
                  <td>
                    <a :href="item.website">{{ item.website }} </a>
                  </td>
                  <td>{{ item.acronym }}</td>
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
    institutionHeaders: [
      { text: "Image", value: "image" },
      { text: "Name", value: "name", sortable: true },
      { text: "Type", value: "type", sortable: false },
      { text: "Ownership", value: "ownership", sortable: false },
      { text: "Established", value: "established" },
      { text: "Website", value: "website " },
      { text: "Acronym", value: "acronym" },
    ],
    institutions: [
      {
        image:
          "https://banner2.cleanpng.com/20180423/ohw/kisspng-ahmadu-bello-university-kano-higher-education-scho-university-logo-5addf5f3546bc3.9903414015244958593458.jpg",
        name: "Ahmadu Bello University",
        type: "University",
        ownership: "Federal",
        established: "1964",
        website: "https://abu.edu.ng",
        acronym: "ABU",
      },
    ],
  }),
  methods: {
    Preview_image() {
      this.imageUrlPreview = URL.createObjectURL(this.image);
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
