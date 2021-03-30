<template>
  <v-app class="grey lighten-4">
    <v-row>
      <iframe
        :onload="onLoad()"
        :onerror="onError()"
        allow="camera;microphone;fullscreen"
        width="100%"
        class="custom__iframe--container"
        src="https://meetings.lvs.ng"
        frameborder="0"
      ></iframe>
    </v-row>
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
.custom__map {
  height: calc(100vh - 48px);
  width: 100%;
}
</style>
