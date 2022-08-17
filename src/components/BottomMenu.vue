<template>
  <v-bottom-navigation
    :value="value"
    color="#FFBB4E"
    grow
  >
   
      <v-btn to="/">
       
        <v-icon>mdi-home-variant</v-icon>
  
        
        
         <span>홈</span>
      </v-btn>
  

    <v-btn to="submenu3">
        
      <v-icon>mdi-magnify</v-icon>
      <span>검색</span>

    </v-btn>

    <v-btn to="submenu1">
        
      <v-icon>mdi-food</v-icon>
      <span>메뉴</span>

    </v-btn>

    <v-btn to="submenu5">
        
      <v-icon>mdi-heart-plus-outline</v-icon>
      <span>찜</span>

    </v-btn>
  </v-bottom-navigation>
</template>

<script>
  export default {
    name: 'FooTer',
    data: () => ({ value: 1 }),
  }
</script>

<style>
   
</style>