<template>
  <div class="sub2_wrap">
      <div class="sub2_title">
          <p class="sub2_title_1">오늘</p>
          <p class="sub2_title_2">뭐 버거?</p>
      </div>
      <form class="search_area">
          <input type="text" class="sub2_search">
          <button type="button" class="btn_search"><i class="fa-solid fa-magnifying-glass btn_search_font"></i></button>
      </form>
       
      <p class="sub2_event_txt">이벤트</p>
      <div class="sub2_event">

          <img src="" alt="">
      </div>
      <div class="sub2_now_ham">
          <p class="now_ham_title">오늘은 이거 버거!</p>
      </div>
      <div class="sub2_overflow">
          <div class="sub2_track">
              <div class="sub2_card"><div class="hamimg hamimg0"></div>
                   <p class="ham_brand">맥도날드</p>
                   <p class="ham_menu">쿼터파운더 치즈버거</p>
              </div>
              <div class="sub2_card"><div class="hamimg hamimg1"></div>
              </div>
              <div class="sub2_card"><div class="hamimg hamimg2"></div>
              </div>
              <div class="sub2_card"><div class="hamimg hamimg3"></div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
div{
    /* border: 1px solid red */
}
.sub2_wrap{
    height: 100vh;
}
.sub2_title{
    margin-bottom: 10px;
}
.sub2_title p{
    text-align: left;
    font-size: 2em;
    padding-left: 20px;
}
.sub2_title_1{
    font-weight: 400;
}
.sub2_title_2{
    font-weight: bold;
}
.sub2_search{
    width: 90%;
    height: 40px;
    outline: 1px solid rgb(212, 212, 212);
    border-radius: 5px;
    margin-bottom: 20px;
}
.search_area{
    position: relative;
}
.btn_search_font{
    font-size: 1.5em;
    position: absolute;
    top: 15%;
    right: 7%;
}


.sub2_event_txt{
    text-align: left;
    margin-left: 20px;
    font-size: 1.5em;
    font-weight: bold;
    margin-bottom: 10px;
}
.sub2_event{
    margin: 0 auto;
    width: 90%;
    height: 400px;
    background: url(../assets/sub2event.png) no-repeat;
    background-size: cover;
    margin-bottom: 40px;
}

.now_ham_title{
    text-align: left;
    font-size: 1.7em;
    font-weight: bold;
    padding-left: 20px;
}
.sub2_overflow{
    width: 100vw;
    height: 400px;
    overflow: hidden;
}
.sub2_track{
    width: 3000px;
    height: 300px;
    display: flex;
}
.sub2_track > .sub2_card{
    width: 100vw;
    height: 300px;
}
.sub2_track > .sub2_card > .hamimg{
    width: 100vw;
    height: 300px;
}
.sub2_card > p{
    font-size:1.4em;
    font-weight: bold;
}
.hamimg0{
    background: url(../assets/card_burger1.png) no-repeat;
    background-size: cover;
    background-position: -20%;
}
.hamimg1{
    background: url(../assets/card_burger2.png) no-repeat;
    background-size: cover;
}
.hamimg2{
    background: url(../assets/card_burger3.png) no-repeat;
    background-size: cover;
}
.hamimg3{
    background: url(../assets/card_burger4.png) no-repeat;
    background-size: cover;
}


</style>