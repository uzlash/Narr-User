<template>
  <div class="home">
    <v-app class="grey lighten-4">
      <v-container>
        <!--Search-->
        <v-row align="center" justify="center">
          <v-col cols="12" md="8" sm="8" class="py-0">
            <v-text-field
              color="accent"
              solo
              hide-details
              class="mb-2"
              label="Search NARR"
              append-icon="search"
            ></v-text-field>
          </v-col>
        </v-row>
        <!--Explore-->
        <v-row align="center" justify="center">
          <v-col cols="12" class="px-2 pt-1 pb-0">
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
        <!--Uploads, Suggestions, Mentions and Grants-->
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
        <!--Institution Information and Users Online-->
        <v-row>
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
              <span class="mr-1 body-1 grey--text text--darken-3"
                >Users Online:
              </span>
              <span>{{ UsersCurrentlyOnline.length }}</span>
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

              <v-card-text class="text-h5 pa-0 text-center font-weight-light">
                {{ user.fullName }}</v-card-text
              >

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

              <div class="d-flex justify-center">
                <span class="font-weight-light mx-2 body-2">Last Login:</span>
                <span class="font-weight-light orange--text body-2"
                  >26 Minutes ago</span
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
          <v-col
            cols="12"
            lg="6"
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
                <v-icon>mdi-office-building</v-icon>
              </v-btn>
              <span class="body-1 grey--text text--darken-3"
                >Institution Information</span
              >
            </v-card>
            <v-card outlined tile height="292" class="custom__card--overflow">
              <v-row>
                <v-col cols="4" class="py-1 pb-0 ml-2">
                  <v-card tile outlined>
                    <v-icon color="accent" class="mx-2">mdi-school</v-icon>
                    <span class="accent--text body-2">Name: </span>
                  </v-card>
                </v-col>
                <v-col cols="7" class="px-0 pt-1 pb-0">
                  <v-card tile outlined class="px-1">
                    <span class="grey--text text--darken-2 body-2">
                      Ahmadu Bello University
                    </span></v-card
                  >
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4" class="py-1 pb-0 ml-2">
                  <v-card tile outlined>
                    <v-icon color="accent" class="mx-2"
                      >mdi-school-outline</v-icon
                    >
                    <span class="accent--text body-2">Type: </span>
                  </v-card>
                </v-col>
                <v-col cols="7" class="px-0 pt-1 pb-0">
                  <v-card tile outlined class="px-1">
                    <span class="grey--text text--darken-2 body-2">
                      University
                    </span></v-card
                  >
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4" class="py-1 pb-0 ml-2">
                  <v-card tile outlined>
                    <v-icon color="accent" class="mx-2"
                      >mdi-office-building</v-icon
                    >
                    <span class="accent--text body-2">Ownership: </span>
                  </v-card>
                </v-col>
                <v-col cols="7" class="px-0 pt-1 pb-0">
                  <v-card tile outlined class="px-1">
                    <span class="grey--text text--darken-2 body-2">
                      Federal Level
                    </span></v-card
                  >
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4" class="py-1 pb-0 ml-2">
                  <v-card tile outlined>
                    <v-icon color="accent" class="mx-2">mdi-calendar</v-icon>
                    <span class="accent--text body-2">Established: </span>
                  </v-card>
                </v-col>
                <v-col cols="7" class="px-0 pt-1 pb-0">
                  <v-card tile outlined class="px-1">
                    <span class="grey--text text--darken-2 body-2">
                      1964
                    </span></v-card
                  >
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4" class="py-1 pb-0 ml-2">
                  <v-card tile outlined>
                    <v-icon color="accent" class="mx-2">mdi-link</v-icon>
                    <span class="accent--text body-2">Website: </span>
                  </v-card>
                </v-col>
                <v-col cols="7" class="px-0 pt-1 pb-0">
                  <v-card tile outlined class="px-1" height="27">
                    <v-btn
                      x-small
                      link
                      text
                      color="warning"
                      href="https://abu.edu.ng"
                      >Click Here</v-btn
                    >
                  </v-card>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4" class="py-1 pb-0 ml-2">
                  <v-card tile outlined>
                    <v-icon color="accent" class="mx-2">mdi-school</v-icon>
                    <span class="accent--text body-2">Name: </span>
                  </v-card>
                </v-col>
                <v-col cols="7" class="px-0 pt-1 pb-0">
                  <v-card tile outlined class="px-1">
                    <span class="grey--text text--darken-2 body-2">
                      Ahmadu Bello University
                    </span></v-card
                  >
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4" class="py-1 pb-0 ml-2">
                  <v-card tile outlined>
                    <v-icon color="accent" class="mx-2"
                      >mdi-school-outline</v-icon
                    >
                    <span class="accent--text body-2">Type: </span>
                  </v-card>
                </v-col>
                <v-col cols="7" class="px-0 pt-1 pb-0">
                  <v-card tile outlined class="px-1">
                    <span class="grey--text text--darken-2 body-2">
                      University
                    </span></v-card
                  >
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4" class="py-1 pb-0 ml-2">
                  <v-card tile outlined>
                    <v-icon color="accent" class="mx-2"
                      >mdi-office-building</v-icon
                    >
                    <span class="accent--text body-2">Ownership: </span>
                  </v-card>
                </v-col>
                <v-col cols="7" class="px-0 pt-1 pb-0">
                  <v-card tile outlined class="px-1">
                    <span class="grey--text text--darken-2 body-2">
                      Federal Level
                    </span></v-card
                  >
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4" class="py-1 pb-0 ml-2">
                  <v-card tile outlined>
                    <v-icon color="accent" class="mx-2">mdi-calendar</v-icon>
                    <span class="accent--text body-2">Established: </span>
                  </v-card>
                </v-col>
                <v-col cols="7" class="px-0 pt-1 pb-0">
                  <v-card tile outlined class="px-1">
                    <span class="grey--text text--darken-2 body-2">
                      1964
                    </span></v-card
                  >
                </v-col>
              </v-row>
            </v-card>
          </v-col>
          <v-col
            cols="12"
            lg="3"
            md="3"
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
                <v-icon>mdi-office-building</v-icon>
              </v-btn>
              <span class="body-1 grey--text text--darken-3"
                >Institution Logo</span
              >
            </v-card>
            <v-card tile outlined height="292" class="pa-4">
              <div class="d-flex flex-column align-center justify-center">
                <v-avatar size="200" tile>
                  <img src="../assets/abu.png" alt="alt" />
                </v-avatar>
              </div>
              <v-divider class="my-2"></v-divider>
              <div class="text-center grey--text text--darken-2">
                Ahmadu Bello University
              </div>
            </v-card>
          </v-col>
        </v-row>
        <!--Reading History, Suggestions and Trending-->
        <v-row class="py-2">
          <v-col cols="12" lg="4" md="4" sm="12" class="pa-0 px-2">
            <v-card outlined tile>
              <v-card-title class="body-1 grey--text text--darken-2 pa-2"
                >Reading History</v-card-title
              >
            </v-card>
            <v-card
              v-if="readingHistory.length"
              outlined
              tile
              max-height="320"
              class="cutom__card--overflow"
            >
              <v-list
                v-for="(item, index) in readingHistory"
                :key="index"
                class="py-0"
              >
                <v-list-item to="/read" class="px-2">
                  <v-list-item-avatar color="blue" aria-dropeffect>
                    <v-icon dark>mdi-file-document</v-icon>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title
                      class="font-weight-light body-2 text-wrap"
                      >{{ item.researchTitle }}</v-list-item-title
                    >
                    <v-list-item-subtitle class="font-weight-light">{{
                      item.authors.toString().replace(/,/g, " and ")
                    }}</v-list-item-subtitle>
                  </v-list-item-content>
                  <div>
                    <v-list-item-title class="green--text font-weight-light">{{
                      item.accessType
                    }}</v-list-item-title>
                    <v-list-item-subtitle class="font-weight-light">{{
                      item.nPages + " Pages"
                    }}</v-list-item-subtitle>
                  </div>
                </v-list-item>
                <v-divider inset></v-divider>
              </v-list>
            </v-card>
            <v-card
              tile
              outlined
              v-else
              class="d-flex justify-center align-center"
            >
              <v-card-title class="grey--text text--darken-2 body-1">
                No Reading History Yet!
              </v-card-title>
            </v-card>
          </v-col>
          <v-col cols="12" lg="4" md="4" sm="12" class="pa-0 px-2">
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
                      class="font-weight-light body-2 text-wrap"
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
          <v-col cols="12" lg="4" md="4" sm="12" class="pa-0 px-2">
            <v-card outlined tile>
              <v-card-title class="body-1 grey--text text--darken-1 pa-2"
                >Trending</v-card-title
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
                      class="font-weight-light body-2 text-wrap"
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
        </v-row>
        <v-row>
          <v-col cols="8">
            <v-card outlined flat tile>
              <v-card-title class="text-body-1 grey--text text--darken-1 pa-2">
                Time spent reading (in mins)
              </v-card-title>
              <v-divider></v-divider>
              <v-card-text>
                <bar-chart
                  :chartdata="barChartData"
                  :options="barChartOptions"
                ></bar-chart>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="4">
            <v-card outlined flat tile>
              <v-card-title class="text-body-1 grey--text text--darken-1 pa-2">
                Reading Habit
              </v-card-title>
              <v-divider></v-divider>
              <v-card-text>
                <radar-chart
                  :chartdata="radarChartData"
                  :options="radarChartOptions"
                ></radar-chart>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-app>
  </div>
</template>

<script>
import BarChart from "../components/BarChart.vue";
import RadarChart from "../components/RadarChart.vue";
export default {
  components: {
    BarChart,
    RadarChart,
  },
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
    barChartData: {
      labels: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      datasets: [
        {
          barPercentage: 0.5,
          barThickness: 50,
          minBarLength: 2,
          label: "Minutes",
          data: [10, 20, 30, 40, 50, 60, 70],
          borderColor: "#00a368",
          backgroundColor: "#00a368",
        },
      ],
    },
    barChartOptions: {
      responsive: true,
      maintainAspectRatio: false,
      fill: true,
    },
    radarChartData: {
      labels: [
        "Arts",
        "Education",
        "Engineering",
        "Sciences",
        "Social Sciences",
      ],
      datasets: [
        {
          label: "Categories",
          data: [65, 59, 90, 55, 40],
          fill: true,
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgb(255, 99, 132)",
          pointBackgroundColor: "rgb(255, 99, 132)",
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "rgb(255, 99, 132)",
        },
        // {
        //   label: "My Second Dataset",
        //   data: [28, 48, 40, 19, 96, 27, 100],
        //   fill: true,
        //   backgroundColor: "rgba(54, 162, 235, 0.2)",
        //   borderColor: "rgb(54, 162, 235)",
        //   pointBackgroundColor: "rgb(54, 162, 235)",
        //   pointBorderColor: "#fff",
        //   pointHoverBackgroundColor: "#fff",
        //   pointHoverBorderColor: "rgb(54, 162, 235)",
        // },
      ],
    },
    radarChartOptions: {
      responsive: true,
      maintainAspectRatio: false,
      fill: true,
    },
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
  computed: {
    UsersCurrentlyOnline() {
      return this.$store.getters.getSocketUsersOnline;
    },
    readingHistory() {
      return this.$store.getters.getReadingHistory;
    },
  },
};
</script>

<style>
.rounded {
  border-radius: 30px;
}
.border-full {
  border: 1px solid #95a5a6;
}
.line {
  border-right: solid 0.5px #95a5a6;
}
.cutom__card--overflow {
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
