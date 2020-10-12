<template>
  <v-app class="custom__style">
    <v-container>
      <v-row>
        <v-col cols="6" md6 xs12>
          <v-card class="text-center" elevation-10>
            <v-card-title> </v-card-title>
            <v-avatar class="mb-4" size="100" circle elevation-12>
              <img src="../assets/avatar-1.jpg" alt="" />
            </v-avatar>
            <h2 class="">Usman Murtala</h2>

            <h3 class="text-h5 font-weight-light">
              <v-icon>mdi-school</v-icon> Ahmadu bello university
            </h3>
            <v-divider></v-divider>
            <v-col cols="12" md12>
              <v-list>
                <v-list-item-content>
                  <v-list-item-title class="mr-10">
                    <v-icon left>mdi-email</v-icon>Email</v-list-item-title
                  >
                  <v-divider></v-divider>
                  <v-list-item-subtitle>uzlash@gmail.com</v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-content>
                  <v-list-item-title class="mr-10">
                    <v-icon left>mdi-phone</v-icon>Phone</v-list-item-title
                  >
                  <v-divider></v-divider>
                  <v-list-item-subtitle>07016505825</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-content>
                  <v-list-item-title class="mr-10">
                    <v-icon left>mdi-home</v-icon>Address</v-list-item-title
                  >
                  <v-divider></v-divider>
                  <v-list-item-subtitle>Tudun wada kaduna</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-content>
                  <v-list-item-title class="mr-10">
                    <v-icon left>mdi-cake</v-icon>Birth day</v-list-item-title
                  >
                  <v-divider></v-divider>
                  <v-list-item-subtitle>2nd august 2002</v-list-item-subtitle>
                </v-list-item-content>
              </v-list>
            </v-col>
          </v-card>
        </v-col>

        <v-col cols="6" md12 xs12>
          <v-card class="overflow-hidden">
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
                label="Name"
                prepend-icon="mdi-pencil"
                color="#00a368"
              ></v-text-field>
              <v-text-field
                :disabled="!isEditing"
                label="email"
                prepend-icon="mdi-email"
                color="#00a368"
              ></v-text-field>
              <v-text-field
                :disabled="!isEditing"
                label="phone"
                prepend-icon="mdi-phone"
                color="#00a368"
              ></v-text-field>
              <v-menu
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
                    :disabled="!isEditing"
                    v-model="date"
                    label="Date Of Birth"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    color="#00a368"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  color="#00a368"
                  v-model="date"
                  type="date"
                  no-title
                  scrollable
                  header-color="#00a368"
                >
                  <v-spacer></v-spacer>
                  <v-btn text color="#00a368" @click="menu = false">
                    Cancel
                  </v-btn>
                  <v-btn text color="#00a368" @click="$refs.menu.save(date)">
                    OK
                  </v-btn>
                </v-date-picker>
              </v-menu>
              <v-text-field
                :disabled="!isEditing"
                label="Adress"
                prepend-icon="mdi-home"
                color="#00a368"
              ></v-text-field>
              <v-text-field
                :disabled="!isEditing"
                label="email"
                color="#00a368"
                prepend-icon="mdi-email"
              ></v-text-field>

              <v-autocomplete
                :disabled="!isEditing"
                :items="institutionTypes"
                :filter="customFilter"
                color="#00a368"
                item-text="name"
                label="InstitutionType"
                prepend-icon="mdi-school-outline"
              ></v-autocomplete>
              <v-autocomplete
                :disabled="!isEditing"
                :items="institutions"
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
      </v-row>
    </v-container>
  </v-app>
</template>
<script>
export default {
  name: "Profile",
  data() {
    return {
      hasSaved: false,
      isEditing: null,
      model: null,
      date: null,
      menu: false,

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