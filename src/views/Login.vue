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
          <router-link to="/login" class="myprofile"></router-link>
        </div>
      </div>
    </div>

    <div id="loginwrap">
      <div class="login_top">
        <div class="logo">
          <h1 class="hidden">버거싶다</h1>
          <img :src="login_logo" alt="버거싶다로고" />
        </div>
        <form>
          <input type="text" placeholder="아이디" />
          <input type="password" placeholder="비밀번호" />
        </form>
        <div class="login_btn">
          <button type="button">로그인</button>
          <div class="joinbox">
            <a href="#none">회원가입</a>
            <a href="#none">아이디찾기</a>
            <a href="#none">비밀번호찾기</a>
          </div>
        </div>
      </div>
      <div class="login_bottom">
        <div class="social_line">
          <span></span>
          <p>소셜로그인</p>
          <span></span>
        </div>
        <div class="social_button">
          <a href="#none">
            <img :src="naver" alt />
          </a>
          <button v-if="user.email==undefined" class="btn btn-danger" type="button" @click="kakaoLogin">
            <img :src="kakao" alt />
          </button>
          <button v-else class="btn btn-danger" type="button" @click="kakaoLogout">
           로그아웃
          </button>
        </div>
      </div>
      <p>Copyright 2022. Team 3 . All rights reserved.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "LogIn",
  computed: {
      user () {
        return this.$store.state.user
      }
    },
  data() {
    return {
      Login_logo: require("../assets/login_logo.png"),
      head1: require("../assets/header_back.svg"),
      naver: require("../assets/naver.png"),
      kakao: require("../assets/kakaotalk.png"),
   
    };
  },
  methods: {
      kakaoLogin () {
        window.Kakao.Auth.login({
          scope: ' account_email, profile_nickname',
          success: this.getProfile
        })
      },
      getProfile (authObj) {
        console.log(authObj);
        window.Kakao.API.request({
          //웹 페이지에서 JavaScript SDK를 통해 카카오톡 메시지 API를 사용하려면 Kakao.API.request 함수를 사용해 REST API와 같은 URL로 요청
          url: "/v2/user/me",
          success: (res) => {
            const kakao_account = res.kakao_account;
            console.log(kakao_account);
            this.login(kakao_account);
            alert("로그인 성공!");
          },
        });
      },
      async login(kakao_account) {
        /* await this.$api("/api/login",{
          param: [
            { email: kakao_account.account_email },
            { nickname: kakao_account.profile_nickname }
          ]
        }) */

        this.$store.commit('user', kakao_account)
      },
      kakaoLogout () {
        window.Kakao.Auth.logout((response) => {
          console.log(response)
          this.$store.commit('user', {})
          alert('로그아웃');
          this.$router.push({ path: '/' })
        })
      }


    },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap");

* {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  font-family: "Noto Sans KR", sans-serif;
  box-sizing: border-box;
}
html,
body {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  box-sizing: border-box;
  overflow-x: hidden;
}
a {
  text-decoration: none;
  color: black;
}
ul,
li,
ol {
  list-style: none;
}
img {
  vertical-align: top;
  font-size: 0;
  border: 0;
}
.hidden {
  display: none;
}

#loginwrap {
  width: 100%;
  height: 100vh;
  /* height: 640px; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.login_top {
  /* padding-top: 100px; */
  width: 95%;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 30px 0;
}
.login_top .logo {
  padding-top: 50px;
}
.login_top form {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 15px 0;
}
.login_top form input {
  width: 80%;
  height: 55px;
  background: #efefef;
  border-radius: 10px;
  padding-left: 20px;
  color: #5f5f5f;
  font-weight: 600;
  font-size: 15px;
}
.login_top form input::placeholder {
  color: #bebebe;
  font-weight: 600;
  font-size: 15px;
}
.login_btn {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px 0;
}
.login_top button {
  width: 80%;
  height: 60px;
  background: #ffbb4e;
  border-radius: 10px;
  font-weight: 600;
  font-size: 17px;
  color: #ffffff;
}
.login_top .joinbox {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0 15px;
  padding-bottom: 40px;
}
.login_top .joinbox a {
  display: block;
  font-weight: 500;
  font-size: 15px;
  line-height: 23px;
  color: #ffa723;
}

.login_bottom {
  /* padding-bottom: 50px; */
  width: 100%;
  height: 25vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  gap: 25px 0;
}
.login_bottom .social_line {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.login_bottom .social_line span {
  width: 40%;
  border-bottom: 1px solid #dadada;
}
.login_bottom .social_line p {
  text-align: center;
  width: 20%;
  font-weight: 400;
  font-size: 16px;
  line-height: 35px;
  color: #bebebe;
}
.social_button {
  display: flex;
  justify-content: center;
  gap: 0 30px;
}
#loginwrap p {
  height: 5vh;
  font-weight: 400;
  font-size: 14px;
  color: #bebebe;
}
</style>