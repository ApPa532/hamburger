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

    <div class="section_wrap">
      <div class="sub4_top">
        <!-- 검색창 부분 -->
        <div class="title">
          <h1>어디 버거?</h1>
          <h2>새로나온 버거</h2>
        </div>
        <div class="searchwrap">
          <input type="search" name="search" />
        </div>
      </div>
      <div class="sub4_bottom">
        <!-- 검색창 아래 컨텐츠부분? -->

        <ul class="select_tab">
          <!-- 셀렉버튼 -->
          <li>
            <a href="#none" class="tab_on">맥도날드</a>
          </li>
          <li>
            <a href="#none">롯데리아</a>
          </li>
          <li>
            <a href="#none">버거킹</a>
          </li>
          <li>
            <a href="#none">KFC</a>
          </li>
        </ul>

        <div class="burgerwrap">
          <!-- 버거컨텐츠 전체박스 -->

          <a href="#none" class="b_wrap">
            <!-- 버거박스 wrap -->
            <div class="burger_img">
              <!-- 버거사진 -->
              <img :src="newburger1" width="220" height="170" alt="햄버거" />
            </div>

            <div class="burger_box">
              <!-- flex때문에 heart_icon,burger_box
                    위아래로 크기 나눴음.-->
              <div class="heart_icon">
                <!-- 찜아이콘 -->
                <div>
                  <img :src="sub3_2" width="20" height="18" alt="찜" />
                </div>
              </div>

              <div class="b_text">
                <div class="b_name">
                  <!-- 이름 -->
                  <p>맥도날드</p>
                  <p>보성녹돈버거</p>
                </div>
                <div class="b_price">
                  <!-- 가격 -->
                  <div>
                    <p>세트</p>
                    <p>7,200 ₩</p>
                  </div>
                  <div>
                    <p>단품</p>
                    <p>6,300 ₩</p>
                  </div>
                </div>
              </div>
            </div>
          </a>
          <!-- class="b_wrap" -->

          <a href="#none" class="b_wrap">
            <div class="burger_img">
              <img :src="newburger2" width="220" height="170" alt="햄버거" />
            </div>

            <div class="burger_box">
              <div class="heart_icon">
                <div>
                  <img :src="sub3_2" width="20" height="18" alt="찜" />
                </div>
              </div>

              <div class="b_text">
                <div class="b_name">
                  <!-- 이름 -->
                  <p>버거킹</p>
                  <p>크리스피 도넛 치킨버거</p>
                </div>
                <div class="b_price">
                  <!-- 가격 -->
                  <div>
                    <p>세트</p>
                    <p>7,100 ₩</p>
                  </div>
                  <div>
                    <p>단품</p>
                    <p>5,800 ₩</p>
                  </div>
                </div>
              </div>
            </div>
          </a>
          <!-- class="b_wrap" -->

          <a href="#none" class="b_wrap">
            <div class="burger_img">
              <img :src="newburger3" width="220" height="170" alt="햄버거" />
            </div>

            <div class="burger_box">
              <div class="heart_icon">
                <div>
                  <img :src="sub3_2" width="20" height="18" alt="찜" />
                </div>
              </div>

              <div class="b_text">
                <div class="b_name">
                  <!-- 이름 -->
                  <p>버거킹</p>
                  <p>텍사스 칠리와퍼</p>
                </div>
                <div class="b_price">
                  <!-- 가격 -->
                  <div>
                    <p>세트</p>
                    <p>10,800 ₩</p>
                  </div>
                  <div>
                    <p>단품</p>
                    <p>9,500 ₩</p>
                  </div>
                </div>
              </div>
            </div>
          </a>
          <!-- class="b_wrap" -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SuB3",
  data() {
    return {
      head1: require("../assets/header_back.svg"),
      sub3_2: require("../assets/burger_heart.png"),
      newburger1: require("../assets/new_burger1.png"),
      newburger2: require("../assets/new_burger2.png"),
      newburger3: require("../assets/new_burger3.png"), 
    };
  },
};
</script>

<style>
/* 리셋 */
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

/* 시작 */
.section_wrap {
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  padding-bottom: 30px;
}

.sub4_top {
  width: 95%;
  height: 190px;
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  flex-direction: column;
}
.sub4_top .title {
  width: 95%;
  text-align: left;
}
.sub4_top .title h1 {
  font-weight: 700;
  font-size: 36px;
  line-height: 52px;
  color: #000000;
  padding-bottom: 5px;
}
.sub4_top .title h2 {
  font-weight: 700;
  font-size: 20px;
  line-height: 29px;
  color: #000000;
}
.searchwrap {
  width: 100%;
  height: 48px;
  background: #ffffff;
  border: 1px solid #dad0d0;
  border-radius: 10px;
}
.searchwrap input {
  width: 100%;
  height: 48px;
  background: url(../assets/search_icon.svg) no-repeat left 5px center;
  padding-left: 35px;
  color: #363636;
  font-weight: 500;
  font-size: 18px;
}

.sub4_bottom {
  width: 100%;
  /*  height: 640px; */
  background-color: rgb(182, 182, 182) FFF;
}

ul.select_tab {
  margin: 0 auto;
  width: 95%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
ul.select_tab li {
}
ul.select_tab li a {
  display: block;
  background: rgba(176, 182, 198, 0.17);
  border-radius: 10px;
  padding: 10px 14px;
  /* height: 45px; */
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  /* line-height: 15px; */
  color: #5e6061;
}

.select_tab .tab_on {
  background: rgba(255, 156, 7, 0.17);
  border-radius: 10px;
  padding: 12px 14px;
  /* height: 50px; */
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  /* line-height: 50px; */
  color: #321F00;
}

.burgerwrap {
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
}
.burgerwrap .b_wrap {
  width: 100%;
  height: 260px;
  /*     background-color: steelblue; */
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  flex-direction: column;
  position: relative;
}
.burgerwrap .b_wrap .burger_img {
  position: absolute;
  top: 0;
  left: 20px;
  z-index: 2;
}
.burgerwrap .b_wrap .burger_box {
  margin: 0 auto;
  width: 95%;
  height: 230px;
  background: rgba(248, 247, 244, 0.55);
  border: 1px solid #ffbb4e;
  box-shadow: inset -5px -5px 10px rgba(158, 158, 158, 0.41);
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.burgerwrap .b_wrap .burger_box .heart_icon {
  width: 100%;
  height: 130px;
  position: relative;
}
.burgerwrap .b_wrap .burger_box .heart_icon div {
  width: 20px;
  height: 18px;
  position: absolute;
  top: 35px;
  right: 35px;
}
.burger_box .b_text {
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.burger_box .b_text .b_name {
  width: 60%;
  padding-left: 30px;
  display: flex;
  flex-direction: column;
  gap: 7px;
}
.burger_box .b_text .b_name p {
  text-align: left;
}
.burger_box .b_text .b_name p:nth-child(1) {
  font-weight: 500;
  font-size: 17px;
  line-height: 16px;
  color: #a2814d;
}
.burger_box .b_text .b_name p:nth-child(2) {
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #a2814d;
}

.burger_box .b_text .b_price {
  width: 40%;
  padding-right: 30px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.burger_box .b_text .b_price div {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.burger_box .b_text .b_price div p:nth-child(1) {
  width: 40%;
  font-weight: 500;
  font-size: 18px;
  line-height: 16px;
  color: #a2814d;
  text-align: right;
}
.burger_box .b_text .b_price div p:nth-child(2) {
  width: 60%;
  font-weight: 500;
  font-size: 18px;
  line-height: 18px;
  color: #a2814d;
  text-align: right;
}
</style>