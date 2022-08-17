<template>
  <div>
    <div id="open_menu" v-if="openmenu == true">
      <div class="menuwrap">
        <div class="close" @click="openmenu = false">
          <div class="close_btn">
            <div></div>
            <div></div>
          </div>
        </div>
        <div class="profile">
          <img :src="Profile" alt="프로필" width="121" height="121">
          <h2>버거싶다</h2>
        </div>
        <div class="menu0">
          <div>
            <router-link class="menu1" to="/">로그아웃</router-link>
          </div>
          <div>
            <router-link class="menu1" to="/">마이페이지</router-link>
          </div>
        </div>
        <div class="copy">
          <h1>Copyright 2022. Team 3 . All rights reserved.</h1>
        </div> 
      </div>
    </div>


    <div id="nav"><!--nav_main-->
      <div>
        <div class="menu" @click="openmenu = true">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="logo" style="padding-left:20px">
          <img :src="Header1" width="54" height="38" />
        </div>
        <div class="mypage">
          <router-link to="/login" class="mypage"></router-link>
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
        <router-link to="./submenu4">
          <img :src="secUrl4" />
          <h3>인기 버거!</h3>
          <p>주로 찾는 버거</p>
        </router-link>
      </div>

      <div class="sec5">
        <router-link to="/submenu5">
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
      openmenu : false,
      Profile: require("../assets/open_profile.png"),
      Header1: require("../assets/header_logo.svg"),

      secUrl1: require("../assets/sec1.png"),
      secUrl2: require("../assets/sec2.png"),
      secUrl3: require("../assets/sec3.png"),
      secUrl4: require("../assets/sec4.png"),
      secUrl5: require("../assets/sec5.png")
    };
  }
};
</script>
  
<style>
html {
  margin: 0;
  border: 0;
  padding: 0;
  outline: none;

}
a {
  text-decoration: none;
}

/* 메뉴열리는거 시작 */
#open_menu{
  position: fixed;
  z-index: 99;
  width: 50%;
  height: 100vh;
  background: #E52A2A;
  display: flex;
  justify-content: center;
}
.menuwrap{
  width: 80%;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
}

/* 닫기버튼 */
.close{
  width: 100%;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.close_btn{
  width: 30px;
  height: 30px;
  position: relative;
}
.close_btn div:nth-child(1){
  position: absolute;
  top: 50%;
  left: 0px;
  width: 30px;
  height: 1px;
  border-bottom: 3px solid #ffffff;
  transform: rotate(45deg);
  border-radius: 50px;
}
.close_btn div:nth-child(2){
  position: absolute;
  top: 50%;
  left: 0px;
  width: 30px;
  height: 1px;
  border-bottom: 3px solid #ffffff;
  transform: rotate(-45deg);
  border-radius: 50px;
}

/* 프로필 */
.profile{
  width: 100%;
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
}
.profile h2{
  font-weight: 600;
  font-size: 30px;
  color: #FFFFFF;
}

/* 메뉴 */
.menu0{
  width: 100%;
  display: flex;
  align-items: center;
  gap: 25px 0;
  flex-direction: column;
}
.menu0 .menu1{
  font-weight: 500;
  font-size: 18px;
  color: #FFFFFF;
}
/* 카피라이트 */
#open_menu .copy{
  width: 100%;
  height: 100px;
}
#open_menu .copy h1{
  text-align: center;
  font-weight: 400;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.788);
}

/* 헤더 */
.mypage{
  width: 50px;
  height: 50px;
  background: url(../assets/profile_burger.svg) no-repeat center center #ffffff;
  border-radius: 50%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

#nav{
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  border-bottom: 1px solid #E9E9E9;
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
}/* 메뉴끝 */

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
    "sec4 sec4 sec4 sec5 sec5 sec5";
  gap: 15px;
  max-width: 945px;
  min-width: 360px;
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
.sec1 img,
.sec2 img,
.sec3 img,
.sec4 img,
.sec5 img {
  width: 100%;
}
h3 {
  color: #000000;
  font-weight: bold;
  margin-top: 5px;
}
p {
  color: #000000;
  margin-top: 5px;
  margin-bottom: -5px;
}
</style>