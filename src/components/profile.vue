<template>
   <v-container class="">
      <v-row>
        <v-col cols="12" md12>
         <v-card class="ma-5 text-center my-12 " circle elevation-10>
           <v-card-title >
              
           </v-card-title>
           <v-avatar class="mb-4" size="300" circle elevation-12>
             <img src="../assets/avatar-1.png" alt="">
           </v-avatar>
           <h2 class="display-2">Umar Abubakar</h2>
            <h3 class="text-h5 font-weight-light">Kaduna State University</h3>
             <h3 class="text-h5 font-weight-light mb-4">Level 400</h3>
             <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"

    >
      <template v-slot:activator="{ on, attrs }">
        <v-icon
          color="#00a368"
          dark
          v-bind="attrs"
          v-on="on"
          mt-5
        >
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
                <v-text-field
                  label="Edit name"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Edit institution"
                  required
                ></v-text-field>
              </v-col>
                                    
              <v-col
                cols="12"
                sm="6"
              >
                <v-select
                  :items="['100', '200', '300', '400']"
                  label="level"
                  required
                ></v-select>
              </v-col>
  
            </v-row>
          </v-container>
          </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <br>
     <v-card-subtitile class="layout justify-center mt-3"> <v-icon>fas fa-calendar-altr</v-icon> Joined 17th May 2017</v-card-subtitile>
             <br>
                 <v-divider
                   class=""
                 ></v-divider>
              <v-tabs v-model="tab" centered icons-and-text color="#00a368" >
             <v-tab href="#one">
               About
               
             </v-tab>
         <v-tab href="#two">
            institution
         </v-tab>
         </v-tabs>
       <v-tabs-items :value="tab">
      <v-tab-item value="one">
      <v-card-text>
         <v-tabs vertical color="#00a368">
      <v-tab >
        
        Overview
      </v-tab>
    
      <v-tab>
      contact and basic info
       
      </v-tab>
      <v-tab>
        
        Details about you
      </v-tab>
    
      <v-tab-item>
    
        <v-card flat>
         <v-card-text icons-and-text>
           <p>
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem facilis modi natus blanditiis, corrupti tempora dolores inventore laboriosam nam, consequatur in aperiam omnis fuga quod officiis voluptatem dolorum vitae non?
            </p>
             <p>
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem facilis modi natus blanditiis, corrupti tempora dolores inventore laboriosam nam, consequatur in aperiam omnis fuga quod officiis voluptatem dolorum vitae non?
            </p>
             <p>
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem facilis modi natus blanditiis, corrupti tempora dolores inventore laboriosam nam, consequatur in aperiam omnis fuga quod officiis voluptatem dolorum vitae non?
            </p>
             <p>
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem facilis modi natus blanditiis, corrupti tempora dolores inventore laboriosam nam, consequatur in aperiam omnis fuga quod officiis voluptatem dolorum vitae non?
            </p>
             <p>
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem facilis modi natus blanditiis, corrupti tempora dolores inventore laboriosam nam, consequatur in aperiam omnis fuga quod officiis voluptatem dolorum vitae non?
            </p>
             <p>
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem facilis modi natus blanditiis, corrupti tempora dolores inventore laboriosam nam, consequatur in aperiam omnis fuga quod officiis voluptatem dolorum vitae non?
            </p>
            

            <p>
              Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc. Aliquam lobortis. Aliquam lobortis. Suspendisse non nisl sit amet velit hendrerit rutrum.
            </p>

            <p class="mb-0">
              Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Phasellus blandit leo ut odio.
            </p>
          </v-card-text>
        </v-card>
      </v-tab-item>
      
      <v-tab-item>
        <v-card flat>
          
          <v-card-text>
            <p>
              Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis.
            </p>

            <p>
              Suspendisse feugiat. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In hac habitasse platea dictumst. Fusce ac felis sit amet ligula pharetra condimentum.
            </p>

            <p>
              Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Nam commodo suscipit quam. In consectetuer turpis ut velit. Sed cursus turpis vitae tortor. Aliquam eu nunc.
            </p>

            <p>
              Etiam ut purus mattis mauris sodales aliquam. Ut varius tincidunt libero. Aenean viverra rhoncus pede. Duis leo. Fusce fermentum odio nec arcu.
            </p>

            <p class="mb-0">
              Donec venenatis vulputate lorem. Aenean viverra rhoncus pede. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Fusce commodo aliquam arcu. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi.
            </p>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <p>
              Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
            </p>

            <p class="mb-0">
              Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam at tortor in tellus interdum sagittis.
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
      <v-tab color="#00a368">
        
        Overview
      </v-tab>
    
      <v-tab>
      contact and basic info
       
      </v-tab>
      <v-tab>
        
        Details about you
      </v-tab>
    
      <v-tab-item>
    
        <v-card flat>
         <v-card-text icons-and-text>
           <p>
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem facilis modi natus blanditiis, corrupti tempora dolores inventore laboriosam nam, consequatur in aperiam omnis fuga quod officiis voluptatem dolorum vitae non?
            </p>
             <p>
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem facilis modi natus blanditiis, corrupti tempora dolores inventore laboriosam nam, consequatur in aperiam omnis fuga quod officiis voluptatem dolorum vitae non?
            </p>
             <p>
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem facilis modi natus blanditiis, corrupti tempora dolores inventore laboriosam nam, consequatur in aperiam omnis fuga quod officiis voluptatem dolorum vitae non?
            </p>
             <p>
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem facilis modi natus blanditiis, corrupti tempora dolores inventore laboriosam nam, consequatur in aperiam omnis fuga quod officiis voluptatem dolorum vitae non?
            </p>
             <p>
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem facilis modi natus blanditiis, corrupti tempora dolores inventore laboriosam nam, consequatur in aperiam omnis fuga quod officiis voluptatem dolorum vitae non?
            </p>
             <p>
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem facilis modi natus blanditiis, corrupti tempora dolores inventore laboriosam nam, consequatur in aperiam omnis fuga quod officiis voluptatem dolorum vitae non?
            </p>
            

            <p>
              Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc. Aliquam lobortis. Aliquam lobortis. Suspendisse non nisl sit amet velit hendrerit rutrum.
            </p>

            <p class="mb-0">
              Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Phasellus blandit leo ut odio.
            </p>
          </v-card-text>
        </v-card>
      </v-tab-item>
      
      <v-tab-item>
        <v-card flat>
          
          <v-card-text>
            <p>
              Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis.
            </p>

            <p>
              Suspendisse feugiat. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In hac habitasse platea dictumst. Fusce ac felis sit amet ligula pharetra condimentum.
            </p>

            <p>
              Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Nam commodo suscipit quam. In consectetuer turpis ut velit. Sed cursus turpis vitae tortor. Aliquam eu nunc.
            </p>

            <p>
              Etiam ut purus mattis mauris sodales aliquam. Ut varius tincidunt libero. Aenean viverra rhoncus pede. Duis leo. Fusce fermentum odio nec arcu.
            </p>

            <p class="mb-0">
              Donec venenatis vulputate lorem. Aenean viverra rhoncus pede. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Fusce commodo aliquam arcu. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi.
            </p>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <p>
              Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
            </p>

            <p class="mb-0">
              Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam at tortor in tellus interdum sagittis.
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
    name: 'profile',
    data () {
      return {
        dialog: false,
        tab: null,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      }
    },
  }
</script>