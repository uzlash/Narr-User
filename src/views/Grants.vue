<template>
  <v-card>
    <v-card-title>
      Uploaded Documents
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="research"
      :search="search"
    ></v-data-table>
  </v-card>
</template>


<script>
  export default {
    data () {
      return {
        search: '',
        headers: [
          {
            text: 'Title',
            align: 'start',
            sortable: false,
            value: 'name',
          },

          { text: 'Uploaded Date', value: 'date' },
          { text: 'Time', value: 'time' },
          { text: 'Action', value: 'action' },
          
        ],
        research: [
          {
            name: 'The Role of cloud computing in educational sector',
            date: '24/10/2020',
            time: '54 minutes ago',
            action: 4.0,
          },
          {
            name: 'Implementing cloud computing storage in tertiary institution',
            date: '31/09/2020',
            time: '24 minutes ago',
            action: 4.0,
          },
          {
            name: 'Monitoring cyber attacks in institution',
            date: '31/09/2020',
            time: '24 minutes ago',
            action: 4.0,
          },
          {
            name: 'Configuring router using VLAN Protocol',
            date: '31/09/2020',
            time: '24 minutes ago',
            action: 4.0,
          },
          {
            name: 'Ethical hacking as a course in education',
            date: '31/09/2020',
            time: '24 minutes ago',
            action: 4.0,
          },
          {
            name: 'Cyber Security and protecting of banks information',
            date: '31/09/2020',
            time: '24 minutes ago',
            action: 4.0,
          },
          {
            name: 'Implementing Javascript in Backend using Node.js',
            date: '31/09/2020',
            time: '24 minutes ago',
            action: 4.0,
          },
          {
            name: 'Subnetting organisation computers and IP addressing',
            date: '31/09/2020',
            time: '24 minutes ago',
            action: 4.0,
          },
          {
            name: 'Rising insecurity in Nigeria',
            date: '31/09/2020',
            time: '24 minutes ago',
            action: 4.0,
          },
          {
            name: 'Cost benefit analysis of cloud computing in education',
            date: '31/09/2020',
            time: '24 minutes ago',
            action: 4.0,
          },
        ],
      }
    },
  }
</script>