<template>
  <v-bottom-navigation
    :value="value"
    color="#FFBB4E"
    grow
  >
    <v-btn>
      <v-icon>mdi-home-variant</v-icon>

      <span>홈</span>
    </v-btn>

    <v-btn>
        
      <v-icon>mdi-magnify</v-icon>
      <span>검색</span>

    </v-btn>

    <v-btn>
        
      <v-icon>mdi-food</v-icon>
      <span>메뉴</span>

    </v-btn>

    <v-btn>
        
      <v-icon>mdi-heart-plus-outline</v-icon>
      <span>찜</span>

    </v-btn>
  </v-bottom-navigation>
</template>

<script>
  export default {
    data: () => ({ value: 1 }),
  }
</script>

<style>
   
</style>