<template>
    <div class="slidebar" v-show="isSlideBar">
        <img src="../../assets/imgs/appoint/slide_bar.png" alt="" />
        <ul>
            <li><a href="javascript:;"></a></li>
            <li><a href="javascript:;"></a></li>
            <li><a href="javascript:;"></a></li>
        </ul>
        <img src="../../assets/top.png" alt="" class="top_bot" @click="backTop()" />
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
        window.addEventListener("scroll", this.showSlideBar, true);
        window.addEventListener("scroll", this.handleScroll, true);
        // 监听鼠标滑动的距离距离顶部的距离，判断是否显示隐藏侧栏
    },
    methods: {
        showSlideBar () {
            if (!!document.documentElement.scrollTop && document.documentElement.scrollTop > 1080) {
                this.isSlideBar = true;
            } else {

            }
        },
        handleScroll () {
            let scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
            scrolltop > 30 ? (this.gotop = true) : (this.gotop = false);
        },
        backTop () {
            let top = document.documentElement.scrollTop || document.body.scrollTop;
            // 实现滚动效果
            const timeTop = setInterval(() => {
                document.body.scrollTop = document.documentElement.scrollTop = top -= 50;
                if (top <= 0) {
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
        bottom: 0.63rem;
    }
    25% {
        bottom: 0.65rem;
    }
    50% {
        bottom: 0.75rem;
    }
    66% {
        bottom: 0.63rem;
    }
    88% {
        bottom: 0.65rem;
    }
    100% {
        bottom: 0.75rem;
    }
}
.slidebar {
    position: fixed;
    width: 1.54rem;
    height: 3.79rem;
    top: 25%;
    left: 0;
    z-index: 116;
    .top_bot {
        display: inline-block;
        position: absolute;
        width: 0.49rem;
        height: 0.35rem;
        bottom: 0.66rem;
        left: 50%;
        margin-left: -0.245rem;
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
