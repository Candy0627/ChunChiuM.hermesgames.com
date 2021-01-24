<template>
    <div class="map_wrap">
        <img src="../../assets/imgs/map/map_bg.jpg" alt />
        <img src="../../assets/imgs/map/title.png" alt class="title" />

        <!-- 左边国家信息 -->
        <div class="info_con">
            <div class="qin">
                <transition enter-active-class="animate__animated animate__fadeInUp"
                    leave-active-class="animate__animated animate__fadeOutDown"
                    :duration="{ enter: 1000, leave: 2000 }">
                    <img src="../../assets/imgs/map/qin/info.png" class="info" v-show="this.show" />
                </transition>
                <transition enter-active-class="animate__animated animate__fadeInUp"
                    leave-active-class="animate__animated animate__fadeOutDown"
                    :duration="{ enter: 2000, leave: 1000 }">
                    <img src="../../assets/imgs/map/qin/fea.png" alt class="fea" v-show="this.show" />
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
            <img src="../../assets/imgs/smalll.png" alt class="cicle_small" />
            <div :class="{ active: isActive }" class="ul">
                <img src="../../assets/imgs/big.png" alt class="cicle_big"
                    :style="{ transform: `rotate(${defaultDeg}deg)` }" />
                <!-- <div class="wai li_in" :class="{y1:isY1}">
                    <div class="li yan" :class="{y1_1:isY1_1}" @click="clickCountry()">
                        秦
                        <img src="../../assets/imgs/map/yan/name.png" alt="" />
                    </div>
                </div> -->
                <div class="item yan" :class="{p1:isp1}" @click="clickCountry('2')">燕
                    <img src="../../assets/imgs/map/yan/name.png" alt="" />
                </div>
                <div class="item zhao" :class="{p2:isp2}" @click="clickCountry('1')">赵
                    <img src="../../assets/imgs/map/zhao/name.png" alt="" />
                </div>
                <div class="item qin" :class="{p3:isp3}" @click="clickCountry('0')">秦
                    <img src="../../assets/imgs/map/qin/name.png" alt="" />
                </div>
            </div>
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
            circle: [ {
                          id: "1",
                          name: "yan",
                          deg: 0,
                          pos: 1,
                          imgSrc: require("../../assets/imgs/map/yan/name.png"),
                          imgSrcOn: require("../../assets/imgs/map/yan/name_on.png")
                      },
                      {
                          id: "2",
                          name: "zhao",
                          deg: 0,
                          pos: 2,
                          imgSrc: require("../../assets/imgs/map/zhao/name.png"),
                          imgSrcOn: require("../../assets/imgs/map/zhao/name_on.png")
                      },
                      {
                          id: "3",
                          name: "qin",
                          deg: 0,
                          pos: 0,
                          imgSrc: require("../../assets/imgs/map/qin/name.png"),
                          imgSrcOn: require("../../assets/imgs/map/qin/name_on.png")
                      },
                      {
                          id: "4",
                          name: "chu",
                          deg: 0,
                          pos: 3,
                          imgSrc: require("../../assets/imgs/map/chu/name.png"),
                          imgSrcOn: require("../../assets/imgs/map/chu/name_on.png")
                      },
                      {
                          id: "5",
                          name: "wei",
                          deg: 0,
                          pos: 4,
                          imgSrc: require("../../assets/imgs/map/wei/name.png"),
                          imgSrcOn: require("../../assets/imgs/map/wei/name_on.png")
                      },
                      {
                          id: "6",
                          name: "han",
                          deg: 0,
                          pos: 4,
                          imgSrc: require("../../assets/imgs/map/han/name.png"),
                          imgSrcOn: require("../../assets/imgs/map/han/name_on.png")
                      },
                      {
                          id: "7",
                          name: "qi",
                          deg: 0,
                          pos: 4,
                          imgSrc: require("../../assets/imgs/map/qi/name.png"),
                          imgSrcOn: require("../../assets/imgs/map/qi/name_on.png")
                      },
                      {
                          id: "8",
                          name: "yan1",
                          deg: 0,
                          pos: 4,
                          imgSrc: require("../../assets/imgs/map/yan/name.png"),
                          imgSrcOn: require("../../assets/imgs/map/yan/name_on.png")
                      },
                      {
                          id: "9",
                          name: "zhao1",
                          deg: 0,
                          pos: 4,
                          imgSrc: require("../../assets/imgs/map/zhao/name.png"),
                          imgSrcOn: require("../../assets/imgs/map/zhao/name_on.png")
                      },
                      {
                          id: "10",
                          name: "qin1",
                          deg: 0,
                          pos: 4,
                          imgSrc: require("../../assets/imgs/map/qin/name.png"),
                          imgSrcOn: require("../../assets/imgs/map/qin/name_on.png")
                      },
                      {
                          id: "11",
                          name: "chu1",
                          deg: 0,
                          pos: 4,
                          imgSrc: require("../../assets/imgs/map/chu/name.png"),
                          imgSrcOn: require("../../assets/imgs/map/chu/name_on.png")
                      },
                      {
                          id: "12",
                          name: "wei1",
                          deg: 0,
                          pos: 4,
                          imgSrc: require("../../assets/imgs/map/wei/name.png"),
                          imgSrcOn: require("../../assets/imgs/map/wei/name_on.png")
                      },
                      {
                          id: "13",
                          name: "han1",
                          deg: 0,
                          pos: 4,
                          imgSrc: require("../../assets/imgs/map/han/name.png"),
                          imgSrcOn: require("../../assets/imgs/map/han/name_on.png")
                      },
                      {
                          id: "14",
                          name: "qi1",
                          deg: 0,
                          pos: 4,
                          imgSrc: require("../../assets/imgs/map/qi/name.png"),
                          imgSrcOn: require("../../assets/imgs/map/qi/name_on.png")
                      }
            ],
            defaultDeg: 0,
            selectedValue: "qin",
            show: false,
            country: [ {
                id: "01"
            } ],
            isp1: false,
            isp2: false,
            isp3: false
        };
    },
    mounted () {
        this.show = true;
    },
    methods: {
        handleCricle (i, name, deg, pos) {
            switch (name) {
            case "yan":
                this.defaultDeg = "-60";
                this.selectedValue = "yan";
                break;
            case "zhao":
                this.defaultDeg = "-30";
                this.selectedValue = "zhao";
                this.circle[i].deg = "-30";
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
        },
        clickCountry (n) {
            switch (n) {
            case "2": {
                this.isp1 = true;
                this.isp2 = true;
                this.isp3 = true;
                this.defaultDeg = -30;
                break;
            }
            case "1": {
                this.isp1 = true;
                this.isp2 = true;
                this.isp3 = true;
                this.defaultDeg = -30;
                break;
            }
            case "0": {
                this.defaultDeg = 0;
                break;
            }
            }
        }
    }
};

</script>

<style scoped lang="scss">

    .p1 {
        animation: p1_1 0.98s cubic-bezier(0.1, 0.83, 0.4, 1) forwards,
            p1_2 0.98s cubic-bezier(0, 1, 0.27, 1.17) forwards;
    }

    @keyframes p1_1 {
        0% {
            top: 1.16rem;
        }

        100% {
            top: 4.88rem;
        }
    }

    @keyframes p1_2 {
        0% {
            left: 1.84rem;
        }

        100% {
            left: 0.3rem;
        }
    }

    .p2 {
        animation: p2_1 0.95s cubic-bezier(0.22, 1.31, 0.3, 0.98) forwards,
            p2_2 0.95s cubic-bezier(0.22, 1.31, 0.6, 0.98) forwards;
    }

    @keyframes p2_1 {
        0% {
            top: 2.66rem;
        }

        100% {
            top: 6.65rem;
        }
    }

    @keyframes p2_2 {
        0% {
            left: 0.66rem;
        }

        100% {
            left: 0.86rem;
        }
    }

    .p3 {
        animation: p3_1 0.95s cubic-bezier(0.22, 1.31, 0.3, 0.98) forwards,
            p3_2 0.95s cubic-bezier(0.22, 1.31, 0.6, 0.98) forwards;
    }

    @keyframes p3_1 {
        0% {
            top: 4.46rem;
        }

        100% {
            top: 8rem;
        }
    }

    @keyframes p3_2 {
        0% {
            left: 0.27rem;
        }

        100% {
            left: 2.1rem;
        }
    }

    .item {
        width: 1.08rem;
        height: 1.07rem;
        position: absolute;
        cursor: pointer;
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
                background: url('.././../assets/imgs/map/yan/map.png') no-repeat;
                background-size: 100% 100%;

                &:hover {
                    background: url('.././../assets/imgs/map/yan/map_on.png') no-repeat;
                    background-size: 100% 100%;
                }
            }

            .zhao {
                width: 4.21rem;
                height: 2.73rem;
                position: absolute;
                top: 0.03rem;
                left: 2.18rem;
                background: url('.././../assets/imgs/map/zhao/map.png') no-repeat;
                background-size: 100% 100%;

                &:hover {
                    background: url('.././../assets/imgs/map/zhao/map_on.png') no-repeat;
                    background-size: 100% 100%;
                }
            }

            .qin {
                width: 3.93rem;
                height: 6.32rem;
                position: absolute;
                top: 0.75rem;
                left: 0.05rem;
                background: url('.././../assets/imgs/map/qin/map.png') no-repeat;
                background-size: 100% 100%;

                &:hover {
                    background: url('.././../assets/imgs/map/qin/map_on.png') no-repeat;
                    background-size: 100% 100%;
                }
            }

            .center_on {
                position: absolute;
                top: 0.75rem;
                left: 0.05rem;
                background: url('.././../assets/imgs/map/qin/map_on.png') no-repeat;
                background-size: 100% 100%;
            }

            .qin_cur {
                width: 3.93rem;
                height: 6.32rem;
                position: absolute;
                top: 0.75rem;
                left: 0.05rem;
                background: url('.././../assets/imgs/map/qin/map_on.png') no-repeat;
                background-size: 100% 100%;
            }

            .chu {
                width: 5.77rem;
                height: 3.44rem;
                position: absolute;
                bottom: 0.01rem;
                right: 0.05rem;
                background: url('.././../assets/imgs/map/chu/map.png') no-repeat;
                background-size: 100% 100%;

                &:hover {
                    background: url('.././../assets/imgs/map/chu/map_on.png') no-repeat;
                    background-size: 100% 100%;
                }
            }

            .wei {
                width: 3.15rem;
                height: 2.38rem;
                position: absolute;
                top: 2.33rem;
                right: 1.75rem;
                background: url('.././../assets/imgs/map/wei/map.png') no-repeat;
                background-size: 100% 100%;

                &:hover {
                    background: url('.././../assets/imgs/map/wei/map_on.png') no-repeat;
                    background-size: 100% 100%;
                }
            }

            .han {
                width: 2.62rem;
                height: 3.18rem;
                position: absolute;
                top: 2.18rem;
                right: 3.7rem;
                background: url('.././../assets/imgs/map/han/map.png') no-repeat;
                background-size: 100% 100%;

                &:hover {
                    background: url('.././../assets/imgs/map/han/map_on.png') no-repeat;
                    background-size: 100% 100%;
                }
            }

            .qi {
                width: 2.98rem;
                height: 2.61rem;
                position: absolute;
                top: 1.45rem;
                right: 0.25rem;
                background: url('.././../assets/imgs/map/qi/map.png') no-repeat;
                background-size: 100% 100%;

                &:hover {
                    background: url('.././../assets/imgs/map/qi/map_on.png') no-repeat;
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
            width: 10rem;
            height: 9.99rem;
            /*right: -35.2%;*/
            right: 0;
            top: 50%;
            margin-top: -4.96rem;
            transition: all 0.9s;
            z-index: 0;
        }

        .ul {
            position: absolute;
            width: 10.12rem;
            height: 9.99rem;
            // right: -35.2%;
            right: 10%;
            background: pink;
            top: 50%;
            margin-top: -4.83rem;
            transition: all 0.9s ease-in-out;

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

            .li_in {
                position: absolute;
                width: 1.37rem;
                height: 1.07rem;
                border-radius: 100%;
                cursor: pointer;

                .li {
                    position: absolute;
                    left: 0;
                    top: 0;
                    margin-top: 0;

                    &:nth-child(1) {
                        width: 1.06rem;
                        height: 1.07rem;
                        transition: all 0.9s;
                    }
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
