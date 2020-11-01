<template>
  <nav>
    <!-- color="#00a368" -->
    <v-app-bar app dense flat color="white">
      <v-app-bar-nav-icon
        dark
        small
        @click="drawer = !drawer"
        class="accent pa-5"
      ></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <div>
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon small class="mr-2" v-on="on" v-bind="attrs">
              <v-badge content="7" bordered color="accent" overlap>
                <v-icon color="grey">mdi-email</v-icon>
              </v-badge>
            </v-btn>
          </template>
          <v-card
            max-width="400"
            class="mx-auto cutom__card--overflow"
            height="400"
            width="350"
          >
            <v-card-title primary-title> Messages </v-card-title>
            <v-list color="grey lighten-4">
              <span class="mx-4">Earlier</span>
              <v-list-item
                v-for="message in messages"
                :key="message.title"
                to="/chat"
              >
                <v-avatar>
                  <img src="../assets/avatar-1.jpg" alt="alt" class="mr-2" />
                </v-avatar>

                <v-list-item-content>
                  <v-list-item-title>{{ message.title }}</v-list-item-title>
                  <v-list-item-subtitle>{{
                    message.subtitle
                  }}</v-list-item-subtitle>
                  <v-divider></v-divider>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
        </v-menu>
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn small icon class="mx-2" v-on="on" v-bind="attrs">
              <v-badge content="7" color="orange darken-2" dot overlap>
                <v-icon color="grey">mdi-bell</v-icon>
              </v-badge>
            </v-btn>
          </template>
          <v-card
            max-width="400"
            class="mx-auto cutom__card--overflow"
            height="400"
            width="350"
          >
            <v-card-title primary-title> Notifications </v-card-title>

            <v-list class="grey lighten-4">
              <v-list-item-subtitle class="ml-3">
                Earlier
              </v-list-item-subtitle>

              <v-list-item
                v-for="message in messages"
                :key="message.title"
                to=""
              >
                <v-avatar>
                  <img src="../assets/avatar-1.jpg" alt="alt" class="mr-2" />
                </v-avatar>

                <v-list-item-content>
                  <v-list-item-title>{{ message.title }}</v-list-item-title>
                  <v-list-item-subtitle>{{
                    message.tile
                  }}</v-list-item-subtitle>
                  <v-divider></v-divider>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
        </v-menu>

        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn to="/profile" v-bind="attrs" v-on="on" rounded icon>
              <v-list-item-avatar color="grey" class="ml-4">
                <v-img src="../assets/avatar-1.jpg"></v-img>
              </v-list-item-avatar>
            </v-btn>
          </template>
          <span>profile</span>
        </v-tooltip>
      </div>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" dark app color="#00a368">
      <v-layout column align-center>
        <v-flex class="mt-6 mb-4">
          <span class="text-h4 white--text font-weight-light">NARR</span>
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
            <v-list-item-title class="font-weight-light">{{
              link.text
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-subheader class="body-1 font-weight-light white--text"
          >Research Funding</v-subheader
        >
        <v-divider></v-divider>
        <v-list-item
          active-class="border"
          v-for="link in researchFunding"
          :key="link.icon"
          :to="link.route"
        >
          <v-list-item-action>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="font-weight-light">{{
              link.text
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-subheader class="body-1 font-weight-light white--text"
          >Services</v-subheader
        >
        <v-divider></v-divider>
        <v-list-item
          active-class="border"
          v-for="link in services"
          :key="link.icon"
          :to="link.route"
        >
          <v-list-item-action>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="font-weight-light">{{
              link.text
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <!-- <div class="pa-2 d-flex justify-center">
        <v-btn dark outlined color="white" @click="logOut()">
          <span>Contact US</span>
          <v-icon>mdi-exit-to-app</v-icon>
        </v-btn>
      </div> -->
      <template v-slot:append>
        <div class="pa-2 d-flex justify-center">
          <v-btn dark outlined color="white" @click="logOut()">
            <span>Logout</span>
            <v-icon>mdi-exit-to-app</v-icon>
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
      { icon: "mdi-home", text: "Home", route: "/", divider: false },
      // { icon: "mdi-cloud-upload", text: "Upload Research", route: "/upload", divider: false },
      {
        icon: "mdi-read",
        text: "Reading List",
        route: "/history",
        divider: false,
      },
    ],
    researchFunding: [
      {
        icon: "mdi-book-open-variant",
        text: "Grants",
        route: "/grants",
      },
      {
        icon: "mdi-book",
        text: "Crowd Funding",
        route: "/analytics",
      },
    ],
    services: [
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
    items: [
      { header: "Today" },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        title: "Brunch this weekend?",
        subtitle:
          "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
      },
      { divider: true, inset: true },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
        title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
        subtitle:
          "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.",
      },
      { divider: true, inset: true },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
        title: "Oui oui",
        subtitle:
          "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?",
      },
      { divider: true, inset: true },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
        title: "Birthday gift",
        subtitle:
          "<span class='text--primary'>Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?",
      },
      { divider: true, inset: true },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
        title: "Recipe to try",
        subtitle:
          "<span class='text--primary'>Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.",
      },
    ],
    messages: [
      {
        title: "umar abubakar",
        subtitle: "hi",
        tile: "mention you",
        avatar: "mdi-user",
      },

      { title: "musa abubakar", subtitle: "hi", tile: "mention you" },
      { title: "usman murtala", subtitle: "hi", tile: "mention you" },
      { title: "abba kabir", subtitle: "hello", tile: "mention you" },
      { title: "aliyu ibrahim", subtitle: "hello", tile: "mention you" },
      { title: "mubarak ", subtitle: "hi", tile: "mention you" },
      { title: "abubakar", subtitle: "hi", tile: "mention you" },
      { title: "titus", subtitle: "hi", tile: "mention you" },
      { title: "abba usman", subtitle: "hello", tile: "mention you" },
      { title: "aliyu kabir", subtitle: "hello", tile: "mention you" },
      { title: "john doe", subtitle: "hi", tile: "mention you" },
      { title: "musa ", subtitle: "hi", tile: "mention you" },
      { title: "flate", subtitle: "hi", tile: "mention you" },
      { title: "abba abba", subtitle: "hello", tile: "mention you" },
      { title: "shehu sani", subtitle: "hello", tile: "mention you" },
      { title: "mubarak saeed", subtitle: "hi", tile: "mention you" },
    ],
    offset: true,
  }),
  methods: {
    // logout: function () {
    //   this.$store.dispatch(AUTH_LOGOUT).then(() => {
    //     this.$router.push("/login");
    //   });
    // },
    logOut() {
      this.$store.dispatch("SIGN_OUT").then(() => {
        this.$router.push("/signin");
      });
    },
  },
};
</script>

<style scoped>
.border {
  border-left: 4px solid green;
}
::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  background: #bdbdbd;
}
::-webkit-scrollbar-thumb {
  background: rgb(170, 170, 170);
}
</style>