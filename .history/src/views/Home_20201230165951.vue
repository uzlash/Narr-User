<template>
  <div class="home">
    <v-app class="grey lighten-4">
      <v-container>
        <v-row align="center" justify="center">
          <v-col cols="12" md="8" sm="8" class="py-0">
            <v-text-field
              solo
              hide-details
              class="mb-2"
              label="Search NARR"
              append-icon="search"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row align="center" justify="center">
          <v-col cols="12" class="px-2">
            <v-card outlined tile class="pa-2" width="100%">
              <v-card-title class="pa-2 body-1 grey--text text--darken-2"
                >EXPLORE
                <span class="caption ml-2">
                  (Click on any of the buttons below to get started)
                </span></v-card-title
              >
              <v-divider class="mb-2"></v-divider>
              <v-row no-gutters>
                <v-col cols="12" sm="6" md="3">
                  <div class="text-center mb-2">
                    <v-btn
                      outlined
                      @click="goResearch()"
                      dark
                      class="text-capitalize"
                      color="#00a368"
                    >
                      <v-icon class="mr-2">mdi-cloud-upload</v-icon>Upload
                      Research</v-btn
                    >
                  </div>
                </v-col>
                <v-col cols="12" sm="6" md="3">
                  <div class="text-center mb-2">
                    <v-btn
                      outlined
                      @click="goGrants()"
                      dark
                      class="text-capitalize"
                      color="#00a368"
                    >
                      <v-icon class="mr-2">mdi-book-open-variant</v-icon
                      >Research Grants</v-btn
                    >
                  </div>
                </v-col>
                <v-col cols="12" sm="6" md="3">
                  <div class="text-center mb-2">
                    <v-btn
                      outlined
                      @click="goCrowdFunding()"
                      dark
                      class="text-capitalize px-6"
                      color="#00a368"
                      ><v-icon class="mr-2">mdi-account-cash</v-icon>Crowd
                      Funding</v-btn
                    >
                  </div>
                </v-col>
                <v-col cols="12" sm="6" md="3">
                  <div class="text-center mb-2">
                    <v-btn
                      outlined
                      @click="goAnalytics()"
                      dark
                      class="text-capitalize"
                      color="#00a368"
                      ><v-icon class="mr-2">mdi-google-analytics</v-icon
                      >Usage/Analytics</v-btn
                    >
                  </div>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>

        <v-row align="center" justify="center">
          <v-col
            cols="12"
            lg="3"
            md="6"
            sm="12"
            class="pa-0"
            v-for="card in CardDocuments"
            :key="card.title"
          >
            <v-card tile outlined class="ma-2">
              <v-card-title class="pa-2 body-1 grey--text text--darken-2">{{
                card.title
              }}</v-card-title>
              <v-divider></v-divider>
              <div class="d-flex pa-3 align-center">
                <v-btn outlined class="mx-2" small fab dark :color="card.color">
                  <v-icon dark> {{ card.icon }} </v-icon>
                </v-btn>
                <div class="">
                  <h2 class="text-h6 font-weight-light">
                    {{ card.value }}
                  </h2>
                  <h5 class="font-weight-light">{{ card.subtitle }}</h5>
                </div>
              </div>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" lg="4" md="6" sm="12" class="pa-0 px-2">
            <v-card outlined tile>
              <v-card-title class="body-1 grey--text text--darken-2 pa-2"
                >Reading History</v-card-title
              >
            </v-card>
            <v-card outlined tile height="320" class="cutom__card--overflow">
              <v-list v-for="item in History" :key="item.id" class="py-0">
                <v-list-item to="/read" class="px-2">
                  <v-list-item-avatar color="blue" aria-dropeffect>
                    <v-icon dark>{{ item.icon }}</v-icon>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title
                      class="font-weight-light body-1 text-wrap"
                      >{{ item.title1 }}</v-list-item-title
                    >
                    <v-list-item-subtitle class="font-weight-light">{{
                      item.authors
                    }}</v-list-item-subtitle>
                  </v-list-item-content>
                  <div>
                    <v-list-item-title class="green--text font-weight-light">{{
                      item.title2
                    }}</v-list-item-title>
                    <v-list-item-subtitle class="font-weight-light">{{
                      item.subtitle2
                    }}</v-list-item-subtitle>
                  </div>
                </v-list-item>
                <v-divider inset></v-divider>
              </v-list>
            </v-card>
          </v-col>
          <v-col cols="12" lg="5" md="6" sm="12" class="pa-0 px-2">
            <v-card outlined tile>
              <v-card-title class="body-1 grey--text text--darken-1 pa-2"
                >Suggestions</v-card-title
              >
            </v-card>
            <v-card outlined tile height="320" class="cutom__card--overflow">
              <v-list v-for="item in History" :key="item.id" class="py-0">
                <v-list-item to="/read" class="px-2">
                  <v-list-item-avatar color="accent">
                    <v-icon dark>{{ item.icon }}</v-icon>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title
                      class="font-weight-light body-1 text-wrap"
                      >{{ item.title1 }}</v-list-item-title
                    >
                    <v-list-item-subtitle class="font-weight-light">{{
                      item.authors
                    }}</v-list-item-subtitle>
                  </v-list-item-content>
                  <div>
                    <v-list-item-subtitle class="font-weight-light">{{
                      item.date
                    }}</v-list-item-subtitle>
                  </div>
                </v-list-item>
                <v-divider inset></v-divider>
              </v-list>
            </v-card>
          </v-col>
          <v-col
            cols="12"
            lg="3"
            md="6"
            sm="12"
            class="hidden-sm-and-down pa-0 px-2"
          >
            <v-card
              outlined
              tile
              height="60"
              class="mb-2 body-1 d-flex align-center"
            >
              <v-btn outlined class="mx-2" small fab dark color="indigo">
                <v-icon>mdi-account-group</v-icon>
              </v-btn>
              <span>Users Online: </span>
              <span>1,000,000</span>
              <!-- <span class="ml-2 font-weight-light black--text">{{
                users.length
              }}</span> -->
              <!-- <span :class="$socket.connected ? 'green--text' : 'red--text'">{{
                $socket.connected ? "Connected" : "Disconnected"
              }}</span> -->
            </v-card>
            <v-card
              outlined
              tile
              height="292"
              class="cutom__card--overflow d-flex flex-column align-center justify-center"
            >
              <div>
                <v-avatar size="120" color="grey">
                  <v-img src="../assets/avatar-1.jpg"></v-img>
                </v-avatar>
              </div>

              <v-card-text class="text-h5 pa-0 text-center font-weight-light ">
                {{ user.fullName }}</v-card-text
              >
              <v-row class="ww1Q|QQ">
                <v-col cols="12" md="1">
                  <v-icon color="#00a368">mdi-email  </v-icon>
                  
                 
                  <v-icon color="#00a368">mdi-school</v-icon>
                </v-col>
                <v-col cols="12" md="10">
                  <v-card-text
                    class="body-1 pa-0 text-center font-weight-light text-icon"
                  >
                    {{ user.email }}</v-card-text
                  >
                  <v-card-text
                    class="body-2 pa-0 text-center font-weight-light text-icon"
                  >
                    {{ user.institution.name }}</v-card-text
                  >
                </v-col>
              </v-row>
              <div class="d-flex justify-center">
                <span class="font-weight-light mx-2 body-2">Last Login:</span>
                <span class="font-w\eight-light orange--text body-2"
                  >26 minutes ago</span
                >
              </div>
              <div class="d-flex justify-center">
                <v-btn
                  outlined
                  small
                  class="mt-2"
                  color="#00a368"
                  to="/profile"
                >
                  <v-icon>mdi-circle-edit-outline</v-icon>
                  Edit Profile</v-btn
                >
              </div>
            </v-card>
          </v-col>
          <v-col cols="12" lg="12" md="12" sm="12" class="pa-2">
            <v-card outlined tile>
              <template>
                <div class="chart">
                  <GChart
                    type="LineChart"
                    :data="chartData"
                    :options="chartOptions"
                  />
                </div>
              </template>
              <v-card-text>
                <span class="text-center">
                  Usage in the last 24hrs
                </span></v-card-text
              >
            </v-card>
          </v-col>
          <v-col cols="12" lg="12" md="12" sm="12" class="pa-0 px-2">
            <v-card outlined tile>
              <GChart
                type="ColumnChart"
                :data="columnChartData"
                :options="chartOptions"
              />
              <v-card-text>
                <span class="text-center">
                  Time spent reading
                </span></v-card-text
              >
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-app>
  </div>
</template>

<script>
export default {
  components: {},
  data: () => ({
    user: JSON.parse(localStorage.getItem("user")),
    users: [],
    CardDocuments: [
      {
        title: "Documents Uploaded",
        value: "5 Documents",
        subtitle: "Total Uploads",
        icon: "mdi-file",
        color: "#00a368",
      },
      {
        title: "Read Sugestions",
        value: "33 Documents",
        subtitle: "Daily Suggestions",
        icon: "mdi-book-open-page-variant",
        color: "light-blue",
      },
      {
        title: "Mentions",
        value: "26 Mentions",
        subtitle: "Mentions in the last 1 year",
        icon: "mdi-account",
        color: "orange",
      },
      {
        title: "Research Grants",
        value: "2 Active",
        subtitle: "Researches Working On",
        icon: "mdi-book-open-variant",
        color: "pink",
      },
    ],
    History: [
      {
        id: 1,
        color: "blue",
        icon: "mdi-file-document",
        title1: "A research on neural networks with backwards propagation",
        authors: "Gol D. Roger, Edward Newgate & Monkey D. Garp et.al",
        title2: "N1200",
        subtitle2: "35 pages",
        date: "20-03-2018",
      },
      {
        id: 2,
        color: "blue",
        icon: "mdi-file-document",
        title1: "Linear regression and SVM",
        authors: "Johnny Cage, Sub Zero & Scorpion et.al",
        title2: "N700",
        subtitle2: "21 pages",
        date: "20-03-2018",
      },
      {
        id: 3,
        color: "blue",
        icon: "mdi-file-document",
        title1: "An intensive research on KNN & Random forest",
        authors: "Monkey D. Luffy, Roronoa Zoro & Vinsmoke Sanji et.al",
        title2: "N500",
        subtitle2: "17 pages",
        date: "20-03-2018",
      },
      {
        id: 4,
        color: "blue",
        icon: "mdi-file-document",
        title1: "Election violence, a case of 2011 presidential election",
        authors: "Shanks, Marshall D. Teach, Big Mom & Kaido et.al",
        title2: "FREE",
        subtitle2: "20 pages",
        date: "20-03-2018",
      },
      {
        id: 5,
        color: "blue",
        icon: "mdi-file-document",
        title1: "A research on neural networks with backwards propagation",
        authors: "Magellan & Hanyyabal et.al",
        title2: "N1200",
        subtitle2: "10 pages",
        date: "20-03-2018",
      },
      {
        id: 6,
        color: "blue",
        icon: "mdi-file-document",
        title1: "Linear regression of the 7 Cassanovas and SVM",
        authors:
          "Eustass Kid, Trafalgar Law, Luffy, Capone Bege, Basil Hawkins, Mad Monk Euroge, Scratchmen Apoo & Jewelery Bonny et.al",
        title2: "N700",
        subtitle2: "5 pages",
        date: "20-03-2018",
      },
      {
        id: 7,
        color: "blue",
        icon: "mdi-file-document",
        title1: "An intensive research on KNN & Random forest",
        authors: "Emperor Kaido",
        title2: "N500",
        subtitle2: "15 pages",
        date: "20-03-2018",
      },
      {
        id: 8,
        color: "blue",
        icon: "mdi-file-document",
        title1: "Election violence, a case of 2011 presidential election",
        authors: "Prtogas D Ace, Sabo & Monkey D. Luffy et.al",
        title2: "FREE",
        subtitle2: "20 pages",
        date: "20-03-2018",
      },
    ],
    Grants: [
      {
        id: 1,
        title1: "Academic research writing - design thinking",
        subtitle1:
          "Academic Research Writing on the topic of Design Thinking and Food Innovation or Food Industry.",
        title2: "N350,000",
      },
      {
        id: 1,
        title1: "Virtual Research assistant / Lead Search & Work",
        subtitle1:
          "I am looking for a team virtual team member with experience in data scraping, finding relevant prospects (contact details) and do cold outreach",
        title2: "N100/hr - 40hrs/week",
      },
      {
        id: 1,
        title1:
          "Manually Research Facebook Pages, Ads and puts them into a Spreadsheet",
        subtitle1:
          "Expected to get filled in two spreadsheet columns: Library URL and Countries Algorithm (see the link attached)",
        title2: "N5,000",
      },
    ],
    chartData: [
      ["Time", "Mins"],
      ["12am", 0],
      ["1am", 0],
      ["2am", 0],
      ["3am", 0],
      ["4am", 0],
      ["5am", 0],
      ["6am", 0],
      ["7am", 0],
      ["8am", 40],
      ["9am", 30],
      ["10am", 10],
      ["11am", 0],
      ["12pm", 0],
      ["1pm", 50],
      ["2pm", 30],
      ["3pm", 5],
      ["4pm", 10],
      ["5pm", 15],
      ["6pm", 20],
      ["7pm", 40],
      ["8pm", 45],
      ["9pm", 50],
      ["10pm", 55],
      ["11pm", 0],
    ],
    columnChartData: [
      ["Days", "Times"],
      ["Monday", 45],
      ["Tuesday", 60],
      ["Wednesday", 30],
      ["Thursday", 30],
      ["Friday", 55],
      ["Saturday", 0],
      ["Sunday", 0],
    ],
    pieChartData: [
      ["Year", "Usage"],
      ["2017", 20],
      ["2018", 20],
      ["2019", 35],
      ["2020", 25],
    ],
    chartOptions: {
      chart: {
        title: "Company Performance",
        subtitle: "Sales, Expenses, and Profit: 2017-2020",
      },
      labels: ["12am", "3am", "6am", "9am", "12pm", "3pm", "6pm", "9pm"],
      value: [200, 675, 410, 390, 310, 460, 250, 240],
    },
    mentions: [
      {
        id: 1,
        imageSrc: "https://i.imgur.com/WF8mSR2.png",
        title: "Musa Damu",
        subtitle: "The work of @uzlash helped me alot",
      },
      {
        id: 2,
        imageSrc: "https://i.imgur.com/Jc6fWCQ.png",
        title: "Mubarak Ibrahim",
        subtitle: "I worked with @uzlash on the research work",
      },
      {
        id: 3,
        imageSrc: "https://i.imgur.com/HBOQXZp.png",
        title: "Kiki drake",
        subtitle: "We should collaborate on a research project i have",
      },
    ],
  }),
  methods: {
    goResearch() {
      this.$router.push("/upload");
    },
    goGrants() {
      this.$router.push("/viewgrant");
    },
    goCrowdFunding() {
      this.$router.push("/viewcrowd");
    },
    goAnalytics() {
      this.$router.push("/analytics");
    },
  },
};
</script>

<style>
.rounded {
  border-radius: 30px;
}
.line {
  border-right: solid 1px #95a5a6;
}
.cutom__card--overflow {
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
