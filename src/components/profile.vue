<template>
  <v-container class="">
    <v-row>
      <v-col cols="12" md12>
        <v-card class="ma-5 text-center my-12" elevation-10>
          <v-card-title> </v-card-title>
          <v-avatar class="mb-4" size="300" circle elevation-12>
            <img src="../assets/avatar-1.png" alt="" />
          </v-avatar>

          <h1>Umar Abubakar</h1>

          <v-row justify="center">
            <div>
              <v-list>
                <v-list-item>
                   <v-list-item-content> 
                    <v-list-item-title icon-and-text>
                      <h3 class="text-h6 font-weight-light" display-4>
                        <v-icon>mdi-email</v-icon>
                        umarabubakarrg@gmail.com
                      </h3></v-list-item-title
                    >
                  </v-list-item-content>
                </v-list-item>
              </v-list>
              <v-list-item>
                 <v-list-item-content>
                  <v-list-item-title icon-and-text>
                    <h3 class="text-h6 font-weight-light">
                      <v-icon class="pa-2">fas fa-graduation-cap</v-icon>
                      Kaduna state university
                    </h3></v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>
            </div>
          </v-row>
          <v-dialog v-model="dialog" persistent max-width="600px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn tile color="success" v-bind="attrs" v-on="on" small>
                <v-icon left> mdi-pencil </v-icon>
                Edit
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
                      <v-text-field
                        label="Edit name"
                        required
                        prepend-icon="edit"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        label="Edit email"
                        required
                        prepend-icon="email"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        label="Edit institution"
                        required
                        prepend-icon="edit"
                      ></v-text-field>
                    </v-col>

                    <!-- <v-col cols="12" sm="6">
                      <v-select
                        :items="['100', '200', '300', '400']"
                        label="level"
                        required
                      ></v-select>
                    </v-col> -->
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
            <v-tab href="#two"> About</v-tab>
          </v-tabs>
          <v-tabs-items :value="tab">
            <v-tab-item value="one">
              <v-card flat>
                <v-col cols="12" md6>
                  <v-card-subtitle>8 Researches</v-card-subtitle>
                  <v-list>
                    <v-list v-for="item in History" :key="item.id">
                      <v-list-item>
                        <v-list-item-avatar :color="item.color" size="200" tile>
                          <v-avatar>{{item.avatar}}</v-avatar>
                        </v-list-item-avatar>
                        <v-list-item-content>
                          <v-list-item-title class="font-weight-light">{{
                            item.title1
                          }}</v-list-item-title>
                          <v-list-item-subtitle class="font-weight-light">{{
                            item.subtitle1
                          }}</v-list-item-subtitle>
                          <v-list-item-subtitle class="font-weight-light">{{
                            item.subtitle2
                          }}</v-list-item-subtitle>
                        </v-list-item-content>
                        <v-list-item-content align="right">
                          <v-list-item-title
                            
                            >{{ item.title2 }}</v-list-item-title
                          >
                         
                        </v-list-item-content>
                      </v-list-item>
                      <v-divider ></v-divider>
                    </v-list>
                  </v-list>
                </v-col>
              </v-card>
            </v-tab-item>
            <v-tab-item value="two">
              <v-card-text>
                <v-tabs vertical color="#00a368" xs12>
                  <v-container grid-list-xs>
                    <v-flex xs5>
                      <v-tab> Basic Info </v-tab>
                       <v-tab> Contact info </v-tab>
                    </v-flex>
                    
                  </v-container>
                  <!-- <v-tab> Basic Info </v-tab>
                  <v-tab> Contact info </v-tab> -->
                  <v-tab-item>
                  <v-col cols="12"> 
                    <v-row justify="center">
                      
                        <v-list>
                          <v-list-item>
                             <v-list-item-content>
                              <v-list-item-title>
                                <h3 class="text-h5 font-weight-light">
                                  <v-icon class="pa-2">fas fa-user</v-icon>
                                  Male
                                 </h3></v-list-item-title
                              >
                              <v-list-tile-sub-title class="grey--text" 
                                >gender</v-list-tile-sub-title
                              >
                            </v-list-item-content>
                          </v-list-item>
                        </v-list>
                        <v-list-item>
                            <v-list-item-content>
                            <v-list-item-title>
                              <h3 class="text-h5 font-weight-light">
                                <v-icon class="pa-2">fas fa-birthday-cake</v-icon>
                                August 2
                              </h3></v-list-item-title
                            >
                            <v-list-tile-sub-title class="grey--text"
                              >birth date</v-list-tile-sub-title
                            >
                          </v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                          <v-list-item-action>
                            <v-icon></v-icon>
                          </v-list-item-action>
                          <v-list-item-content>
                            <v-list-item-title>
                              <h3 class="text-h5 font-weight-light">
                                2002
                              </h3></v-list-item-title
                            >
                            <v-list-tile-sub-title class="grey--text"
                              >birth year</v-list-tile-sub-title
                            >
                          </v-list-item-content>
                        </v-list-item>
                      
                    </v-row>
                  </v-col>
                  </v-tab-item>
                       <v-tab-item class="ml-3">
                        <v-container grid-list-xs >
                          <v-flex align-content-start>
                          <v-card flat >
                         <v-list >
                          <v-list-item>
                             <v-list-item-content>
                              <v-list-item-title icon-and-text>
                                <h3 class="text-h5 font-weight-light">
                                  <v-icon>mdi-email</v-icon>
                                  umarabubakarrg@gmail.com
                                </h3></v-list-item-title
                              >
                            </v-list-item-content>
                          </v-list-item>
                        </v-list>
                        <v-list-item>
                           <v-list-item-content>
                            <v-list-item-title icon-and-text>
                               <h3 class="text-h5 font-weight-light">
                                <v-icon>fas fa-phone-square-alt</v-icon>
                                07016505825
                              </h3></v-list-item-title
                            >
                          </v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                           <v-list-item-content>
                            <v-list-item-title>
                              <h3 class="text-h5 font-weight-light">
                                <v-icon>fab fa-linkedin</v-icon>
                                Umar Abubakar
                              </h3></v-list-item-title
                            >
                          </v-list-item-content>
                        </v-list-item>
                      </v-card>
                        
                     
                          </v-flex>
                           </v-container> 
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
          title1: "A research on neural networks with backwards propagation",
          subtitle1: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate explicabo dolorum accusantium quaerat in qui fuga nulla officiis voluptates exercitationem, ullam eligendi ut sequi doloremque architecto! Amet ducimus fugit quas?",
          subtitle2: "2nd august",
          avatar: ""
        },
        {
          id: 2,
          color: "blue",
          title1: "linear regression and SVM",
          subtitle1: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate explicabo dolorum accusantium quaerat in qui fuga nulla officiis voluptates exercitationem, ullam eligendi ut sequi doloremque architecto! Amet ducimus fugit quas?",
          subtitle2: "18 sep",
        },
        {
          id: 3,
          color: "blue",
          title1: "An intensive research on KNN & Random forest",
          subtitle1: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate explicabo dolorum accusantium quaerat in qui fuga nulla officiis voluptates exercitationem, ullam eligendi ut sequi doloremque architecto! Amet ducimus fugit quas?",
          subtitle2: "14 april",
        },
        {
          id: 4,
          color: "blue",
          title1: "Election violence, a case of 2011 presidential election",
          subtitle1: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate explicabo dolorum accusantium quaerat in qui fuga nulla officiis voluptates exercitationem, ullam eligendi ut sequi doloremque architecto! Amet ducimus fugit quas?",
          subtitle2: "12 jan",
        },
        {
          id: 5,
          color: "blue",
          title1: "A research on neural networks with backwards propagation",
          subtitle1: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate explicabo dolorum accusantium quaerat in qui fuga nulla officiis voluptates exercitationem, ullam eligendi ut sequi doloremque architecto! Amet ducimus fugit quas?",
          subtitle2: "12 jan",
        },
        {
          id: 6,
          color: "blue",
          title1: "linear regression and SVM",
          subtitle1: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate explicabo dolorum accusantium quaerat in qui fuga nulla officiis voluptates exercitationem, ullam eligendi ut sequi doloremque architecto! Amet ducimus fugit quas?",
          subtitle2: "11 jan",
        },
        {
          id: 7,
          color: "blue",
          title1: "An intensive research on KNN & Random forest",
           subtitle1: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate explicabo dolorum accusantium quaerat in qui fuga nulla officiis voluptates exercitationem, ullam eligendi ut sequi doloremque architecto! Amet ducimus fugit quas?",
          subtitle2: "21 jan",
        },
        {
          id: 8,
          color: "blue",
          title1: "Lorem ipsum dolor sit, amet cons",
          subtitle1: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate explicabo dolorum accusantium quaerat in qui fuga nulla officiis voluptates exercitationem, ullam eligendi ut sequi doloremque architecto! Amet ducimus fugit quas?",
          subtitle2: "16 feb",
          
        },
      ],
    };
  },
};
</script>