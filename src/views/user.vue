<template>
    <v-container>
        <v-row align="center">
            <v-col cols="12 " md6>
                <v-btn class="primary" round large @click="getUser()">
                   fetch users

                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import axios from 'axios'
export default {
    name: 'user',
    method: {
       getUser() {
           console.log('hell')
        axios
        .get("http://192.168.1.4:3000/api/v1/user", )
        .then(function (response) {
          
          console.log("server returns ", response);
        })
        .catch(function (error) {
          console.log("server error ", error);
        });
       }
    }
}
</script>