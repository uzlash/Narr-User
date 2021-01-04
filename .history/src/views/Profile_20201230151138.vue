<template>
  <v-app class="custom__style">
    <v-container>
      <v-row>
        <v-col cols="12" md="6" lg="6">
          <v-card class="text-center" tile>
            <v-card-title> </v-card-title>

            <!-- <img src="../assets/avatar-1.jpg" alt="" /> -->
            
    <VueFileAgent
      class="profile-pic-upload-block"
      ref="profilePicRef"
      :multiple="false"
      :deletable="false"
      :meta="false"
      :compact="true"
      :accept="'image/*'"
      :helpText="'Drag an image file here'"
      :errorText="{
        type: 'Please select an image',
      }"
      v-model="profilePic"
      @select="onSelect($event)"
    >
      <template v-slot:before-outer>
      </template >
      <template v-slot:after-inner>
        <span title="after-inner" class="btn btn-link btn-sm btn-block">Select image file</span>
      </template >
      <template v-slot:after-outer>
        <div title="after-outer">
          <p>Please select an image and click the upload button</p>
          <div class="drop-help-text">
            <p class="text-success">Drop the file!</p>
          </div>
          <v-btn type="button" class="btn btn-primary" :class="{'disabled': uploaded || !profilePic}" @click="upload()">Upload</v-btn>
          <button type="button" class="btn" :class="[uploaded ? 'btn-danger' : 'btn-secondary']" v-if="profilePic" @click="removePic()">Remove</button>
          <div class="clearfix"></div>
        </div>
      </template >
    </VueFileAgent>

            <h3 class="text-h6 font-weight-light py-2">
              <v-icon class="mr-2">mdi-pencil</v-icon>{{ user.fullName }}
            </h3>
            <v-divider></v-divider>
            <h3 class="text-h6 font-weight-light py-2">
              <v-icon class="mr-2">mdi-email</v-icon>{{ user.email }}
            </h3>
            <v-divider></v-divider>
            <h3 class="text-h6 font-weight-light py-2">
              <v-icon class="mr-2">mdi-phone</v-icon>{{ user.phone }}
            </h3>
            <v-divider></v-divider>
            <h3 class="text-h6 font-weight-light py-2">
              <v-icon class="mr-2">mdi-calendar</v-icon>{{ user.dob }}
            </h3>
            <v-divider></v-divider>
            <h3 class="text-h6 font-weight-light py-2">
              <v-icon class="mr-2">mdi-home</v-icon>
              {{ user.address }}
            </h3>
            <v-divider></v-divider>
            <h3 class="text-h6 font-weight-light py-2">
              <v-icon class="mr-2">mdi-school-outline</v-icon>
              {{ user.institution.type }}
            </h3>
            <v-divider></v-divider>
            <h3 class="text-h6 font-weight-light py-2">
              <v-icon class="mr-2">mdi-school</v-icon>
              {{ user.institution.name }}
            </h3>
            <v-divider></v-divider>
          </v-card>
          <v-card tile class="mt-2">
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
import VueFileAgent from 'vue-file-agent';
export default {
  name: "Profile",
  components: {
    VueFileAgent
  },
  data() {
    return {
      hasSaved: false,
      isEditing: null,
      model: null,
      date: null,
      menu: false,
      user: JSON.parse(localStorage.getItem("user")),

      name: 'Gapal',
      profilePic: null,
      uploaded: false,
      uploadUrl: 'https://www.mocky.io/v2/5d4fb20b3000005c111099e3',
      uploadHeaders: {},

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
     removePic: function(){
      var profilePic = this.profilePic;
      this.$refs.profilePicRef.deleteUpload(this.uploadUrl, this.uploadHeaders, [profilePic]);
      this.profilePic = null;
      this.uploaded = false;
    },
    upload: function(){
      var self = this;
      this.$refs.profilePicRef.upload(this.uploadUrl, this.uploadHeaders, [this.profilePic]).then(function(){
        self.uploaded = true;
        setTimeout(function(){
          // self.profilePic.progress(0);          
        }, 500);
      });
    },
    onSelect: function(fileRecords){
      console.log('onSelect', fileRecords);
      this.uploaded = false;
    }
  

   
  },
};
</script>
<style scoped>
.custom__style {
  background-color: #fafafa;


}

#profile-pic-demo .drop-help-text {
    display: none;
  }
  #profile-pic-demo .is-drag-over .drop-help-text {
    display: block;
  }
  #profile-pic-demo .profile-pic-upload-block {
    border: 2px dashed transparent;
    padding: 20px;
    padding-top: 0;
  }

  #profile-pic-demo .is-drag-over.profile-pic-upload-block {
    border-color: #AAA;
  }
  #profile-pic-demo .vue-file-agent {
    width: 180px;
    float: left;
    margin: 0 15px 5px 0;
    border: 0;
    box-shadow: none;
  }
</style>
