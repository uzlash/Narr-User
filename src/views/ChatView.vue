<template>
  <!-- <v-app class="grey lighten-4 custom__div-example"> -->
  <div class="custom__div">
    <v-row no-gutters>
      <v-col cols="4">
        <v-card height="100%" tile outlined>
          <v-card-title>
            <span class="font-weight-light">Chat Centre</span>
            <v-spacer></v-spacer>
            <v-btn outlined color="accent" small class="text-capitalize">
              <v-icon color="accent" class="mr-2">mdi-chat-plus</v-icon>
              <span>New Chat</span>
            </v-btn>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text class="custom__card-text">
            <v-list v-for="item in chats" :key="item.id" class="py-0">
              <v-list-item :to="`/chat/${item.id}`" class="px-2">
                <v-list-item-avatar aria-dropeffect>
                  <v-img
                    :src="`https://robohash.org/${item.id}?200x200`"
                  ></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title
                    class="font-weight-light body-2 text-wrap"
                    >{{ item.name }}</v-list-item-title
                  >
                  <v-list-item-subtitle class="font-weight-light">{{
                    item.phone
                  }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-divider inset></v-divider>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="8">
        <router-view></router-view>
      </v-col>
    </v-row>
  </div>
  <!-- </v-app> -->
</template>

<script>
export default {
  data: () => ({
    chat__text: "",
    chats: [],
  }),
  methods: {
    fetchChats() {
      fetch("https://jsonplaceholder.typicode.com/users", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((r) => r.json())
        .then((response) => {
          console.log("Response", response);
          this.chats = response;
        })
        .catch((error) => {
          console.log("Error>>>", error);
        });
    },
  },
  mounted() {
    this.fetchChats();
  },
};
</script>

<style lang="scss">
.custom__div {
  height: calc(100vh - 48px);
}
.custom__card-text {
  height: calc(100vh - 112px);
  overflow-x: hidden;
  overflow-y: auto;
}
// .custom__div-example {
//   height: calc(100vh - 64px);
// }
</style>