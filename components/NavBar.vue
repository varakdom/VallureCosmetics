<template>
  <v-col>
    <v-toolbar
        class="rounded-xl"
        title="VallureCosmectics"
        height="150"
        flat
        fixed
      >
       
        
        <v-spacer></v-spacer>
        <v-toolbar-side-icon>
          <v-img class="logo" src="/banniere.JPG" alt="Better Voxel Logo" width="200" height="200" />
        </v-toolbar-side-icon>
        <v-spacer></v-spacer>
        <template v-if="!isLoggedIn">
          <v-col cols="auto">
            <v-btn @click="$router.push('/login')" rounded="xl"  color="#0074E6" class="title2">Login</v-btn>
          </v-col>
          <v-cols cols="auto">
            <v-btn @click="$router.push('/register')" rounded="xl" color="#9A00DA" class="title2">Register</v-btn>
          </v-cols>
        </template>
        <template v-else>
          <v-avatar class="ma-2" size="50" >
            <v-img @click="$router.push('/profile')" :src="userData.img" alt="Avatar"></v-img>
          </v-avatar>
          <v-btn text @click="$router.push('/setting/account')" class="title2">@{{ userData.pseudo }}</v-btn >
          <v-col cols="auto">
            <v-btn text @click="logout" rounded="xl" class="ma-2 title2">Logout</v-btn>
          </v-col>
        </template>
    </v-toolbar>
    <v-spacer></v-spacer>

    <v-row>
      <v-spacer></v-spacer>
      <v-card-title class="title3">Welcome To V'S Allure  
      </v-card-title>
      <v-spacer></v-spacer>
    </v-row>
    <v-row>
      <v-spacer></v-spacer>
      <v-card-subtitle class="title4">Unveil Your Radiance,Embrace Your Allure</v-card-subtitle>
      <v-spacer></v-spacer>
    </v-row>
    <v-divider thickness="70"></v-divider>

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
    font-family: 'Poppins', sans-serif;
  }
  .title4 {
    font-size: 45px;
    line-height: 45px;
    margin-left: 2%;
    font-family: 'Poppins', sans-serif;
  }
</style>