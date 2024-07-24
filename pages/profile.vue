<template>
  <div class="parent-div" fluid>
      <v-col>
      <v-row width="100%">
        <v-card min-width="900px"  class="card">
          <v-list-item>
            <v-list-item-avatar size="200" rounded="xl" style="margin-left: 10%;">
              <img :src="userData.userThumbnail" >
            </v-list-item-avatar>
            <v-list-item-content>
              <v-card-title class="title" style="font-family: 'Poppins', sans-serif;">
                {{ userData.userName }}
              </v-card-title>
              <v-card-subtitle class="mb-3" style="font-family: 'Poppins', sans-serif;">
                @{{ userData.userTag }}
              </v-card-subtitle>
              <v-list-item-title class="mb-1"  style="font-family: 'Poppins', sans-serif;">
                <span>
                  <strong>{{ userData.friendsCount }}</strong> friends 
                </span>&nbsp;&nbsp;
                <span class="ml-2">
                  <strong>{{ userData.followersCount }}</strong> followers 
                </span>&nbsp;&nbsp;
                <span class="ml-2">
                  <strong>{{ userData.followingCount }}</strong> following 
                </span>
              </v-list-item-title>
          </v-list-item-content>
          <v-btn color="white"  flat outlined style="font-family: 'Poppins', sans-serif;">
            Message
          </v-btn>&nbsp;&nbsp;

          <v-btn color="white" flat outlined style="font-family: 'Poppins', sans-serif;">
            Add Friend
          </v-btn>
          </v-list-item>
        </v-card>
      </v-row>&nbsp;&nbsp;
      <v-row>
        <v-card class="card2" flat>
          <v-list-item>
            <v-list-item-content>
              <v-btn color="white" text @click="setTheme('creation')" style="font-family: 'Poppins', sans-serif;">
                Creation
              </v-btn>
              <template v-if="themes === 'creation'">
                <v-divider></v-divider>
              </template>
            </v-list-item-content>&nbsp;&nbsp;
            <v-list-item-content>
              <v-btn color="white" text @click="setTheme('avatar')" style="font-family: 'Poppins', sans-serif;">
                Avatar
              </v-btn>
              <template v-if="themes === 'avatar'">
                <v-divider></v-divider>
              </template>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-row>&nbsp;&nbsp;
        
    <v-card style="margin-top: 2%;" flat outlined>
  <v-card-title>
    <h1>{{ cardTitle }}</h1>
  </v-card-title>
  <v-list-item>
    <v-list-item-content>
      <v-card
        class="d-flex align-center"
        dark
        height="500"
        width="500" 
      >
        <v-img
          :src="selectedImage"
          alt="Image"
          style="max-width: 100%; max-height: 100%;"
          cover
        />
      </v-card>
    </v-list-item-content>
    <v-list-item-content>
      <v-item-group active-class="primary">
        <v-container>
          <v-row>
            <v-col
              v-for="(image, index) in  paginatedImages"
              :key="index"          
              cols="2"
              md="3"
            >
              <v-item>
                <v-card
                  class="d-flex align-center"
                  dark
                  height="200"
                  width="200" 
                  @click="selectImage(image.src)"
                >
                <v-img
                
                  :src="image.src"
                  alt="Image"
                  style="max-width: 100%; max-height: 100%;"
                  cover
                />
                </v-card>
              </v-item>
            </v-col>
          </v-row>
          <v-row justify="center" class="mt-4">
            <v-col cols="12" class="text-center">
              <v-pagination
                v-model="page"
                :length="pageCount"
                rounded="circle"
              ></v-pagination>
            </v-col>
          </v-row>
        </v-container>
      </v-item-group>
    </v-list-item-content>
  </v-list-item>
</v-card>

<v-card flat>
  <v-list-item>
    <v-list-item-content>
     <v-list-item-title style="font-family: 'Poppins', sans-serif;">
        <h1>Statistics</h1>
     </v-list-item-title>
    </v-list-item-content>
    <v-list-item-content style="margin-top: 10%;">
      <v-list-item-subtitle style="font-size: 25px; font-family: 'Poppins', sans-serif;">
       <span >Join Date </span>
       <v-spacer></v-spacer>
        <strong>{{ date }}</strong>
      </v-list-item-subtitle>
    </v-list-item-content>
    <v-list-item-content style="margin-top: 10%;">
      <v-list-item-subtitle style="font-size: 25px; font-family: 'Poppins', sans-serif;">
       <span>Place visits</span>
        <v-spacer></v-spacer>
        <strong>{{ visited }}</strong>
      </v-list-item-subtitle>
    </v-list-item-content>
  </v-list-item>
</v-card>
    
  </v-col>
  </div>
</template>
  
  <script>
  import {ref, computed } from 'vue';

  export default {
    setup() {
      const selectedImage = ref('/image1.png');
      const themes = ref('creation');
      const itemsPerPage = ref(8);
      const page = ref(1);
      const images = [
          { src: '/BetterLogo.png' },
          { src: '/image2.png' },
          { src: '/image4.png' },
          { src: '/Png.png' },
          { src: '/cube.png' },
          { src: '/image1.png' },
          { src: '/image3.png' },
          { src: '/image5.png' },
          { src: '/image3.png' },
          { src: '/image2.png' },
          { src: '/image1.png' },
          { src: '/image2.png' },
          { src: '/image1.png' },
          { src: '/image3.png' },
          { src: '/image5.png' },
          { src: '/image4.png' },
        ];
      const cardTitle = computed(() => {
        console.log(themes.value);
        if (themes.value === 'creation') {
          return 'Creations';
        } else if (themes.value === 'avatar') {
          return 'Avatars';
        }
        // Add more cases if needed
      });
      const paginatedImages = computed(() => {
        const startIndex = (page.value - 1) * itemsPerPage.value;
        const endIndex = startIndex + itemsPerPage.value;
        return images.slice(startIndex, endIndex);
      });

      const pageCount = computed(() => Math.ceil(images.length / itemsPerPage.value));


      return { themes, cardTitle, selectedImage, page, itemsPerPage, paginatedImages, pageCount };
    },
    data() {
      return {
        userData: {},
      };
    },
    mounted() {
        // Retrieve user data from localStorage
        this.userData = JSON.parse(localStorage.getItem('userData'));
    },
    methods: {
      selectImage(imageSrc) {
        this.selectedImage = imageSrc;
      },
      setTheme(theme) {
        this.themes = theme;
      },
    },
  };
  </script>
  
  <style scoped>

 .parent-div {
  display: flex;
  align-items: center;
  width: 100%;
}

.card{
  width: 100%;
  top: 10px;
}

.card2{
  width: 100%;
}

.title {
  font-weight: bolder;
  font-size: 50px;
}

  </style>
  