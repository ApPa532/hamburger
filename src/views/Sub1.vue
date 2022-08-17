<template>
  <div id="wrap">
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
          <img :src="Header1" />
        </div>
        <div class="mypage">
          <router-link to="/login" class="mypage"></router-link>
        </div>
      </div>
    </div>

    <span class="title">취향대로 골라 버거!</span><!-- 타이틀 -->

    <div class="topping">
      <div class="tp_box tp_box1">
        <div class="tp_img tp_img0"><img src="../assets/beef.png" alt="" /></div>
        <span>패티</span>
        <div class="plus"><i class="fa-solid fa-plus"></i></div>
        <!-- 누르면 체크 아이콘으로 변경될 + 아이콘 -->
      </div>

      <div class="tp_box tp_box2">
        <div class="tp_img tp_img1"><img src="" alt="" /></div>
        <span>치즈</span>
        <div class="plus"><i class="fa-solid fa-plus"></i></div>
        <!-- 누르면 체크 아이콘으로 변경될 + 아이콘 -->
      </div>

      <div class="tp_box tp_box3">
        <div class="tp_img tp_img2"><img src="" alt="" /></div>
        <span>브랜드</span>
        <div class="plus"><i class="fa-solid fa-plus"></i></div>
        <!-- 누르면 체크 아이콘으로 변경될 + 아이콘 -->
      </div>
    </div>
    <!-- 재료선택 박스 -->

    <div class="txt_card">
      <div class="tc"><i class="fa-solid fa-check"></i><span> 치즈</span></div>
      <div class="tc"><i class="fa-solid fa-check"></i><span> 소고기</span></div>
    </div>
    
    <!-- 작은 텍스트 박스 -->
    

    <div class="menu_card">
      <div class="mc mc1">
        <div class="sub1_burger sub1_burger0"><img src="./assets/card_burger1.png" alt="" /></div>
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
        <div class="sub1_burger sub1_burger1"><!-- <img src="" alt="서브1버거" /> --></div>
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
        <div class="sub1_burger sub1_burger2"><!-- <img src="" alt="서브1버거" /> --></div>
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
        <div class="sub1_burger sub1_burger3"><!-- <img src="" alt="서브1버거" /> --></div>
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
        <div class="sub1_burger sub1_burger4"><!-- <img src="" alt="서브1버거" /> --></div>
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

</template>

<script>

export default {

    
    data () {
      return {
        openmenu : false,
        Profile: require("../assets/open_profile.png"),
        
        chip1: true,
        chip4: true,
      }
    },


  }
</script>

<style>
* {
  margin: 0;
  padding: 0;
  color: #A1814D;
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
#nav{
  width: 100%;
  height: 90px;
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
}


#wrap {
  /* width: 100%; */
  width: 480px;
  margin: 0 auto;
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
  width: 130px;
  height: 190px;
  border-radius: 65px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: 2px solid #ffbb4e;
}
.tp_box  > span{
    font-size: 1.2em;
    font-weight: bold;
    margin-bottom: 10px;
}
.tp_img {
  width: 105px;
  height: 105px;
  border-radius: 50%;
}
.tp_img0{
    background: url(../assets/beef.png) no-repeat;
    background-size: cover
}
.tp_img1{
    background: url(../assets/cheese.png) no-repeat;
    background-size: 80%;
        background-position: 50%;
}
.tp_img2{
    background: url(../assets/brand_logos.png) no-repeat ;
    background-size: 80%;
    background-position: 50%;
}
.plus {
  width: 34px;
  height: 34px;
  border-radius: 50%;

  border: 2px solid #ffbb4e;
  font-size: 1.5em;
  line-height: 28px;

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
.mc > div {
  /* border: 1px solid red; */
}
.sub1_burger{
  width: 70px;
  height: 60px;
  background-size: 190%;
}
.sub1_burger0 {
  background-image:  url(../assets/card_burger1.png) ;
  background-position: 50% 80%;
}
.sub1_burger1 {
  background-image:  url(../assets/card_burger2.png) ;
  background-position: 50% 80%;
   background-size: 170%;
}
.sub1_burger2 {
  background-image:  url(../assets/card_burger3.png) ;
  background-position: 50% 80%;
  background-size: 150%;
}
.sub1_burger3 {
  background-image:  url(../assets/card_burger4.png) ;
  background-position: 50% 80%;
    background-size: 150%;
}
.sub1_burger4 {
  background-image:  url(../assets/card_burger5.jpg) ;
  background-position: 50% 80%;
      background-size: 90%;
}
.mc_brand {
  width: 163px;
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
  color: #A1814D;
  font-size: 1.5em;
}
.wish i:nth-of-type(4){
    color: #ffbb4e;
}
/* 메뉴카드 */
</style>
