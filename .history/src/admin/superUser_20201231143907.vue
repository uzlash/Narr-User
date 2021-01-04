<template>
  <v-container>
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
  </v-container>
</template>
<script>
export default {
    data: ()=> ({
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
      superUserHeaders: [
      { text: 'First Name', value: 'fName', sortable: false },
      { text: 'Last Name', value: 'lName', sortable: false },
      { text: 'Email', value: 'email', sortable: false },
      { text: 'Phone', value: 'phone', sortable: false },
      { text: 'Institution', value: 'institution', sortable: false },
      { text: 'Password', value: 'password', sortable: false },
    ],
    
    })
}
</script>