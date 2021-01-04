<template>
  <v-app class="grey lighten-4">
    <v-container>
      <v-row>
        <v-col cols="12" md="8" sm="8">
          <span class="text-h4 font-weight-thin">All Users</span>
        </v-col>
      </v-row>
      <v-row> </v-row>
      <v-row>
        <v-col cols="12">
          <v-card outlined tile>
            <v-data-table
              :headers="userHeaders"
              :items="users"
              sort-by="title"
              class="elevation-1"
            >
              <template v-slot:top>
                <v-toolbar flat>
                  <v-toolbar-title>Users</v-toolbar-title>
                  <v-divider class="mx-4" inset vertical></v-divider>
                  <v-text-field
                    color="#00a368"
                    clearable
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="Search Users"
                    single-line
                    hide-details
                  ></v-text-field>
                  <v-spacer></v-spacer>
                  <v-dialog v-model="dialog" persistent max-width="600px">
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn color="#00a368" dark v-bind="attrs" v-on="on">
                        Add user
                      </v-btn>
                    </template>
                    <v-card>
                      <v-card-text>
                        <v-container>
                          <v-row>
                            <v-col cols="12" sm="6" md="6" class="py-0 px-2">
                              <v-text-field
                                label="first Name"
                                outlined
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="6" class="py-0 px-2">
                              <v-text-field
                                label="Last Name"
                                outlined
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" class="py-0 px-2">
                              <v-text-field
                                label="Email"
                                outlined
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" class="py-0 px-2">
                              <v-text-field
                                label="phone Number"
                                outlined
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12 " class="py-0 px-2">
                              <v-text-field
                                label="Address"
                                solo
                                prepend-inner-icon="md-home"
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" md="6">
                              <v-select
                                hide-details="auto"
                                v-model="selectedInstitutionType"
                                solo
                                label="Institution Type"
                                prepend-icon="mdi-school"
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
                                label="Institution"
                                prepend-icon="mdi-school"
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
                                    label="Date Of Birth"
                                    prepend-icon="mdi-calendar"
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
              <!-- eslint-disable-next-line vue/no-unused-vars -->
              <template v-slot:[`item.actions`]="{ item }">
                <!-- <v-icon color="blue" class="mr-2">
                  mdi-eye
                </v-icon>
                <v-icon color="#00a368" class="mr-2">
                  mdi-pencil
                </v-icon>
                <v-icon color="red">
                  mdi-delete
                </v-icon> -->
                <v-btn class="mr-2" color="green" small outlined>Suspend</v-btn>
                <v-btn class="mr-2" color="red" small outlined>Block</v-btn>
              </template>
            </v-data-table>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
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
    userHeaders: [
      { text: "Full Name", value: "fullName", sortable: false },
      { text: "Email", value: "email", sortable: false },
      { text: "Phone", value: "phone", sortable: false },
      { text: "Institution Type", value: "institutionType" },
      { text: "Institution", value: "institution" },
      { text: "Status", value: "status" },
      { text: "Date Joined", value: "dateJoined" },
      { text: "actions", value: "actions", sortable: false },
    ],

    users: [
      {
        id: 1,
        fullName: "John Doe",
        email: "johndoe@gmail.com",
        phone: "08092111242",
        institutionType: "University",
        institution: "Ahmadu Bello Zaria",
        status: "active",
        dateJoined: new Date(Date.now()).toDateString(),
      },
      {
        id: 2,
        fullName: "John Doe",
        email: "johndoe@gmail.com",
        phone: "08092111242",
        institutionType: "University",
        institution: "Ahmadu Bello Zaria",
        status: "active",
        dateJoined: new Date(Date.now()).toDateString(),
      },
      {
        id: 3,
        fullName: "John Doe",
        email: "johndoe@gmail.com",
        phone: "08092111242",
        institutionType: "University",
        institution: "Ahmadu Bello Zaria",
        status: "active",
        dateJoined: new Date(Date.now()).toDateString(),
      },
      {
        id: 4,
        fullName: "John Doe",
        email: "johndoe@gmail.com",
        phone: "08092111242",
        institutionType: "University",
        institution: "Ahmadu Bello Zaria",
        status: "active",
        dateJoined: new Date(Date.now()).toDateString(),
      },
      {
        id: 5,
        fullName: "John Doe",
        email: "johndoe@gmail.com",
        phone: "08092111242",
        institutionType: "University",
        institution: "Ahmadu Bello Zaria",
        status: "active",
        dateJoined: new Date(Date.now()).toDateString(),
      },
      {
        id: 6,
        fullName: "John Doe",
        email: "johndoe@gmail.com",
        phone: "08092111242",
        institutionType: "University",
        institution: "Ahmadu Bello Zaria",
        status: "active",
        dateJoined: new Date(Date.now()).toDateString(),
      },
    ],
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
  methods: {},
  computed: {
    filteredInstitutions() {
      return this.institutions.filter((institution) => {
        return institution.type.match(
          this.selectedInstitutionType.toLowerCase()
        );
      });
    },
  },
};
</script>
