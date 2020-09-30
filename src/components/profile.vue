<template>
  <v-container class="">
    <v-row>
      <v-col cols="12" md12>
        <v-card class="ma-5 text-center my-12" elevation-10>
          <v-card-title> </v-card-title>
          <v-avatar class="mb-4" size="300" circle elevation-12>
            <img src="../assets/avatar-1.png" alt="" />
          </v-avatar>
          <h2 class="display-2">Umar Abubakar</h2>
          <h3 class="text-h5 font-weight-light">Kaduna State University</h3>
          <v-dialog v-model="dialog" persistent max-width="600px">
            <template v-slot:activator="{ on, attrs }">
              <v-icon color="#00a368" dark v-bind="attrs" v-on="on" mt-5>
                fas fa-user-edit
              </v-icon>
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">Edit Profile</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12">
                      <v-text-field label="Edit name" required></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        label="Edit institution"
                        required
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="dialog = false">
                  Close
                </v-btn>
                <v-btn color="blue darken-1" text @click="dialog = false">
                  Save
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <br />
          <v-card-subtitile class="layout justify-center mt-3">
            <v-icon>fas fa-calendar-altr</v-icon> Joined 17th May
            2017</v-card-subtitile
          >
          <br />
          <v-divider class=""></v-divider>
          <v-tabs v-model="tab" centered icons-and-text color="#00a368">
            <v-tab href="#one"> About </v-tab>
            <v-tab href="#two"> institution </v-tab>
          </v-tabs>
          <v-tabs-items :value="tab">
            <v-tab-item value="one">
              <v-card-text>
                <v-tabs vertical color="#00a368">
                  <v-tab> Overview </v-tab>

                  <v-tab> contact and basic info </v-tab>
                  <v-tab> Details about you </v-tab>

                  <v-tab-item>
                    <v-card flat>
                      <v-card-text icons-and-text>
                        <p class="mb-0">
                          Phasellus dolor. Fusce neque. Fusce fermentum odio nec
                          arcu. Pellentesque libero tortor, tincidunt et,
                          tincidunt eget, semper nec, quam. Phasellus blandit
                          leo ut odio.
                        </p>
                      </v-card-text>
                    </v-card>
                  </v-tab-item>

                  <v-tab-item>
                    <v-card flat>
                      <v-card-text>
                        <p class="mb-0">
                          Donec venenatis vulputate lorem. Aenean viverra
                          rhoncus pede. In dui magna, posuere eget, vestibulum
                          et, tempor auctor, justo. Fusce commodo aliquam arcu.
                          Suspendisse enim turpis, dictum sed, iaculis a,
                          condimentum nec, nisi.
                        </p>
                      </v-card-text>
                    </v-card>
                  </v-tab-item>
                  <v-tab-item>
                    <v-card flat>
                      <v-card-text>
                        <p class="mb-0">
                          Cras sagittis. Phasellus nec sem in justo pellentesque
                          facilisis. Proin sapien ipsum, porta a, auctor quis,
                          euismod ut, mi. Donec quam felis, ultricies nec,
                          pellentesque eu, pretium quis, sem. Nam at tortor in
                          tellus interdum sagittis.
                        </p>
                      </v-card-text>
                    </v-card>
                  </v-tab-item>
                </v-tabs>
              </v-card-text>
            </v-tab-item>
            <v-tab-item value="two">
              <v-card-text>
                <v-tabs vertical color="#00a368">
                  <v-tab color="#00a368"> Overview </v-tab>

                  <v-tab> contact and basic info </v-tab>
                  <v-tab> Details about you </v-tab>

                  <v-tab-item>
                    <v-card flat>
                      <v-card-text icons-and-text>
                        <p class="mb-0">
                          Phasellus dolor. Fusce neque. Fusce fermentum odio nec
                          arcu. Pellentesque libero tortor, tincidunt et,
                          tincidunt eget, semper nec, quam. Phasellus blandit
                          leo ut odio.
                        </p>
                      </v-card-text>
                    </v-card>
                  </v-tab-item>

                  <v-tab-item>
                    <v-card flat>
                      <v-card-text>
                        <p class="mb-0">
                          Donec venenatis vulputate lorem. Aenean viverra
                          rhoncus pede. In dui magna, posuere eget, vestibulum
                          et, tempor auctor, justo. Fusce commodo aliquam arcu.
                          Suspendisse enim turpis, dictum sed, iaculis a,
                          condimentum nec, nisi.
                        </p>
                      </v-card-text>
                    </v-card>
                  </v-tab-item>
                  <v-tab-item>
                    <v-card flat>
                      <v-card-text>
                        <p class="mb-0">
                          Cras sagittis. Phasellus nec sem in justo pellentesque
                          facilisis. Proin sapien ipsum, porta a, auctor quis,
                          euismod ut, mi. Donec quam felis, ultricies nec,
                          pellentesque eu, pretium quis, sem. Nam at tortor in
                          tellus interdum sagittis.
                        </p>
                      </v-card-text>
                    </v-card>
                  </v-tab-item>
                </v-tabs>
              </v-card-text>
            </v-tab-item>
          </v-tabs-items>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "profile",
  data() {
    return {
      dialog: false,
      tab: null,
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    };
  },
};
</script>