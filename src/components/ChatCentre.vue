<template>
  <div class="custom__card-height">
    <div style="position: relative">
      <v-card outlined tile height="60" class="d-flex align-center">
        <div class="d-flex align-center">
          <v-avatar size="40" class="ma-2">
            <img
              :src="`https://robohash.org/${chat.id}?200x200`"
              alt="alt"
              width="20"
              height="20"
            />
          </v-avatar>
          <div class="d-flex flex-column">
            <span class="font-weight-light">{{ chat.name }}</span>
            <span class="font-weight-thin">{{ chat.phone }}</span>
          </div>
        </div>
        <v-spacer></v-spacer>
        <v-text-field
          solo-inverted
          dense
          flat
          rounded
          hide-details
          color="accent"
          prepend-inner-icon="mdi-magnify"
          label="Search"
          class="hidden-sm-and-down search--text"
        ></v-text-field>
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on" class="ma-2">
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item class="pa-0">
              <v-list-item-title>
                <v-btn small text class="text-capitalize">Clear chat</v-btn>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-card>
      <div class="chat-container chat">
        <!-- Sender -->
        <div
          class="d-flex justify-start"
          v-for="(item, index) in 5"
          :key="index"
        >
          <v-card class="ml-4 mt-1 d-inline-block pa-2" max-width="80%">
            <div class="d-flex align-center">
              <v-avatar size="30" class="mr-2">
                <img src="../assets/avatar-1.jpg" alt="alt" />
              </v-avatar>
              <span class="mr-2 body-2 grey--text">John Doe</span>
              <v-spacer></v-spacer>
              <span class="body-2 grey--text">8:30am</span>
            </div>
            <span class="body-2 font-weight-light"
              >Hello, How is it going? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Aperiam, veniam! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Aperiam, veniam!</span
            >
          </v-card>
        </div>
        <!-- Reciever -->
        <div class="d-flex justify-end" v-for="(item, index) in 5" :key="index">
          <v-card
            class="mr-4 my-1 d-inline-block pa-2"
            max-width="80%"
            color="green lighten-5"
          >
            <div class="d-flex align-center">
              <span class="mr-2 body-2 grey--text">{{ chat.name }}</span>
              <v-spacer></v-spacer>
              <span class="body-2 grey--text">8:35am</span>
            </div>
            <span class="body-2 font-weight-light"
              >Fine Alhamdulillah, How is it everything? Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Nam placeat perspiciatis in
              odit sed fuga? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Nam placeat perspiciatis in odit sed fuga?</span
            >
          </v-card>
        </div>
      </div>
      <div>
        <div class="d-flex align-center my-auto pa-2 grey lighten-4">
          <v-btn icon color="accent" class="mr-2">
            <v-icon>mdi-emoticon-outline</v-icon>
          </v-btn>
          <v-text-field
            color="accent"
            dense
            rounded
            hide-details
            outlined
            label="Type a Message..."
            class="accent--text white"
            v-on:keyup.enter="sendMessage()"
            v-model="content"
          ></v-text-field>
          <v-btn icon color="accent" @click="sendMessage()">
            <v-icon>mdi-send</v-icon>
          </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    id: null,
    chat: {},
    chat__text: "",
    content: "",
    chatMessages: [],
    emojiPanel: false,
    currentRef: {},
    loading: false,
    totalChatHeight: 0,
  }),
  methods: {
    setId(value) {
      this.id = value;
    },
    sendMessage() {
      console.log("Message Sent");
    },
    fetchChat() {
      fetch("https://jsonplaceholder.typicode.com/users/" + this.id, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((r) => r.json())
        .then((response) => {
          console.log("Response", response);
          this.chat = response;
        })
        .catch((error) => {
          console.log("Error>>>", error);
        });
    },
  },
  watch: {
    "$route.params.id": function (id) {
      this.setId(id);
      this.fetchChat();
      console.log(id);
    },
  },
  mounted() {
    this.fetchChat();
  },
};
</script>

<style lang="scss">
.chat {
  background-image: url("../assets/background1.svg");
  background-size: cover;
  background-attachment: fixed;
}

.custom__scrollable__card {
  overflow-x: hidden !important;
  overflow-y: auto !important;
}
.message--text {
  min-width: 400px !important;
}

.scrollable {
  overflow-y: auto;
  height: 85vh;
}
.typer {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  bottom: 0;
  height: 4.9rem;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 -5px 10px -5px rgba(0, 0, 0, 0.2);
}
.typer input[type="text"] {
  position: absolute;
  left: 2.5rem;
  padding: 1rem;
  width: 80%;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 1.25rem;
}
.chat-container {
  box-sizing: border-box;
  height: calc(100vh - 10.5rem);
  overflow-y: auto;
  padding: 10px;
  background-color: #f2f2f2;
}
.message {
  margin-bottom: 3px;
}
.message.own {
  text-align: right;
}
.message.own .content {
  background-color: lightskyblue;
}
.chat-container .username {
  font-size: 18px;
  font-weight: bold;
}
.chat-container .content {
  padding: 8px;
  background-color: blue;
  border-radius: 10px;
  display: inline-block;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 2px 1px -1px rgba(0, 0, 0, 0.12);
  max-width: 80%;
  word-wrap: break-word;
}
@media (max-width: 480px) {
  .chat-container .content {
    max-width: 60%;
  }
}
</style>