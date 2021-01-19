<template>
  <v-app class="grey lighten-4">
    <v-container>
      <v-row>
        <!-- <v-col cols="3">
          <v-card outlined tile height="86px">
            <v-row>
              <v-col cols="6">
                <div class="d-flex justify-center align-center">
                  Total Users:
                </div>
                <div
                  class="d-flex justify-center align-center font-weight-bold"
                >
                  123,000
                </div>
              </v-col>
              <v-col cols="6" class="body-2">
                <div>
                  <span class="mr-2 green--text">Active:</span>
                  <span class="font-weight-bold">15,000</span>
                </div>
                <div>
                  <span class="mr-2 orange--text">Pending:</span>
                  <span class="font-weight-bold">70,000</span>
                </div>
                <div>
                  <span class="mr-2 red--text">Inactive:</span>
                  <span class="font-weight-bold">33,000</span>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col> -->
        <v-col cols="3">
          <v-card outlined tile height="86px">
            <v-row>
              <v-col cols="12">
                <div class="d-flex justify-center align-center">
                  <span>Users:</span>
                </div>
                <v-divider class="my-1"></v-divider>
                <div
                  class="d-flex justify-center align-center font-weight-bold"
                >
                  <span class="mr-2">Total:</span>
                  <span class="font-weight-bold"> 123,000</span>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>

        <v-col cols="3">
          <v-card outlined tile height="86px">
            <v-row>
              <v-col cols="12">
                <div class="d-flex justify-center align-center">
                  <span>Users:</span>
                </div>
                <v-divider class="my-1"></v-divider>
                <div
                  class="d-flex justify-center align-center font-weight-bold"
                >
                  <span class="mr-2 success--text">Active:</span>
                  <span class="font-weight-bold"> 15,000</span>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>

        <v-col cols="3">
          <v-card outlined tile height="86px">
            <v-row>
              <v-col cols="12">
                <div class="d-flex justify-center align-center">
                  <span>Users:</span>
                </div>
                <v-divider class="my-1"></v-divider>
                <div
                  class="d-flex justify-center align-center font-weight-bold"
                >
                  <span class="mr-2 warning--text">Pending:</span>
                  <span class="font-weight-bold"> 70,000</span>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>

        <v-col cols="3">
          <v-card outlined tile height="86px">
            <v-row>
              <v-col cols="12">
                <div class="d-flex justify-center align-center">
                  <span>Users:</span>
                </div>
                <v-divider class="my-1"></v-divider>
                <div
                  class="d-flex justify-center align-center font-weight-bold"
                >
                  <span class="mr-2 red--text text--darken-4">Inactive:</span>
                  <span class="font-weight-bold"> 33,000</span>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>

        <v-col cols="3">
          <v-card outlined tile height="86px">
            <v-row>
              <v-col cols="12">
                <div class="d-flex justify-center align-center">
                  <span>Users:</span>
                </div>
                <v-divider class="my-1"></v-divider>
                <div
                  class="d-flex justify-center align-center font-weight-bold"
                >
                  <span class="mr-2 indigo--text">Online:</span>
                  <span class="font-weight-bold"> 2</span>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>

        <v-col cols="3">
          <v-card outlined tile height="86px">
            <v-row>
              <v-col cols="12">
                <div class="d-flex justify-center align-center">
                  <span>Documents Uploaded:</span>
                </div>
                <v-divider class="my-1"></v-divider>
                <div
                  class="d-flex justify-center align-center font-weight-bold"
                >
                  <span class="mr-2">Total Uploaded:</span>
                  <span class="font-weight-bold">17,356 </span>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col cols="3">
          <v-card outlined tile height="86px">
            <v-row>
              <v-col cols="12">
                <div class="d-flex justify-center align-center">
                  <span> Document Conveter Usage:</span>
                </div>
                <v-divider class="my-1"></v-divider>
                <div
                  class="d-flex justify-center align-center font-weight-bold"
                >
                  <span class="mr-2">Total Converted:</span>
                  <span class="font-weight-bold">467 </span>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col cols="3">
          <v-card outlined tile height="86px">
            <v-row>
              <v-col cols="12">
                <div class="d-flex justify-center align-center">
                  <span> OCR Usage:</span>
                </div>
                <v-divider class="my-1"></v-divider>
                <div
                  class="d-flex justify-center align-center font-weight-bold"
                >
                  <span class="mr-2">Total Processed:</span>
                  <span class="font-weight-bold">11,234</span>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
      <!-- <v-row>
        <v-col cols="3">
          <v-card outlined tile height="86px">
            <v-row>
              <v-col cols="12">
                <div class="d-flex justify-center align-center">
                  <span> OCR Usage:</span>
                </div>
                <div
                  class="d-flex justify-center align-center font-weight-bold"
                >
                  <span class="mr-2">Total Processed:</span>
                  <span class="font-weight-bold">11,234</span>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col cols="3">
          <v-card outlined tile height="86px">
            <v-row>
              <v-col cols="12">
                <div class="d-flex justify-center align-center">
                  <span> OCR Usage:</span>
                </div>
                <div
                  class="d-flex justify-center align-center font-weight-bold"
                >
                  <span class="mr-2">Total Processed:</span>
                  <span class="font-weight-bold">11,234</span>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col cols="3">
          <v-card outlined tile height="86px">
            <v-row>
              <v-col cols="12">
                <div class="d-flex justify-center align-center">
                  <span> OCR Usage:</span>
                </div>
                <div
                  class="d-flex justify-center align-center font-weight-bold"
                >
                  <span class="mr-2">Total Processed:</span>
                  <span class="font-weight-bold">11,234</span>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col cols="3">
          <v-card outlined tile height="86px">
            <v-row>
              <v-col cols="12">
                <div class="d-flex justify-center align-center">
                  <span> OCR Usage:</span>
                </div>
                <div
                  class="d-flex justify-center align-center font-weight-bold"
                >
                  <span class="mr-2">Total Processed:</span>
                  <span class="font-weight-bold">11,234</span>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row> -->
      <v-row>
        <v-col cols="6">
          <div>
            <v-card height="300px" tile outlined>
              <apexchart
                height="100%"
                width="95%"
                type="bar"
                :options="chartOptions"
                :series="seriesColumn"
              ></apexchart>
            </v-card>
          </div>
        </v-col>
        <v-col cols="6">
          <div>
            <v-card height="300px" tile outlined>
              <v-card-title class="py-0"
                >Documents uploaded by genre</v-card-title
              >
              <v-divider></v-divider>
              <apexchart
                height="90%"
                width="95%"
                type="donut"
                :options="chartOptionsPie"
                :series="seriesDonut"
              ></apexchart>
            </v-card>
          </div>
        </v-col>
        <v-col cols="6">
          <div>
            <v-card height="300px" tile outlined>
              <v-card-title class="py-0"
                >Documents uploaded over time</v-card-title
              >
              <v-divider></v-divider>
              <apexchart
                height="90%"
                width="95%"
                type="line"
                :options="chartOptions"
                :series="seriesColumn"
              ></apexchart>
            </v-card>
          </div>
        </v-col>
        <v-col cols="6">
          <div>
            <v-card height="300px" tile outlined>
              <v-card-title class="py-0">Affiliated Schools</v-card-title>
              <v-divider></v-divider>
              <v-row class="pa-2">
                <v-col cols="3" v-for="(number, index) in 4" :key="index">
                  <v-card class="pa-1" tile outlined>
                    <v-card tile outlined>
                      <v-img src="../assets/abu.png"></v-img>
                      <v-divider></v-divider>
                      <span class="grey--text text--darken-2 body-2 text-center"
                        >ABU</span
                      >
                    </v-card>
                  </v-card>
                </v-col>
              </v-row>
            </v-card>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data: function() {
    return {
      search: '',
      chartOptions: {
        chart: {
          id: 'vuechart',
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
        },
      },
      chartOptionsPie: {
        chart: {
          type: 'donut',
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: 'bottom',
              },
            },
          },
        ],
        labels: ['Projects', 'Thesis-Dissertations', 'Journals', 'eBooks'],
      },
      seriesColumn: [
        {
          data: [30, 40, 35, 50, 49, 60, 70, 91],
        },
      ],
      seriesDonut: [44, 55, 41, 17],
    }
  },
}
</script>
