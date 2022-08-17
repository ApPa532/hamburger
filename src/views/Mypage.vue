<template>
    <div id="mypagewrap">



        <div class="page_top">
            <div id="nav">
                <!-- nav_back -->
                <div>
                    <div class="back">
                        <router-link to="/">
                            <img :src="head1" alt="뒤로가기" width="22" height="22" />
                        </router-link>
                    </div>
                </div>
            </div>

            <div>
                <div class="login_text">
                    <h2>로그인하세요</h2>
                    <p>버거싶다의 <br>
                        간편한 기능들을 이용해보세요.
                    </p>
                </div>
                <div class="profile_img">

                </div>
            </div>
        </div>

        <div class="page_bottom">
            <div class="infor">
                <div class="infor_box">
                    <div></div>
                    <p>자주묻는질문</p>
                </div>
                <div class="infor_box">
                    <div></div>
                    <p>1:1 문의</p>
                </div>
                <div class="infor_box">
                    <div></div>
                    <p>개인정보수정</p>
                </div>
                <div class="infor_box">
                    <div></div>
                    <p>비밀번호변경</p>
                </div>
            </div>
            <div class="bigjjim">
                <div class="bigwrap">
                    <div class="bigbox">
                        <div class="burger_name">
                            <h3>버거킹</h3>
                            <h2>타바스코몬스터</h2>
                        </div>
                        <div class="burger">
                            <img :src="burger1" width="220" height="170"/>
                        </div>
                        <div class="heart_icon">
                            <div>
                                <img :src="jjim" width="21" height="18" alt="찜" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bigwrap">
                    <div class="bigbox">
                        <div class="burger_name">
                            <h3>맥도날드</h3>
                            <h2>창녕마늘버거</h2>
                        </div>
                        <div class="burger">
                            <img :src="burger2" width="220" height="170"/>
                        </div>
                        <div class="heart_icon">
                            <div>
                                <img :src="jjim" width="21" height="18" alt="찜" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bigwrap">
                    <div class="bigbox">
                        <div class="burger_name">
                            <h3>롯데리아</h3>
                            <h2>클래식치즈버거</h2>
                        </div>
                        <div class="burger">
                            <img :src="burger3" width="220" height="170"/>
                        </div>
                        <div class="heart_icon">
                            <div>
                                <img :src="jjim" width="21" height="18" alt="찜" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    </div>



</template>

<script>
export default {
    name: 'MyPage',
    data() {
        return {
            head1: require("../assets/header_back.svg"),
            jjim: require("../assets/burger_heart_jjim.png"),
            burger1: require("../assets/mypage_burger1.png"),
            burger2: require("../assets/mypage_burger2.png"),
            burger3: require("../assets/mypage_burger3.png"),
        };
    },
}
</script>

<style scoped>
#mypagewrap {
    width: 100vw;
    /* height: 100vh; */
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
}

#nav {
    border-bottom: none;
    background: transparent;
}

.page_top {
    background: #FFBB4E;
    width: 100%;
    height: 320px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
}

.page_top>div {
    width: 95%;
    height: 230px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.login_text {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 20px 0;
}

.login_text h2 {
    font-weight: 700;
    font-size: 30px;
    line-height: 43px;
    color: #FFFFFF;
}

.login_text p {
    font-weight: 700;
    font-size: 20px;
    line-height: 29px;
    color: #FFFFFF;
}

.profile_img {
    min-width: 126px;
    width: 126px;
    height: 126px;
    border-radius: 50%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background: url(../assets/profile_burger.svg) no-repeat center center #FFFFFF;
    background-size: 86px 60px;
}

.page_bottom {
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.page_bottom .infor {
    width: 100%;
    height: 210px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.page_bottom .infor .infor_box {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px 0;
}

.page_bottom .infor .infor_box>div {
    min-width: 80px;
    width: 80px;
    height: 80px;
    background: #FFFFFF;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
}

.page_bottom .infor .infor_box p {
    width: 100px;
    font-weight: 500;
    font-size: 16px;
    line-height: 23px;
    text-align: center;
    color: #685E4F;

}

.page_bottom .infor .infor_box:nth-child(1)>div {
    background: url(../assets/mypage_icon1.svg) no-repeat center center;
}
.page_bottom .infor .infor_box:nth-child(2)>div {
    background: url(../assets/mypage_icon2.svg) no-repeat center center;
}
.page_bottom .infor .infor_box:nth-child(3)>div {
    background: url(../assets/mypage_icon3.svg) no-repeat center center;
}
.page_bottom .infor .infor_box:nth-child(4)>div {
    background: url(../assets/mypage_icon4.svg) no-repeat center center;
}

.bigjjim{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0 40px;
}
.bigjjim .bigwrap{
    min-width: 200px;
    width: 200px;
    height: 280px;
    background: rgba(248, 247, 244, 0.55);
    border: 1px solid #FFBB4E;
    box-shadow: inset -5px -5px 10px rgba(158, 158, 158, 0.41);
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.bigjjim .bigwrap .bigbox{
    min-width: 170px;
    width: 170px;
    height: 240px;
    position: relative;
}
.bigbox .burger_name{
    min-width: 170px;
    width: 170px;
    height: 50px;
}
.bigbox .burger_name h3{
    font-weight: 500;
    font-size: 20px;
    line-height: 29px;
    color: #A1814D;
}
.bigbox .burger_name h2{
    font-weight: 700;
    font-size: 22px;
    line-height: 32px;
    color: #A1814D;
}
.bigbox .burger{
    position: relative;
    top: 10px;
    left: -50px;
}
.heart_icon{
    position: absolute;
    bottom: 0;
    right: 0;
}

</style>