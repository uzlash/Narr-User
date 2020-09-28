<template>
  <div class="home">
    <v-app class="grey lighten-4">
      <v-container>
        <v-row>
          <v-col cols="12">
            <span class="text-h4 font-weight-thin">Home</span>
          </v-col>
          <v-col cols="12">
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
    Budget: [
      {
        id: 1,
        color: "red",
        icon: "mdi-file-document",
        title1: "A research on neural networks with backwards propagation",
        subtitle1: "35 pages left",
        title2: "N1200",
        subtitle2: "Paid",
      },
      {
        id: 2,
        color: "red",
        icon: "mdi-file-document",
        title1: "linear regression and SVM",
        subtitle1: "10 pages left",
        title2: "N700",
        subtitle2: "Paid",
      },
      {
        id: 3,
        color: "orange",
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
      ["Year", "Free", "Paid", "Subscription"],
      ["2017", 10, 4, 2],
      ["2018", 11, 5, 2],
      ["2019", 6, 11, 3],
      ["2020", 10, 5, 4],
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
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    },
  },
  methods: {
    logout() {
      this.$router.push('/signin')
    }
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
</style>