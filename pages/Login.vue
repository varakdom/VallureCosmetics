<template>
  <v-container class="parent-div" fluid>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="6">
        <v-card flat class="card" height="120" min-width="400">
          <v-list-item>
            <v-list-item-avatar size="100">
              <v-img src="/BetterLogo.png" contain></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <div class="title">Welcome Back</div>
            </v-list-item-content>
          </v-list-item>
        </v-card>
        <v-card flat max-width="400px">
          <v-card-text>
            <v-form @submit.prevent="login">
              <v-col class="d-flex align-center justify-center">
                <v-text-field
                  v-model="email"
                  :rules="[rules.required]"
                  label="Adresse e-mail"
                  outlined
                  required
                  clearable
                  rounded="xl"
                ></v-text-field>
                <v-text-field
                  v-model="password"
                  :rules="[rules.required]"
                  label="Mot de passe"
                  outlined
                  required
                  clearable
                  rounded="xl"
                  type="password"
                ></v-text-field>
                <div class="align-self-center">
                  <v-checkbox
                    v-model="remember"
                    label="Remember me"
                    color="#9A00DA"
                    rounded="xl"
                  ></v-checkbox>
                  <v-btn type="submit" color="#0074E6" rounded="xl" class="btn-text">
                    Se connecter
                  </v-btn>
                </div>
              </v-col>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';
import users from '../users';

export default {
  data() {
    return {
      email: '',
      password: '',
      remember: false,
      rules: {
        required: value => !!value || 'Field is required'
      }
    };
  },
  methods: {
    async login() {
      if (!process.env.API_BASE_URL) {
        console.log('email:', this.email)
        console.log('password:', this.password)
        this.checkLocalUsers();
        return;
      }
      await this.authenticateUser();
    },
    async authenticateUser() {
      try {
        const response = await axios.post(
          `${process.env.API_BASE_URL}/users/authenticate`,
          {
            email: this.email,
            password: this.password
          }
        );
        if (response.status === 200) {
          const userData = response.data;
          this.$store.dispatch('setUser', userData);
          localStorage.setItem('userData', JSON.stringify(userData));
          this.$router.push('/shop');
        } else {
          console.error('Invalid response:', response);
        }
      } catch (error) {
        this.handleError(error);
      }
    },
    checkLocalUsers() {
      const user = users.find(u => u.mail === this.email && u.password === this.password);
      if (user) {
        this.$store.dispatch('setUser', user);
        localStorage.setItem('userData', JSON.stringify(user));
        this.$router.push('/shop');
      } else {
        console.error('Invalid local credentials');
      }
    },
    handleError(error) {
      if (error.response) {
        console.error('Error response:', error.response.data);
      } else if (error.request) {
        console.error('No response from server:', error.request);
      } else {
        console.error('Error:', error.message);
      }
    }
  }
};
</script>

<style scoped>
.card {
  margin-top: -10%;
  margin-left: -10%;
}

.parent-div {
  display: flex;
  align-items: center;
  width: 100%;
  position: absolute;
  left: 35%;
  margin-top: 10%;
}

.title {
  font-weight: bold;
  font-size: 75px;
  line-height: 72px;
  letter-spacing: 0.1em;
}

.btn-text {
  font-family: 'Poppins', sans-serif;
}
</style>
