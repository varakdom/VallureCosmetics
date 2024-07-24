<template>
    <v-container>
      <v-row>
        <v-col cols="12" md="3">
          <v-list dense>
            <v-list-item-group v-model="selectedItem" color="primary" style="font-family: 'Poppins', sans-serif;">
              <v-list-item v-for="(item, index) in items" :key="index" @click="selectedItem = index">
                <v-list-item-content>
                  <v-list-item-title>{{ item }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-col>
  
        <v-col cols="12" md="9">
          <v-card>
            <v-card-title>
                Account Information Content
            </v-card-title>
            <v-card-subtitle>
                <v-card-text>
                    <v-row v-model="userData">
                        <v-col cols="12" md="6">
                            <v-text-field
                                label="First Name"
                                outlined
                                :value="userData.prenom"
                                dense
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="6">
                            <v-text-field
                                label="Last Name"
                                :value="userData.nom"
                                outlined
                                dense
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="6">
                            <v-text-field
                                label="Email"
                                :value="userData.mail"
                                outlined
                                dense
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="6">
                            <v-text-field
                                label="Phone Number"
                                :value="userData.numeroTelephone"
                                outlined
                                dense
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="6">
                            <v-text-field
                                label="Pseudo"
                                :value="userData.pseudo"
                                outlined
                                dense
                            ></v-text-field>
                        </v-col>

                        <v-col cols="12" md="6">
                            <v-text-field
                                label="date de naissance"
                                :value="userData.dateNaissance"
                                outlined
                                dense
                            ></v-text-field>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        userData: {},
        selectedItem: 0,
        items: [
          'Account Information',
          'Security',
          'Confidentiality',
          'Facturation',
          'Parental Control',
          'Permission'
        ]
      };
    },
    mounted() {
        // Retrieve user data from localStorage
        this.userData = JSON.parse(localStorage.getItem('userData'));
        console.log(this.userData)
    }
  };
  </script>
  
  <style scoped>
  </style>
  