<template>
  <v-app class="grey lighten-4">
    <v-container>
      <v-row>
        <v-col cols="12" md="8" sm="8">
          <span class="text-h4 font-weight-thin">All Admins</span>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-card outlined tile v-if="filteredAdmins">
            <v-data-table
              :headers="adminHeaders"
              :items="filteredAdmins"
              sort-by="title"
              class="elevation-1"
            >
              <template v-slot:top>
                <v-toolbar flat>
                  <v-toolbar-title>Admins</v-toolbar-title>
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
                        Add Admin
                      </v-btn>
                    </template>
                    <v-card>
                      <v-card-title>
                        <span class="text-h5 font-weight-thin ml-2"
                          >Add Admin</span
                        ></v-card-title
                      >
                      <v-card-text class="py-0">
                        <v-container>
                          <v-row>
                            <v-col cols="12" sm="6" md="6" class="py-0 px-2">
                              <v-text-field
                                label="first Name*"
                                solo
                                prepend-inner-icon="mdi-account"
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="6" class="py-0 px-2">
                              <v-text-field
                                label="Last Name*"
                                solo
                                prepend-inner-icon="mdi-account"
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" class="py-0 px-2">
                              <v-text-field
                                label="Email*"
                                solo
                                prepend-inner-icon="mdi-email"
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" class="py-0 px-2">
                              <v-text-field
                                label="phone Number*"
                                solo
                                prepend-inner-icon="mdi-phone"
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12 " class="py-0 px-2">
                              <v-text-field
                                label="Address*"
                                solo
                                prepend-inner-icon="mdi-home"
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" md="6">
                              <v-select
                                hide-details="auto"
                                v-model="selectedInstitutionType"
                                solo
                                label="Institution Type*"
                                :items="institutionTypes"
                                :rules="[rules.required]"
                                color="#00A368"
                              />
                            </v-col>
                            <v-col cols="12" md="6">
                              <v-select
                                hide-details="auto"
                                v-if="selectedInstitutionType"
                                v-model="selectedInstitution"
                                solo
                                label="Institution*"
                                :items="filteredInstitutions"
                                :rules="[rules.required]"
                              />
                            </v-col>
                            <v-col cols="12" md="12">
                              <v-menu
                                hide-details="auto"
                                ref="menu"
                                v-model="menu"
                                :close-on-content-click="false"
                                :return-value.sync="date"
                                transition="scale-transition"
                                offset-y
                                max-width="290px"
                                min-width="290px"
                              >
                                <template v-slot:activator="{ on, attrs }">
                                  <v-text-field
                                    :rules="[rules.required]"
                                    hide-details="auto"
                                    color="#00a368"
                                    solo
                                    v-model="date"
                                    label="Date Of Birth*"
                                    readonly
                                    v-bind="attrs"
                                    v-on="on"
                                  ></v-text-field>
                                </template>
                                <v-date-picker
                                  color="#00a368"
                                  v-model="date"
                                  type="date"
                                  no-title
                                  scrollable
                                >
                                  <v-spacer></v-spacer>
                                  <v-btn text color="red" @click="menu = false">
                                    Cancel
                                  </v-btn>
                                  <v-btn
                                    text
                                    color="#00a368"
                                    @click="$refs.menu.save(date)"
                                  >
                                    OK
                                  </v-btn>
                                </v-date-picker>
                              </v-menu>
                            </v-col>
                            <v-col cols="12" md="6" class="py-0 px-2">
                              <v-text-field
                                label="Password*"
                                type="password"
                                solo
                                prepend-inner-icon="mdi-lock"
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" md="6" class="py-0 px-2">
                              <v-text-field
                                label="confirm password*"
                                type="password"
                                prepend-inner-icon="mdi-lock"
                                solo
                              ></v-text-field>
                            </v-col>
                          </v-row>
                        </v-container>
                      </v-card-text>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                          color="blue darken-1"
                          text
                          @click="dialog = false"
                        >
                          Close
                        </v-btn>
                        <v-btn
                          color="blue darken-1"
                          text
                          @click="dialog = false"
                        >
                          Save
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                  <v-dialog max-width="600px">
                    <v-card>
                      <v-card-title class="text-h6 font-weight-light"
                        >Are you sure you want to delete this
                        item?</v-card-title
                      >
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="red" text>Cancel</v-btn>
                        <v-btn color="#00a368" text>OK</v-btn>
                        <v-spacer></v-spacer>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </v-toolbar>
              </template>
              <template v-slot:item="{ item }">
                <tr @click="viewUser(item)" class="custom__table-row">
                  <td>{{ item.fullName }}</td>
                  <td>{{ item.email }}</td>
                  <td>{{ item.phone }}</td>
                  <td>{{ item.institution.name }}</td>
                  <td>{{ item.userRole }}</td>
                  <td>
                    {{
                      new Date(item.createdAt).toLocaleString("en-GB", {
                        hour12: true,
                      })
                    }}
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
import helpers from "../services/helpers";
export default {
  data: () => ({
    selectedInstitutionType: "",
    selectedInstitution: "",
    date: null,
    menu: false,
    modal: false,
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
    adminHeaders: [
      { text: "Full Name", value: "fullName", sortable: true },
      { text: "Email", value: "email", sortable: false },
      { text: "Phone", value: "phone", sortable: false },
      { text: "Institution", value: "institution.name" },
      { text: "User Role", value: "userRole " },
      { text: "Date Joined", value: "createdAt" },
    ],
    admins: [],
    userTypes: ["Student", "Staff", "Independent Researcher"],
    institutionTypes: [
      "University",
      "Polytechnic",
      "College of Education",
      "Monotechnic",
      "Independent Researcher",
    ],
    institutions: [
      { text: "Abubakar Tafawa Balewa University", type: "university" },
      { text: "Ahmadu Bello University", type: "university" },
      { text: "Bayero University Kano", type: "university" },
      { text: "Kaduna Polytechnique", type: "polytechnic" },
      { text: "Nuhu Bamalli", type: "polytechnic" },
      {
        text: "Federal College of Education Zaria",
        type: "college of education",
      },
      {
        text: "Federal College of Education Katsina",
        type: "college of education",
      },
      { text: "Dialogue Institute of Technology", type: "monotechnic" },
      { text: "Khemsafe Computers", type: "monotechnic" },
      { text: "Independent", type: "independent researcher" },
    ],
  }),
  methods: {
    viewUser(item) {
      this.$router.push(`/user/${item._id}`);
    },
  },
  computed: {
    filteredAdmins() {
      return this.admins.filter((admin) => {
        return admin.userRole.match("admin" || "superuser");
      });
    },
  },
  created() {
    helpers
      .fetchUsers()
      .then((response) => {
        this.admins = response.data.payload;
      })
      .catch((error) => console.log("Error>>>", error));
  },
};
</script>
