<template>
  <v-app class="grey lighten-4">
    <v-container>
      <v-row>
        <v-col cols="12" md="8" sm="8">
          <span class="text-h4 font-weight-thin">User Profile</span>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="9">
          <v-card outlined tile class="pa-2 d-flex flex-column align-center">
            <div class="mr-4">
              <v-avatar size="200" color="grey">
                <v-img src="../assets/avatar-1.jpg"></v-img>
              </v-avatar>
            </div>
            <div>
              <span class="text-h6 font-weight-bold mr-2">Full Name: </span>
              <span class="text-h6 font-weight-light">{{ user.fullName }}</span>
            </div>
            <div>
              <span class="text-h6 font-weight-bold mr-2">User Role: </span>
              <span class="text-h6 font-weight-light">{{ user.userRole }}</span>
            </div>
          </v-card>
        </v-col>
        <v-col cols="3">
          <v-card outlined tile height="100%">
            <v-card-title class="accent--text">Actions</v-card-title>
            <v-divider></v-divider>
            <v-card-text class="d-flex flex-column justify-center">
              <v-btn dark color="accent">
                <v-icon>mdi-account-reactivate</v-icon>
                <span>Activate</span>
              </v-btn>
              <v-btn dark color="amber" class="my-2">
                <v-icon>mdi-account-cancel</v-icon>
                <span>Block</span>
              </v-btn>
              <v-btn dark color="red">
                <v-icon>mdi-account-remove</v-icon>
                <span>Remove</span>
              </v-btn>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-card outlined tile>
            <v-card-title class="accent--text"
              >Personal Information</v-card-title
            >
            <v-divider></v-divider>
            <v-card-text>
              <v-row>
                <v-col cols="4">
                  <div class="d-flex align-center">
                    <v-icon>
                      mdi-account
                    </v-icon>
                    <span class="text-h6 font-weight-bold mx-2"
                      >First Name:
                    </span>
                    <span class="text-h6 font-weight-light">{{
                      user.fName
                    }}</span>
                  </div>
                </v-col>
                <v-col cols="4">
                  <div class="d-flex align-center">
                    <v-icon>
                      mdi-account
                    </v-icon>
                    <span class="text-h6 font-weight-bold mx-2"
                      >Last Name:
                    </span>
                    <span class="text-h6 font-weight-light">{{
                      user.lName
                    }}</span>
                  </div>
                </v-col>
                <v-col cols="4">
                  <div class="d-flex align-center">
                    <v-icon>
                      mdi-map-marker-outline
                    </v-icon>
                    <span class="text-h6 font-weight-bold  mx-2"
                      >Address:
                    </span>
                    <span class="text-h6 font-weight-light">{{
                      user.address
                    }}</span>
                  </div>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4">
                  <div class="d-flex align-center">
                    <v-icon>
                      mdi-calendar
                    </v-icon>
                    <span class="text-h6 font-weight-bold mx-2"
                      >Date of Birth:
                    </span>
                    <span class="text-h6 font-weight-light">{{
                      user.dob
                    }}</span>
                  </div>
                </v-col>
                <v-col cols="4">
                  <div class="d-flex align-center">
                    <v-icon>
                      mdi-email
                    </v-icon>
                    <span class="text-h6 font-weight-bold mx-2">Email: </span>
                    <span class="text-h6 font-weight-light">{{
                      user.email
                    }}</span>
                  </div>
                </v-col>
                <v-col cols="4">
                  <div class="d-flex align-center">
                    <v-icon>
                      mdi-phone
                    </v-icon>
                    <span class="text-h6 font-weight-bold mx-2">Phone: </span>
                    <span class="text-h6 font-weight-light">{{
                      user.phone
                    }}</span>
                  </div>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-card outlined tile>
            <v-card-title class="accent--text"
              >Institution Information</v-card-title
            >
            <v-divider></v-divider>
            <v-card-text>
              <v-row>
                <v-col cols="6">
                  <div class="d-flex align-center">
                    <v-icon>
                      mdi-office-building-marker
                    </v-icon>
                    <span class="text-h6 font-weight-bold mx-2"
                      >Institution Name:
                    </span>
                    <span class="text-h6 font-weight-light">{{
                      institution.name
                    }}</span>
                  </div>
                </v-col>
                <v-col cols="6">
                  <div class="d-flex align-center">
                    <v-icon>
                      mdi-office-building-outline
                    </v-icon>
                    <span class="text-h6 font-weight-bold mx-2"
                      >Institution Type:
                    </span>
                    <span class="text-h6 font-weight-light">{{
                      institution.type
                    }}</span>
                  </div>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-card outlined tile class="accent--text">
            <v-card-title>Meta Data</v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              <v-row>
                <v-col cols="4">
                  <div class="d-flex align-center">
                    <v-icon>
                      mdi-account
                    </v-icon>
                    <span class="text-h6 font-weight-bold mx-2">Id: </span>
                    <span class="text-h6 font-weight-light">{{
                      user._id
                    }}</span>
                  </div>
                </v-col>
                <v-col cols="4">
                  <div class="d-flex align-center">
                    <v-icon>
                      mdi-account
                    </v-icon>
                    <span class="text-h6 font-weight-bold mx-2">Status: </span>
                    <span class="text-h6 font-weight-light">{{
                      user.status
                    }}</span>
                  </div>
                </v-col>
                <v-col cols="4">
                  <div class="d-flex align-center">
                    <v-icon>
                      mdi-account
                    </v-icon>
                    <span class="text-h6 font-weight-bold mx-2"
                      >User Type:
                    </span>
                    <span class="text-h6 font-weight-light">{{
                      user.userType
                    }}</span>
                  </div>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="6">
                  <div class="d-flex align-center">
                    <v-icon>
                      mdi-account
                    </v-icon>
                    <span class="text-h6 font-weight-bold mx-2"
                      >Created At:
                    </span>
                    <span class="text-h6 font-weight-light">{{
                      new Date(user.createdAt).toLocaleString('en-GB', {
                        hour12: true,
                      })
                    }}</span>
                  </div>
                </v-col>
                <v-col cols="6">
                  <div class="d-flex align-center">
                    <v-icon>
                      mdi-account
                    </v-icon>
                    <span class="text-h6 font-weight-bold  mx-2"
                      >Updated At:
                    </span>
                    <span class="text-h6 font-weight-light">{{
                      new Date(user.updatedAt).toLocaleString('en-GB', {
                        hour12: true,
                      })
                    }}</span>
                  </div>
                </v-col>
              </v-row>
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
