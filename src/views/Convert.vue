<template>
  <v-app class="grey lighten-4">
    <v-container fluid>
      <v-row>
        <v-col cols="12" md="12" sm="12">
          <v-card>
            <v-form>
              <v-container>
                <v-row>
                  <v-col cols="12" md="12" sm="12">
                    <span class="text-h4 font-weight-thin"
                      >Document Conversion</span
                    >
                  </v-col>
                  <v-col class="d-flex" cols="12" sm="6">
                    <v-select
                      :items="items"
                      label="Select Extension"
                      solo
                    ></v-select>
                  </v-col>
                  <v-col cols="8" sm="8">
                    <uploader :options="options" class="uploader-example">
                      <uploader-unsupport></uploader-unsupport>
                      <uploader-drop>
                        <p>Drop files here to upload or</p>
                        <uploader-btn>select files</uploader-btn>
                        <uploader-btn :directory="true"
                          >select folder</uploader-btn
                        >
                      </uploader-drop>
                      <uploader-list></uploader-list>
                    </uploader>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" sm="12">
                    <v-btn
                      class=".float-right"
                      color="secondary"
                      elevation="2"
                      outlined
                    >
                      Download Files</v-btn
                    >
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
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
      items: ["pdf", "doc"],
      options: {
        target: "//localhost:3000/upload",
        testChunks: false,
      },
      attrs: {
        accept: "image/*",
      },
    };
  },
};
</script>

<style>
.uploader-example {
  width: 880px;
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