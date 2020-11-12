<template>
  <v-app class="grey lighten-4">
    <v-container fluid>
      <v-row>
        <v-col cols="12" md="8" sm="8">
          <span class="text-h4 font-weight-thin">Upload Research</span>
        </v-col>
        <v-col cols="12" md="12" sm="12">
          <v-card>
            <v-card-title class="font-weight-light">
              <v-spacer></v-spacer>
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
              ></v-text-field>
            </v-card-title>
            <v-data-table :headers="headers" :items="research" :search="search">
              <template v-slot:[`item.controls`]="props">
                <v-btn icon color="pink" @click="deleteResearch(props.id)">
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </template>
            </v-data-table>
          </v-card>
        </v-col>
        <!-- <v-col cols="12">
          <h1>Files on the server</h1>
          <v-card v-if="fileInfos.length > 0" class="mx-auto">
            <v-list>
              <v-subheader>List of Files</v-subheader>
              <v-list-item-group color="primary">
                <v-list-item v-for="(file, index) in fileInfos" :key="index">
                  <a :href="file.url">{{ file.name }}</a>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-card>
        </v-col> -->
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
                      v-model="newResearch.title"
                      class="ma-0 pa-0"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12" md="12">
                    <v-combobox
                      color="#00a368"
                      class="ma-0 pa-0"
                      v-model="newResearch.authors"
                      label="Author(s)"
                      hint="Press Enter key to add an author"
                      multiple
                      chips
                    ></v-combobox>
                  </v-col>
                  <v-col cols="12" sm="12">
                    <v-autocomplete
                      color="#00a368"
                      class="ma-0 pa-0"
                      :items="['Science', 'Health', 'Technology', 'Medicine']"
                      label="Subject"
                      multiple
                    ></v-autocomplete>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <v-file-input
                      color="#00a368"
                      show-size
                      label="Select a Single Research Document/File"
                      @change="selectFile"
                    ></v-file-input>
                  </v-col>
                  <v-col class="ma-0 pa-0"> </v-col>
                  <v-col cols="12">
                    <div v-if="currentFile">
                      <div>
                        <v-progress-linear
                          v-model="progress"
                          color="#00a368"
                          height="25"
                          reactive
                        >
                          <strong>{{ progress }} %</strong>
                        </v-progress-linear>
                      </div>
                    </div>
                  </v-col>
                  <v-col cols="">
                    <v-alert
                      v-if="message"
                      border="left"
                      color="#00a368"
                      dark
                      >{{ message }}</v-alert
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
    </v-container>
  </v-app>
</template>

<script>
import helpers from "../services/helpers.js";
export default {
  data() {
    return {
      currentFile: undefined,
      progress: 0,
      message: "",
      fileInfos: [],
      isConnected: false,
      socketMessage: "",
      dialogUpload: false,
      search: "",
      hidden: false,
      newResearch: { title: "", authors: "" },
      skill: 20,
      power: 78,
      percentage: 50,
      headers: [
        {
          text: "Title",
          align: "start",
          sortable: false,
          value: "title",
        },
        { text: "Date Uploaded", value: "date", sortable: false },
        { text: "", value: "controls", sortable: false },
      ],
      research: [
        {
          title: "Cyber Security and protecting of banks information",
          date: "31/09/2020",
        },
        {
          title: "Implementing Javascript in Backend using Node.js",
          date: "31/09/2020",
        },

        {
          title: "Rising insecurity in Nigeria",
          date: "31/09/2020",
        },
      ],
    };
  },

  methods: {
    selectFile(file) {
      this.progress = 0;
      this.currentFile = file;
    },

    uploadResearch() {
      if (!this.currentFile) {
        this.message = "Please select a file!";
        return;
      }

      this.message = "";

      helpers
        .upload(this.currentFile, (event) => {
          this.progress = Math.round((100 * event.loaded) / event.total);
        })
        .then((response) => {
          console.log("Response>>>", response);
          this.message = response.data.message;
          console.log("Message>>>", this.message);
          return helpers.getFiles();
        })
        .then((files) => {
          console.log("Files Response>>>", files);
          this.files = files.data;
          console.log("FIles Data>>>", this.files);
        })
        .catch(() => {
          this.progress = 0;
          this.message = "Could not upload the file!";
          this.currentFile = undefined;
        });
    },
  },
};

// sockets: {
//     connect() {
//       console.log('socket connected')
//     },
//     customEmit(val) {
//       console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)')
//     }
//   },
//   methods: {
//     clickButton(val) {
//       // this.$socket.client is `socket.io-client` instance
//       this.$socket.client.emit('emit_method', val);
//     }
//   }
</script>

<style>
.custom__btn {
  position: fixed;
  bottom: 70px;
  right: 40px;
}
</style>
