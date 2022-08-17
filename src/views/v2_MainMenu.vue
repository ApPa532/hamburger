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
        <router-link class="profile" to="/mypage">
          <img :src="Profile" alt="프로필" width="121" height="121">
          <h2>버거싶다</h2>
        </router-link>
        <div class="menu0">
           <button
            v-if="user.email==undefined"
            class="btn btn-danger"
            type="button"
            @click="kakaoLogin"
          >
            <router-link class="menu1" to="/">로그인</router-link>
          </button>
          <button v-else class="btn btn-danger" type="button" @click="kakaoLogout"><router-link class="menu1" to="/">로그아웃</router-link></button>
          <div>
            <router-link class="menu1" to="/mypage">마이페이지</router-link>
          </div>
        </div>
        <div class="copy">
          <h1>Copyright 2022. Team 3 . All rights reserved.</h1>
        </div> 
      </div>
    </div>


    <div id="nav">
      <!--nav_main-->
      <div>
        <div class="menu" @click="openmenu = true">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <!--         <div class="logo" style="padding-left:20px">
          <img :src="Header1" />
        </div>-->
        <div class="mypage">
          <router-link to="/login" class="mypage"></router-link>
        </div>
      </div>
    </div>

    <div id="sec_bg">
      <div class="sec_wrap">
        <div class="sec_tit">
          <p class="sec_tit1">Let's grab</p>
          <p class="sec_tit2">a BURGER🍔</p>
        </div>

        <div class="sec_card_a">
          <!--           <div class="sec_card_padding"> -->
          <p class="a_tit">NEW!</p>
          <div class="a_cont">
            <div class="a_arrow">
              <i class="fa-solid fa-arrow-right"></i>
            </div>
            <div class="a_txt">
              <p class="a_txt1">맥도날드</p>
              <p class="a_txt2">더블 쿼터 파운더 치즈</p>
            </div>
            <div class="a_pic">
              <img :src="a_picUrl" />
            </div>
          </div>
          <!-- </div> -->
        </div>

        <div class="sub_tit">
          <p class="sec_tit1 sub_tit1">메뉴 바로가기</p>
        </div>

        <swiper :slides-per-view="3" :space-between="15" navigation class="go_menu">
          <swiper-slide class="go_box">
            <router-link to="/submenu1">
              <div class="go_width">
                <img :src="go_menu_1" alt />
                <div class="go_tit">
                  <p>버거싶은 버거</p>
                  <p>취향대로 선택하기</p>
                </div>
              </div>
            </router-link>
          </swiper-slide>

          <swiper-slide class="go_box">
            <router-link to="/submenu2">
              <div class="go_width">
                <img :src="go_menu_2" alt />
                <div class="go_tit">
                  <p>어디 버거?</p>
                  <p>새로나온버거</p>
                </div>
              </div>
            </router-link>
          </swiper-slide>

          <swiper-slide class="go_box">
            <router-link to="/submenu3">
              <div class="go_width">
                <img :src="go_menu_3" alt />
                <div class="go_tit">
                  <p>오늘 뭐 버거?</p>
                  <p>버거 검색하기</p>
                </div>
              </div>
            </router-link>
          </swiper-slide>

          <swiper-slide class="go_box">
            <router-link to="/submenu4">
              <div class="go_width">
                <img :src="go_menu_4" alt />
                <div class="go_tit">
                  <p>인기 버거!</p>
                  <p>주로 찾는 버거</p>
                </div>
              </div>
            </router-link>
          </swiper-slide>

          <swiper-slide class="go_box">
            <router-link to="/submenu5">
              <div class="go_width">
                <img :src="go_menu_5" alt />
                <div class="go_tit">
                  <p>골라 버거!</p>
                  <p>찜한 버거</p>
                </div>
              </div>
            </router-link>
          </swiper-slide>
        </swiper>

        <div class="sub_tit">
          <p class="sec_tit1 sub_tit1">둘러보기</p>
        </div>

        <swiper :slides-per-view="3" :space-between="15" navigation class="sec_card_b">
          <!-- <swiper-slide class="card_b_track"> -->

          <swiper-slide class="card_b_m">
            <div class="b_m_pic">
              <img :src="card_b_m1" />
            </div>
            <div class="b_m_txt">
              <p class="b_m_txt1">오늘은 치킨이닭!</p>
              <p class="b_m_txt2">치킨버거 추천</p>
            </div>
          </swiper-slide>

          <swiper-slide class="card_b_m">
            <div class="b_m_pic">
              <img :src="card_b_m2" />
            </div>
            <div class="b_m_txt">
              <p class="b_m_txt1">요즘 같은 폭염엔?</p>
              <p class="b_m_txt2">이열치열 스파이시!</p>
            </div>
          </swiper-slide>

          <swiper-slide class="card_b_m">
            <div class="b_m_pic">
              <img :src="card_b_m3" />
            </div>
            <div class="b_m_txt">
              <p class="b_m_txt1">MZ세대 버거픽?</p>
              <p class="b_m_txt2">궁금하면 클릭!</p>
            </div>
          </swiper-slide>

          <swiper-slide class="card_b_m">
            <div class="b_m_pic">
              <img :src="card_b_m4" />
            </div>
            <div class="b_m_txt">
              <p class="b_m_txt1">지루한 하루엔?</p>
              <p class="b_m_txt2">재미있는 이색버거!</p>
            </div>
          </swiper-slide>

          <!-- </swiper-slide> -->
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
/* === 스와이펴 === */
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
/* import "swiper/swiper-bundle.min.css"; */
SwiperCore.use(Navigation);
/* === 스와이펴 === */

export default {
  name: "MainMenu",
   computed: {
    user() {
      return this.$store.state.user;
    }
  },
  data() {
    return {
      openmenu: false,
      Profile: require("../assets/open_profile.png"),
      Header1: require("../assets/header_logo.svg"),

      secUrl1: require("../assets/sec1.png"),
      secUrl2: require("../assets/sec2.png"),
      secUrl3: require("../assets/sec3.png"),

      go_menu_1: require("../assets/go_menu_1.png"),
      go_menu_2: require("../assets/go_menu_2.png"),
      go_menu_3: require("../assets/go_menu_3.png"),
      go_menu_4: require("../assets/go_menu_4.png"),
      go_menu_5: require("../assets/go_menu_5.png"),

      card_b_m1: require("../assets/card_b_m1.png"),
      card_b_m2: require("../assets/card_b_m2.png"),
      card_b_m3: require("../assets/card_b_m3.png"),
      card_b_m4: require("../assets/card_b_m4.png"),
      a_picUrl: require("../assets/card_burger2_0.png"),

      item: []
    };
  },

  /* === 스와이펴 === */
  components: {
    Swiper,
    SwiperSlide
  },
  /* === 스와이펴 === */
  methods: {
    kakaoLogin() {
      window.Kakao.Auth.login({
        scope: " account_email, profile_nickname",
        success: this.getProfile
      });
    },
    getProfile(authObj) {
      console.log(authObj);
      window.Kakao.API.request({
        //웹 페이지에서 JavaScript SDK를 통해 카카오톡 메시지 API를 사용하려면 Kakao.API.request 함수를 사용해 REST API와 같은 URL로 요청
        url: "/v2/user/me",
        success: res => {
          const kakao_account = res.kakao_account;
          console.log(kakao_account);
          this.login(kakao_account);
          alert("로그인 성공!");
        }
      });
    },
    async login(kakao_account) {
      /* await this.$api("/api/login",{
          param: [
            { email: kakao_account.account_email },
            { nickname: kakao_account.profile_nickname }
          ]
        }) */

      this.$store.commit("user", kakao_account);
    },
    kakaoLogout() {
      window.Kakao.Auth.logout(response => {
        console.log(response);
        this.$store.commit("user", {});
        alert("로그아웃");
        this.$router.push({ path: "/" });
      });
    }
  }
};
</script>
  
<style>
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
  min-width: 760px;
  overflow: hidden;
  margin: 2rem 0 auto;
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
#open_menu {
  position: fixed;
  z-index: 99;
  width: 50%;
  height: 100vh;
  background: #e52a2a;
  display: flex;
  justify-content: center;
}
.menuwrap {
  width: 80%;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
}

/* 닫기버튼 */
.close {
  width: 100%;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.close_btn {
  width: 30px;
  height: 30px;
  position: relative;
}
.close_btn div:nth-child(1) {
  position: absolute;
  top: 50%;
  left: 0px;
  width: 30px;
  height: 1px;
  border-bottom: 3px solid #ffffff;
  transform: rotate(45deg);
  border-radius: 50px;
}
.close_btn div:nth-child(2) {
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
.profile {
  width: 100%;
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
}
.profile h2 {
  font-weight: 600;
  font-size: 30px;
  color: #ffffff;
}

/* 메뉴 */
.menu0 {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 25px 0;
  flex-direction: column;
}
.menu0 .menu1 {
  font-weight: 500;
  font-size: 18px;
  color: #ffffff;
}
/* 카피라이트 */
#open_menu .copy {
  width: 100%;
  height: 100px;
}
#open_menu .copy h1 {
  text-align: center;
  font-weight: 400;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.788);
}

/* 헤더 */
.mypage {
  width: 50px;
  height: 50px;
  background: url(../assets/profile_burger.svg) no-repeat center center #ffffff;
  border-radius: 50%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

#nav {
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  border-bottom: 1px solid #e9e9e9;

  position: sticky;
  top: 0;
  left: 0;
  z-index: 98;
}
#nav > div {
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
#nav .menu {
  width: 26px;
  height: 21px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
}
#nav .menu span:nth-child(1) {
  display: block;
  width: 18px;
  height: 1px;
  border-bottom: 3px solid #000000;
  border-radius: 50px;
}
#nav .menu span:nth-child(2) {
  display: block;
  width: 26px;
  height: 1px;
  border-bottom: 3px solid #000000;
  border-radius: 50px;
}
#nav .menu span:nth-child(3) {
  display: block;
  width: 14px;
  height: 1px;
  border-bottom: 3px solid #000000;
  border-radius: 50px;
} /* 메뉴끝 */

#sec_bg {
  /*border: 1px solid red;*/
  padding-bottom: 1px;
  width: 100vw;
  height: auto;
  padding-top: 20px;
  background: linear-gradient(
    5.25deg,
    rgba(222, 224, 234, 0.5) 42.77%,
    rgba(255, 255, 255, 0) 76.17%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#dee0ea',GradientType=0 );
}
.sec_wrap {
  width: 95%;
  /*border: 1px solid red;*/
  margin: 0 auto;

  max-width: 945px;
  min-width: 340px;
}
.sec_tit {
  margin-bottom: 30px;
}
.sec_tit1 {
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  color: #000000;
}
.sec_tit2 {
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  color: #000000;
}

.sec_card_a {
  width: 100%;
  /*border: 1px solid red;*/
  height: 200px;
  background: #fec912;
  border-radius: 36px;
  margin-bottom: 40px;
  padding: 10px 30px;
  overflow: hidden;
}
.a_tit {
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 3.5em;
  color: black;
}
.a_cont {
  /* border: 1px solid red; */
  margin-top: -30px;
  height: 130px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
.a_arrow {
  max-width: 30px;
  min-width: 30px;
  width: 30px;
  height: 30px;
  background: white;
  border-radius: 50%;
  text-align: center;
  line-height: 30px;
}
.a_arrow > i {
  font-size: 1.3em;
  color: black;
}
.a_txt {
  /*border: 1px solid red;*/
  width: 57%;
  text-align: right;
}
.a_txt1 {
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 1.375em;
  color: black;
}
.a_txt2 {
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 1.375em;
  color: black;
}
.a_pic {
  width: 18%;
  height: 140px;
  text-align: right;
}
.a_pic img {
  width: 100%;
  height: 100%;
  max-width: 600px;
  min-width: 165px;
  right: 0;
}

/* 메뉴 바로가기 (추가) */
.go_menu {
  width: 100%;

  display: flex;
  justify-content: flex-start;
  /* gap: 0 30px; */
}
.go_box {
  width: 33%;
  width: 140px;
  max-width: 140px;
  min-width: 140px;
  height: 200px;
  background: #ffffff;
  border-radius: 10px;
  padding: 10px 0;
  margin-bottom: 30px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.go_width {
  width: 120px;
  height: 180px;

  width: 100%;/* width 두개..? */
  display: flex;
  flex-direction: column;
  /*   justify-content: center; */
  /* align-items: center; */
}
/*   .go_width > img {
    width: 85%;
    margin: 0 auto;
  } */
.go_tit {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 2px 0;
  padding-top: 12px;
}
.go_tit p:nth-child(1) {
  text-align: left;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  color: #000000;
}
.go_tit p:nth-child(2) {
  text-align: left;
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  color: #a7a7a7;
}

.sub_tit {
  margin-bottom: 20px;
}

.sec_card_b {
  width: 100vw;
  overflow: hidden;
  padding-bottom: 50px;
}

.card_b_m {
  /* border: 1px solid red; */
  background: white;
  width: 33%;
  padding: 10px 0;
  max-width: 140px;
  min-width: 140px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.b_m_pic {
  /*border: 1px solid red;*/
  width: 85%;
  border-radius: 23px;
  overflow: hidden;
}
.b_m_pic > img {
  width: 100%;
}
.b_m_txt {
  width: 80%;
  margin: 15px 0;
}
.b_m_txt1 {
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 1.25em;
  color: black;
}
.b_m_txt2 {
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 1em;
  color: #a7a7a7;
}
</style>