<template>
    <div class="map_wrap">
        <img src="../../assets/imgs/map/map_bg.jpg" alt />
        <img src="../../assets/imgs/map/title.png" alt class="title" />

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
                        alt
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
            <!-- 小圆 -->
            <img src="../../assets/imgs/smalll.png" alt class="cicle_small" />
            <ul :class="{ active: isActive }" class="ul">
                <!-- 大圆 -->
                <img
                    src="../../assets/imgs/big.png"
                    alt
                    class="cicle_big"
                    :style="{ transform: `rotate(${defaultDeg}deg)` }"
                />

                <li
                    v-for="(item, index) in circle"
                    :key="item.id"
                    @click="handleCricle(index, item.name, item.deg, item.pos)"
                >
                    <em
                        :class="item.name"
                        :style="{ transform: `rotate(${defaultDeg}deg)` }"
                    ></em>
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
            defaultDeg: 0,
            selectedValue: "qin",
            show: false,
            country: [
                {
                    id: "01"
                }
            ],
            isY1: false,
            isY1_1: false,
            circle: {
                yan: {
                    id: "1",
                    name: "yan",
                    deg: 0,
                    pos: -52,
                    imgSrc: require("../../assets/imgs/map/yan/name.png"),
                    imgSrcOn: require("../../assets/imgs/map/yan/name_on.png")
                },
                zhao: {
                    id: "2",
                    name: "zhao",
                    deg: 0,
                    pos: -26,
                    imgSrc: require("../../assets/imgs/map/zhao/name.png"),
                    imgSrcOn: require("../../assets/imgs/map/zhao/name_on.png")
                },
                qin: {
                    id: "3",
                    name: "qin",
                    deg: 0,
                    pos: 0,
                    imgSrc: require("../../assets/imgs/map/qin/name.png"),
                    imgSrcOn: require("../../assets/imgs/map/qin/name_on.png")
                },
                chu: {
                    id: "4",
                    name: "chu",
                    deg: 0,
                    pos: 26,
                    imgSrc: require("../../assets/imgs/map/chu/name.png"),
                    imgSrcOn: require("../../assets/imgs/map/chu/name_on.png")
                },
                wei: {
                    id: "5",
                    name: "wei",
                    deg: 0,
                    pos: 52,
                    imgSrc: require("../../assets/imgs/map/wei/name.png"),
                    imgSrcOn: require("../../assets/imgs/map/wei/name_on.png")
                },
                han: {
                    id: "6",
                    name: "han",
                    deg: 0,
                    pos: 4,
                    imgSrc: require("../../assets/imgs/map/han/name.png"),
                    imgSrcOn: require("../../assets/imgs/map/han/name_on.png")
                },
                qi: {
                    id: "7",
                    name: "qi",
                    deg: 0,
                    pos: 4,
                    imgSrc: require("../../assets/imgs/map/qi/name.png"),
                    imgSrcOn: require("../../assets/imgs/map/qi/name_on.png")
                }
            }
        };
    },
    mounted () {
        this.show = true;
    },
    methods: {
        handleCricle (i, name, deg, pos) {
            console.log(name, pos);
            switch (pos) {
            case -52:
                this.defaultDeg = -52;
                this.selectedValue = "wei";
                break;
            case -26:
                this.defaultDeg = -26;
                this.$set(this.circle.qi, "pos", -78);
                this.$set(this.circle.qin, "name", "zhao");
                console.log("新出现的齐的位置", this.circle);
                break;
            case 0:
                this.defaultDeg = 0;
                this.selectedValue = "qin";
                break;
            case 26:
                this.defaultDeg = 26;
                this.selectedValue = "yan";
                break;
            case 52:
                this.defaultDeg = 52;
                this.selectedValue = "zhao";
                this.circle[i].deg = "-30";
                break;
            case -78:
                this.defaultDeg = -78;
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
        },
        clickYan () {
            this.isY1 = true;
            this.isY1_1 = true;
            this.defaultDeg = -30;
        }
    }
};
</script>

<style scoped lang="scss">
.wai {
    display: block;
    width: 40px;
    height: 40px;
    border: 1px solid #222;
}

.y1 {
    animation: center1 0.9s ease-in-out forwards;
}

.y1_1 {
    animation: center2 0.9s ease-in-out forwards;
}

.li {
    content: "";
    display: block;
    width: 106px;
    height: 107px;
    text-align: center;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 20px;
    background: greenyellow;
    border-radius: 100%;
}

@keyframes center1 {
    to {
        transform: translateY(214px);
        transform-origin: (100, 100);
    }
}

@keyframes center2 {
    to {
        transform: translateX(-106px);
    }
}

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
        width: 10rem;
        height: 9.99rem;
        right: -35.2%;
        right: 0.1rem;
        top: 50%;
        margin-top: -4.96rem;
        transition: all 0.9s;
        z-index: 0;
    }

    ul {
        position: absolute;
        width: 10.12rem;
        height: 9.99rem;
        right: -36%;
        // right: 10%;
        top: 50%;
        margin-top: -4.83rem;
        transition: all 0.9s ease-in-out;

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

            &:nth-child(1) {
                width: 1.06rem;
                height: 1.07rem;
                transition: all 0.9s;
            }

            em {
                display: block;
                width: 1.07rem;
                height: 1.08rem;
                position: absolute;
                left: 0;
                top: 0;
                margin-top: 0;
            }

            .yan {
                left: 1.84rem;
                top: 1.16rem;
            }

            .zhao {
                left: 0.69rem;
                top: 2.7rem;
            }

            .center {
                right: 8.75rem;
                top: 4.5rem;
            }
            .m-52{
                left: 1.84rem;
                top: 1.16rem;
            }
            .m-26{
                left: 0.69rem;
                top: 2.7rem;
            }
            .m0 {
                left: 0.29rem;
                top: 4.53rem;
            }
            .m26 {
                left: 0.72rem;
                top: 6.38rem;
            }
            .m52 {
                left: 1.94rem;
                top: 7.79rem;
            }
            .qin {
                left: 0.29rem;
                top: 4.53rem;
            }

            .chu {
                left: 0.72rem;
                top: 6.38rem;
            }

            .wei {
                left: 1.94rem;
                top: 7.79rem;
            }

            .han {
                left: 3.65rem;
                top: 8.62rem;
            }

            .qi {
                left: 5.58rem;
                top: 8.63rem;
            }

            .yan1 {
                left: 7.29rem;
                top: 7.79rem;
            }

            .zhao1 {
                left: 8.46rem;
                top: 6.29rem;
            }

            .qin1 {
                left: 8.87rem;
                top: 4.46rem;
            }

            .chu1 {
                left: 8.47rem;
                top: 2.62rem;
            }

            .wei1 {
                left: 7.29rem;
                top: 1.09rem;
            }

            .han1 {
                left: 5.55rem;
                top: 0.29rem;
            }

            .qi1 {
                left: 3.59rem;
                top: 0.27rem;
            }

            .two_img {
                width: 1.37rem;
                height: 1.06rem;
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
