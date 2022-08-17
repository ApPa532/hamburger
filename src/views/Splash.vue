<template>
  <div class="splash_wrap" :class="{loader:true, fadeout:!isLoading}">
      <div class="splash_flex">
          <div class="splash_flex_overflow">
              <div class="splash">
        
              </div>
          </div>
<!--           <div class="start">
              <a class="startbox">시작하기</a>
          </div>
          <div class="sp_login_area">
              <a>이미 계정이 있나요? <span class="sp_login">로그인</span></a>
          </div> -->
      </div>
  </div>
</template>

<script>
export default {
    name: "LoadingScreen",
    props: ["isLoading"],
}
</script>

<style>
.splash_wrap{
/*     width: 100vw;
    height: 100vh; */
    overflow: hidden;
  background-color: white;
    bottom: 0;
    left: 0;
    display: block;
    /* padding-top: 10vh; */
    top: 0;
    right: 0;
    position: fixed;
    z-index: 9999;
}
.splash_flex{
    height: 100vh;
    display: flex;
    flex-direction: column;
/*     gap: 2em; */
    justify-content: center;
    align-items: center;
}
.splash_flex_overflow{
    overflow: hidden;
    /* 스크립트 짤때 활용 */
}
.splash{
    width: 140px;
    height: 240px;
    background: url(../assets/jump_ham_w.GIF) no-repeat left top;
    background-size: 100%;
    background-position: center;
}

/* 로딩추가 */
.fadeout {
    animation: fadeout 2s forwards;
    /* display: none; */
}
@keyframes fadeout{
    to{
        opacity: 0;
        visibility: hidden;
    }
}



/* .start{
    width: 80%;
}
.startbox{
    display: block;
    width: 100%;
    color: white;
    font-size: 1.4em;
    font-weight: bold;
    padding: 10px 0;
    border-radius: 5px;
    
    background: #ffbb4e;
}
.sp_login_area > *{
    font-size: 1.2em
}
.sp_login{
    color: #ffbb4e;
    font-weight: bold;
} */
</style>