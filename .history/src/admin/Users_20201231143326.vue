<template>
  <v-app class="grey lighten-4">
    <v-container>
      <v-row>
        <v-col cols="12" md="8" sm="8">
          <span class="text-h4 font-weight-thin">All Users</span>
        </v-col>
      </v-row>
      <v-row>
       
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
    </v-container>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    userHeaders: [
      { text: 'Full Name', value: 'fullName', sortable: false },
      { text: 'Email', value: 'email', sortable: false },
      { text: 'Phone', value: 'phone', sortable: false },
      { text: 'Institution Type', value: 'institutionType' },
      { text: 'Institution', value: 'institution' },
      { text: 'Status', value: 'status' },
      { text: 'Date Joined', value: 'dateJoined' },
      { text: 'Edit/Update', value: 'actions', sortable: false },
    ],
   
    users: [
      {
        id: 1,
        fullName: 'John Doe',
        email: 'johndoe@gmail.com',
        phone: '08092111242',
        institutionType: 'University',
        institution: 'Ahmadu Bello Zaria',
        status: 'active',
        dateJoined: new Date(Date.now()).toDateString(),
      },
      {
        id: 2,
        fullName: 'John Doe',
        email: 'johndoe@gmail.com',
        phone: '08092111242',
        institutionType: 'University',
        institution: 'Ahmadu Bello Zaria',
        status: 'active',
        dateJoined: new Date(Date.now()).toDateString(),
      },
      {
        id: 3,
        fullName: 'John Doe',
        email: 'johndoe@gmail.com',
        phone: '08092111242',
        institutionType: 'University',
        institution: 'Ahmadu Bello Zaria',
        status: 'active',
        dateJoined: new Date(Date.now()).toDateString(),
      },
      {
        id: 4,
        fullName: 'John Doe',
        email: 'johndoe@gmail.com',
        phone: '08092111242',
        institutionType: 'University',
        institution: 'Ahmadu Bello Zaria',
        status: 'active',
        dateJoined: new Date(Date.now()).toDateString(),
      },
      {
        id: 5,
        fullName: 'John Doe',
        email: 'johndoe@gmail.com',
        phone: '08092111242',
        institutionType: 'University',
        institution: 'Ahmadu Bello Zaria',
        status: 'active',
        dateJoined: new Date(Date.now()).toDateString(),
      },
      {
        id: 6,
        fullName: 'John Doe',
        email: 'johndoe@gmail.com',
        phone: '08092111242',
        institutionType: 'University',
        institution: 'Ahmadu Bello Zaria',
        status: 'active',
        dateJoined: new Date(Date.now()).toDateString(),
      },
    ],
    superusers: [
      {
        id: 1,
        fName: 'John',
        lName: 'Doe',
        email: 'johndoe@gmail.com',
        phone: '08092111242',
        institution: 'Ahmadu Bello Zaria',
        password: 'xafu3a%$@',
      },
    ],
  }),
  methods: {},
}
</script>
