<template>
  <v-app class="grey lighten-4">
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <span class="text-h4 font-weight-thin">Image to Text Conversion</span>
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
                      dark
                      class="ml-4"
                      color="#00a368"
                      @click="uploadImagesFetch(currentImage)"
                    >
                      <v-icon class="mr-2">mdi-cloud-upload-outline</v-icon>
                      Upload Image
                    </v-btn>
                  </v-col>
                </div>
                <v-col cols="6">
                  <div v-if="currentImage">
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
                <div v-if="imageText">
                  <v-textarea
                    auto-grow
                    autofocus
                    clearable
                    filled
                    color="#00a368"
                    v-model="imageText"
                  ></v-textarea>
                </div>
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
      message: "",
      imageText: "",
    };
  },
  methods: {
    selectImage(image) {
      this.progress = 0;
      this.currentImage = image;
    },

    uploadImage() {
      if (!this.currentImage) {
        this.message = "Please select an Image!";
        return;
      }

      this.message = "";

      helpers
        .uploadImageOCR(this.currentImage, (event) => {
          this.progress = Math.round((100 * event.loaded) / event.total);
        })
        .then((response) => {
          console.log(JSON.stringify(response.data));
          this.imageText = response.data;
          this.message = response.data.message;
          console.log("Image Text>>>", this.imageText);
          console.log("Message>>>", this.message);
        })
        .catch(() => {
          this.progress = 0;
          this.message = "Could not upload the Image!";
          this.currentImage = undefined;
        });
    },
  },
};
</script>

<style></style>
