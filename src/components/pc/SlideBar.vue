<template>
    <div>
        <div class="slidebar animate__animated animate__fadeInLeft">
            <img src="../../assets/imgs/appoint/slide_bar.png" alt="" />
            <ul>
                <li><a href="https://chunqiuios.onelink.me/GB4k/c8a448d2"></a></li>
                <li><a href="https://chunqiuand.onelink.me/ZoEl/87776227"></a></li>
                <li><a href="https://www.facebook.com/ChunChiuM"></a></li>
            </ul>
            <a href="#appoint" class="top">
                <img src="../../assets/top.png" alt="" class="top_bot" />
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: "SlideBar",
    props: {
        msg: String
    },
    data () {
        return {
            isSlideBar: false
        };
    },
    mounted () {
        // 实时监听
        // window.addEventListener("scroll", this.handleScroll, true);
        // window.addEventListener("scroll", this.showSlideBar, true);
    },
    methods: {
        showSlideBar () {
            console.log("滚轮距离顶部的高度", window.pageYOffset);
            if (
                !!document.documentElement.scrollTop &&
                document.documentElement.scrollTop > 1080
            ) {
                this.isSlideBar = true;
            } else {
                this.isSlideBar = false;
            }
        },
        handleScroll () {
            console.log("滚轮距离顶部的高度", window.pageYOffset);
            if (window.pageYOffset >= 1080) {
                this.isSlideBar = true;
            } else {
                this.isSlideBar = false;
            }
        },
        backTop () {
            // 点击返回顶部，返回距离顶部1080px的距离
            let top =
                document.documentElement.scrollTop || document.body.scrollTop;
            const timeTop = setInterval(() => {
                document.body.scrollTop = document.documentElement.scrollTop = top -= 50;
                if (top <= 1080) {
                    this.isSlideBar = true;
                    clearInterval(timeTop);
                }
            }, 10);
        }
    }
};
</script>

<style scoped lang="scss">
@keyframes top_bot {
    0% {
        bottom: 0.23rem;
    }
    20% {
        bottom: 0.26rem;
    }
    50% {
        bottom: 0.34rem;
    }
    60% {
        bottom: 0.3rem;
    }
    80% {
        bottom: 0.26rem;
    }
    100% {
        bottom: 0.23rem;
    }
}
.slidebar {
    position: fixed;
    width: 1.54rem;
    height: 3.79rem;
    top: 25%;
    left: 0;
    z-index: 110;
    .top {
        display: inline-block;
        position: absolute;
        width: 0.56rem;
        height: 0.5rem;
        bottom: 0.6rem;
        left: 50%;
        margin-left: -0.28rem;
    }
    .top_bot {
        display: inline-block;
        position: absolute;
        width: 0.24rem;
        height: 0.15rem;
        bottom: 0.23rem;
        left: 50%;
        margin-left: -0.12rem;
        z-index: 999999;
        animation: top_bot 1s ease infinite;
        cursor: pointer;
    }
}
.slidebar ul {
    width: 1rem;
    height: 1.04rem;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -0.52rem;
    margin-top: -0.28rem;
    z-index: 117;
}
.slidebar ul li {
    width: 100%;
    height: 0.333rem;
    position: absolute;
    cursor: pointer;
    /* background: pink;
    opacity: 0.6; */
    a {
        display: inline-block;
        width: 100%;
        height: 100%;
    }
    &:nth-child(1) {
        top: 0;
    }
    &:nth-child(2) {
        top: 0.355rem;
    }
    &:nth-child(3) {
        bottom: 0;
    }
}
</style>
