<template>
  <div>
    <div id="nav">
      <!-- nav_back -->
      <div>
        <div class="back">
          <router-link to="/">
            <img :src="head1" alt="뒤로가기" width="22" height="22" />
          </router-link>
        </div>
        <div class="mypage">
          <router-link to="/login" class="mypage"></router-link>
        </div>
      </div>
    </div>


    <div class="sub2_wrap">
      <div class="sub2_title">
<!--         <p class="sub2_title_1">오늘</p> -->
        <p class="sub2_title_2">내가 찾는 버거!</p>
      </div>
      <form class="search_area">
        <input type="text" class="sub2_search" />
        <button type="button" class="btn_search">
          <i class="fa-solid fa-magnifying-glass btn_search_font"></i>
        </button>
      </form>

      <div class="sub2_event_txt">이벤트</div>
      <div class="sub2_event">
        <img :src="event1" alt />
      </div>
      <div class="sub2_event">
        <img :src="event2" alt />
      </div>
      <div class="more_burger">더보기</div>

      
      <div class="sub2_now_ham">
        <p class="now_ham_title">오늘은 이거 버거!</p>
      </div>

      <swiper :slides-per-view="1" :space-between="15" navigation class="sub2_overflow">
        <!-- <div class="sub2_track"> -->
          <swiper-slide class="sub2_card">
            <div class="hamimg hamimg0">
              <img :src="burger1" alt />
            </div>
            <div class="hamtxt"> 
              <p class="ham_brand sub2_card_txt">맥도날드</p>
              <p class="ham_menu sub2_card_txt">쿼터파운더 치즈버거</p>
            </div>
          </swiper-slide>
          <swiper-slide class="sub2_card">
            <div class="hamimg hamimg1 hamimg0">
              <img :src="burger2" alt />
            </div>
            <div class="hamtxt">
              <p class="ham_brand sub2_card_txt">롯데리아</p>
              <p class="ham_menu sub2_card_txt">클래식 치즈버거</p>
            </div>
          </swiper-slide>
          <swiper-slide class="sub2_card">
            <div class="hamimg hamimg2 hamimg0">
              <img :src="burger1" alt />
            </div>
            <div class="hamtxt">
              <p class="ham_brand sub2_card_txt">맥도날드</p>
              <p class="ham_menu sub2_card_txt">쿼터파운더 치즈버거</p>
            </div>
          </swiper-slide>
          <swiper-slide class="sub2_card">
            <div class="hamimg hamimg3 hamimg0">
              <img :src="burger2" alt />
            </div>
            <div class="hamtxt">
              <p class="ham_brand sub2_card_txt">롯데리아</p>
              <p class="ham_menu sub2_card_txt">클래식 치즈버거</p>
            </div>
          </swiper-slide>
        <!-- </div> -->
      </swiper>

      <div class="sub2_event burgertest">
        <img :src="event3" alt />
      </div>



    </div>
  </div>
</template>

<script>
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
/* import "swiper/swiper-bundle.min.css"; */
SwiperCore.use(Navigation);

export default {
  data() {
    return {
      head1: require("../assets/header_back.svg"),
      event1: require("../assets/event02.png"),
      event2: require("../assets/event01.png"),
      event3: require("../assets/burgertest2.png"),
      burger1: require("../assets/card_burger2_0.png"),
      burger2: require("../assets/card_burger5.jpg")
    };
  },
    components: {
    Swiper,
    SwiperSlide,
  },
};
</script>

<style scoped>
/* === 스와이퍼 === */
.inside-wrapper {
  height: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #7cffae;
}
.swiper-container {
  max-width: 945px;
  min-width: 360px;
  overflow: hidden;
  margin: 2rem auto;
}
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}
.swiper-wrapper {
  width: max-content;
  display: flex;
}
/* === 스와이퍼 === */


div {
  /* border: 1px solid red */
}
.sub2_wrap {
  width: 95%;
  max-width: 945px;
  min-width: 350px;

  margin: 0 auto;
}/* 수정한 부분 */
.sub2_title {
  width: 95%;
  margin: 30px auto 20px;
}
.sub2_title p {
  text-align: left;
  font-size: 2em;
  color: black;
}
.sub2_title_1 {
  font-weight: 400;
}
.sub2_title_2 {
  font-weight: bold;
}
.sub2_search {
  width: 100%;
  height: 40px;
  outline: 1px solid rgb(212, 212, 212);
  border-radius: 5px;
  margin-bottom: 20px;
}
.search_area {
  width: 95%;
  position: relative;
  margin: 0 auto;
  margin-bottom: 20px;
}
.btn_search_font {
  font-size: 1.5em;
  position: absolute;
  top: 15%;
  left: 3%;
}

.sub2_event_txt {
  color: black;
  width: 95%;
  margin: 0 auto;
  text-align: left;
  font-size: 1.5em;
  font-weight: bold;
  margin-bottom: 10px;
}
.sub2_event {
  margin: 20px auto;
  width: 95%;
  height: auto;
  }
.sub2_event > p{
  font-size: 1.2em;
  font-weight: 400;
  margin-bottom: 30px;
}

/* 수정한 부분 */
.sub2_event img{
  width: 100%;
  height: 100%;
 
}/* 수정한 부분 */


.sub2_now_ham{
  width: 95%;
  margin: 0 auto;
  margin-top: 50px;
}
.now_ham_title {
  text-align: left;
  font-size: 1.7em;
  font-weight: bold;
  color: black;
}
.sub2_overflow {
  width: 100vw;
  padding-right:40px;
  padding-left: 10px;
  overflow: hidden;
  box-sizing: border-box;
/*   border: 1px solid red; */
}
.sub2_card {
  padding: 25px 0;
  border: 1px solid #ffbb4e;
  border-radius: 20px;
  box-shadow: inset -5px -5px 20px rgba(158, 158, 158, 0.327);
  width: 100%;
  /* min-width: 100vw;
  max-width: 100vw; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
  .sub2_card > .hamimg {
  width: 65%;
  margin: 0 auto 20px;
}
.hamtxt{
  width: 100%;
}
.hamimg > img{
  width: 100%;

}
.sub2_card_txt{
  text-align: center;
  font-size: 1.4em;
  font-weight: bold;
}
.more_burger{
  width: 95%;
  margin: 0 auto;
  margin-bottom: 40px;
  padding: 20px 0;
  background: #ffbb4e;
  font-weight: 500;
  font-size: 1.3em;
  color: rgb(101, 58, 2);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.burgertest{
  border-radius: 10px;
}

</style>