<template>
    <div class="map_wrap">
        <img src="../../assets/imgs/map/map_bg.jpg" alt="" />
        <img src="../../assets/imgs/map/title.png" alt="" class="title" />

        <!-- 左边国家信息 -->
        <div class="info_con">
            <div class="qin">
                <transition
                    enter-active-class="animate__animated animate__fadeInUp"
                    leave-active-class="animate__animated animate__fadeOutDown"
                    :duration="{ enter: 1000, leave: 2000 }"
                >
                    <img
                        src="../../assets/imgs/map/qin/info.png"
                        class="info"
                        v-show="this.show"
                    />
                </transition>
                <transition
                    enter-active-class="animate__animated animate__fadeInUp"
                    leave-active-class="animate__animated animate__fadeOutDown"
                    :duration="{ enter: 2000, leave: 1000 }"
                >
                    <img
                        src="../../assets/imgs/map/qin/fea.png"
                        alt=""
                        class="fea"
                        v-show="this.show"
                    />
                </transition>
            </div>
        </div>

        <!-- 中间地图 -->
        <div class="map">
            <div>
                <em class="yan"></em>
                <em class="yan_cur"></em>
            </div>
            <em class="zhao"></em>
            <div>
                <em class="qin"></em>
                <em class="qin_cur center_on"></em>
            </div>
            <em class="chu"></em>
            <em class="wei"></em>
            <em class="han"></em>
            <em class="qi"></em>
        </div>

        <!-- 右边转盘 -->
        <div class="circle">
            <img src="../../assets/imgs/smalll.png" alt="" class="cicle_small" />
            <ul
                :class="{ active: isActive }"
                :style="{ transform: `rotate(${defaultDeg}deg)` }"
            >
            <img src="../../assets/imgs/big.png" alt="" class="cicle_big" />
                <li class="center"></li>
                <li
                    :class="item.name"
                    v-for="item in circle"
                    :key="item.id"
                    @click="handleCricle(item.name, item.deg, item.pos)"
                >
                    <img :src="item.imgSrc" alt="" class="first_img">
                    <img
                        :src="item.imgSrcOn"
                        v-show="selectedValue == item.name"
                        class="two_img"
                    />
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "Map",
    props: {
        msg: String
    },
    data () {
        return {
            isActive: false,
            circle: [
                {
                    id: "01",
                    name: "yan",
                    deg: -60,
                    pos: 1,
                    imgSrc: require("../../assets/imgs/map/yan/name.png"),
                    imgSrcOn: require("../../assets/imgs/map/yan/name_on.png")
                },
                {
                    id: "02",
                    name: "zhao",
                    deg: -30,
                    pos: 2,
                    imgSrc: require("../../assets/imgs/map/zhao/name.png"),
                    imgSrcOn: require("../../assets/imgs/map/zhao/name_on.png")
                },
                {
                    id: "03",
                    name: "qin",
                    deg: 0,
                    pos: 0,
                    imgSrc: require("../../assets/imgs/map/qin/name.png"),
                    imgSrcOn: require("../../assets/imgs/map/qin/name_on.png")
                },
                {
                    id: "04",
                    name: "chu",
                    deg: 30,
                    pos: 3,
                    imgSrc: require("../../assets/imgs/map/chu/name.png"),
                    imgSrcOn: require("../../assets/imgs/map/chu/name_on.png")
                },
                {
                    id: "05",
                    name: "wei",
                    deg: 60,
                    pos: 4,
                    imgSrc: require("../../assets/imgs/map/wei/name.png"),
                    imgSrcOn: require("../../assets/imgs/map/wei/name_on.png")
                },
                {
                    id: "06",
                    name: "han",
                    deg: 90,
                    pos: 4,
                    imgSrc: require("../../assets/imgs/map/han/name.png"),
                    imgSrcOn: require("../../assets/imgs/map/han/name_on.png")
                },
                {
                    id: "07",
                    name: "qi",
                    deg: 120,
                    pos: 4,
                    imgSrc: require("../../assets/imgs/map/qi/name.png"),
                    imgSrcOn: require("../../assets/imgs/map/qi/name_on.png")
                },
                {
                    id: "08",
                    name: "yan1",
                    deg: 60,
                    pos: 4,
                    imgSrc: require("../../assets/imgs/map/yan/name.png"),
                    imgSrcOn: require("../../assets/imgs/map/yan/name_on.png")
                },
                {
                    id: "09",
                    name: "zhao1",
                    deg: 60,
                    pos: 4,
                    imgSrc: require("../../assets/imgs/map/zhao/name.png"),
                    imgSrcOn: require("../../assets/imgs/map/zhao/name_on.png")
                },
                {
                    id: "10",
                    name: "qin1",
                    deg: 60,
                    pos: 4,
                    imgSrc: require("../../assets/imgs/map/qin/name.png"),
                    imgSrcOn: require("../../assets/imgs/map/qin/name_on.png")
                },
                {
                    id: "11",
                    name: "chu1",
                    deg: 60,
                    pos: 4,
                    imgSrc: require("../../assets/imgs/map/chu/name.png"),
                    imgSrcOn: require("../../assets/imgs/map/chu/name_on.png")
                },
                {
                    id: "12",
                    name: "wei1",
                    deg: 60,
                    pos: 4,
                    imgSrc: require("../../assets/imgs/map/wei/name.png"),
                    imgSrcOn: require("../../assets/imgs/map/wei/name_on.png")
                },
                {
                    id: "13",
                    name: "han1",
                    deg: 60,
                    pos: 4,
                    imgSrc: require("../../assets/imgs/map/han/name.png"),
                    imgSrcOn: require("../../assets/imgs/map/han/name_on.png")
                },
                {
                    id: "14",
                    name: "qi1",
                    deg: 60,
                    pos: 4,
                    imgSrc: require("../../assets/imgs/map/qi/name.png"),
                    imgSrcOn: require("../../assets/imgs/map/qi/name_on.png")
                }
            ],
            defaultDeg: 0,
            selectedValue: "qin",
            show: false,
            country: [
                {
                    id: "01"
                }
            ]
        };
    },
    mounted () {
        this.show = true;
    },
    methods: {
        handleCricle (name, deg, pos) {
            // console.log("转的位置", deg, pos);
            // this.isActive = !this.isActive;
            console.log(
                "此时应该显示图片亮字",
                typeof name,
                typeof this.selectedValue
            );
            switch (name) {
            case "yan":
                this.defaultDeg = "-60";
                this.selectedValue = "yan";
                break;
            case "zhao":
                this.defaultDeg = "-30";
                this.selectedValue = "zhao";
                break;
            case "qin":
                this.defaultDeg = "0";
                this.selectedValue = "qin";
                break;
            case "chu":
                this.defaultDeg = "30";
                this.selectedValue = "chu";
                break;
            case "wei":
                this.defaultDeg = "60";
                this.selectedValue = "wei";
                break;
            case "han":
                this.defaultDeg = "90";
                this.selectedValue = "han";
                break;
            case "qi":
                this.defaultDeg = "120";
                this.selectedValue = "qi";
            }
        }
    }
};
</script>

<style scoped lang="scss">
/* 点击转动的样式 */
.active {
    transform: rotate(-60deg);
}
.map_wrap {
    position: relative;
    width: 100%;
    .info_con {
        position: absolute;
        left: 3.55rem;
        top: 2.33rem;
        .qin {
            width: 4.35rem;
            img {
                position: absolute;
                left: 0;
            }
            .info {
                width: 4.35rem;
                height: 2.86rem;
                top: 0;
            }
            .fea {
                width: 2.53rem;
                height: 1.92rem;
                top: 3.87rem;
            }
        }
    }
    .map {
        width: 8.88rem;
        height: 7.04rem;
        position: absolute;
        right: 3.68rem;
        top: 2.33rem;
        img {
            width: 100%;
        }
        em {
            display: inline-block;
            transition: all 0.1s;
        }
        .yan {
            display: inline-block;
            width: 2.85rem;
            height: 1.69rem;
            position: absolute;
            top: 0;
            right: 0.61rem;
            background: url(".././../assets/imgs/map/yan/map.png") no-repeat;
            background-size: 100% 100%;
            &:hover {
                background: url(".././../assets/imgs/map/yan/map_on.png")
                    no-repeat;
                background-size: 100% 100%;
            }
        }
        .zhao {
            width: 4.21rem;
            height: 2.73rem;
            position: absolute;
            top: 0.03rem;
            left: 2.18rem;
            background: url(".././../assets/imgs/map/zhao/map.png") no-repeat;
            background-size: 100% 100%;
            &:hover {
                background: url(".././../assets/imgs/map/zhao/map_on.png")
                    no-repeat;
                background-size: 100% 100%;
            }
        }
        .qin {
            width: 3.93rem;
            height: 6.32rem;
            position: absolute;
            top: 0.75rem;
            left: 0.05rem;
            background: url(".././../assets/imgs/map/qin/map.png") no-repeat;
            background-size: 100% 100%;
            &:hover {
                background: url(".././../assets/imgs/map/qin/map_on.png")
                    no-repeat;
                background-size: 100% 100%;
            }
        }
        .center_on {
            position: absolute;
            top: 0.75rem;
            left: 0.05rem;
            background: url(".././../assets/imgs/map/qin/map_on.png") no-repeat;
            background-size: 100% 100%;
        }
        .qin_cur {
            width: 3.93rem;
            height: 6.32rem;
            position: absolute;
            top: 0.75rem;
            left: 0.05rem;
            background: url(".././../assets/imgs/map/qin/map_on.png") no-repeat;
            background-size: 100% 100%;
        }
        .chu {
            width: 5.77rem;
            height: 3.44rem;
            position: absolute;
            bottom: 0.01rem;
            right: 0.05rem;
            background: url(".././../assets/imgs/map/chu/map.png") no-repeat;
            background-size: 100% 100%;
            &:hover {
                background: url(".././../assets/imgs/map/chu/map_on.png")
                    no-repeat;
                background-size: 100% 100%;
            }
        }
        .wei {
            width: 3.15rem;
            height: 2.38rem;
            position: absolute;
            top: 2.33rem;
            right: 1.75rem;
            background: url(".././../assets/imgs/map/wei/map.png") no-repeat;
            background-size: 100% 100%;
            &:hover {
                background: url(".././../assets/imgs/map/wei/map_on.png")
                    no-repeat;
                background-size: 100% 100%;
            }
        }
        .han {
            width: 2.62rem;
            height: 3.18rem;
            position: absolute;
            top: 2.18rem;
            right: 3.7rem;
            background: url(".././../assets/imgs/map/han/map.png") no-repeat;
            background-size: 100% 100%;
            &:hover {
                background: url(".././../assets/imgs/map/han/map_on.png")
                    no-repeat;
                background-size: 100% 100%;
            }
        }
        .qi {
            width: 2.98rem;
            height: 2.61rem;
            position: absolute;
            top: 1.45rem;
            right: 0.25rem;
            background: url(".././../assets/imgs/map/qi/map.png") no-repeat;
            background-size: 100% 100%;
            &:hover {
                background: url(".././../assets/imgs/map/qi/map_on.png")
                    no-repeat;
                background-size: 100% 100%;
            }
        }
    }
}
.title {
    width: 12.09rem;
    height: 1.13rem;
    position: absolute;
    left: 3.55rem;
    top: 0.58rem;
    z-index: 1;
}
.circle {
    .cicle_small {
        position: absolute;
        width: 7.05rem;
        height: 7.11rem;
        right: -28%;
        top: 50%;
        margin-top: -3.43rem;
        animation: circle 20s infinite linear;
    }
    .cicle_big {
        position: absolute;
        width: 10.12rem;
        height: 9.99rem;
        /*right: -35.2%;*/
        right: 10%;
        top: 50%;
        margin-top: -4.83rem;
        transition: all 0.9s;
        z-index: 9999;
    }
    ul {
        position: absolute;
        width: 10.12rem;
        height: 9.99rem;
        /*right: -35.2%;*/
        right: 10%;
        top: 50%;
        margin-top: -4.83rem;
        background: pink;
        transition: all 0.9s;
        li {
            position: absolute;
            width: 1.37rem;
            height: 1.07rem;
            border-radius: 100%;
            cursor: pointer;
            img {
                position: absolute;
                left: 0;
                top: 0;
                margin-top: 0;
            }
            .first_img{
                width: 1.06rem;
                height: 1.07rem;
            }
            .two_img{
                width: 1.37rem;
                height: 1.06rem;
            }
            &.qi {
                right: 5.45rem;
                top: 0.3rem;
            }
            &.yan {
                right: 7.2rem;
                top: 1.16rem;
            }
            &.zhao {
                right: 8.4rem;
                top: 2.66rem;
            }
            &.center {
                right: 8.75rem;
                top: 4.5rem;
            }
            &.qin {
                right: 8.75rem;
                top: 4.5rem;
            }
            &.chu {
                right: 8.35rem;
                top: 6.35rem;
            }
            &.wei {
                right: 7.15rem;
                top: 7.8rem;
            }
            &.han {
                right: 5.45rem;
                top: 8.6rem;
            }
            &.qi1 {
                right: 3.48rem;
                top: 8.6rem;
            }
            &.yan1 {
                right: 1.73rem;
                top: 7.81rem;
            }
            &.zhao1 {
                right: 0.57rem;
                top: 6.29rem;
            }
            &.qin1 {
                right: 0.16rem;
                top: 4.46rem;
            }
            &.chu1 {
                right: 0.59rem;
                top: 2.6rem;
            }
            &.wei1 {
                right: 1.75rem;
                top: 1.09rem;
            }
            &.han1 {
                right: 3.48rem;
                top: 0.27rem;
            }
        }
    }
}
@keyframes circle {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>
