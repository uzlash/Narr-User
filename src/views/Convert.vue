<template>
  <v-app class="grey lighten-4">
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <span class="text-h4 font-weight-thin">Document Conversion</span>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-card>
            <v-card-title class="text-h6 font-weight-medium"
              >How it works</v-card-title
            >
            <v-divider></v-divider>
            <v-card-text>
              <div>
                <ol class="body-1">
                  <li>Select a document using the file picker below.</li>
                  <li>Click on upload and wait as the file uploads.</li>
                  <li>
                    The converted document will be returned back to you as a pdf
                    file.
                  </li>
                </ol>
              </div>
              <v-form @submit.prevent ref="form" class="mt-4">
                <div>
                  <v-col cols="6" class="d-flex align-center">
                    <v-file-input
                      hide-details
                      show-size
                      filled
                      accept="doc/*"
                      color="#00a368"
                      label="Select File"
                      prepend-icon="mdi-file-document"
                      @change="selectFile"
                    ></v-file-input>
                    <v-btn
                      dark
                      class="ml-4"
                      color="#00a368"
                      @click="uploadFile(currentFile)"
                    >
                      <v-icon class="mr-2">mdi-cloud-upload-outline</v-icon>
                      Upload FIle
                    </v-btn>
                  </v-col>
                </div>
                <v-col cols="6">
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
                <v-col cols="6">
                  <v-alert v-if="message" border="left" color="#00a368" dark>{{
                    message
                  }}</v-alert>
                </v-col>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
// import helpers from "../services/helpers";
export default {
  data() {
    return {
      currentFile: undefined,
      progress: 0,
      message: "",
      File: "",
    };
  },
  methods: {
    selectFile(file) {
      this.progress = 0;
      this.currentFile = file;
    },

    uploadFile(file) {
      const formData = new FormData();
      formData.append("file", file);

      const myheaders = new Headers();

      const requestOptions = {
        method: "POST",
        headers: myheaders,
        body: formData,
        redirect: "follow",
      };

      fetch("/api/convert/office", requestOptions)
        .then(async (data) => ({
          blob: await data.blob(),
          filename: "download.pdf",
        }))
        .then((response) => {
          const obj = new Blob([response.blob], {
            type: "application/pdf",
          });
          console.log("Blob Object", obj);

          //Polyfill
          if (window.navigator && window.navigator.msSaveOrOpenBlob) {
            window.navigator.msSaveOrOpenBlob(obj);
          } else {
            const objUrl = window.URL.createObjectURL(obj);

            const link = document.createElement("a");
            link.href = objUrl;
            link.download = "download.pdf";
            link.click();

            setTimeout(() => {
              window.URL.revokeObjectURL(objUrl);
            }, 250);
          }
        })
        .catch((err) => console.log("Error>>", err));
    },

    // uploadFileFetch() {
    //   if (!this.currentFile) {
    //     this.message = "Please select a Valid Document!";
    //     return;
    //   }

    //   this.message = "";

    //   helpers
    //     .uploadFile(this.currentFile, (event) => {
    //       this.progress = Math.round((100 * event.loaded) / event.total);
    //     })
    //     .then((response) => console.log(response))
    //     .catch((err) => {
    //       console.log("Errr>>>", err);
    //       this.progress = 0;
    //       this.message = "Could not upload the Image!";
    //       this.currentFile = undefined;
    //     });
    // },
  },
};
</script>

<style></style>
