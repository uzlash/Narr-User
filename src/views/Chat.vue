
<template>
  <v-app class="grey lighten-4">
    <v-container fluid>
      <v-row>
        <v-col cols="12" md="8" sm="8">
          <v-timeline>
            <v-timeline-item v-for="n in 3" :key="n" color="#00a368" large>
              <template v-slot:opposite>
                <span>Today</span>
              </template>
              <v-card class="elevation-2">
                <v-card-title class="headline"> Lorem ipsum </v-card-title>
                <v-card-text>
                  Lorem ipsum dolor sit amet, no nam oblique veritus. Commune
                  scaevola imperdiet nec ut, sed euismod convenire principes at.
                  Est et nobis iisque percipit, an vim zril disputando
                  voluptatibus, vix an salutandi sententiae.
                </v-card-text>
              </v-card>
            </v-timeline-item>
          </v-timeline>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "chat",
};
</script>