<template>
  <v-app class="grey lighten-4">
    <v-container>
      <v-row>
        <v-col cols="3">
          <v-card outlined tile height="86px">
            <v-row>
              <v-col cols="6">
                <div class="d-flex justify-center align-center">
                  Total Users:
                </div>
                <div
                  class="d-flex justify-center align-center font-weight-bold"
                >
                  123,000
                </div>
              </v-col>
              <v-col cols="6" class="body-2">
                <div>
                  <span class="mr-2 green--text">Active:</span>
                  <span class="font-weight-bold">15,000</span>
                </div>
                <div>
                  <span class="mr-2 orange--text">Pending:</span>
                  <span class="font-weight-bold">70,000</span>
                </div>
                <div>
                  <span class="mr-2 red--text">Inactive:</span>
                  <span class="font-weight-bold">33,000</span>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col cols="3">
          <v-card outlined tile height="86px">
            <v-row>
              <v-col cols="12">
                <div class="d-flex justify-center align-center">
                  <span>Documents Uploaded:</span>
                </div>
                <div
                  class="d-flex justify-center align-center font-weight-bold"
                >
                  <span class="mr-2">Total Uploaded:</span>
                  <span class="font-weight-bold">17,356 </span>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col cols="3">
          <v-card outlined tile height="86px">
            <v-row>
              <v-col cols="12">
                <div class="d-flex justify-center align-center">
                  <span> Document Conveter Usage:</span>
                </div>
                <div
                  class="d-flex justify-center align-center font-weight-bold"
                >
                  <span class="mr-2">Total Converted:</span>
                  <span class="font-weight-bold">467 </span>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col cols="3">
          <v-card outlined tile height="86px">
            <v-row>
              <v-col cols="12">
                <div class="d-flex justify-center align-center">
                  <span> OCR Usage:</span>
                </div>
                <div
                  class="d-flex justify-center align-center font-weight-bold"
                >
                  <span class="mr-2">Total Processed:</span>
                  <span class="font-weight-bold">11,234</span>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <div>
            <v-card height="300px" tile outlined>
              <apexchart
                height="100%"
                width="100%"
                type="bar"
                :options="chartOptions"
                :series="seriesColumn"
              ></apexchart>
            </v-card>
          </div>
        </v-col>
        <v-col cols="6">
          <div>
            <v-card height="300px" tile outlined>
              <v-card-title class="py-0"
                >Documents uploaded by genre</v-card-title
              >
              <v-divider></v-divider>
              <apexchart
                height="90%"
                width="100%"
                type="donut"
                :options="chartOptionsPie"
                :series="seriesDonut"
              ></apexchart>
            </v-card>
          </div>
        </v-col>
      </v-row>
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
                  <v-btn dark class="mr-2" color="#00a368">Add User</v-btn>
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
                <v-icon color="blue" class="mr-2">
                  mdi-eye
                </v-icon>
                <v-icon color="#00a368" class="mr-2">
                  mdi-pencil
                </v-icon>
                <v-icon color="red">
                  mdi-delete
                </v-icon>
              </template>
            </v-data-table>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-card outlined tile>
            <v-data-table
              :headers="superUserHeaders"
              :items="superusers"
              sort-by="title"
              class="elevation-1"
            >
              <template v-slot:top>
                <v-toolbar flat>
                  <v-toolbar-title>Superusers</v-toolbar-title>
                  <v-divider class="mx-4" inset vertical></v-divider>
                  <v-spacer></v-spacer>
                  <v-btn dark class="mr-2" color="#00a368">Add superuser</v-btn>
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
                <v-icon color="blue" class="mr-2">
                  mdi-eye
                </v-icon>
                <v-icon color="#00a368" class="mr-2">
                  mdi-pencil
                </v-icon>
                <v-icon color="red">
                  mdi-delete
                </v-icon>
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
  data: function() {
    return {
      search: "",
      userHeaders: [
        { text: "Full Name", value: "fullName", sortable: false },
        { text: "Email", value: "email", sortable: false },
        { text: "Phone", value: "phone", sortable: false },
        { text: "Institution Type", value: "institutionType" },
        { text: "Institution", value: "institution" },
        { text: "Date of Birth", value: "dateOfBirth", sortable: false },
        { text: "Date Joined", value: "dateJoined" },
        { text: "Edit/Update", value: "actions", sortable: false },
      ],
      superUserHeaders: [
        { text: "First Name", value: "fName", sortable: false },
        { text: "Last Name", value: "lName", sortable: false },
        { text: "Email", value: "email", sortable: false },
        { text: "Phone", value: "phone", sortable: false },
        { text: "Institution", value: "institution", sortable: false },
        { text: "Password", value: "password", sortable: false },
      ],
      users: [
        {
          id: 1,
          fullName: "John Doe",
          email: "johndoe@gmail.com",
          phone: "08092111242",
          institutionType: "University",
          institution: "Ahmadu Bello Zaria",
          dateOfBirth: new Date(Date.now()).toDateString(),
          dateJoined: new Date(Date.now()).toDateString(),
        },
        {
          id: 2,
          fullName: "John Doe",
          email: "johndoe@gmail.com",
          phone: "08092111242",
          institutionType: "University",
          institution: "Ahmadu Bello Zaria",
          dateOfBirth: new Date(Date.now()).toDateString(),
          dateJoined: new Date(Date.now()).toDateString(),
        },
        {
          id: 3,
          fullName: "John Doe",
          email: "johndoe@gmail.com",
          phone: "08092111242",
          institutionType: "University",
          institution: "Ahmadu Bello Zaria",
          dateOfBirth: new Date(Date.now()).toDateString(),
          dateJoined: new Date(Date.now()).toDateString(),
        },
        {
          id: 4,
          fullName: "John Doe",
          email: "johndoe@gmail.com",
          phone: "08092111242",
          institutionType: "University",
          institution: "Ahmadu Bello Zaria",
          dateOfBirth: new Date(Date.now()).toDateString(),
          dateJoined: new Date(Date.now()).toDateString(),
        },
        {
          id: 5,
          fullName: "John Doe",
          email: "johndoe@gmail.com",
          phone: "08092111242",
          institutionType: "University",
          institution: "Ahmadu Bello Zaria",
          dateOfBirth: new Date(Date.now()).toDateString(),
          dateJoined: new Date(Date.now()).toDateString(),
        },
        {
          id: 6,
          fullName: "John Doe",
          email: "johndoe@gmail.com",
          phone: "08092111242",
          institutionType: "University",
          institution: "Ahmadu Bello Zaria",
          dateOfBirth: new Date(Date.now()).toDateString(),
          dateJoined: new Date(Date.now()).toDateString(),
        },
      ],
      superusers: [
        {
          id: 1,
          fName: "John",
          lName: "Doe",
          email: "johndoe@gmail.com",
          phone: "08092111242",
          institution: "Ahmadu Bello Zaria",
          password: "xafu3a%$@",
        },
      ],
      chartOptions: {
        chart: {
          id: "vuechart",
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
        },
      },
      chartOptionsPie: {
        chart: {
          type: "donut",
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
        labels: ["Projects", "Thesis-Dissertations", "Journals", "eBooks"],
      },
      seriesColumn: [
        {
          data: [30, 40, 35, 50, 49, 60, 70, 91],
        },
      ],
      seriesDonut: [44, 55, 41, 17],
    };
  },
};
</script>
