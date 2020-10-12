<template>
  <v-app class="custom__style">
    <v-container>
      <v-row>
        <v-col cols="6" md6 xs12>
        
            <v-card class="mx-auto" max-width="1000" tile>
              <v-img height="200" src="../assets/logo.png"></v-img>
              <v-row style="margin: 2.5%; position: absolute; top: 130px">
                <v-list-item>
                  <v-list-item-avatar size="100">
                    <img
                      src="https://www.w3schools.com/howto/img_avatar.png"
                      alt="image"
                    />
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title class="title" style="margin-top: 50px"
                      >Umar abubakar</v-list-item-title
                    >
                    <v-list-item-subtitle icon-and-text>
                      <v-icon left>mdi-email</v-icon> umarabubakar@gmail.com
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-list class="custom__style">
                  <v-card flat>
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title icon-and-text>
                          <v-icon left> mdi-school</v-icon
                          >Institution</v-list-item-title
                        >
                        <v-divider></v-divider>
                        <v-list-item-subtitle
                          >Kaduna State University</v-list-item-subtitle
                        >
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title icon-and-text>
                          <v-icon left> mdi-cake</v-icon>Date of
                          Birth</v-list-item-title
                        >
                        <v-divider></v-divider>
                        <v-list-item-subtitle
                          >2nd august 2002</v-list-item-subtitle
                        >
                      </v-list-item-content>
                    </v-list-item>

                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title icon-and-text>
                          <v-icon left> mdi-email</v-icon
                          >Email</v-list-item-title
                        >
                        <v-divider></v-divider>
                        <v-list-item-subtitle
                          >umarabubakarfta@gmail.com</v-list-item-subtitle
                        >
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title icon-and-text>
                          <v-icon left> mdi-phone</v-icon
                          >Phone</v-list-item-title
                        >
                        <v-divider></v-divider>
                        <v-list-item-subtitle
                          >+2347016505825</v-list-item-subtitle
                        >
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title icon-and-text>
                          <v-icon left> mdi-home</v-icon
                          >Address</v-list-item-title
                        >
                        <v-divider></v-divider>
                        <v-list-item-subtitle
                          >Kabala road
                        </v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                  </v-card>
                </v-list>
              </v-row>
            </v-card>
            <v-spacer></v-spacer>
            <v-divider light></v-divider>
          
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