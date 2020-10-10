<template>
  <v-app class="grey lighten-4">
    <v-container fluid>
      <v-row>
        <v-col cols="12" md="8" sm="8">
          <span class="text-h4 font-weight-thin">Users</span>
        </v-col>
        <v-col>
          <v-btn @click="fetchUsers()">Fetch Users</v-btn>
        </v-col>
        <v-col>
          <!-- <v-btn @click="fetchUsers()">Refresh Token</v-btn> -->
        </v-col>
        <v-col cols="12" md="8" sm="8">
          <ul>
            <li v-for="user in users" :key="user._id">
              {{ user.fullName }} | {{ user.institution.name }} |
              {{ user.username }} | {{ user.phone }}
            </li>
          </ul>
          <p v-show="error != null">{{ error }}</p>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import axios from "axios";
import helpers from "../services/helpers";

export default {
  data: () => ({
    users: [],
    user: {},
    error: "",
    token: "",
    refreshToken: "",
  }),
  methods: {
    fetchUsers() {
      axios
        .get(`http://192.168.1.4:3000/api/v1/user`, {
          headers: {
            "x-token": localStorage.getItem("token"),
          },
        })
        .then((response) => {
          console.log(response);
          if (response.status == "200") {
            this.users = response.data.payload;
            console.log("Users>>>", this.users);
          }
        })
        .catch(async (error) => {
          if (error.message == "Request failed with status code 412") {
            console.log("Token Expired");
            const resp = await helpers.refreshToken();
            console.log("new token>>>", resp.payload.token);
            console.log("new refresh token>>>", resp.payload.refreshToken);
            localStorage.setItem("token", resp.payload.token);
            this.fetchUsers();
          }
        });
    },
  },
  mounted() {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.token = localStorage.getItem("token");
    this.refreshToken = localStorage.getItem("refreshToken");
  },
};
</script>