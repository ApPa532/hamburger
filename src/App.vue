<template>
  <v-app>
    <v-main>
     <router-view />
    </v-main>
    <MyFooter />
  </v-app>
</template>

<script>
import MyFooter from "./components/BottomMenu.vue";

export default {
  
  name: 'App',
  
 components: {

    MyFooter
  },

  data: () => ({
    //
    
  }),
}
</script>

