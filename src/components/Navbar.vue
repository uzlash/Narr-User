<template>
  <nav>
    <v-app-bar app flat>
      <v-app-bar-nav-icon
        large
        @click="drawer = !drawer"
        class="grey--text"
      ></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <div>
        <v-btn icon>
          <v-badge content="5" color="red" overlap>
            <v-icon color="grey">mdi-email</v-icon>
          </v-badge>
        </v-btn>
        <v-btn icon class="mr-2">
          <v-badge content="3" color="red" overlap>
            <v-icon color="grey">mdi-bell</v-icon>
          </v-badge>
        </v-btn>
        <!-- <v-btn @click="logout()" outlined small color="pink">
          <span class="text-capitalize">Logout</span>
          <v-icon right>mdi-exit-to-app</v-icon>
        </v-btn> -->
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
        <v-btn to="/profile" v-bind="attrs"
          v-on="on" rounded icon>
          <v-list-item-avatar class="ml-4">
            <v-img src="../assets/avatar-1.png"></v-img>
          </v-list-item-avatar>
        </v-btn>
         </template>
      <span>Umar</span>
    </v-tooltip>
      </div>
    </v-app-bar>
    <!-- <v-divider></v-divider> -->
    <v-navigation-drawer v-model="drawer" dark app class="green darken-1">
      <v-layout column align-center>
        <v-flex class="mt-10 mb-8">
          <span class="text-h4 white--text font-weight-thin">NARR</span>
        </v-flex>
      </v-layout>
      <v-divider></v-divider>
      <v-list>
        <v-list-item
          active-class="border"
          v-for="link in links"
          :key="link.icon"
          :to="link.route"
        >
          <v-list-item-action>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="font-weight-thin">{{
              link.text
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
       <template v-slot:append>
        <div class="pa-2">
          <v-btn block  color="#00a368">
            Logout
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data: () => ({
    drawer: true,
    links: [
      { icon: "mdi-home", text: "Home", route: "/" },
      { icon: "mdi-cloud-upload", text: "Upload Document", route: "/upload" },
      { icon: "mdi-read", text: "Reading History", route: "/history" },
      {
        icon: "mdi-book-open-variant",
        text: "Research Grants",
        route: "/grants",
      },
      {
        icon: "mdi-google-analytics",
        text: "Analytics",
        route: "/analytics",
      },
      {
        icon: "mdi-chat",
        text: "Chat",
        route: "/chat",
      },
      {
        icon: "mdi-ocr",
        text: "Image to Text",
        route: "/ocr",
      },
      {
        icon: "mdi-file",
        text: "Document Conversion",
        route: "/convert",
      },
      {
        icon: "mdi-message-video",
        text: "Video Conferencing",
        route: "/video",
      },
    ],
    slides: [
      "Maintenance scheduled for 03/12/2020",
      "OCR & Document conversion features now live",
      "Research grants can now be paid directly on the platform for research works",
    ],
  }),
};
</script>

<style scoped>
.border {
  border-left: 4px solid green;
}
</style>