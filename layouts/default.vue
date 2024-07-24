<template>
  <div>
    <NavBar/>
    <v-main>
      <Nuxt />
    </v-main>
    <v-footer
      app
      fixed
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </div>
    
</template>

<script>
export default {
    name: "DefaultLayout"
}
</script>

<style scoped>
  #app{
    font-family: 'Poppins', sans-serif;
  }
</style>
