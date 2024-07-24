<template>
  <v-container class="pa-4 text-center">
    <v-row
      class="fill-height"
      align="center"
      justify="center"
    >
      <template v-for="(product, i) in items">
        <v-col
          :key="i"
          cols="12"
          md="4"
        >
          <v-hover v-slot="{ hover }">
            <v-card
              :elevation="hover ? 12 : 2"
              height="475px"
              width="335px"
            >
              <v-img
                :src="product.images[0]"
                :height="hover ? 475 : 335"
                cover
              ></v-img>
              <div v-show="!hover">
                <v-col xs9>
                <v-row class="d-flex justify-center">
                  <v-img src="/BetterLogo.png" width="25" height="25" contain class="logo"></v-img>
                  <v-card-title class="card">
                    {{ product.name }}
                  </v-card-title>
                </v-row>
              </v-col>
              <v-col Xs9>
                <v-row class="d-flex justify-center">
                  <v-img src="/cube.png" width="25" height="25" contain class="logo2"></v-img>
                  <v-card-subtitle class="card2">{{ product.price }}</v-card-subtitle>
                </v-row>
              </v-col>
              </div>
            </v-card>
          </v-hover>
        </v-col>
      </template>
    </v-row>
  </v-container>
</template>

<script>
import data from '../data';
 export default {
    setup() {
      return { items: data };
    },
    data: () => ({
      icons: ['mdi-rewind', 'mdi-play', 'mdi-fast-forward'],
      transparent: 'rgba(255, 255, 255, 0)',
    }),
  }
</script>



<style>
 .v-img {
    height: 475px;
  }

  .v-img:not(.on-hover) {
    height: 335px;
  }

</style>
