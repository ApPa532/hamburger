<template>
  <div>
    <div id="section_wrap">
      <div id="top_wrap">
        <div class="top_menu">
          <h2>찜</h2>
          <h3>이 중에 골라버거!</h3>
          <h4>총 5개</h4>
        </div>
      </div>
      <!-- #top_wrap -->

      <div id="mid_wrap">
        <div class="like_list">
          <div class="like">
            <div class="like_wrap">
              <div class="like_mark"></div>
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
              <div class="like_mark"></div>
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
              <div class="like_mark"></div>
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
              <div class="like_mark"></div>
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
              <div class="like_mark"></div>
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
export default {};
</script>

<style>
@charset "utf-8";

* {
  margin: 0;
  padding: 0;
  outline: none;
}

section {
  width: 100%;
  height: 830px;
  min-height: 600px;
  background-color: #eeeeee;
}

#section_wrap {
  width: 70%;
  height: 100vh;
  margin: 50px auto;
  position: relative;
  max-width: 945px;
  min-width: 360px;
  min-height: 600px;
}

#top_wrap {
  width: 100%;
  height: 100px;
  border-bottom: 2px #cccccc solid;
}

h2 {
  font-size: 36px;
}

h3 {
  font-size: 20px;
  margin-top: 5px;
}

h4 {
  font-size: 15px;

  float: right;
  margin-top: -20px;
}

#mid_wrap {
  width: 100%;
  height: 100%;
}
.top_menu {
  width: 87%;
  height: 100%;
  margin: 0 auto;

  min-height: 100px;
}

.like_list {
  width: 100%;
  height: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 45% 45%;
  gap: 5px;
  justify-content: space-between;
  text-align: center;
}

.like {
  background-color: #f8f7f4;
  border: #ffbb4e solid 1px;
  border-radius: 20px;
  width: 80%;
  height: 80%;
  margin: 20px auto;
  max-width: 200px;
  min-height: 180px;
  min-width: 115px;
  box-shadow: rgba(0, 0, 0, 0.5) -1px -1px 3px inset;
}

.like_wrap {
  width: 90%;
  height: 90%;

  margin: 5% auto;
  position: relative;
}

.like_mark {
  height: 15px;
  width: 15px;
  background-color: wheat;
  position: absolute;
  right: 0;
}

.bur_img {
  width: 70%;
  height: 40%;
  background: url(../assets/ham1.png) no-repeat center center;
  background-size: 100%;
  margin: 0 auto;
  max-width: 100px;
  position: relative;
  top: 15px;
}

.like_wrap > p {
  margin-top: 20%;
  text-align: left;
  font-size: 70%;
}

.like_wrap h5 {
  text-align: left;
  font-size: 14px;
  margin-top: 2px;
  margin-bottom: 8%;
  min-width: 12px;
}

.price_wrap {
  width: 100%;
  height: 20%;

  display: grid;
  grid-template-rows: 50% 50%;
  min-height: 30px;
}

.price_wrap .set_price {
  width: 100%;

  display: flex;
  justify-content: space-between;
}
.price_wrap .single_price {
  width: 100%;

  display: flex;
  justify-content: space-between;
}

.price_wrap p {
  font-size: 12px;
}
.price {
  font-weight: bold;
  font-size: 14px;
}
</style>