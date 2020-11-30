<template>
  <v-app class="grey lighten-4">
    <v-container>
      <v-row>
        <v-col cols="12">
          <span class="text-h4 font-weight-thin">Upload Research</span>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="9" lg="9">
          <v-card outlined tile>
            <v-card-title class="font-weight-light">
              <h4 class="font-weight-regular">Uploaded Research</h4>
              <v-spacer></v-spacer>
              <v-text-field
                color="#00a368"
                clearable
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
              ></v-text-field>
            </v-card-title>
            <v-data-table :search="search">
              <template v-slot:[`item.controls`]="props">
                <v-btn icon color="pink" @click="deleteResearch(props.id)">
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </template>
            </v-data-table>
          </v-card>
        </v-col>
        <v-col cols="12" md="3" lg="3">
          <v-card tile outlined>
            <v-card-title class="font-weight-regular"
              >Document Processing</v-card-title
            >
            <v-divider></v-divider>
            <v-card-text>
              <div>
                <span>Stage 1:</span>
                <span> Completed</span>
                <v-progress-linear
                  color="#00a368"
                  height="10"
                  reactive
                  dark
                  value="100"
                >
                  <strong>{{ progress || "100%" }}</strong>
                </v-progress-linear>
                <span>Stage 2:</span>
                <span> In Progress</span>
                <v-progress-linear
                  color="#00a368"
                  height="10"
                  reactive
                  dark
                  indeterminate
                >
                  <!-- <strong>{{ progress }} %</strong> -->
                </v-progress-linear>
                <span>Stage 3:</span>
                <span> Not Started</span>
                <v-progress-linear color="#00a368" height="10" reactive dark>
                  <!-- <strong>{{ progress }} %</strong> -->
                </v-progress-linear>
                <span>Stage 4:</span>
                <span> Not Started</span>
                <v-progress-linear color="#00a368" height="10" reactive dark>
                  <!-- <strong>{{ progress }} %</strong> -->
                </v-progress-linear>
                <span>Stage 5:</span>
                <span> Not Started</span>
                <v-progress-linear color="#00a368" height="10" reactive dark>
                  <!-- <strong>{{ progress }} %</strong> -->
                </v-progress-linear>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-dialog v-model="dialogUpload" max-width="600px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              class="custom__btn"
              color="#00a368"
              dark
              absolute
              fab
              v-bind="attrs"
              v-on="on"
              >Add
            </v-btn>
          </template>
          <v-card>
            <v-form submit.prevent ref="form">
              <v-card-title>
                <span class="headline mr-4">Upload Research</span>
                <span class="body-2 red--text"
                  >Note: All fields are required</span
                >
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="12" md="12" class="d-flex">
                      <v-text-field
                        v-model="meta.researchTitle"
                        :rules="[rules.required]"
                        solo
                        hide-details="auto"
                        color="#00a368"
                        label="Research Title"
                        class="ma-0 pa-0"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-textarea
                        :rules="[rules.required]"
                        auto-grow
                        autofocus
                        clearable
                        solo
                        color="#00a368"
                        label="Research Description"
                        v-model="meta.description"
                      ></v-textarea>
                    </v-col>
                    <v-col cols="12" sm="12" md="12" class="d-flex">
                      <v-combobox
                        v-model="meta.authors"
                        :rules="[rules.required]"
                        solo
                        color="#00a368"
                        class="ma-0 pa-0"
                        label="Author(s)"
                        hint="Press Enter key to add an author"
                        multiple
                        chips
                      ></v-combobox>
                    </v-col>
                    <v-col cols="12" sm="12" class="d-flex">
                      <v-select
                        v-model="meta.category"
                        :rules="[rules.required]"
                        solo
                        hide-details="auto"
                        color="#00a368"
                        class="ma-0 pa-0"
                        :items="[
                          'Arts',
                          'Education',
                          'Engineering',
                          'Sciences',
                          'Social Sciences',
                        ]"
                        label="Category"
                      ></v-select>
                    </v-col>
                    <v-col cols="12" sm="12" class="d-flex">
                      <v-select
                        v-model="meta.genre"
                        :rules="[rules.required]"
                        solo
                        hide-details="auto"
                        color="#00a368"
                        class="ma-0 pa-0"
                        :items="[
                          'Project',
                          'Thesis-Dissertation',
                          'Journal',
                          'eBook',
                        ]"
                        label="Genre"
                      ></v-select>
                    </v-col>
                    <v-col cols="12" sm="12" class="d-flex">
                      <v-select
                        :rules="[rules.required]"
                        v-model="meta.accessType"
                        solo
                        hide-details="auto"
                        color="#00a368"
                        class="ma-0 pa-0"
                        :items="['Free', 'Paid']"
                        label="Access Type"
                      ></v-select>
                    </v-col>
                    <v-col cols="12" sm="12" class="d-flex">
                      <v-text-field
                        v-show="meta.accessType === 'Paid'"
                        v-model="meta.monthlyFee"
                        solo
                        type="number"
                        color="#00a368"
                        class="ma-0 pa-0"
                        label="Input Monthly Subscription Fee (In Naira)"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="12">
                      <v-menu
                        hide-details="auto"
                        ref="menu"
                        v-model="menu"
                        :close-on-content-click="false"
                        :return-value.sync="meta.year"
                        transition="scale-transition"
                        offset-y
                        max-width="290px"
                        min-width="290px"
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <v-text-field
                            :rules="[rules.required]"
                            hide-details="auto"
                            color="#00a368"
                            solo
                            v-model="meta.year"
                            label="Research Date"
                            readonly
                            v-bind="attrs"
                            v-on="on"
                          ></v-text-field>
                        </template>
                        <v-date-picker
                          color="#00a368"
                          :rules="[rules.required]"
                          v-model="meta.year"
                          type="date"
                          no-title
                          scrollable
                        >
                          <v-spacer></v-spacer>
                          <v-btn text color="red" @click="menu = false">
                            Cancel
                          </v-btn>
                          <v-btn
                            text
                            color="#00a368"
                            @click="$refs.menu.save(meta.year)"
                          >
                            OK
                          </v-btn>
                        </v-date-picker>
                      </v-menu>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12" class="d-flex">
                      <v-file-input
                        accept=".doc,.docx,.pdf,.odt"
                        color="#00a368"
                        show-size
                        solo
                        label="Select a Single Research Document/File"
                        @change="selectFile"
                      ></v-file-input>
                      <span class="red--text">*</span>
                    </v-col>
                    <!--Test Begin-->
                    <v-col cols="12">
                      <div v-if="currentFile">
                        <div v-if="showProgress">
                          <v-progress-linear
                            v-model="progress"
                            color="#00a368"
                            height="20"
                            reactive
                            dark
                          >
                            <strong>{{ progress }} %</strong>
                          </v-progress-linear>
                          <span
                            >Uploaded: {{ loadedData }} bytes of Total:
                            {{ totalData }} bytes</span
                          >
                          <div>
                            <span class="mr-2 text-h6"
                              >Please wait while your document finishes
                              uploading and processing</span
                            >
                          </div>
                        </div>
                      </div>
                      <v-alert
                        class="mt-2"
                        v-if="messageSuccess"
                        border="left"
                        color="#00a368"
                        dark
                        >{{ messageSuccess }}</v-alert
                      >
                      <v-alert
                        class="mt-2"
                        v-if="messageError"
                        border="left"
                        color="red"
                        dark
                        >{{ messageError }}</v-alert
                      >
                    </v-col>
                    <!--Test End-->
                  </v-row>
                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="red" text @click="dialogUpload = false">
                  Close
                </v-btn>
                <v-btn color="#00a368" text @click="uploadFile()">
                  Submit
                </v-btn>
              </v-card-actions>
            </v-form>
          </v-card>
        </v-dialog>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
const user = JSON.parse(localStorage.getItem("user"));
import helpers from "../services/helpers.js";
export default {
  data() {
    return {
      meta: {
        researchTitle: "",
        description: "",
        authors: [],
        category: "",
        genre: "",
        accessType: "",
        monthlyFee: 0,
        year: "",
        ownerEmail: user.email,
      },
      currentFile: undefined,
      showProgress: false,
      progress: 0,
      loadedData: 0,
      totalData: 0,
      messageSuccess: "",
      messageError: "",
      dialogUpload: false,
      search: "",
      hidden: false,
      date: null,
      menu: false,
      rules: {
        required: (v) => !!v || "Field is required",
      },
      //sockets
    };
  },

  methods: {
    selectFile(file) {
      this.progress = 0;
      this.currentFile = file;
    },

    uploadFile() {
      if (this.$refs.form.validate()) {
        if (!this.currentFile) {
          this.messageError = "Please select a File!";
          setTimeout(() => {
            this.messageError = "";
          }, 5000);
          return;
        }
        this.loading = true;
        helpers
          .uploadFileResearch(this.meta, this.currentFile, (event) => {
            this.showProgress = true;
            this.progress = Math.round((100 * event.loaded) / event.total);
            this.loadedData = event.loaded;
            this.totalData = event.total;
          })
          .then((data) => {
            this.messageSuccess = data.message;

            setTimeout(() => {
              this.messageSuccess = "";
              this.dialogUpload = false;
            }, 5000);
          })
          .catch((err) => {
            console.log("Error>>", err.message);
            this.progress = 0;
            this.loading = false;
            this.messageError = err.message;
            this.currentFile = undefined;

            setTimeout(() => {
              this.messageError = "";
            }, 5000);
          });
      }
    },
  },
};
</script>

<style>
.custom__btn {
  position: fixed;
  bottom: 70px;
  right: 40px;
}
</style>
