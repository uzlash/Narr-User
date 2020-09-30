<template>
  <v-app class="grey lighten-4">
    <v-container fluid>
      <v-row>
        <v-col cols="12" md="8" sm="8">
          <span class="text-h4 font-weight-thin">Research Grants</span>
        </v-col>
        <v-col cols="12" md="12" sm="12">
          <v-card>
            <v-card-title class="font-weight-light">
              Available Grants
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
      headers: [
        {
          text: "Title",
          align: "start",
          sortable: false,
          value: "name",
        },

        { text: "Uploaded Date", value: "date" },
        { text: "Time", value: "time" },
        { text: "Price (N)", value: "price" },
      ],
      research: [
        {
          name: "The Role of cloud computing in educational sector",
          date: "24/10/2020",
          time: "54 minutes ago",
          price: "N" + 70000,
        },
        {
          name: "Implementing cloud computing storage in tertiary institution",
          date: "31/09/2020",
          time: "24 minutes ago",
          price: "N" + 150000,
        },
        {
          name: "Monitoring cyber attacks in institution",
          date: "31/09/2020",
          time: "24 minutes ago",
          price: "N" + 80000,
        },
        {
          name: "Configuring router using VLAN Protocol",
          date: "31/09/2020",
          time: "24 minutes ago",
          price: "N" + 5000,
        },
        {
          name: "Ethical hacking as a course in education",
          date: "31/09/2020",
          time: "24 minutes ago",
          price: "N" + 10000,
        },
        {
          name: "Cyber Security and protecting of banks information",
          date: "31/09/2020",
          time: "24 minutes ago",
          price: "N" + 9000000,
        },
        {
          name: "Implementing Javascript in Backend using Node.js",
          date: "31/09/2020",
          time: "24 minutes ago",
          price: "N" + 800000,
        },
        {
          name: "Subnetting organisation computers and IP addressing",
          date: "31/09/2020",
          time: "24 minutes ago",
          price: "N" + 120000,
        },
        {
          name: "Rising insecurity in Nigeria",
          date: "31/09/2020",
          time: "24 minutes ago",
          price: "N" + 135000,
        },
        {
          name: "Cost benefit analysis of cloud computing in education",
          date: "31/09/2020",
          time: "24 minutes ago",
          price: "N" + 400000,
        },
      ],
    };
  },
};
</script>