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
          <v-card v-if="users">
            <v-data-table
              :headers="userHeaders"
              :items="users"
              sort-by="fullName"
            >
              <template v-slot:top>
                <v-toolbar flat>
                  <v-toolbar-title>Users</v-toolbar-title>
                  <v-divider class="mx-4" inset vertical></v-divider>
                  <v-spacer></v-spacer>
                </v-toolbar>
              </template>
              <template v-slot:item="{ item }">
                <tr>
                  <!-- <td class="pa-2">
                    <v-avatar size="50">
                      <v-img :src="item.image"></v-img
                    ></v-avatar>
                  </td>
                  <td>{{ item.name }}</td>
                  <td>{{ item.phone }}</td>
                  <td>{{ item.nin }}</td>
                  <td>{{ item.state }}</td>
                  <td>{{ item.lga }}</td>
                  <td>{{ item.address }}</td>
                  <td>
                    {{
                      new Date(item.createdAt).toLocaleString("en-GB", {
                        hour12: true,
                      })
                    }}
                  </td> -->
                  <td class="pa-2">{{ item.fullName }}</td>
                  <td>{{ item.email }}</td>
                  <td>{{ item.phone }}</td>
                  <td>{{ item.institution.name }}</td>
                  <td>
                    {{ item.status }}
                  </td>
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
    search: "",
    userHeaders: [
      { text: "Full Name", value: "fullName", sortable: true },
      { text: "Email", value: "email", sortable: false },
      { text: "Phone", value: "phone", sortable: false },
      { text: "Institution", value: "institution.name" },
      { text: "Status", value: "status" },
      { text: "Date Joined", value: "createdAt" },
    ],
    users: [],
  }),
  methods: {
    viewUser(item) {
      this.$router.push(`/user/${item._id}`);
    },
  },
  computed: {},
  created() {
    helpers
      .fetchUsers()
      .then((response) => {
        this.users = response.data.payload;
      })
      .catch((error) => console.log("Error>>>", error));
  },
};
</script>

<style>
.custom__table-row:hover {
  cursor: pointer;
}
</style>
