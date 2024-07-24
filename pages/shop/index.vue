<template>
  <v-app id="shop" style="display: flex;
  align-items: center;
  width: 100%; margin-top: 1%;">
    <v-main >
      <v-container fluid>
        <v-row>
          <v-col cols="12" md="2">
            <v-card class="py-2 px-3">
              <v-radio-group v-model="creator">
                <template v-slot:label>
                  <h3 class="title2" >Creator:</h3>
                </template>
                <v-radio value="all">
                  <template v-slot:label>
                    <div class="title2">
                      <strong>All</strong>
                    </div>
                  </template>
                </v-radio>
                <v-text-field placeholder="search ...." v-model="name"></v-text-field>
              </v-radio-group>
              <v-divider thickness="20"></v-divider>
              <v-radio-group v-model="Price">
                <template v-slot:label>
                  <h3 class="title2">Price:</h3>
                </template>
                <v-radio value="Any">
                  <template v-slot:label>
                    <div class="title2">
                      <strong>Any</strong>
                    </div>
                  </template>
                </v-radio>
                <v-radio value="Free">
                  <template v-slot:label>
                    <div class="title2">
                      <strong>Free</strong>
                    </div>
                  </template>
                </v-radio>
                <v-text-field placeholder="Min" v-model="min"></v-text-field>
                <v-text-field placeholder="Max" v-model="max"></v-text-field>
              </v-radio-group>
              <v-divider thickness="20"></v-divider>
              <v-radio-group v-model="sortBy">
                <template v-slot:label>
                  <h3 class="title2">Sort By:</h3>
                </template>
                <v-radio value="Name">
                  <template v-slot:label>
                    <div class="title2">
                      <strong>Name</strong>
                    </div>
                  </template>
                </v-radio>
                <v-radio value="Priceb">
                  <template v-slot:label>
                    <div class="title2">
                      <strong>Price</strong>
                    </div>
                  </template>
                </v-radio>
                <v-radio value="Liked">
                  <template v-slot:label>
                    <div class="title2">
                      <strong>Most Liked</strong>
                    </div>
                  </template>
                </v-radio>
                <v-radio value="Recent">
                  <template v-slot:label>
                    <div class="title2">
                      <strong>Most Recent</strong>
                    </div>
                  </template>
                </v-radio>
                <v-radio value="Selled">
                  <template v-slot:label>
                    <div class="title2">
                      <strong>Best Selling</strong>
                    </div>
                  </template>
                </v-radio>
              </v-radio-group>
              <v-divider thickness="20"></v-divider>
              <v-radio-group v-model="order">
                <template v-slot:label>
                  <h3 class="title2">Sort Order:</h3>
                </template>
                <v-radio value="ascending">
                  <template v-slot:label>
                    <div class="title2">
                      <strong>Ascending</strong>
                    </div>
                  </template>
                </v-radio>
                <v-radio value="descending">
                  <template v-slot:label>
                    <div class="title2">
                      <strong>Descending</strong>
                    </div>
                  </template>
                </v-radio>
              </v-radio-group>
            </v-card>
          </v-col>
          <v-col cols="12" md="10">
            <v-row>
              <v-col
                v-for="(product, id) in filteredProducts"
                :key="id"
                cols="12"
                md="4"
                sm="6"
                lg="3"
              >
              <v-hover v-slot:default="{ isHovering, props }">
                <v-card
                  v-bind="props"
                  class="mx-auto rounded-xl elevation-7"
                  height="475px"
                  width="335px"
                  @mouseover="showFullImage(product.id)"
                  @mouseleave="hideFullImage(product.id)"
                  @click="showOverlay(product)"
                >
                  <template v-if=isHovering>
                    <v-carousel
                      v-model="carouselIndex"
                      hide-delimiters
                      class="fill-height"
                      :cycle="shouldCycle(product.id)" 
                      interval="2000"
                    >
                      <v-carousel-item
                        v-for="(image, index) in product.images"
                        :key="index"
                      >
                        <v-img
                          :src="image"
                          height="475px"
                          cover
                        ></v-img>
                      </v-carousel-item>
                    </v-carousel>
                  </template>
                  <template v-else>
                    <v-img
                      :src="product.images[0]"
                      class="fill-height"
                      height="335px"
                      cover
                    ></v-img>
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
                  </template>
                </v-card>
              </v-hover> 
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <v-overlay :z-index="9999" :value="showOverlay" v-click-outside="hideOverlay" v-model="overlay" location-strategy="connected"
        scroll-strategy="close">
      <v-card v-if="selectedProduct" height="130%" width="60%" class="mx-auto rounded-xl elevation-7" >
        <v-carousel
          v-model="carouselIndex"
          hide-delimiters
          class="fill-height"
          :cycle="shouldCycle(selectedProduct.id)" 
          interval="1000"
        >
          <v-carousel-item
            v-for="(image, index) in selectedProduct.images"
            :key="index"
          >
            <v-img
              :src="image"
              height="475px"
              width="580px"
              cover
            ></v-img>
          </v-carousel-item>
        </v-carousel>
        <v-card-title class="title2">
          {{ selectedProduct.name }}
        </v-card-title>
        <v-card-text style="font-family: 'Poppins', sans-serif;">
          <div class="title2">Description: {{ selectedProduct.description }}</div>
          <div>Price: {{ selectedProduct.price }}</div>
          <div>Liked: {{ selectedProduct.liked }}</div>
          <div>Sold: {{ selectedProduct.selled }}</div>
          <div>Creator: {{ selectedProduct.creator }}</div>
        </v-card-text>
        <v-card-actions style="font-family: 'Poppins', sans-serif;">
          <v-btn color="orange" text @click="hideOverlay">Get For {{ selectedProduct.price }}
            <v-img src="/cube.png" width="25" height="25" contain></v-img>
          </v-btn>
          <v-btn color="orange" text @click="hideOverlay">Add to Favoris
            <v-icon icon="mdi-plus"></v-icon>
          </v-btn>

          <v-btn color="orange" text @click="hideOverlay">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-overlay>
  </v-app>
</template>

<script>
import { ref, computed } from 'vue';
import { VClickOutside } from 'v-click-outside';
import data from '../../data';

export default {
  directives: {
    VClickOutside,
  },
  setup() {
    const sortBy = ref('');
    const Price = ref('');
    const order = ref('ascending');
    const products = ref(data);
    const name = ref('');
    const min = ref('');
    const max = ref('');
    const creator = ref('all');
    const hoveredProductId = ref(null);
    const activeCarousels = ref([]);
    const carouselIndex = ref(0);
    const selectedProduct = ref(null);
    const overlay = ref(false);
const filteredProducts = computed(() => {
  let tempProducts = products.value;
  if (name.value !== '') {
    tempProducts = tempProducts.filter((product) => {
      return product.creator.toLowerCase().includes(name.value.toLowerCase());
    });
  }
  if (Price.value === 'Free') {
    tempProducts = tempProducts.filter((product) => {
      return product.price === 0;
    });
  }
  if (Price.value === 'Any') {
    tempProducts = tempProducts.filter((product) => {
      return product.price >= 0;
    });
  }
  if (min.value !== '') {
    tempProducts = tempProducts.filter((product) => {
      return product.price >= min.value;
    });
  }
  if (max.value !== '') {
    tempProducts = tempProducts.filter((product) => {
      return product.price <= max.value;
    });
  }
  if (sortBy.value === 'Name') {
    tempProducts = tempProducts.sort((a, b) => {
      if (order.value === 'ascending') {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });
  }
  if (sortBy.value === 'Priceb') {
    tempProducts = tempProducts.sort((a, b) => {
      if (order.value === 'ascending') {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
  }
  if (sortBy.value === 'Recent') {
    tempProducts = tempProducts.sort((a, b) => {
      if (order.value === 'ascending') {
        return a.date - b.date;
      } else {
        return b.date - a.date;
      }
    });
  }
  if (sortBy.value === 'Liked') {
    tempProducts = tempProducts.sort((a, b) => {
      if (order.value === 'ascending') {
        return a.liked - b.liked;
      } else {
        return b.liked - a.liked;
      }
    });
  }
  if (sortBy.value === 'Selled') {
    tempProducts = tempProducts.sort((a, b) => {
      if (order.value === 'ascending') {
        return a.selled - b.selled;
      } else {
        return b.selled - a.selled;
      }
    });
  }
  return tempProducts;
});


function showFullImage(productId) {
  hoveredProductId.value = productId;
  startCarousel(productId);
}

function hideFullImage(productId) {
  hoveredProductId.value = null;
  stopCarousel(productId);
}

function startCarousel(id) {
  if (!activeCarousels.value.includes(id)) {
    activeCarousels.value.push(id);
  }
}

function stopCarousel(id) {
  const index = activeCarousels.value.indexOf(id);
  if (index !== -1) {
    activeCarousels.value.splice(index, 1);
  }
}

function shouldCycle(id) {
  return activeCarousels.value.includes(id);
}

function showOverlay(product) {
  console.log('showOverlay');
  selectedProduct.value = product;
  overlay.value = true;
}

function hideOverlay() {
  console.log('hideOverlay');
  selectedProduct.value = null;
  overlay.value = false;
}

    return {
      sortBy,
      Price,
      order,
      products,
      name,
      min,
      max,
      creator,
      hoveredProductId,
      activeCarousels,
      showOverlay,
      carouselIndex,
      filteredProducts,
      showFullImage,
      hideFullImage,
      startCarousel,
      stopCarousel,
      shouldCycle,
      overlay,
      selectedProduct,
      hideOverlay,
    };
  },
};
</script>

<style>
.title2 {
    font-size: 100%;
    font-family: 'Poppins', sans-serif;

  }
  .card {
    font-size: 150%;
    font-family: 'Poppins', sans-serif;

    text-align: center;
    margin-right: 35%;
  }
  .card2 {
    font-size: 150%;
    font-family: 'Poppins', sans-serif;

    text-align: center;
    margin-right: 35%;
  }
  .logo {
    margin-left: 20%;
    margin-top: 6%;
  }
  .logo2 {
    margin-left: 28%;
    margin-top: 4%;
  }
</style>
