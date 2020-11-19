<template>
  <v-app class="grey lighten-4">
    <v-container>
      <v-row>
        <v-col cols="12" md="8" sm="8">
          <span class="text-h4 font-weight-thin">Upload Research</span>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="9" md="9" sm="9">
          <v-card>
            <v-card-title class="font-weight-light">
              <h4 class="font-weight-regular">Uploaded Research</h4>
              <v-spacer></v-spacer>
              <v-text-field
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
        <v-col>
          <v-card>
            <v-card-title class="font-weight-regular"
              >Upload Progress</v-card-title
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
                  <!-- <strong>{{ progress }} %</strong> -->
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
        <v-dialog v-model="dialogUpload" persistent max-width="600px">
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
                      label="Research Title*"
                      required
                      class="ma-0 pa-0"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12" md="12">
                    <v-combobox
                      color="#00a368"
                      class="ma-0 pa-0"
                      label="Author(s)"
                      hint="Press Enter key to add an author"
                      multiple
                      chips
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
                      </div>
                    </div>
                  </v-col>
                  <v-col cols="12">
                    <v-alert
                      v-if="messageSuccess || messageError"
                      border="left"
                      :color="messageSuccess ? '#00a368' : 'red'"
                      dark
                      >{{ messageSuccess || messageError }}</v-alert
                    >
                  </v-col>
                </v-row>
              </v-container>
              <small>*indicates required field</small>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="dialogUpload = false">
                Close
              </v-btn>
              <v-btn color="blue darken-1" text @click="uploadResearch()">
                Submit
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>

      <v-row>
        <div class="px-4 text-h5">
          <span>Socket Connection Test: </span>
          <span :class="$socket.connected ? 'green--text' : 'red--text'">{{
            $socket.connected ? "Connected" : "Disconnected"
          }}</span>
        </div>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import helpers from "../services/helpers.js";
export default {
  data() {
    return {
      currentFile: undefined,
      showProgress: false,
      progress: 0,
      messageSuccess: "",
      messageError: "",
      dialogUpload: false,
      search: "",
      hidden: false,
      researcherObject: {},
      tweets: [],
    };
  },

  methods: {
    selectFile(file) {
      this.progress = 0;
      this.currentFile = file;
    },

    uploadResearch() {
      if (!this.currentFile) {
        this.messageError = "Please select a File!";
        setTimeout(() => {
          this.messageError = "";
        }, 5000);
        return;
      }
      helpers
        .uploadFileResearch(
          this.currentFile,
          this.researcherObject,
          (event) => {
            console.log(event);
            this.showProgress = true;
            this.progress = Math.round((100 * event.loaded) / event.total);
            this.loadedData = event.loaded;
            this.totalData = event.total;
          }
        )
        .then((response) => {
          console.log("Response>>>", response);
          this.messageSuccess = "Successfully Uploaded File!";
          setTimeout(() => {
            this.messageSuccess = "";
          }, 5000);
          console.log("Message>>>", this.message);
        })
        .catch((err) => {
          console.log("Error>>", err);
          this.progress = 0;
          this.messageError = "Error Uploading Document/File";
          this.currentFile = undefined;

          setTimeout(() => {
            this.messageError = "";
          }, 5000);
        });
    },
  },
  sockets: {
    connect() {
      console.log("socket connected");
    },
    loggedIn(data) {
      console.log("Logged In", data);
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
