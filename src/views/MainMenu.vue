<template>
  <div>
    <div id="nav"><!--nav_main-->
      <div>
        <div class="menu">
            <!-- <img src="../img/header_menu.png" alt="메뉴" width="26" height="20"> -->
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="logo" style="padding-left:20px">
                   <img :src="Header1" />

        </div>
        <div class="mypage">
                   <router-link to="/login">  <img :src="Header3" /></router-link>

        </div>
      </div>
  </div>



    <div id="sec_wrap">
      <div class="sec1">
        <router-link to="/submenu1">
          <img :src="secUrl1" />
        </router-link>
      </div>
 

      <div class="sec2">
        <router-link to="/submenu2">
           <img :src="secUrl2" />
          <h3>어디 버거?</h3>
          <p>새로 나온 버거 살펴보기</p>
        </router-link>
      </div>

      <div class="sec3">
        <router-link to="/submenu3">
         <img :src="secUrl3" />
          <h3>오늘 뭐 버거?</h3>
          <p>버거 검색하기</p>
        </router-link>
      </div>

      <div class="sec4">
        <router-link to="./views/mainmenu.vue">
          <img :src="secUrl4" />
          <h3>인기 버거!</h3>
          <p>주로 찾는 버거</p>
        </router-link>
      </div>

      <div class="sec5">
        <router-link to="/submenu4">
        <img :src="secUrl5" />
          <h3>찜!</h3>
          <p>이 중에 골라버거!</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
data() {
  return {
    Header1: require("../assets/header_logo.svg"),

    Header3: require("../assets/mypage.svg"),

    secUrl1: require("../assets/sec1.png"),
    secUrl2: require("../assets/sec2.png"),
    secUrl3: require("../assets/sec3.png"),
    secUrl4: require("../assets/sec4.png"),
    secUrl5: require("../assets/sec5.png")

  }
},
};
</script>
  
<style>
html {
  margin: 0;
  border: 0;
 padding: 0;
 outline: none;
}
a{
    text-decoration: none;
}

#nav{
  width: 100%;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  border: 1px solid #000;
}
#nav > div{
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
#nav .menu{
  width: 26px;
  height: 21px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
}
#nav .menu span:nth-child(1){
  display: block;
  width: 18px;
  height: 1px;
  border-bottom: 3px solid #000000;
  border-radius: 50px;
}
#nav .menu span:nth-child(2){
  display: block;
  width: 26px;
  height: 1px;
  border-bottom: 3px solid #000000;
  border-radius: 50px;
}
#nav .menu span:nth-child(3){
  display: block;
  width: 14px;
  height: 1px;
  border-bottom: 3px solid #000000;
  border-radius: 50px;
}

#sec_wrap {
  width: 50%;
  height: auto;
  margin: 70px auto;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-auto-rows: minmax(auto, auto);
  grid-template-areas:
    "sec1 sec1 sec1 sec1 sec1 sec1"
    "sec2 sec2 sec2  sec3 sec3 sec3"
    "sec2 sec2 sec2 sec3 sec3 sec3"
    "sec2 sec2 sec2 sec5 sec5 sec5"
    "sec2 sec2 sec2 sec5 sec5 sec5"
    "sec4 sec4 sec4 sec5 sec5 sec5"
    "sec4 sec4 sec4 sec5 sec5 sec5"
    
    
    ;
  gap: 15px;

  

}
.sec1 {
  grid-area: sec1;
}
.sec2 {
  grid-area: sec2;
}
.sec3 {
  grid-area: sec3;
}
.sec4 {
  grid-area: sec4;
}
.sec5 {
  grid-area: sec5;
}
.sec1 img, .sec2 img, .sec3 img, .sec4 img, .sec5 img{
width: 100%;
}
h3{
    color: #000000;
    font-weight: bold;
    margin-top: 5px;
    
}
p{
    color: #000000;
    margin-top: 5px;
    margin-bottom: -5px;
}
</style>