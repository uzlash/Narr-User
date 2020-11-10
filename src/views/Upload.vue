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
              <!-- Available Grants -->

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
              <template v-slot:item.controls="props">
                <v-btn icon color="pink" @click="deleteResearch(props.id)">
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </template>

              <!-- <template v-slot:item.knowledge="{ knowledge }">
                <v-chip :color="getColor(item.knowledge)" dark>
                  {{ item.calories }}
                </v-chip>
              </template> -->
            </v-data-table>
          </v-card>
        </v-col>
      </v-row>
      <v-row justify="end">
        <v-dialog v-model="dialog" persistent max-width="600px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              class="custom__btn text-capitalize"
              v-show="!hidden"
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
                      label="Research Title*"
                      required
                      v-model="newResearch.title"
                      class="ma-0 pa-0"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12" md="12">
                    <v-combobox
                      class="ma-0 pa-0"
                      v-model="newResearch.authors"
                      label="Author(s)"
                      hint="Press enter to add an author"
                      multiple
                      chips
                    ></v-combobox>
                  </v-col>
                  <v-col cols="12" sm="12">
                    <v-autocomplete
                      class="ma-0 pa-0"
                      :items="[
                        'Science',
                        'Health',
                        'Technology',
                        'Medicine',
                        'Data Science',
                        'Physics',
                        'DevOps',
                      ]"
                      label="Subject"
                      multiple
                    ></v-autocomplete>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col class="ma-0 pa-0">
                    <!-- Below line of code belongs to uploader -->
                    <!-- v-on:file-success(rootFile,file,message,chunk)="submit()" -->
                    <!-- @file-added="onFileAdded"
                    @file-success="onFileSuccess"
                    @file-progress="onFileProgress"
                    @file-error="onFileError" -->
                    <uploader
                    ref="uploader"
                    class="uploader"
                    :options="options"
                    :autoStart="false"
                    >
                      <uploader-unsupport></uploader-unsupport>
                      <uploader-drop>
                        <p>Drop a file here to upload or Click on the upload button</p>
                        <uploader-btn>Select single file</uploader-btn>
                      </uploader-drop>
                      <uploader-list></uploader-list>
                    </uploader>
                  </v-col>
                </v-row>
              </v-container>
              <small>*indicates required field</small>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="dialog = false">
                Close
              </v-btn>
              <v-btn color="blue darken-1" text @click="submitResearch()">
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
export default {
  data() {
    return {
      isConnected: false,
      socketMessage: '',
      dialog: false,
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
      options: {
        target: "http://localhost:3000/upload",
        testChunks: false,
        autoStart: false,
        singleFile: true
      },
      attrs: {
        accept: "doc/*",
      },
      categoryMap: {
        document: [
          "doc",
          "txt",
          "docx",
          "pages",
          "epub",
          "pdf",
          "numbers",
          "csv",
          "xls",
          "xlsx",
          "keynote",
          "ppt",
          "pptx",
        ],
      },
    };
  },

  methods: {
    submitResearch() {
      let uploader = this.$refs.uploader.uploader;
      uploader.upload();
      this.research.push({
        title: this.newResearch.title,
        date: "31/09/2020",
      });
      this.dialog = false;
    },
  },

};
// uploader.on('fileAdded', function (file, event) {
//   console.log(file, event)
// })
// uploader.on('fileSuccess', function (rootFile, file, message) {
//   console.log(rootFile, file, message)
// })
// uploader.on('fileComplete', function (rootFile) {
//   console.log(rootFile)
// })
// uploader.on('fileError', function (rootFile, file, message) {
//   console.log(rootFile, file, message)
// })

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
.uploader {
  width: 500px;
  padding: 15px;
  margin: 40px auto 0;
  font-size: 12px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
}
.uploader .uploader-btn {
  margin-right: 4px;
}
.uploader .uploader-list {
  max-height: 440px;
  overflow: auto;
  overflow-x: hidden;
  overflow-y: auto;
}
.custom__btn {
  position: absolute;
  bottom: 70px;
  right: 40px;
}
</style>