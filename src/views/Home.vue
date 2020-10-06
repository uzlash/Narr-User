<template>
  <div class="home">
    <v-app class="grey lighten-4">
      <v-container>
        <v-row class="my-n6">
          <v-col cols="12">
            <span class="text-h4 font-weight-thin">Home</span>
          </v-col>
        </v-row>
        <v-row align="center" justify="center">
          <v-col cols="12" md="8" sm="8">
            <v-text-field
              solo
              rounded
              label="Search NARR"
              append-icon="search"
            ></v-text-field>
            <v-btn class="mt-n4 text-capitalize" color="#00a368" small text
              >Search Filter</v-btn
            >
          </v-col>
        </v-row>
        <v-row align="center" justify="center">
          <v-col cols="3" lg="3" md="6" sm="12">
            <v-card tile>
              <div class="d-flex pa-3 align-center">
                <v-btn class="mx-2" fab dark color="#00a368">
                  <v-icon dark> mdi-file </v-icon>
                </v-btn>
                <div class="">
                  <h2 class="font-weight-light green--text text--darken-2">
                    3 documents
                  </h2>
                  <h5 class="font-weight-light">Documents uploaded</h5>
                </div>
              </div>
            </v-card>
          </v-col>
          <v-col cols="3" lg="3" md="6" sm="12">
            <v-card tile>
              <div class="d-flex pa-3 align-center">
                <v-btn class="mx-2" fab dark color="blue">
                  <v-icon dark> mdi-book-open-page-variant </v-icon>
                </v-btn>
                <div class="">
                  <h2 class="font-weight-light blue--text">33 documents</h2>
                  <h5 class="font-weight-light">Suggestions</h5>
                </div>
              </div>
            </v-card>
          </v-col>
          <v-col cols="3" lg="3" md="6" sm="12">
            <v-card tile>
              <div class="d-flex pa-3 align-center">
                <v-btn class="mx-2" fab dark color="orange">
                  <v-icon dark> mdi-account </v-icon>
                </v-btn>
                <div class="">
                  <h2 class="font-weight-light orange--text">21 mentions</h2>
                  <h5 class="font-weight-light">Mentions</h5>
                </div>
              </div>
            </v-card>
          </v-col>
          <v-col cols="3" lg="3" md="6" sm="12" xs="12">
            <v-card tile>
              <div class="d-flex pa-3 align-center">
                <v-btn class="mx-2" fab dark color="pink">
                  <v-icon dark> mdi-book-open-variant </v-icon>
                </v-btn>
                <div class="">
                  <h2 class="font-weight-light pink--text">1 active</h2>
                  <h5 class="font-weight-light">Research Grants</h5>
                </div>
              </div>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" lg="4" md="6" sm="12">
            <h1 class="headline mb-2 font-weight-light">Reading history</h1>
          </v-col>
          <v-col cols="12" lg="8" md="6" sm="12">
            <h1 class="headline mb-2 font-weight-light">Usage History</h1>
          </v-col>
          <v-col cols="6" lg="4" md="6" sm="12">
            <v-card height="320" class="cutom__card--overflow">
              <v-list v-for="item in History" :key="item.id">
                <v-list-item>
                  <v-list-item-avatar :color="item.color">
                    <v-icon dark>{{ item.icon }}</v-icon>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title class="font-weight-light">{{
                      item.title1
                    }}</v-list-item-title>
                    <v-list-item-subtitle class="font-weight-light">{{
                      item.subtitle1
                    }}</v-list-item-subtitle>
                  </v-list-item-content>
                  <v-list-item-content align="right">
                    <v-list-item-title class="green--text font-weight-light">{{
                      item.title2
                    }}</v-list-item-title>
                    <v-list-item-subtitle class="font-weight-light">{{
                      item.subtitle2
                    }}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-divider inset></v-divider>
              </v-list>
            </v-card>
          </v-col>
          <v-col cols="6" lg="8" md="6" sm="12">
            <v-card height="">
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
            <v-card class="mt-4 pa-4 d-flex align-center">
              <v-icon color="orange darken-2">mdi-clock</v-icon>
              <span class="font-weight-light mx-2">Last Login:</span>
              <span class="font-weight-light orange--text">26 minutes ago</span>
            </v-card>
          </v-col>
          <v-col cols="12" lg="12" md="8" sm="12">
            <v-card>
              <GChart
                type="ColumnChart"
                :data="columnChartData"
                :options="chartOptions"
              />
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
    History: [
      {
        id: 1,
        color: "blue",
        icon: "mdi-file-document",
        title1: "A research on neural networks with backwards propagation",
        subtitle1: "35 pages left",
        title2: "N1200",
        subtitle2: "Paid",
      },
      {
        id: 2,
        color: "blue",
        icon: "mdi-file-document",
        title1: "linear regression and SVM",
        subtitle1: "10 pages left",
        title2: "N700",
        subtitle2: "Paid",
      },
      {
        id: 3,
        color: "blue",
        icon: "mdi-file-document",
        title1: "An intensive research on KNN & Random forest",
        subtitle1: "20 pages left",
        title2: "N500/month",
        subtitle2: "Subscription",
      },
      {
        id: 4,
        color: "blue",
        icon: "mdi-file-document",
        title1: "Election violence, a case of 2011 presidential election",
        subtitle1: "all pages read",
        title2: "FREE",
        subtitle2: "Free",
      },
      {
        id: 5,
        color: "blue",
        icon: "mdi-file-document",
        title1: "A research on neural networks with backwards propagation",
        subtitle1: "35 pages left",
        title2: "N1200",
        subtitle2: "Paid",
      },
      {
        id: 6,
        color: "blue",
        icon: "mdi-file-document",
        title1: "linear regression and SVM",
        subtitle1: "10 pages left",
        title2: "N700",
        subtitle2: "Paid",
      },
      {
        id: 7,
        color: "blue",
        icon: "mdi-file-document",
        title1: "An intensive research on KNN & Random forest",
        subtitle1: "20 pages left",
        title2: "N500/month",
        subtitle2: "Subscription",
      },
      {
        id: 8,
        color: "blue",
        icon: "mdi-file-document",
        title1: "Election violence, a case of 2011 presidential election",
        subtitle1: "all pages read",
        title2: "FREE",
        subtitle2: "Free",
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
    logout() {
      this.$router.push("/signin");
    },
  }
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