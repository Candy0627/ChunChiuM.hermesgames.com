<template>
    <div class="military_wrap">
        <img src="../../assets/imgs/military_bg.jpg" alt="" />
        <!-- 导航栏 -->
        <ul>
            <li
                :class="{ libg: isjun, jun_on: isjun }"
                @click="handelTab('jun')"
            ></li>
            <li
                :class="{ libg: isgong, gong_on: isgong }"
                @click="handelTab('gong')"
            ></li>
            <li
                :class="{ libg: isqi, qi_on: isqi }"
                @click="handelTab('qi')"
            ></li>
            <li
                :class="{ libg: isbu, bu_on: isbu }"
                @click="handelTab('bu')"
            ></li>
        </ul>
        <!-- 使用animate.css 外面需要再包裹一层 v-if 外面div -->
        <!-- jun 的内容 -->
        <div class="jun">
            <div v-show="con === 'jun'">
                <div class="people">
                    <img
                        src="../../assets/imgs/hero/jun_name.png"
                        alt=""
                        class="animate__animated animate__fadeInDown"
                    />
                    <img
                        src="../../assets/imgs/hero/jun_people.png"
                        alt=""
                        class="peo animate__animated animate__fadeInUp"
                    />
                </div>
                <div class="content">
                    <img
                        src="../../assets/imgs/hero/jun_info.png"
                        alt=""
                        class="img info animate__animated animate__fadeInDown"
                    />
                    <img
                        src="../../assets/imgs/hero/title2.png"
                        alt=""
                        class="img animate__animated animate__fadeInUp"
                    />
                    <div class="corps_center">
                        <img
                            src="../../assets/imgs/hero/jun_corps.png"
                            alt=""
                            class="animate__animated animate__fadeInUp"
                        />
                        <ol>
                            <li
                                v-for="(item, index) in junArr"
                                :key="item.id"
                                @click="popShow('jun', index)"
                            ></li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
        <!-- gong 的内容 -->
        <div class="gong">
            <div v-show="con === 'gong'">
                <div class="people">
                    <img
                        src="../../assets/imgs/hero/gong_name.png"
                        alt=""
                        class="animate__animated animate__fadeInDown"
                    />
                    <img
                        src="../../assets/imgs/hero/gong_people.png"
                        alt=""
                        class="peo animate__animated animate__fadeInUp"
                    />
                </div>
                <div class="content">
                    <img
                        src="../../assets/imgs/hero/gong_info.png"
                        alt=""
                        class="img info animate__animated animate__fadeInDown"
                    />
                    <img
                        src="../../assets/imgs/hero/title2.png"
                        alt=""
                        class="img animate__animated animate__fadeInUp"
                    />
                    <div class="corps_center">
                        <img
                            src="../../assets/imgs/hero/gong_corps.png"
                            alt=""
                            class="animate__animated animate__fadeInUp"
                        />
                        <ol>
                            <li
                                v-for="(item, index) in gongArr"
                                :key="item.id"
                                @click="popShow('gong', index)"
                            ></li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
        <!-- qi的内容 -->
        <div class="qi">
            <div v-show="con === 'qi'">
                <div class="people">
                    <img
                        src="../../assets/imgs/hero/qi_name.png"
                        alt=""
                        class="animate__animated animate__fadeInDown"
                    />
                    <img
                        src="../../assets/imgs/hero/qi_people.png"
                        alt=""
                        class="peo animate__animated animate__fadeInUp"
                    />
                </div>
                <div class="content">
                    <img
                        src="../../assets/imgs/hero/qi_info.png"
                        alt=""
                        class="img info animate__animated animate__fadeInDown"
                    />
                    <img
                        src="../../assets/imgs/hero/title2.png"
                        alt=""
                        class="img animate__animated animate__fadeInUp"
                    />
                    <div class="corps_center">
                        <img
                            src="../../assets/imgs/hero/qi_corps.png"
                            alt=""
                            class="animate__animated animate__fadeInUp"
                        />
                        <ol>
                            <li
                                v-for="(item, index) in qiArr"
                                :key="item.id"
                                @click="popShow('qi', index)"
                            ></li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
        <!-- bu的内容 -->
        <div class="bu">
            <div v-show="con === 'bu'">
                <div class="people">
                    <img
                        src="../../assets/imgs/hero/bu_name.png"
                        alt=""
                        class="animate__animated animate__fadeInDown"
                    />
                    <img
                        src="../../assets/imgs/hero/bu_people.png"
                        alt=""
                        class="peo animate__animated animate__fadeInUp"
                    />
                </div>
                <div class="content">
                    <img
                        src="../../assets/imgs/hero/bu_info.png"
                        alt=""
                        class="img info animate__animated animate__fadeInDown"
                    />
                    <img
                        src="../../assets/imgs/hero/title2.png"
                        alt=""
                        class="img animate__animated animate__fadeInUp"
                    />
                    <div class="corps_center">
                        <img
                            src="../../assets/imgs/hero/bu_corps.png"
                            alt=""
                            class="corps animate__animated animate__fadeInUp"
                        />
                        <ol>
                            <li
                                v-for="(item, index) in buArr"
                                :key="item.id"
                                @click="popShow('bu', index)"
                            ></li>
                        </ol>
                        <!-- <ol>
                                <li>
                                    <img src="../../assets/bu/1--1.png" alt="" />
                                    <img src="../../assets/bu/1-1.png" alt="" />
                                </li>
                                <li>
                                    <img src="../../assets/bu/1--2.png" alt="" />
                                    <img src="../../assets/bu/1-2.png" alt="" />
                                </li>
                                <li>
                                    <img src="../../assets/bu/1--3.png" alt="" />
                                    <img src="../../assets/bu/1-3.png" alt="" />
                                </li>
                                <li>
                                    <img src="../../assets/bu/1--4.png" alt="" />
                                    <img src="../../assets/bu/1-4.png" alt="" />
                                </li>
                                <li>
                                    <img src="../../assets/bu/1--5.png" alt="" />
                                    <img src="../../assets/bu/1-5.png" alt="" />
                                </li>
                                <li class="top_bu">
                                    <img src="../../assets/bu/1--6.png" alt="" />
                                    <img src="../../assets/bu/1-6.png" alt="" />
                                </li>
                                <li class="top_bu">
                                    <img src="../../assets/bu/1--7.png" alt="" />
                                    <img src="../../assets/bu/1-7.png" alt="" />
                                </li>
                                <li class="top_bu">
                                    <img src="../../assets/bu/1--8.png" alt="" />
                                    <img src="../../assets/bu/1-8.png" alt="" />
                                </li>
                                <li class="top_bu">
                                    <img src="../../assets/bu/1--9.png" alt="" />
                                    <img src="../../assets/bu/1-9.png" alt="" />
                                </li>
                                <li class="top_bu">
                                    <img src="../../assets/bu/1--10.png" alt="" />
                                    <img src="../../assets/bu/1-10.png" alt="" />
                                </li>
                            </ol> -->
                    </div>
                </div>
            </div>
        </div>
        <!-- 遮罩部分 -->
        <div class="mask" v-show="isMask">
            <div class="mask_in">
                <img src="../../assets/pop_bg.png" alt="" />
                <img
                    src="../../assets/close.png"
                    alt=""
                    class="close"
                    @click="closeMask()"
                />
                <swiper :options="swiperOption" ref="mySwiper">
                    <swiper-slide
                        v-for="(item, index) in junPopList"
                        :key="item.id"
                        v-show="junPopList.length > 0 && selectedType == 'jun'"
                    >
                        <img :src="item.imgSrc" alt="" />
                    </swiper-slide>

                    <swiper-slide
                        v-for="(item, index) in gongPopList"
                        :key="item.id"
                        v-show="gongPopList.length > 0 && selectedType == 'gong'"
                    >
                        <img :src="item.imgSrc" alt="" />
                    </swiper-slide>

                    <swiper-slide
                        v-for="(item, index) in qiPopList"
                        :key="item.id"
                        v-show="qiPopList.length > 0 && selectedType == 'qi'"
                    >
                        <img :src="item.imgSrc" alt="" />
                    </swiper-slide>

                    <swiper-slide
                        v-for="(item, index) in buPopList"
                        :key="item.id"
                        v-show="buPopList.length > 0 && selectedType == 'bu'"
                    >
                        <img :src="item.imgSrc" alt="" />
                    </swiper-slide>

                    <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div>
                </swiper>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from "vue";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";
Vue.use(VueAwesomeSwiper);
export default {
    name: "Hero",
    props: {
        msg: String
    },
    data () {
        return {
            isjun: true,
            isgong: false,
            isqi: false,
            isbu: false,
            flag: 0,
            con: "jun",
            isMask: false,
            swiperOption: {
                grabCursor: true,
                loop: false,
                autoplay: false,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                }
            },
            junArr: [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ],
            gongArr: [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ],
            qiArr: [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
            buArr: [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
            junPopList: [
                {
                    id: "01",
                    imgSrc: require("../../assets/junpop/1-1.png")
                },
                {
                    id: "02",
                    imgSrc: require("../../assets/junpop/1-2.png")
                },
                {
                    id: "03",
                    imgSrc: require("../../assets/junpop/1-3.png")
                },
                {
                    id: "04",
                    imgSrc: require("../../assets/junpop/1-4.png")
                },
                {
                    id: "05",
                    imgSrc: require("../../assets/junpop/1-5.png")
                },
                {
                    id: "06",
                    imgSrc: require("../../assets/junpop/1-6.png")
                },
                {
                    id: "07",
                    imgSrc: require("../../assets/junpop/1-7.png")
                },
                {
                    id: "08",
                    imgSrc: require("../../assets/junpop/1-8.png")
                },
                {
                    id: "09",
                    imgSrc: require("../../assets/junpop/1-9.png")
                }
            ],
            gongPopList: [
                {
                    id: "001",
                    imgSrc: require("../../assets/gongpop/1-1.png")
                },
                {
                    id: "002",
                    imgSrc: require("../../assets/gongpop/1-2.png")
                },
                {
                    id: "003",
                    imgSrc: require("../../assets/gongpop/1-3.png")
                },
                {
                    id: "004",
                    imgSrc: require("../../assets/gongpop/1-4.png")
                },
                {
                    id: "005",
                    imgSrc: require("../../assets/gongpop/1-5.png")
                },
                {
                    id: "006",
                    imgSrc: require("../../assets/gongpop/1-6.png")
                },
                {
                    id: "007",
                    imgSrc: require("../../assets/gongpop/1-7.png")
                },
                {
                    id: "008",
                    imgSrc: require("../../assets/gongpop/1-8.png")
                },
                {
                    id: "009",
                    imgSrc: require("../../assets/gongpop/1-9.png")
                }
            ],
            qiPopList: [
                {
                    id: "0001",
                    imgSrc: require("../../assets/qipop/1-1.png")
                },
                {
                    id: "0002",
                    imgSrc: require("../../assets/qipop/1-2.png")
                },
                {
                    id: "0003",
                    imgSrc: require("../../assets/qipop/1-3.png")
                },
                {
                    id: "0004",
                    imgSrc: require("../../assets/qipop/1-4.png")
                },
                {
                    id: "0005",
                    imgSrc: require("../../assets/qipop/1-5.png")
                },
                {
                    id: "0006",
                    imgSrc: require("../../assets/qipop/1-6.png")
                },
                {
                    id: "0007",
                    imgSrc: require("../../assets/qipop/1-7.png")
                },
                {
                    id: "0008",
                    imgSrc: require("../../assets/qipop/1-8.png")
                },
                {
                    id: "0009",
                    imgSrc: require("../../assets/qipop/1-9.png")
                },
                {
                    id: "0010",
                    imgSrc: require("../../assets/qipop/1-10.png")
                }
            ],
            buPopList: [
                {
                    id: "00001",
                    imgSrc: require("../../assets/bupop/1-1.png")
                },
                {
                    id: "00002",
                    imgSrc: require("../../assets/bupop/1-2.png")
                },
                {
                    id: "00003",
                    imgSrc: require("../../assets/bupop/1-3.png")
                },
                {
                    id: "00004",
                    imgSrc: require("../../assets/bupop/1-4.png")
                },
                {
                    id: "00005",
                    imgSrc: require("../../assets/bupop/1-5.png")
                },
                {
                    id: "00006",
                    imgSrc: require("../../assets/bupop/1-6.png")
                },
                {
                    id: "00007",
                    imgSrc: require("../../assets/bupop/1-7.png")
                },
                {
                    id: "00008",
                    imgSrc: require("../../assets/bupop/1-8.png")
                },
                {
                    id: "00009",
                    imgSrc: require("../../assets/bupop/1-9.png")
                },
                {
                    id: "00010",
                    imgSrc: require("../../assets/bupop/1-10.png")
                }
            ],
            selectedType: ""
        };
    },
    computed: {
        swiper () {
            console.log("mySwiper存在么", this.$refs.mySwiper);
            return this.$refs.mySwiper.swiper;
        }
    },
    mounted () {},
    methods: {
        handelTab (type) {
            switch (type) {
            case "jun":
                this.isjun = true;
                this.isgong = false;
                this.isqi = false;
                this.isbu = false;
                this.con = "jun";
                break;
            case "gong":
                this.isjun = false;
                this.isgong = true;
                this.isqi = false;
                this.isbu = false;
                this.con = "gong";
                break;
            case "qi":
                this.isjun = false;
                this.isgong = false;
                this.isqi = true;
                this.isbu = false;
                this.con = "qi";
                break;
            case "bu":
                this.isjun = false;
                this.isgong = false;
                this.isqi = false;
                this.isbu = true;
                this.con = "bu";
            }
        },
        closeMask () {
            this.isMask = !this.isMask;
            this.selectedType = "";
            this.swiper.slideTo(0, 0, false);
        },
        popShow (type, index) {
            this.isMask = true;
            this.selectedType = type;
            this.swiper.slideTo(index, 0, false);
        }
    }
};
</script>

<style scoped lang="scss">
.animate__animated {
    animation-duration: 0.3s;
}
.swiper-button-prev,
.swiper-button-next {
    transition: all 0.9s;
}
.swiper-button-prev:after {
    content: "";
    width: 0.43rem;
    height: 0.84rem;
    background: url(".././../assets/left.png") no-repeat;
    background-size: 100% 100%;
}
.swiper-button-next:after {
    content: "";
    width: 0.43rem;
    height: 0.84rem;
    background: url(".././../assets/left.png") no-repeat;
    background-size: 100% 100%;
    transform: rotate(180deg);
}
.swiper-container {
    position: absolute;
    top: -0.42rem;
    width: 12rem;
    height: 4rem;
    left: 50%;
    margin-left: -6rem;
}
.swiper-button-prev {
    left: 3.5%;
    z-index: 999999;
}
.swiper-button-next {
    right: 3.5%;
    z-index: 999999;
}
.swiper-slide img {
    width: 10.16rem;
    height: 4rem;
}
.close {
    width: 0.46rem;
    height: 0.45rem;
    position: absolute;
    top: 0.24rem;
    right: 0.27rem;
}
.military_wrap {
    position: relative;
    width: 100%;
    overflow: hidden;
    .mask {
        & > img {
            width: 100%;
        }
        .mask_in {
            position: absolute;
            height: 3.97rem;
            top: 50%;
            margin-top: -1.985rem;
        }
    }
    ul {
        width: 1.01rem;
        height: 4.16rem;
        position: absolute;
        top: 3.27rem;
        right: 0.94rem;
        background: url(".././../assets/imgs/hero/hero.png") no-repeat;
        background-size: 100% 100%;
        li {
            width: 1.01rem;
            height: 1.01rem;
            text-indent: -9999px;
            cursor: pointer;
            &.libg {
                &::before {
                    position: absolute;
                    right: 0;
                    top: 0;
                    content: "";
                    width: 1.01rem;
                    height: 1.01rem;
                    background: url(".././../assets/imgs/hero/hero_on.png")
                        no-repeat;
                    background-size: 1.01rem 4.16rem;
                    background-position: 200px 200px;
                    transition: all 0.9s;
                }
            }
            &.jun_on {
                &::before {
                    background-position: 0 0;
                }
            }
            &.gong_on {
                &::before {
                    background-position: 0 -1.05rem;
                    top: 1.1rem;
                }
            }
            &.qi_on {
                &::before {
                    background-position: 0 -2.14rem;
                    top: 2.2rem;
                }
            }
            &.bu_on {
                &::before {
                    background-position: 0 -3.2rem;
                    top: 3.3rem;
                }
            }
        }
    }
    .jun {
        .peo {
            width: 8rem !important;
            height: 9.43rem !important;
            left: 0 !important;
        }
        .info {
            width: 8.21rem !important;
            height: 1.12rem !important;
        }
        .corps {
            width: 8.23rem !important;
            height: 4.06rem !important;
        }
    }
    .gong {
        .peo {
            width: 7.72rem !important;
            height: 11.97rem !important;
            left: 0 !important;
        }
        .info {
            width: 8.31rem !important;
            height: 1.06rem !important;
        }
        .corps {
            width: 8.31rem !important;
            height: 4.06rem !important;
        }
    }
    .qi {
        .peo {
            width: 8.27rem !important;
            height: 9.03rem !important;
            top: 1.77rem !important;
            left: 0 !important;
        }
        .info {
            width: 7.96rem !important;
            height: 0.94rem !important;
        }
        .corps {
            width: 8.95rem !important;
            height: 4.08rem !important;
        }
    }
    .bu {
        .peo {
            width: 6.99rem !important;
            height: 10.2rem !important;
            top: 1.63rem !important;
            left: 0 !important;
        }
        .info {
            width: 8.37rem !important;
            height: 0.99rem !important;
        }
        .corps {
            width: 9.02rem !important;
            height: 4.8rem !important;
        }
    }
    .people {
        img {
            display: inline-block;
            position: absolute;
            &:nth-child(1) {
                width: 0.92rem;
                height: 3.56rem;
                top: 0;
                left: 1.98rem;
            }
            &:nth-child(2) {
                width: 6.26rem;
                height: 8.94rem;
                top: 1.83rem;
                left: 1.17rem;
            }
        }
    }
    .content {
        .img {
            display: inline-block;
            position: absolute;
            left: 7.51rem;
            &:nth-child(1) {
                width: 8.1rem;
                height: 0.98rem;
                top: 2.67rem;
            }
            &:nth-child(2) {
                width: 1.94rem;
                height: 0.44rem;
                top: 4.25rem;
            }
        }
        .corps_center {
            position: absolute;
            width: 8.21rem;
            height: 3.68rem;
            top: 4.79rem;
            left: 7.92rem;
            ol {
                display: flex;
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                align-items: top;
                flex-wrap: wrap;
                li {
                    width: 1.4rem;
                    height: 1.6rem;
                    /* background: pink;
                    opacity: 0.6;*/
                    position: absolute;
                    cursor: pointer;
                    &:nth-child(1) {
                        left: 0;
                    }
                    &:nth-child(2) {
                        left: 1.6rem;
                    }
                    &:nth-child(3) {
                        left: 3.22rem;
                    }
                    &:nth-child(4) {
                        left: 4.8rem;
                    }
                    &:nth-child(5) {
                        left: 6.4rem;
                    }
                    &:nth-child(6) {
                        left: 0;
                        top: 1.88rem;
                    }
                    &:nth-child(7) {
                        left: 1.6rem;
                        top: 1.88rem;
                    }
                    &:nth-child(8) {
                        left: 3.2rem;
                        top: 1.88rem;
                    }
                    &:nth-child(9) {
                        left: 4.8rem;
                        top: 1.88rem;
                    }
                    &:nth-child(10) {
                        left: 6.4rem;
                        top: 1.88rem;
                    }
                    img {
                        &:nth-child(2) {
                            position: absolute;
                            bottom: 0.4rem;
                            left: 0.05rem;
                            transition: all 0.9s;
                            &:hover {
                                transform: scale(1.1, 1.1);
                            }
                        }
                    }
                }
            }
        }
    }
    .jun {
        .corps_center {
            width: 7.72rem;
            left: 7.92rem;
            .top2 {
                margin-top: 0.33rem;
            }
            ol {
                li {
                    img {
                        &:nth-child(2) {
                            bottom: 0.54rem;
                        }
                    }
                }
            }
        }
    }
    .gong {
        .corps_center {
            width: 7.72rem;
            height: 4.2rem;
            top: 4.1rem;
            left: 7.92rem;
            .top_gong {
                margin-top: -0.2rem;
            }
            ol {
                top: 0.8rem;
                li {
                    img {
                        &:nth-child(2) {
                            position: absolute;
                            bottom: 0.53rem;
                            left: 0.05rem;
                            transition: all 0.9s;
                            &:hover {
                                transform: scale(1.1, 1.1);
                            }
                        }
                    }
                }
            }
        }
    }
    .qi {
        .corps_center {
            width: 8.45rem;
            height: 4.06rem;
            top: 4.2rem;
            left: 7.92rem;
            .top_qi {
                margin-top: -0.2rem;
            }
            ol {
                top: 0.6rem;
                li {
                    cursor: pointer;
                    img {
                        &:nth-child(2) {
                            position: absolute;
                            bottom: 0.55rem;
                            left: 0.05rem;
                            transition: all 0.9s;
                            &:hover {
                                transform: scale(1.1, 1.1);
                            }
                        }
                    }
                }
            }
        }
    }
    .bu {
        .corps_center {
            width: 8.61rem;
            height: 4.66rem;
            top: 3.6rem;
            left: 7.92rem;
            .top_bu {
                margin-top: -0.2rem;
            }
            ol {
                top: 0.7rem;
                li {
                    width: 16%;
                    height: 1.7rem;

                    margin-right: 2.8%;
                    margin-top: 0.6rem;
                    cursor: pointer;
                    img {
                        &:nth-child(2) {
                            position: absolute;
                            bottom: 0.55rem;
                            left: 0.05rem;
                            transition: all 0.9s;
                            &:hover {
                                transform: scale(1.1, 1.1);
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
