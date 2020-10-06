<template>
  <v-container class="">
    <v-row>
      <v-col cols="12" md12>
        <v-card class="ma-5 text-center my-12" elevation-10>
          <v-card-title> </v-card-title>
          <v-avatar class="mb-4" size="100" circle elevation-12>
            <img src="../assets/avatar-1.png" alt="" />
          </v-avatar>
          <h2 class="display-2">Umar Abubakar</h2>
          <h3 class="text-h5 font-weight-light"> <v-icon>mdi-email</v-icon> umarabubakar@gmail.com</h3>
          <h3 class="text-h5 font-weight-light"> <v-icon>mdi-school</v-icon> Kaduna State University</h3>
          <v-dialog v-model="dialog" persistent max-width="600px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="#00a368" small outlined dark v-bind="attrs" v-on="on" mt-5>
               <v-icon>mdi-pencil</v-icon> edit
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">Edit Profile</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12">
                      <v-text-field label="Edit name" prepend-icon="mdi-pencil" required></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        label="Edit email"
                        required
                        prepend-icon="mdi-email"

                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        label="Edit institution"
                        required
                        prepend-icon="mdi-school"
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
            <v-tab href="#one"> Researches </v-tab>
            <v-tab href="#two"> About </v-tab>
          </v-tabs>
          <v-tabs-items :value="tab">
            <v-tab-item value="one">
              
              <v-card flat>
                <v-list v-for="item in History" :key="item.id">
                <v-list-item>
                  <v-list-item-avatar :color="item.color" size="100">
                    <v-icon size="50" dark>{{ item.icon }}</v-icon>
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
              
             
            </v-tab-item>
            <v-tab-item value="two">
              <v-card-text>
                <v-tabs vertical color="#00a368">
                    <v-tab> Basic Info </v-tab>
                  <v-tab> Contact Info </v-tab>

                  <v-tab-item>
                    <v-col cols="12">
                    <v-card flat>
                      <v-card-text icons-and-text>
                       <v-list>
                        <v-list-item>
                          <v-list-item-content>
                            <v-list-item-title icon-and-text> <v-icon left> mdi-account</v-icon>Male </v-list-item-title>
                            <v-list-item-subtitle class="ml-3">gender</v-list-item-subtitle>
                          </v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                          <v-list-item-content>
                            <v-list-item-title icon-and-text> <v-icon left> mdi-cake</v-icon>August 2 </v-list-item-title>
                            <v-list-item-subtitle class="ml-3">birth mounth</v-list-item-subtitle>
                          </v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                          <v-list-item-content>
                            <v-list-item-title icon-and-text> <v-icon left> </v-icon>2002</v-list-item-title>
                            <v-list-item-subtitle class="ml-3">birth year</v-list-item-subtitle>
                          </v-list-item-content>
                        </v-list-item>

                       </v-list>
                      </v-card-text>
                    </v-card>
                    </v-col>
                  </v-tab-item>

                  <v-tab-item>
                    <v-card flat>
                      <v-card-text>
                        <v-list>
                          <v-list-item>
                            
                              <v-list-item-title icon-and-text> <v-icon left>mdi-email</v-icon>umar@gmailcom</v-list-item-title><br>
                          </v-list-item>
                                <v-list-item>
                               <v-list-item-title icon-and-text> <v-icon left>mdi-phone</v-icon>07016505825</v-list-item-title>
                                </v-list-item>
                                <v-list-item>
                                <v-list-item-title icon-and-text> <v-icon left>fab fa-invision</v-icon>umar</v-list-item-title>
                                </v-list-item>
                            
                          
                        </v-list>
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
        History: [
      {
        id: 1,
        color: "blue",
        icon: "mdi-file-document",
        title1: "A research on neural networks with backwards propagation",
        
       
      },
      {
        id: 2,
        color: "blue",
        icon: "mdi-file-document",
        title1: "linear regression and SVM",
        
       
      },
      {
        id: 3,
        color: "blue",
        icon: "mdi-file-document",
        title1: "An intensive research on KNN & Random forest",
        
        
      },
      {
        id: 4,
        color: "blue",
        icon: "mdi-file-document",
        title1: "Election violence, a case of 2011 presidential election",
        
       
      },
      {
        id: 5,
        color: "blue",
        icon: "mdi-file-document",
        title1: "A research on neural networks with backwards propagation",
      
       
      },
      {
        id: 6,
        color: "blue",
        icon: "mdi-file-document",
        title1: "linear regression and SVM",
       
        
      },
      {
        id: 7,
        color: "blue",
        icon: "mdi-file-document",
        title1: "An intensive research on KNN & Random forest",
       
       
      },
      {
        id: 8,
        color: "blue",
        icon: "mdi-file-document",
        title1: "Election violence, a case of 2011 presidential election",
       
       
      },
    ],
        
    };
       
  
  }
};
</script>