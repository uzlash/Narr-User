<template>
  <v-app class="grey lighten-4">
    <v-container>
      <v-row>
        <v-col cols="3">
          <v-card>
            <v-card-title class="text-body-1 font-weight-light">
              Total Users
            </v-card-title>
            <v-card-text class="text-h6">
              <v-icon color="accent" class="mr-2">mdi-account</v-icon>
              <span>123,000</span>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="3">
          <v-card>
            <v-card-title class="text-body-1 font-weight-light">
              Active Users
            </v-card-title>
            <v-card-text class="text-h6">
              <v-icon color="accent" class="mr-2">mdi-account</v-icon>
              <span>15,000</span>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="3">
          <v-card>
            <v-card-title class="text-body-1 font-weight-light">
              Pending Users
            </v-card-title>
            <v-card-text class="text-h6">
              <v-icon color="orange" class="mr-2">mdi-account</v-icon>
              <span>70,000</span>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="3">
          <v-card>
            <v-card-title class="text-body-1 font-weight-light">
              Inactive Users
            </v-card-title>
            <v-card-text class="text-h6">
              <v-icon color="red" class="mr-2">mdi-account</v-icon>
              <span>33,000</span>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="3">
          <v-card>
            <v-card-title class="text-body-1 font-weight-light">
              Online Users
            </v-card-title>
            <v-card-text class="text-h6">
              <v-icon color="info" class="mr-2">mdi-account-group</v-icon>
              <span>2</span>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="3">
          <v-card>
            <v-card-title class="text-body-1 font-weight-light">
              Total Documents Uploaded
            </v-card-title>
            <v-card-text class="text-h6">
              <v-icon color="info" class="mr-2">mdi-cloud-upload</v-icon>
              <span>5</span>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="3">
          <v-card>
            <v-card-title class="text-body-1 font-weight-light">
              Document Converter Usage
            </v-card-title>
            <v-card-text class="text-h6">
              <v-icon color="info" class="mr-2">mdi-file</v-icon>
              <span>47</span>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="3">
          <v-card>
            <v-card-title class="text-body-1 font-weight-light">
              OCR Usage
            </v-card-title>
            <v-card-text class="text-h6">
              <v-icon color="info" class="mr-2">mdi-ocr</v-icon>
              <span>55</span>
            </v-card-text>
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
</template>

<script>
import BarChart from "../components/BarChart.vue";
import RadarChart from "../components/RadarChart.vue";
export default {
  components: {
    BarChart,
    RadarChart,
  },
  data: function () {
    return {
      search: "",
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
        ],
      },
      radarChartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        fill: true,
      },
    };
  },
};
</script>
