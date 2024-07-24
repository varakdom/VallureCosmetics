<template>
    <v-container>
      <v-row>
        <v-col cols="12" md="3">
          <v-list dense>
            <v-list-item-group v-model="selectedItem" color="primary" style="font-family: 'Poppins', sans-serif;">
              <v-list-item v-for="(item, index) in items" :key="index" @click="switchcard(index)">
                <v-list-item-content>
                  <v-list-item-title>{{ item }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
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
    }, methods: {
      switchcard(index) {
        console.log(index)
        this.selectedItem = index
        switch(index) {
          case 0: 
          this.$router.push('/setting/account')
          break;
          case 1:
          $router.push('/setting/security')
          break;
          case 2:
          $router.push('/setting/confidentiality')
          break;
          case 3:
          this.$router.push('/setting/facturation')
          break;
          case 4:
          $router.push('/setting/parentalcontrol')
          break;
          case 5:
          $router.push('/setting/permission')
          break;
        }
      }
    }
  };
  </script>
  
  <style scoped>
  </style>
  