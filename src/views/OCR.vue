<template>
  <v-app class="grey lighten-4">
    <v-container>
      <v-row>
        <v-col cols="12">
          <span class="text-h4 font-weight-thin">Image to Text Conversion</span>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-card outlined tile>
            <v-card-title class="text-h6 font-weight-medium"
              >How it works</v-card-title
            >
            <v-divider></v-divider>
            <v-card-text>
              <div>
                <ol class="body-1">
                  <li>Select an image using the image picker below.</li>
                  <li>Click on upload and wait as the file uploads.</li>
                  <li>View the text within the image returned back as text.</li>
                </ol>
              </div>
              <v-form @submit.prevent ref="form" class="mt-4">
                <div>
                  <v-col cols="6" class="d-flex align-center">
                    <v-file-input
                      hide-details
                      show-size
                      filled
                      accept="image/*"
                      color="#00a368"
                      label="Select Image"
                      prepend-icon="mdi-image"
                      @change="selectImage"
                    ></v-file-input>
                    <v-btn
                      :loading="loading"
                      dark
                      class="ml-4"
                      color="#00a368"
                      @click="uploadImage(currentImage)"
                    >
                      <v-icon class="mr-2">mdi-cloud-upload-outline</v-icon>
                      Upload Image
                    </v-btn>
                  </v-col>
                </div>
                <v-col cols="6">
                  <div v-if="currentImage">
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
                          >Please wait while the Image finishes processing and
                          the text content gets returned to you.</span
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
                <v-sheet v-if="imageText" color="grey lighten-2" class="d-flex">
                  <v-textarea
                    auto-grow
                    filled
                    color="#00a368"
                    v-model="imageText"
                  ></v-textarea>
                  <v-btn
                    v-clipboard:copy="imageText"
                    v-clipboard:success="onCopy"
                    v-clipboard:error="onError"
                    icon
                  >
                    <v-icon>mdi-content-copy</v-icon>
                  </v-btn>
                </v-sheet>
                <v-snackbar
                  timeout="5000"
                  v-model="copySuccess"
                  bottom
                  right
                  color="#00a368"
                  dark
                >
                  Successfully Copied to Clipboard!
                </v-snackbar>
                <v-snackbar
                  timeout="5000"
                  bottom
                  right
                  border="left"
                  color="red"
                  dark
                >
                  Error Copying to Clipboard!
                </v-snackbar>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import helpers from "../services/helpers";
export default {
  data() {
    return {
      currentImage: undefined,
      progress: 0,
      loading: false,
      messageError: "",
      messageSuccess: "",
      showProgress: false,
      loadedData: 0,
      totalData: 0,
      copySuccess: false,
      copyError: false,
      imageText: "",
    };
  },
  methods: {
    selectImage(image) {
      this.progress = 0;
      this.currentImage = image;
      console.log(this.currentImage);
    },

    //Method to upload image for Optical Character Recognition
    uploadImage() {
      if (!this.currentImage) {
        this.messageError = "Please select an Image!";
        setTimeout(() => {
          this.messageError = "";
        }, 5000);
        return;
      }
      this.loading = true;
      helpers
        .uploadImageOcr(this.currentImage, (event) => {
          console.log(event);
          this.showProgress = true;
          this.progress = Math.round((100 * event.loaded) / event.total);
          this.loadedData = event.loaded;
          this.totalData = event.total;
        })
        .then((response) => {
          console.log(JSON.stringify(response.data));
          this.imageText = response.data;
          this.messageSuccess = "Image Conversion to Text Successful";
          setTimeout(() => {
            this.messageSuccess = "";
          }, 5000);
          this.loading = false;
          this.currentImage = undefined;
          console.log("Image Text>>>", this.imageText);
        })
        .catch((err) => {
          console.log("Error>>", err);
          this.progress = 0;
          this.messageError = err.message;
          this.loading = false;
          this.currentImage = undefined;

          setTimeout(() => {
            this.messageError = "";
          }, 5000);
        });
    },

    //Clipboard Methods
    onCopy: function() {
      this.copySuccess = true;
    },
    onError: function() {
      this.copyError = true;
    },
  },
};
</script>

<style></style>
