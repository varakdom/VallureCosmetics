<template>
  <v-col>
    <v-toolbar
        class="rounded-xl"
        title="VallureCosmectics"
        height="350"
        color="#FFFBFA"
        fixed
        elevation="7"
        extended
      >
       
        <v-col>
          <v-row>
            <v-spacer></v-spacer>
            <v-toolbar-side-icon>
              <v-img class="logo" src="/banniere.JPG" alt="Better Voxel Logo" width="200" height="200" />
            </v-toolbar-side-icon>
            <v-spacer></v-spacer>
            <v-app-bar-nav-icon style="margin-top: 7%;"></v-app-bar-nav-icon>
          </v-row>
          
          <v-row>
            <v-spacer></v-spacer>
            <v-card-title class="title3">WELCOME TO V'S ALLURE</v-card-title>
            <v-spacer></v-spacer>
          </v-row>
          <v-row>
            <v-spacer></v-spacer>
            <v-card-subtitle class="title4">Unveil your radiance, embrace your allure</v-card-subtitle>
            <v-spacer></v-spacer>
          </v-row>
          <v-spacer></v-spacer>
        </v-col>
        
      </v-toolbar>
  </v-col>
</template>

<script setup>
    
</script>

<script>
export default {
    name: 'NavBar',
    computed: {
      isLoggedIn() {
        return !!this.$store.state.user;
      }
    },
    methods: {
        logout() {
            localStorage.removeItem('userData');
            this.$router.push('/login');
        }
    },
    data() {
      return {
          userData: {}
      }
    },
    mounted() {
        // Retrieve user data from localStorage
        this.userData = JSON.parse(localStorage.getItem('userData'));
    }
}
</script>

<style>
.title1 {
  font-weight: bold;
  font-size: 45px;
  line-height: 72px;
  margin-left: 2%;
  letter-spacing: 10%;
  font-family: 'Poppins', sans-serif;
  }
  .title2 {
    font-weight: bold;
    font-size: 45px;
    line-height: 72px;
    font-family: 'Poppins', sans-serif;
  }
  .title3 {
    font-weight: bold;
    margin-top: 2%;
    margin-right: 8%;
    font-size: 45px;
    line-height: 72px;
    font-family: 'Camila', sans-serif;
  }
  .title4 {
    font-size: 45px;
    margin-left: 2%;
    font-family: 'Exo Slab Pro', serif;
  }
</style>