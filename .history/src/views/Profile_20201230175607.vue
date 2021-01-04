<template>
  <v-app class="custom__style">
    <v-container>
      <v-row >
        <v-col cols="12" md="6" lg="6">
          <v-card class="overflow-hidden" tile>
            <v-toolbar flat color="#00a368">
              <v-icon color="white" left> mdi-account</v-icon>
              <v-toolbar-title class="white--text">
                Edit Profile
              </v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn fab small @click="isEditing = !isEditing">
                <v-icon v-if="isEditing"> mdi-close </v-icon>
                <v-icon v-else> mdi-pencil </v-icon>
              </v-btn>
            </v-toolbar>
            <v-card-text>
              <v-text-field
                :disabled="!isEditing"
                label="phone"
                v-model="phone"
                :placeholder="user.phone"
                prepend-icon="mdi-phone"
                color="#00a368"
              ></v-text-field>
              <v-text-field
                :disabled="!isEditing"
                label="password"
                 :placeholder="user.password"
                v-model="password"
                prepend-icon="mdi-lock"
                color="#00a368"
              ></v-text-field>

              <v-text-field
                :disabled="!isEditing"
                label="Adress"
                v-model="address"
                :placeholder="user.address"
                prepend-icon="mdi-home"
                color="#00a368"
              ></v-text-field>
              <v-autocomplete
                :disabled="!isEditing"
                :items="institutionTypes"
                :filter="customFilter"
                :placeholder="user.institution.name"
                color="#00a368"
                v-model="institutionType"
                item-text="name"
                
                label="InstitutionType"
                prepend-icon="mdi-school-outline"
              ></v-autocomplete>
              <v-autocomplete
                :disabled="!isEditing"
                :placeholder="user.institution.type"
                :items="institutions"
                v-model="institutionName"
                :filter="customFilter"
                color="#00a368"
                
                item-text="name"
                label="Institution"
                prepend-icon="mdi-school"
              ></v-autocomplete>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn :disabled="!isEditing" color="success" @click="save">
                Save
              </v-btn>
            </v-card-actions>
            <v-snackbar v-model="hasSaved" :timeout="2000" absolute bottom left>
              Your profile has been updated
            </v-snackbar>
          </v-card>
        </v-col>
        <v-col cols="12" md="6" lg="6">
          <v-card tile>
            <v-card-title class="font-weight-regular"
              >Uploaded Researches</v-card-title
            >
            <v-card-text>
              <v-data-table>
                <template v-slot:[`item.controls`]="props">
                  <v-btn icon color="pink" @click="deleteResearch(props.id)">
                    <v-icon>mdi-delete</v-icon>
                  </v-btn>
                </template>
              </v-data-table>
            </v-card-text>
          </v-card>
        </v-col>
         <v-col
            cols="12"
            lg="3"
            md="6"
            sm="12"
            class="hidden-lg- pa-0 px-2"
          >
            <v-card
              outlined
              tile
              height="60"
              class="mb-2 body-1 d-flex align-center"
            >
              <v-btn outlined class="mx-2" small fab dark color="indigo">
                <v-icon>mdi-account-group</v-icon>
              </v-btn>
              <span>Users Online: </span>
              <span>1,000,000</span>
              <!-- <span class="ml-2 font-weight-light black--text">{{
                users.length
              }}</span> -->
              <!-- <span :class="$socket.connected ? 'green--text' : 'red--text'">{{
                $socket.connected ? "Connected" : "Disconnected"
              }}</span> -->
            </v-card>
            <v-card
              outlined
              tile
              height="292"
              class="cutom__card--overflow d-flex flex-column align-center justify-center"
            >
              <div>
                <v-avatar size="120" color="grey">
                  <v-img src="../assets/avatar-1.jpg"></v-img>
                </v-avatar>
              </div>

              <v-card-text class="text-h5 pa-0 text-center font-weight-light ">
                {{ user.fullName }}</v-card-text
              >

              <v-card-text
                class="body-1 pa-0 text-center font-weight-light text-icon"
              >
                {{ user.email }}</v-card-text
              >
              <v-card-text
                class="body-2 pa-0 text-center font-weight-light text-icon"
              >
                {{ user.institution.name }}</v-card-text
              >

              <div class="d-flex justify-center">
                <span class="font-weight-light mx-2 body-2">Last Login:</span>
                <span class="font-weight-light orange--text body-2"
                  >26 minutes ago</span
                >
              </div>
              <div class="d-flex justify-center">
                <v-btn
                  outlined
                  small
                  class="mt-2"
                  color="#00a368"
                  to="/profile"
                >
                  <v-icon>mdi-circle-edit-outline</v-icon>
                  Edit Profile</v-btn
                >
              </div>
            </v-card>
          </v-col>
          <v-col cols="12" lg="12" md="12" sm="12" class="pa-2">
            <v-card outlined tile>
              <template>
                <div class="chart">
                  <GChart
                    type="LineChart"
                    :data="chartData"
                    :options="chartOptions"
                  />
                </div>
              </template>
              <v-card-text>
                <span class="text-center">
                  Usage in the last 24hrs
                </span></v-card-text
              >
            </v-card>
          </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
<script>
export default {
  name: "Profile",
  components: {},
  data() {
    return {
      hasSaved: false,
      isEditing: null,
      model: null,
      phone: "",
      password: "",
      address: '',
      institutionType: "",
      institutionName: "",

      date: null,
      menu: false,
      user: JSON.parse(localStorage.getItem("user")),

      institutionTypes: [
        "University",
        "Polytechnic",
        "College of Education",
        "Monotechnique",
        "Independent Researcher",
        "Organization",
      ],
      institutions: ["Ahmadu bello University", "Kaduna state university"],
    };
  },

  methods: {
    customFilter(item, queryText) {
      const textOne = item.name.toLowerCase();
      const textTwo = item.abbr.toLowerCase();
      const searchText = queryText.toLowerCase();

      return (
        textOne.indexOf(searchText) > -1 || textTwo.indexOf(searchText) > -1
      );
    },

    save() {
      this.isEditing = !this.isEditing;
      this.hasSaved = true;
    },
  },
};
</script>
<style scoped>
.custom__style {
  background-color: #fafafa;
}
</style>
