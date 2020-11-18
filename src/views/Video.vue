<template>
  <v-app class="grey lighten-4">
    <v-container fluid>
      <v-row>
        <v-col cols="12" md="8" sm="8">
          <span class="text-h4 font-weight-thin">Video Conferencing</span>
        </v-col>
      </v-row>
      <div class="d-flex custom__iframe--container">
        <!-- <iframe
          crossorigin="anonymous"
          height="100%"
          width="100%"
          src="http://meetings.lvs.ng"
          frameborder="10"
        ></iframe> -->
        <!-- <div class="d-flex flex-column">
          <v-btn color="00a368">
            Dailytrust
          </v-btn>
          <v-btn class="00a368">
            Nairaland
          </v-btn>
        </div> -->
      </div>
    </v-container>
  </v-app>
</template>

<style>
.custom__iframe--container {
  height: calc(100vh - 160px);
}
</style>
