<template>
  <v-app class="custom__style">
    <v-container>
      <v-row justify="">
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
                prepend-icon="mdi-phone"
                color="#00a368"
              ></v-text-field>
              <v-text-field
                :disabled="!isEditing"
                label="password"
                v-model="password"
                prepend-icon="mdi-lock"
                color="#00a368"
              ></v-text-field>

              <v-text-field
                :disabled="!isEditing"
                label="Adress"
                v-model="address"
                prepend-icon="mdi-home"
                color="#00a368"
              ></v-text-field>
              <v-autocomplete
                :disabled="!isEditing"
                :items="institutionTypes"
                :filter="customFilter"
                color="#00a368"
                v-model="institutionType"
                item-text="name"
                label="InstitutionType"
                prepend-icon="mdi-school-outline"
              ></v-autocomplete>
              <v-autocomplete
                :disabled="!isEditing"
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
          <v-card tile >
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
      phone
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
