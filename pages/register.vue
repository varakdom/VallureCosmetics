<template>
  <v-container>
    <v-row>
      <h1 class="title7" style="font-family: 'Poppins', sans-serif;">WELCOME TO THE <Br/> BETTER VOXEL COMMUNITY</h1>
    </v-row>
    <v-row>
      <v-col cols="12" md="6" class="card4">
        <v-card flat max-width="400px">
          <v-card-text>
            <v-form @submit.prevent="register">
              <v-col class="d-flex align-center justify-center">
                <v-text-field
                  v-model="name"
                  label="UserName"
                  outlined
                  required
                  clearable
                  rounded="xl"
                ></v-text-field>
                <v-text-field
                  v-model="email"
                  label="Adresse e-mail"
                  outlined
                  required
                  clearable
                  rounded="xl"
                ></v-text-field>
                <v-text-field
                  v-model="password"
                  label="Mot de passe"
                  outlined
                  required
                  clearable
                  color="#D9D9D9"
                  rounded="xl"
                  @click:append="show1 = !show1"
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="show1 ? 'text' : 'password'"
                  :rules="[rules.required, rules.min]"
                ></v-text-field>
                <v-checkbox
                  v-model="remember"
                  label="Remember me"
                  color="#9A00DA"
                  rounded="xl"
                ></v-checkbox>
                <v-btn type="submit" color="#9A00DA" rounded="xl"  style="font-family: 'Poppins', sans-serif;">
                  Register
                </v-btn>
              </v-col>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col align="center" cols="12" md="6">
        <h1 class="slogan" style="font-family: 'Poppins', sans-serif;">Create Content <Br/> Browse and Play Thousands <Br/> of Games</h1>
        <v-img class="logo" src="/BetterLogo.png" alt="Better Voxel Logo" width="300" height="300" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      show1: false,
      name: '', // Added name field
      password: '',
      email: '', // Added email field
      remember: false,
      rules: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 8 || 'Min 8 characters',
      },
    };
  },
  methods: {
    async register() {
      try {
        const response = await axios.post(`${process.env.API_BASE_URL}/users`, {
          name: this.name,
          email: this.email,
          password: this.password,
        });

        if (response.status === 200) {

          const router = this.$router; 
          router.push('/shop'); 
        }
      } catch (error) {
        console.error('Registration error:', error);
      }
    },
  },
};
</script>



<style>
.title7 {
  font-weight: bold;
  margin-top: 50px;
  font-size: 65px;
  line-height: 72px;
  letter-spacing: 0.1em;
  text-align: center;
  }
.logo {
  margin-left: 20%;
}
.slogan {
  font-size: 50px;
  width: 110%;
  font-weight: 900;
  color: #000000;
  text-align: center;
  margin-top: 30%;
}
.card4{
  margin-top: 20%;
}
</style>
