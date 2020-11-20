<template>
  <v-app class="grey lighten-4">
    <v-container class="">
      <v-row>
        <v-col cols="12">
          <v-card class="mx-auto" flat>
            <v-img
              height="250"
              src="https://miro.medium.com/max/1146/1*KhUes1b3TtkStUXseSseEA.png"
            ></v-img>
            <v-card-title>Support SVM & Regression Research</v-card-title>
            <v-card-text>
              <v-row align="center" class="mx-0"> </v-row>
              <div>
                <span class="body-1"
                  >Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Incidunt molestias nostrum ab dolorem saepe alias voluptatum
                  recusandae nemo ratione esse!</span
                >
              </div>
            </v-card-text>
            <v-divider class="mx-4"></v-divider>
            <div class="px-4 py-2">
              <span class="body-1 font-weight-light">Funding</span>
              <v-progress-linear
                class="my-2"
                color="#00a368"
                height="10"
                value="30"
              ></v-progress-linear>
              <span class="font-weight-bold">N7,000,000</span> raised of
              <span class="font-weight-bold">N10,000,000 </span>
            </div>
          </v-card>
        </v-col>

        <v-col cols="12">
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">
                    Name
                  </th>
                  <th class="text-left">
                    Funds Donated
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in fundings" :key="item.title">
                  <td>{{ item.title }}</td>
                  <td class="green--text">N{{ item.donations }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      fundings: [
        {
          title: "Bill and Melinda Foundation",
          donations: 100000,
        },
        {
          title: "Prof Ishaq Bala",
          donations: 55000,
        },
        {
          title: "Mr Musa Damu",
          donations: 20000,
        },
        {
          title: "Dangote Group",
          donations: 1300000,
        },
        {
          title: "John Doe",
          donations: 10900,
        },
        {
          title: "Dr Hamisu Dauda",
          donations: 250000,
        },
      ],
    };
  },
};
</script>
