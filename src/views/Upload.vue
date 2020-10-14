<template>
  <v-app class="grey lighten-4">
     <v-container fluid>
      <v-row>
        <v-col cols="12" md="8" sm="8">
          <span class="text-h4 font-weight-thin">Research List</span>
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

                     <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
         <v-btn
                v-show="!hidden"
                color="success"
                dark
                absolute
              
                fab
                v-bind="attrs"
                v-on="on"
              >
                <v-icon>mdi-plus</v-icon>
              </v-btn>
        <!-- <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
          
        >
           <v-icon dark>
                  mdi-plus
                </v-icon>
        </v-btn> -->
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Upload Research</span>
        </v-card-title>
        <v-card-text>
          <v-container >
            <v-row>
              <v-col
                cols="12"
                sm="12"
                md="12"
              >
                <v-text-field
                  label="Research Title*"
                  required v-model="newResearch.title"
                  class="ma-0 pa-0"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="12"
                md="12"
              >
                <v-text-field   class="ma-0 pa-0" v-model="newResearch.authors"
                  label="Author(s)"
                  hint="saperate multiple authors with comma (,)"
                ></v-text-field>
              </v-col>
             
             
              <v-col
                cols="12"
                sm="12"
              >
                <v-autocomplete   class="ma-0 pa-0"
                  :items="['Science', 'Health', 'Technology','Medicine','Data Science','Physics','DevOps']"
                  label="Subject"
                  multiple
                ></v-autocomplete>
              </v-col>
            </v-row>
            <v-row>
                  <v-col class="ma-0 pa-0">
                    <uploader v-on:file-success(rootFile,file,message,chunk)="helloworld()" :options="options" class="uploader-example">
                      <uploader-unsupport></uploader-unsupport>
                      <uploader-drop>
                        <p>Drop files here to upload or</p>
                        <uploader-btn>select files</uploader-btn>
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
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="submitResearch"
          >
            Submit
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
            </v-card-title>
            <v-data-table :headers="headers" :items="research" :search="search">
             
              <template v-slot:item.controls="props">
                  <v-btn
                   icon
                   color="pink"
                   @click="deleteResearch(props.id)"
                   >
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

    

    </v-container>
  </v-app>
</template>


<script>
export default {
  data() {
    return {
       dialog: false,
       search: "",
       hidden: false,
       newResearch: {title:'',authors: ''},
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
         { text: "Date Uploaded", value: "date", sortable: false  },
        { text: "", value: "controls", sortable: false }
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
        target: "//localhost:3000/upload",
        testChunks: false,
        autoStart: false
      },
      attrs: {
        accept: "image/*",
      },
    };
  },

  methods: {
    helloworld(){
      alert("welcome to nigeria");
      console.log("THIS IS THE MOVE")
    },
    submitResearch(){
        let uploader = this.$refs.uploader.uploader;
        uploader.upload();
        this.research.push({
           title: this.newResearch.title,
           date: "31/09/2020",
        })
       //this.dialog = false;
    }
  }
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
</script>

<style>
.uploader-example {
  width: 500px;
  padding: 15px;
  margin: 40px auto 0;
  font-size: 12px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
}
.uploader-example .uploader-btn {
  margin-right: 4px;
}
.uploader-example .uploader-list {
  max-height: 440px;
  overflow: auto;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>