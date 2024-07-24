<template>
    <div>
        <v-card class="mx-auto" >
            <v-img src="/images.jpg" max-height="169" cover class="image-container">
                <div class="centered-content">
                    <v-card-title class="voxtitle">Buy VoxCoin</v-card-title>
                    <v-card-subtitle class="voxtitle">VoxCoin allows you to purchase assets and plugins for your game or to purchase a game if you are a Player.</v-card-subtitle>
                </div>
            </v-img>
        </v-card>
        <v-simple-table height="600px">
            <template v-slot:default>
            <thead>
                <tr>
                    <th>
                    </th>
                    <th>VoxCoin Packages</th>
                    <th>Subscribe and Get More</th>
                </tr>
            </thead>
            <tbody justify-center>
                <tr
                v-for="(p, id) in prix"
                :key="id"
                >
                <td>${{ p.cost }} &nbsp;&nbsp;</td>
                <td> <v-btn width="20%">
                                <v-img src="/cube.png" width="25" height="25" contain></v-img>
                                {{p.voxcoin}}</v-btn> </td>
                <td><v-btn width="20%">
                                <v-img src="/cube.png" width="25" height="25" contain></v-img>
                                {{p.subscribe}}/month</v-btn></td>
                </tr>
            </tbody>
            </template>
        </v-simple-table>
    </div>
</template>

<script>
import NavBar from '~/components/NavBar.vue';

export default {
  components: {
    NavBar
  },
  name: 'VoxcoinPage',
  data() {
    return {
      prix: [{id: 1 ,cost: 4.99, voxcoin: 400, subscribe: 450},
      {id: 2 ,cost: 9.99, voxcoin: 800, subscribe: 1000},
      {id: 3 ,cost: 19.99, voxcoin: 1700, subscribe: 2200},
      {id: 4 ,cost: 49.99, voxcoin: 4500, subscribe: 6000},
      {id: 5 ,cost: 99.99, voxcoin: 10000, subscribe: 12800},
      {id: 6 ,cost: 199.99, voxcoin: 22500, subscribe: 28600}],
    };
  },
  
}
</script>

<style scoped>
.full-height {
    height: 100vh;
}

.image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}

.centered-content {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    left: 1%; /* décale le contenu vers la gauche */
    top: 20%;
} 

.voxtitle {
  font-weight: bold;
  font-size: 30px;
  line-height: 40px;
  letter-spacing: 3%;
  font-family: 'Poppins', sans-serif;
  color: #fff;
  }
</style>
