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

    <div id="section_wrap">
      <div id="top_wrap">
        <div class="top_menu">
          <h2>찜</h2>
          <div class="text">
            <p>이 중에 골라버거!</p>
            <p>총 5개</p>
          </div>
        </div>
      </div>
      <!-- #top_wrap -->

      <div id="mid_wrap">
        <div class="like_list">
          <div class="like">
            <div class="like_wrap">
              <div class="like_mark">
                <img :src="heart" alt="하트" />
              </div>
              <div class="bur_img"></div>
              <p>브랜드</p>
              <h5>불고기 버거</h5>
              <div class="price_wrap">
                <div class="set_price">
                  <p>세트</p>
                  <p class="price">5,500 ₩</p>
                </div>
                <div class="single_price">
                  <p>싱글</p>
                  <p class="price">2,500 ₩</p>
                </div>
              </div>
              <!-- .price_wrap -->
            </div>
            <!-- .like_wrap -->
          </div>
          <!-- .like -->
          <div class="like">
            <div class="like_wrap">
              <div class="like_mark">
                <img :src="heart" alt="하트" />
              </div>
              <div class="bur_img"></div>
              <p>브랜드</p>
              <h5>불고기 버거</h5>
              <div class="price_wrap">
                <div class="set_price">
                  <p>세트</p>
                  <p class="price">5,500 ₩</p>
                </div>
                <div class="single_price">
                  <p>싱글</p>
                  <p class="price">2,500 ₩</p>
                </div>
              </div>
              <!-- .like -->
            </div>
            <!-- .like_wrap -->
          </div>
          <!-- .like -->
          <div class="like">
            <div class="like_wrap">
              <div class="like_mark">
                <img :src="heart" alt="하트" />
              </div>
              <div class="bur_img"></div>
              <p>브랜드</p>
              <h5>불고기 버거</h5>
              <div class="price_wrap">
                <div class="set_price">
                  <p>세트</p>
                  <p class="price">5,500 ₩</p>
                </div>
                <div class="single_price">
                  <p>싱글</p>
                  <p class="price">2,500 ₩</p>
                </div>
              </div>
            </div>
            <!-- .like_wrap -->
          </div>
          <!-- .like -->
          <div class="like">
            <div class="like_wrap">
              <div class="like_mark">
                <img :src="heart" alt="하트" />
              </div>
              <div class="bur_img"></div>
              <p>브랜드</p>
              <h5>불고기 버거</h5>
              <div class="price_wrap">
                <div class="set_price">
                  <p>세트</p>
                  <p class="price">5,500 ₩</p>
                </div>
                <div class="single_price">
                  <p>싱글</p>
                  <p class="price">2,500 ₩</p>
                </div>
              </div>
            </div>
            <!-- .like_wrap -->
          </div>
          <!-- .like -->
          <div class="like">
            <div class="like_wrap">
              <div class="like_mark">
                <img :src="heart" alt="하트" />
              </div>
              <div class="bur_img"></div>
              <p>브랜드</p>
              <h5>불고기 버거</h5>
              <div class="price_wrap">
                <div class="set_price">
                  <p>세트</p>
                  <p class="price">5,500 ₩</p>
                </div>
                <div class="single_price">
                  <p>싱글</p>
                  <p class="price">2,500 ₩</p>
                </div>
              </div>
            </div>
            <!-- .like_wrap -->
          </div>
          <!-- .like -->
          <div class="like">
            <div class="like_wrap">
              <div class="like_mark">
                <img :src="heart" alt="하트" />
              </div>
              <div class="bur_img"></div>
              <p>브랜드</p>
              <h5>불고기 버거</h5>
              <div class="price_wrap">
                <div class="set_price">
                  <p>세트</p>
                  <p class="price">5,500 ₩</p>
                </div>
                <div class="single_price">
                  <p>싱글</p>
                  <p class="price">2,500 ₩</p>
                </div>
              </div>
            </div>
            <!-- .like_wrap -->
          </div>
          <!-- .like -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SuB5",
  data() {
    return {
      head1: require("../assets/header_back.svg"),
      heart: require("../assets/burger_heart_jjim.png")
    };
  }
};
</script>

<style>
@charset "utf-8";

* {
  margin: 0;
  padding: 0;
  outline: 0;
  border: 0;
}

#section_wrap {
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  margin: 0 auto;
  max-width: 945px;
  min-width: 360px;
}

#top_wrap {
  width: 95%;
  height: 200px;

  position: relative;
}

.top_menu {
  width: 100%;
  height: auto;

  position: absolute;
  bottom: 10px;
  border-bottom: #dfdfdf 2px solid;
  box-sizing: border-box;
  line-height: 3;
}

.top_menu h2 {
  font-size: 32px;
  font-weight: 900;
}
.top_menu .text {
  display: flex;
  font-size: 22px;
  justify-content: space-between;
  font-weight: 600;
}
#mid_wrap {
  width: 95%;
  height: auto;
  box-sizing: border-box;
}
#mid_wrap .like_list {
  display: flex;
  flex-basis: auto;
  min-width: 360px;
  max-width: 975px;
  justify-content: left;
  margin-top: 30px;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 15px;
}
#mid_wrap .like_list .like {

  min-width: 167px;
  min-height: 250px;

  margin-bottom: 15px;

  box-sizing: border-box;
  border: 1px solid #ffbb4e;
  box-shadow: inset -2px -2px 10px rgba(158, 158, 158, 0.41);
  border-radius: 20px;
}

#mid_wrap .like_list .like .like_wrap {
  width: 140px;
  height: 226px;
 

  margin: 12px auto;
  border-radius: 15px;
}

#mid_wrap .like_list .like .like_mark {
  float: right;
  margin-right: 5px;
  margin-top: 5px;
  margin-bottom: 10px;
}
#mid_wrap .like_list .like .bur_img {
  width: 120px;
  height: 90px;
  margin: 0 auto;
  padding-top: 20px;

  background: url(../assets/hamburger_test.png) no-repeat center center;
  background-size: 100%;
  position: relative;
  top: 30px;
}

#mid_wrap .like_list .like_wrap > p {
  font-size: 18px;
  position: relative;
  top: 32px;
  letter-spacing: -1px;
  left: 10px;
  font-weight: 400px;
}
#mid_wrap .like_list .like_wrap > h5 {
  position: relative;
  top: 25px;
  font-size: 18px;
  letter-spacing: -1px;
  font-weight: bold;
  left: 10px;
}
#mid_wrap .like_list .like .price_wrap {
  width: 85%;
  height: 50px;
  font-size: 18px;
  position: relative;
  top: 25px;
  margin: 0 auto;
  font-weight: 400px;
}
.set_price {
  display: flex;
  justify-content: space-between;
}
.single_price {
  display: flex;
  justify-content: space-between;
  margin-top: -5px;
}
</style>