<template>
    <v-app class="grey lighten-4">
        <v-container>
            <v-row>
                <v-col cols="12">
                    <span class="text-h4 font-weight-thin">Fund a Research</span>
                </v-col>
                <v-col cols="12" md="6" lg="6">
                    <v-card class="overflow-hidden" outlined tile>
                        <v-toolbar flat color="#00a368">
                                <v-icon color="white" left> mdi-account</v-icon>
                                <v-toolbar-title class="white--text">
                                    Payment Method
                                </v-toolbar-title>
                                <v-spacer></v-spacer>
                        </v-toolbar>
                        <v-card-text>
                                <v-text-field
                                    label="Card number"
                                    prepend-icon="mdi-credit-card"
                                    color="#00a368"
                                ></v-text-field>
                                <v-text-field
                                    :disabled="!isEditing"
                                    label="email"
                                    prepend-icon="mdi-email"
                                    color="#00a368"
                                ></v-text-field>
                                <v-text-field
                                    :disabled="!isEditing"
                                    label="phone"
                                    prepend-icon="mdi-phone"
                                    color="#00a368"
                                ></v-text-field>
                                <v-text-field
                                    :disabled="!isEditing"
                                    label="Expiring Date"
                                    prepend-icon="mdi-credit-card-remove-outline"
                                    color="#00a368"
                                ></v-text-field>
                                <v-text-field
                                    :disabled="!isEditing"
                                    label="CVV"
                                    prepend-icon="mdi-credit-card-check"
                                    color="#00a368"
                                ></v-text-field>
                        </v-card-text>
                        <v-divider></v-divider>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="#00a368" @click="save">
                                    Save
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>

<script>
export default {
    
}
</script>