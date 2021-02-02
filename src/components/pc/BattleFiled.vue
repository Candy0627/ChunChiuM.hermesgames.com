<template>
    <div class="military_wrap">
        <span></span>
        <div class="con">
            <div v-for="(item, index) in videoList" :key="item.id">
                <video
                    width="100%"
                    height="100%"
                    class="one-background-video"
                    muted="muted"
                    data-autoplay
                    autoplay
                    loop
                    poster="../../assets/imgs/v1.jpg"
                    v-show="index === tabId"
                >
                    <source :src="item.videoSrc" type="video/mp4" />
                </video>
            </div>
            <!-- solgan -->
            <div
                v-for="(item, index) in solganList"
                :key="item.id"
                class="solgan"
            >
                <img :src="item.imgSrc" alt="" v-show="index === tabId" class="animate__animated animate__fadeInDown" />
            </div>
        </div>
        <ul>
            <li
                v-for="(item, index) in filedList"
                :key="item.id"
                @click="handleTab(index)"
            >
                <img :src="item.onSrc" alt="" class="on" v-if="tabId===index">
                <img :src="item.unSrc" alt=""  class="un" v-else>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "BattleFiled",
    props: {
        msg: String
    },
    data () {
        return {
            tabId: 0,
            filedList: [
                {
                    id: "00001",
                    name: "真實戰場",
                    unSrc: require("../../assets/imgs/battle/n1.png"),
                    onSrc: require("../../assets/imgs/battle/n1_.png")
                },
                {
                    id: "00002",
                    name: "四季天時",
                    unSrc: require("../../assets/imgs/battle/n2.png"),
                    onSrc: require("../../assets/imgs/battle/n2_.png")
                },
                {
                    id: "00003",
                    name: "海量兵種",
                    unSrc: require("../../assets/imgs/battle/n3.png"),
                    onSrc: require("../../assets/imgs/battle/n3_.png")
                },
                {
                    id: "00004",
                    name: "攻城略地",
                    unSrc: require("../../assets/imgs/battle/n4.png"),
                    onSrc: require("../../assets/imgs/battle/n4_.png")
                }
            ],
            videoList: [
                {
                    id: "01",
                    videoSrc: require("../../assets/media/s1.mp4")
                },
                {
                    id: "02",
                    videoSrc: require("../../assets/media/s2.mp4")
                },
                {
                    id: "03",
                    videoSrc: require("../../assets/media/s3.mp4")
                },
                {
                    id: "04",
                    videoSrc: require("../../assets/media/s1.mp4")
                }
            ],
            solganList: [
                {
                    id: "001",
                    imgSrc: require("../../assets/imgs/battle/s1.png")
                },
                {
                    id: "002",
                    imgSrc: require("../../assets/imgs/battle/s2.png")
                },
                {
                    id: "003",
                    imgSrc: require("../../assets/imgs/battle/s3.png")
                },
                {
                    id: "004",
                    imgSrc: require("../../assets/imgs/battle/s4.png")
                }
            ]
        };
    },
    methods: {
        handleTab (i) {
            this.tabId = i;
            console.log("当前的是第几个video", i);
        }
    }
};
</script>

<style scoped lang="scss">
.military_wrap {
    position: relative;
    width: 100%;
    span {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.6);
    }
    .con {
        .solgan {
            margin: 0 auto;
            img {
                width: 4.07rem;
                height: 1.51rem;
                position: absolute;
                top: 50%;
                left: 50%;
                margin-left: -2.035rem;
                margin-top: -0.755rem;
            }
        }
    }
    ul {
        display: flex;
        width: 60%;
        position: absolute;
        bottom: 0.67rem;
        left: 50%;
        margin-left: -22%;
        li {
            width: 1.9rem;
            height: 0.6rem;
            line-height: 0.6rem;
            margin-right: .66rem;
            color: #ac9f7a;
            font-size: 0.24rem;
            transition: all .3s;
            cursor: pointer;
            img{
                display: block;
            }
            .un{

            }
            .on{

            }
            &:nth-child(1) {
                width: 1.88rem;
                height: 0.5rem;
                &:hover {
                    width: 1.88rem;
                    height: 0.5rem;
                    background: url(".././../assets/imgs/battle/n1_.png")
                        no-repeat;
                    background-size: 100% 100%;
                    transform: scale(1.1,1.1);
                }
            }
            &:nth-child(2) {
                width: 1.88rem;
                height: 0.5rem;
                &:hover {
                    width: 1.88rem;
                    height: 0.5rem;
                    background: url(".././../assets/imgs/battle/n2_.png")
                        no-repeat;
                    background-size: 100% 100%;
                    transform: scale(1.1,1.1);
                }
            }
            &:nth-child(3) {
                width: 1.88rem;
                height: 0.5rem;
                &:hover {
                    width: 1.88rem;
                    height: 0.5rem;
                    background: url(".././../assets/imgs/battle/n3_.png")
                        no-repeat;
                    background-size: 100% 100%;
                    transform: scale(1.1,1.1);
                }
            }
            &:nth-child(4) {
                width: 1.88rem;
                height: 0.5rem;
                &:hover {
                    width: 1.88rem;
                    height: 0.5rem;
                    background: url(".././../assets/imgs/battle/n4_.png")
                        no-repeat;
                    background-size: 100% 100%;
                    transform: scale(1.1,1.1);
                }
            }
        }
    }
}
</style>
