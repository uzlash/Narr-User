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
          <v-card>
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
          <v-card>
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
                  <strong>{{ progress || "100%" }} %</strong>
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
            <v-card-title>
              <span class="headline">Upload Research</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field
                      color="#00a368"
                      label="Research Title *"
                      required
                      class="ma-0 pa-0"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12" md="12">
                    <v-combobox
                      color="#00a368"
                      class="ma-0 pa-0"
                      label="Author(s) *"
                      hint="Press Enter key to add an author"
                      multiple
                      chips
                      required
                    ></v-combobox>
                  </v-col>
                  <!-- <v-col cols="12" sm="12">
                    <v-autocomplete
                      color="#00a368"
                      class="ma-0 pa-0"
                      :items="['Science', 'Health', 'Technology', 'Medicine']"
                      label="Subject"
                      multiple
                    ></v-autocomplete>
                  </v-col> -->
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <v-file-input
                      accept=".doc,.docx,.pdf,.odt"
                      color="#00a368"
                      show-size
                      label="Select a Single Research Document/File"
                      @change="selectFile"
                    ></v-file-input>
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
                            >Please wait while your document finishes uploading
                            and processing</span
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
              <small>*indicates required field</small>
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
          </v-card>
        </v-dialog>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import helpers from "../services/helpers.js";
export default {
  data() {
    return {
      title: "",
      author: [],
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
      //sockets
    };
  },

  methods: {
    selectFile(file) {
      this.progress = 0;
      this.currentFile = file;
    },

    uploadFile() {
      if (!this.currentFile) {
        this.messageError = "Please select a File!";
        setTimeout(() => {
          this.messageError = "";
        }, 5000);
        return;
      }
      this.loading = true;
      helpers.uploadFileResearch();
      helpers
        .uploadFileResearch(this.currentFile, (event) => {
          console.log(event);
          this.showProgress = true;
          this.progress = Math.round((100 * event.loaded) / event.total);
          this.loadedData = event.loaded;
          this.totalData = event.total;
        })
        .then((response) => response.json())
        .then((data) => {
          console.log("Data", data);
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
