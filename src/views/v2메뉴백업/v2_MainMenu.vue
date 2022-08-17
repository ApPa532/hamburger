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
<!--         <div class="logo" style="padding-left:20px">
          <img :src="Header1" />
        </div> -->
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
              <div class="a_arrow"><i class="fa-solid fa-arrow-right"></i></div>
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
          <p class="sec_tit1 sub_tit1">둘러보기</p>
        </div>

      </div>

    <!-- 둘러보기 -->
        <div class="sec_card_b ">
          <div class="card_b_track ">
            
            <div class="card_b_m ">
              <div class="b_m_pic"><img :src="card_b_m1" /></div>
              <div class="b_m_txt">
                <p class="b_m_txt1">오늘은 치킨이닭!</p>
                <p class="b_m_txt2">치킨버거 추천</p>
              </div>
            </div>
            
            <div class="card_b_m flex col">
              <div class="b_m_pic"><img :src="card_b_m2" /></div>
              <div class="b_m_txt">
                <p class="b_m_txt1">요즘 같은 폭염엔?</p>
                <p class="b_m_txt2">이열치열 스파이시!</p>
              </div>
            </div>

            <div class="card_b_m flex col">
              <div class="b_m_pic"><img :src="card_b_m3" /></div>
              <div class="b_m_txt">
                <p class="b_m_txt1">MZ세대 버거픽?</p>
                <p class="b_m_txt2">궁금하면 클릭!</p>
              </div>
            </div>

            <div class="card_b_m flex col">
              <div class="b_m_pic"><img :src="card_b_m1" /></div>
              <div class="b_m_txt">
                <p class="b_m_txt1">오늘은 치킨이닭!</p>
                <p class="b_m_txt2">치킨버거 추천</p>
              </div>
            </div>

          </div>
        </div>


    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      openmenu : false,
      /* Profile: require("../assets/open_profile.png"),  이거 파일 받아넣기 카톡에 있음*/
      Header1: require("../assets/header_logo.svg"),

      secUrl1: require("../assets/sec1.png"),
      secUrl2: require("../assets/sec2.png"),
      secUrl3: require("../assets/sec3.png"),
      card_b_m1: require("../assets/card_b_m1.png"),
      card_b_m2: require("../assets/card_b_m2.png"),
      card_b_m3: require("../assets/card_b_m3.png"),
      a_picUrl: require("../assets/card_burger2_0.png")
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
  width: 80%;
  height: 100vh;
  background: #E52A2A;
  display: flex;
  justify-content: center;
}
.menuwrap{
  width: 80%;
  height: 90vh;
  display: flex;
  align-items: flex-start;
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
}/* 메뉴끝 */


#sec_bg{
  /*border: 1px solid red;*/
  width: 100vw;
  height: 100vh;
  padding-top: 20px;
  padding-bottom: 780px;
  background: rgb(255,255,255);
  background: -moz-linear-gradient(top,  rgba(255,255,255,1) 47%, rgba(222,224,234,1) 100%);
  background: -webkit-linear-gradient(top,  rgba(255,255,255,1) 47%,rgba(222,224,234,1) 100%);
  background: linear-gradient(to bottom,  rgba(255,255,255,1) 47%,rgba(222,224,234,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#dee0ea',GradientType=0 );
}
.sec_wrap{
  width: 95%;
  /*border: 1px solid red;*/
  margin: 0 auto;

  max-width: 945px;
  min-width: 340px;
}
.sec_tit{
  
  margin-bottom:30px ;
}
  .sec_tit1{
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    color: #000000;
  }
  .sec_tit2{
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    color: #000000;
  }

.sec_card_a{
  width: 100%;
  /*border: 1px solid red;*/
  height: 200px;
  background: #FEC912;
  border-radius: 36px;
  margin-bottom: 40px;
  padding: 10px 30px;
  overflow: hidden;
}
  .a_tit{
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 700;
    font-size: 4em;
    color: black;
  }
  .a_cont{
      /* border: 1px solid red; */
    margin-top: -30px;
    height: 120px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    
  }
  .a_arrow{
    max-width: 30px;
    min-width: 30px;
    width: 30px;
    height: 30px;
    background: white;
    border-radius: 50%;
    text-align: center;
    line-height: 30px;
  }
    .a_arrow > i{
      font-size: 1.3em;
      color: black;
    }
  .a_txt{
    /*border: 1px solid red;*/
    width: 57%;
    text-align: right;
  }
    .a_txt1{
      font-family: 'Noto Sans KR';
      font-style: normal;
      font-weight: 500;
      font-size: 1.3750em;
      color: black;
    }
    .a_txt2{
      font-family: 'Noto Sans KR';
      font-style: normal;
      font-weight: 700;
      font-size: 1.3750em;
      color: black;
    }
  .a_pic{
    /*border: 1px solid red;*/
    width: 33%;
    height: 140px;
    text-align: right;
  }
  .a_pic img{
    /*border: 1px solid red;*/
    width: 75%;
    height: 100%;
    max-width: 600px;
    min-width: 165px;
    right: 0;
  }
.sub_tit{
  margin-bottom: 20px;
}

.sec_card_b{
  width: 100vw;
  overflow: hidden;

}
.card_b_track{
      /*border: 1px solid red;*/
  width: 95%;
  margin: 0 auto;
  display: flex;
  gap: 1.3em;
  justify-content: flex-start;
}
  .card_b_m{
          /*border: 1px solid red;*/
    background: white;
    width: 33%;
    padding: 10px 0;
    max-width: 200px;
    min-width: 140px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .b_m_pic{
    /*border: 1px solid red;*/
    width: 85%;
    border-radius: 23px;
    overflow: hidden;
  }
    .b_m_pic > img{
      width: 100%;
    }
  .b_m_txt{
    width: 80%;
    margin: 15px 0;
  }
  .b_m_txt1{
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 500;
    font-size: 1.25em;
    color: black;
  }
  .b_m_txt2{
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 500;
    font-size: 1em;
    color: #A7A7A7;
  }

</style>