<template>
  <v-app class="grey lighten-4">
    <v-container fluid>
      <v-row>
        <v-col cols="12" md="8" sm="8">
          <span class="text-h4 font-weight-thin">Video Conferencing</span>
        </v-col>
      </v-row>
      <v-row>
        <iframe
          width="100%"
          class="custom__iframe--container"
          src="https:meetings.lvs.ng"
          frameborder="0"
        ></iframe>
      </v-row>
    </v-container>
  </v-app>
</template>

<style>
.custom__iframe--container {
  height: calc(100vh);
}
</style>
