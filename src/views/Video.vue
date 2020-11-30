<template>
  <v-app class="grey lighten-4">
    <!-- <v-container fluid> -->
    <!-- <v-row>
        <v-col cols="12" md="8" sm="8">
          <span class="text-h4 font-weight-thin">Video Conferencing</span>
        </v-col>
      </v-row> -->
    <v-row>
      <!-- <v-col cols="12">
        <div class="iframe__container">
          <vue-friendly-iframe
            class="cus"
            :onload="onLoad()"
            :onerror="onError()"
            allow="camera;microphone;fullscreen"
            src="https:meetings.lvs.ng"
            frameborder="0"
            @load="onLoad"
          ></vue-friendly-iframe>
        </div>
      </v-col> -->

      <iframe
        :onload="onLoad()"
        :onerror="onError()"
        allow="camera;microphone;fullscreen"
        width="100%"
        class="custom__iframe--container"
        src="https:meetings.lvs.ng"
        frameborder="0"
      ></iframe>
    </v-row>
    <!-- </v-container> -->
  </v-app>
</template>

<script>
export default {
  data: () => ({}),
  methods: {
    onLoad() {
      console.log("FULLY LOADED");
    },
    onError() {
      console.log("ERROR");
    },
  },
};
</script>

<style>
.custom__iframe--container {
  height: calc(100vh);
}
</style>
