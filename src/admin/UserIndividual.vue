<template>
  <v-app class="grey lighten-4">
    <v-container>
      <v-row>
        <v-col cols="12" md="8" sm="8">
          <span class="text-h4 font-weight-thin">User Profile</span>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-card outlined>
            <v-card-title>
              <div class="mr-4">
                <v-avatar size="120" color="grey">
                  <v-img src="../assets/avatar-1.jpg"></v-img>
                </v-avatar>
              </div>
              <div class="mr-16">
                <span class="text-h6 font-weight-bold">Full Name: </span>
                <span class="text-h6 font-weight-light">{{
                  user.fullName
                }}</span>
              </div>
              <div class="mr-16">
                <span class="text-h6 font-weight-bold">User Role: </span>
                <span class="text-h6 font-weight-light">{{
                  user.userRole
                }}</span>
              </div>
              <div class="d-flex">
                <v-btn small dark color="#00a368" class="mr-2">Activate</v-btn>
                <v-btn small dark color="orange" class="mr-2">Block</v-btn>
                <v-btn small dark color="red">Remove</v-btn>
              </div>
            </v-card-title>
            <v-divider class="mx-4"></v-divider>
            <v-card-text>
              <div>
                <span class="text-h6 font-weight-bold">Id: </span>
                <span class="text-h6 font-weight-light">{{ user._id }}</span>
              </div>
              <div>
                <span class="text-h6 font-weight-bold">Address: </span>
                <span class="text-h6 font-weight-light">{{
                  user.address
                }}</span>
              </div>
              <div>
                <span class="text-h6 font-weight-bold">Created At: </span>
                <span class="text-h6 font-weight-light">{{
                  new Date(user.createdAt).toLocaleString('en-GB', {
                    hour12: true,
                  })
                }}</span>
              </div>
              <div>
                <span class="text-h6 font-weight-bold">Updated At: </span>
                <span class="text-h6 font-weight-light">{{
                  new Date(user.updatedAt).toLocaleString('en-GB', {
                    hour12: true,
                  })
                }}</span>
              </div>
              <div>
                <span class="text-h6 font-weight-bold">Date of Birth: </span>
                <span class="text-h6 font-weight-light">{{ user.dob }}</span>
              </div>
              <div>
                <span class="text-h6 font-weight-bold">Email: </span>
                <span class="text-h6 font-weight-light">{{ user.email }}</span>
              </div>
              <div>
                <span class="text-h6 font-weight-bold">First Name: </span>
                <span class="text-h6 font-weight-light">{{ user.fName }}</span>
              </div>
              <div>
                <span class="text-h6 font-weight-bold">Last Name: </span>
                <span class="text-h6 font-weight-light">{{ user.lName }}</span>
              </div>
              <div>
                <span class="text-h6 font-weight-bold">Institution Name: </span>
                <span class="text-h6 font-weight-light">{{
                  institution.name
                }}</span>
              </div>
              <div>
                <span class="text-h6 font-weight-bold">Institution Type: </span>
                <span class="text-h6 font-weight-light">{{
                  institution.type
                }}</span>
              </div>
              <div>
                <span class="text-h6 font-weight-bold">Phone: </span>
                <span class="text-h6 font-weight-light">{{ user.phone }}</span>
              </div>
              <div>
                <span class="text-h6 font-weight-bold">Status: </span>
                <span class="text-h6 font-weight-light">{{ user.status }}</span>
              </div>
              <div>
                <span class="text-h6 font-weight-bold">User Type: </span>
                <span class="text-h6 font-weight-light">{{
                  user.userType
                }}</span>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import helpers from '../services/helpers'
export default {
  props: ['id'],
  data: () => ({
    user: [],
    institution: {},
  }),
  methods: {},
  computed: {},
  mounted() {
    helpers
      .fetchSingleUser(this.id)
      .then((response) => {
        this.user = response.data.payload
        this.institution = response.data.payload.institution
      })
      .catch((error) => {
        console.log('Error>>>', error)
      })
  },
}
</script>

<style>
.custom__table-row:hover {
  cursor: pointer;
}
</style>
