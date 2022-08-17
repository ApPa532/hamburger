<template>
  <v-app>
    <v-main>
      <Splash :isLoading="isLoading" />
      <router-view v-if="!isLoading" />
    </v-main>
    <MyFooter />
  </v-app>
</template>

<script>
import MyFooter from "./components/BottomMenu.vue";
import Splash from "./components/Splash.vue"; //로드

export default {
  name: "App",

  components: {
    MyFooter,
    Splash,
  },

  data: () => ({
    //
    isLoading: true,
  }),

  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 2500);
  },
};
</script>