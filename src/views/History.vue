<template>
  <v-app class="grey lighten-4">
     <v-container fluid>
      <v-row>
        <v-col cols="12" md="8" sm="8">
          <span class="text-h4 font-weight-thin">Reading History</span>
        </v-col>
        <v-col cols="12" md="12" sm="12">
          <v-card>
            <v-card-title class="font-weight-light">
              <!-- Available Grants -->
              <v-spacer></v-spacer>
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
              ></v-text-field>
            </v-card-title>
            <v-data-table :headers="headers" :items="research" :search="search">
              <template v-slot:item.cont="">
                <v-progress-linear
                    v-model="percentage"
                    height="18" color="#00a368">
                    <strong>{{ Math.ceil(percentage) }}%</strong>
                </v-progress-linear>
              </template>
              <template v-slot:item.controls="props">
                <v-btn class="ma-2" color="#00a368" @click="onButtonClick(props.item)">
                  Resume
                </v-btn>
              </template>

              <!-- <template v-slot:item.knowledge="{ knowledge }">
                <v-chip :color="getColor(item.knowledge)" dark>
                  {{ item.calories }}
                </v-chip>
              </template> -->
            </v-data-table>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>


<script>
export default {
  data() {
    return {
      search: "",
      skill: 20,
      power: 78,
      percentage: 50,
      headers: [
        {
          text: "Title",
          align: "start",
          sortable: false,
          value: "name",
        },

        { text: "Progress", value: "cont", sortable: false  },
        { text: "Page", value: "page" },
        { text: "", value: "controls", sortable: false }
      ],
      research: [
        {
          name: "The Role of cloud computing in educational sector",
          date: "24/10/2020",
          percentage: 50,
          page: 10,
        },
        {
          name: "Implementing cloud computing storage in tertiary institution",
          date: "31/09/2020",
          percentage: 20,
          page: 5
          },
        {
          name: "Monitoring cyber attacks in institution",
          date: "31/09/2020",
          percentage: 70,
          page: 35 
        },
        {
          name: "Configuring router using VLAN Protocol",
          date: "31/09/2020",
          percentage: 20,
          page: 22 
        },
        {
          name: "Ethical hacking as a course in education",
          date: "31/09/2020",
          percentage: 31,
          page: 31
        },
        {
          name: "Cyber Security and protecting of banks information",
          date: "31/09/2020",
          percentage: 3,
          page: 3 
        },
        {
          name: "Implementing Javascript in Backend using Node.js",
          date: "31/09/2020",
          percentage: 80,
          page: 40 
        },
        {
          name: "Subnetting organisation computers and IP addressing",
          date: "31/09/2020",
          percentage: 95,
          page: 70 
        },
        {
          name: "Rising insecurity in Nigeria",
          date: "31/09/2020",
          percentage: 55,
          page: 36 
        },
        {
          name: "Cost benefit analysis of cloud computing in education",
          date: "31/09/2020",
          percentage: 24,
          page: 12 
        },
      ],
    };
  },
};
</script>