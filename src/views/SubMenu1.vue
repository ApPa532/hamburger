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
        <div class="mypage">
          <router-link to="/login" class="mypage"></router-link>
        </div>
      </div>
    </div>

    <div id="wrap">
      <span class="title">취향대로 골라 버거!</span>
      <!-- 타이틀 -->

      <div class="topping">
        <div class="tp_box tp_box1">
          <div class="tp_img tp_img0">
            <img src="../assets/beef.png" alt />
          </div>
          <span>패티</span>
          <div class="plus">
            <i class="fa-solid fa-plus"></i>
          </div>
          <!-- 누르면 체크 아이콘으로 변경될 + 아이콘 -->
        </div>

        <div class="tp_box tp_box2">
          <div class="tp_img tp_img1">
            <img src alt />
          </div>
          <span>치즈</span>
          <div class="plus">
            <i class="fa-solid fa-plus"></i>
          </div>
          <!-- 누르면 체크 아이콘으로 변경될 + 아이콘 -->
        </div>

        <div class="tp_box tp_box3">
          <div class="tp_img tp_img2">
            <img src alt />
          </div>
          <span>브랜드</span>
          <div class="plus">
            <i class="fa-solid fa-plus"></i>
          </div>
          <!-- 누르면 체크 아이콘으로 변경될 + 아이콘 -->
        </div>
      </div>
      <!-- 재료선택 박스 -->

      <div class="txt_card">
        <div class="tc">
          <i class="fa-solid fa-check"></i>
          <span>치즈</span>
        </div>
        <div class="tc">
          <i class="fa-solid fa-check"></i>
          <span>소고기</span>
        </div>
      </div>

      <!-- 작은 텍스트 박스 -->

      <div class="menu_card">
        <div class="mc mc1">
          <div class="sub1_burger sub1_burger0">
            <img src="../assets/card_burger1.png" alt />
          </div>
          <div class="mc_brand">
            <span class="brand b_txt">맥도날드</span>
            <span class="b_name b_txt">쿼터파운더 치즈</span>
          </div>
          <div class="mc_set">
            <span class="b_txt">세트</span>
            <span class="b_txt">단품</span>
          </div>
          <div class="mc_price">
            <span class="set_price b_txt">7,500 ₩</span>
            <span class="one_price b_txt">5,500 ₩</span>
          </div>
          <div class="wish">
            <i class="fa-solid fa-heart"></i>
          </div>
        </div>

        <div class="mc mc2">
          <div class="sub1_burger sub1_burger1">
            <!-- <img src="" alt="서브1버거" /> -->
          </div>
          <div class="mc_brand">
            <span class="brand b_txt">맥도날드</span>
            <span class="b_name b_txt">더블 쿼터파운더 치즈</span>
          </div>
          <div class="mc_set">
            <span class="b_txt">세트</span>
            <span class="b_txt">단품</span>
          </div>
          <div class="mc_price">
            <span class="set_price b_txt">7,500 ₩</span>
            <span class="one_price b_txt">5,500 ₩</span>
          </div>
          <div class="wish">
            <i class="fa-solid fa-heart"></i>
          </div>
        </div>

        <div class="mc mc3">
          <div class="sub1_burger sub1_burger2">
            <!-- <img src="" alt="서브1버거" /> -->
          </div>
          <div class="mc_brand">
            <span class="brand b_txt">버거킹</span>
            <span class="b_name b_txt">치즈와퍼</span>
          </div>
          <div class="mc_set">
            <span class="b_txt">세트</span>
            <span class="b_txt">단품</span>
          </div>
          <div class="mc_price">
            <span class="set_price b_txt">7,500 ₩</span>
            <span class="one_price b_txt">5,500 ₩</span>
          </div>
          <div class="wish">
            <i class="fa-solid fa-heart"></i>
          </div>
        </div>

        <div class="mc mc4">
          <div class="sub1_burger sub1_burger3">
            <!-- <img src="" alt="서브1버거" /> -->
          </div>
          <div class="mc_brand">
            <span class="brand b_txt">버거킹</span>
            <span class="b_name b_txt">베이컨 치즈와퍼</span>
          </div>
          <div class="mc_set">
            <span class="b_txt">세트</span>
            <span class="b_txt">단품</span>
          </div>
          <div class="mc_price">
            <span class="set_price b_txt">7,500 ₩</span>
            <span class="one_price b_txt">5,500 ₩</span>
          </div>
          <div class="wish">
            <i class="fa-solid fa-heart"></i>
          </div>
        </div>

        <div class="mc mc5">
          <div class="sub1_burger sub1_burger4">
            <!-- <img src="" alt="서브1버거" /> -->
          </div>
          <div class="mc_brand">
            <span class="brand b_txt">롯데리아</span>
            <span class="b_name b_txt">클래식 치즈버거</span>
          </div>
          <div class="mc_set">
            <span class="b_txt">세트</span>
            <span class="b_txt">단품</span>
          </div>
          <div class="mc_price">
            <span class="set_price b_txt">7,500 ₩</span>
            <span class="one_price b_txt">5,500 ₩</span>
          </div>
          <div class="wish">
            <i class="fa-solid fa-heart"></i>
          </div>
        </div>
      </div>
      <!-- 버거메뉴 목록 -->
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
      chip1: true,
      chip4: true,
    };
  }
};
</script>

<style>

* {
  margin: 0;
  padding: 0;
  color: #a1814d;
   
}

#wrap {
  /* width: 100%; */
min-width: 360px;
  margin: 0 auto;
 max-width: 945px;
}

.title {
  display: block;
  width: auto;
  text-align: center;
  font-size: 1.7em;
  font-weight: bold;
  color: black;
}
.topping {
  width: 100%;
  height: 200px;
  margin: 20px auto;
  padding: 0 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
}
.tp_box {
  width: 100px;
  height: 190px;
  border-radius: 65px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: 2px solid #ffbb4e;
}
.tp_box > span {
  font-size: 1.2em;
  font-weight: bold;
  margin-bottom: 10px;
}
.tp_img {
  width: 105px;
  height: 105px;
  border-radius: 50%;
}
.tp_img0 {
  background: url(../assets/beef.png) no-repeat;
  background-size: cover;
}
.tp_img1 {
  background: url(../assets/cheese.png) no-repeat;
  background-size: 80%;
  background-position: 50%;
}
.tp_img2 {
  background: url(../assets/brand_logos.png) no-repeat;
  background-size: 80%;
  background-position: 50%;
}
.plus {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  
  border: 2px solid #ffbb4e;
  font-size: 1.5em;
  line-height: 32px;

  text-align: center;
}
.plus i {
  margin: 0 auto;
  width: 100%;
}
/* 재료박스 */

.txt_card {
  width: 100%;
  height: 30px;
  margin-bottom: 20px;
  padding: 0 20px;

  display: flex;
  box-sizing: border-box;
}
.tc {
  width: auto;
  height: 30px;
  padding: 0 10px;
  margin-right: 10px;
  border-radius: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid #ffbb4e;
}
.tc > i {
  width: 10px;
  height: 10px;
  margin-right: 5px;
}
/* 작은 텍스트 박스 */

.menu_card {
  width: 100%;
  padding: 0 20px 0 20px;
  display: flex;
  flex-direction: column;
  gap: 1em;
  box-sizing: border-box;
}
.mc {
  width: 100%;
  height: 101px;
  border-radius: 10px;
  padding: 0 20px;
  box-sizing: border-box;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border: 1px solid #ffbb4e;
  box-shadow: inset -5px -5px 10px rgba(0, 0, 0, 0.15);

  /*  background: white; */
}

.sub1_burger {
  width: 70px;
  height: 60px;
  background-size: 190%;
}
.sub1_burger0 {
  background-image: url(../assets/card_burger1.png);
  background-position: 50% 80%;
}
.sub1_burger1 {
  background-image: url(../assets/card_burger2.png);
  background-position: 50% 80%;
  background-size: 170%;
}
.sub1_burger2 {
  background-image: url(../assets/card_burger3.png);
  background-position: 50% 80%;
  background-size: 150%;
}
.sub1_burger3 {
  background-image: url(../assets/card_burger4.png);
  background-position: 50% 80%;
  background-size: 150%;
}
.sub1_burger4 {
  background-image: url(../assets/card_burger5.jpg);
  background-position: 50% 80%;
  background-size: 90%;
}
.mc_brand {
  width: 120px;
  margin-top: 5px;
  text-align: left;
  font-size: 0.9em;
}
.b_name {
  font-weight: bold;
  font-size: 1.1em;
}
.b_txt {
  display: block;
  padding: 3px 0;
}
.mc_price {
  font-weight: bold;
}
.wish {
  width: 20px;
  height: 20px;
  line-height: 20px;
}
.wish i {
  color: #a1814d;
  font-size: 1.5em;
}
.wish i:nth-of-type(4) {
  color: #ffbb4e;
}
/* 메뉴카드 */
</style>
