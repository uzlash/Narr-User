<template>
  <v-app class="grey lighten-4">
    <v-container>
      <v-row>
        <v-col cols="12" md="8" sm="8">
          <span class="text-h4 font-weight-thin">All Users</span>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-card outlined tile v-if="users">
            <v-data-table
              :headers="userHeaders"
              :items="users"
              sort-by="title"
              class="elevation-1"
              @click="console.log('CLicked Table')"
            >
              <!-- <template v-slot:[`item.createdAt`]="{ item }">
                <span>{{ new Date(item.createdAt).toLocaleString() }}</span>
              </template> -->
              <template v-slot:item="{ item }">
                <tr @click="viewUser(item)" class="custom__table-row">
                  <td>{{ item.fullName }}</td>
                  <td>{{ item.email }}</td>
                  <td>{{ item.phone }}</td>
                  <td>{{ item.institution.name }}</td>
                  <td>{{ item.status }}</td>
                  <td>
                    {{
                      new Date(item.createdAt).toLocaleString('en-GB', {
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
import helpers from '../services/helpers'
export default {
  data: () => ({
    search: '',
    userHeaders: [
      { text: 'Full Name', value: 'fullName', sortable: true },
      { text: 'Email', value: 'email', sortable: false },
      { text: 'Phone', value: 'phone', sortable: false },
      { text: 'Institution', value: 'institution.name' },
      { text: 'Status', value: 'status' },
      { text: 'Date Joined', value: 'createdAt' },
    ],
    users: [],
  }),
  methods: {
    viewUser(item) {
      this.$router.push(`/user/${item._id}`)
    },
  },
  computed: {},
  created() {
    helpers
      .fetchUsers()
      .then((response) => {
        this.users = response.data.payload
      })
      .catch((error) => console.log('Error>>>', error))
  },
}
</script>

<style>
.custom__table-row:hover {
  cursor: pointer;
}
</style>
