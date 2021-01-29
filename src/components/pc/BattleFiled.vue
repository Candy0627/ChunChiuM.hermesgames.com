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
                    v-if="index === tabId"
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
                <img :src="item.imgSrc" alt="" v-if="index === tabId" />
            </div>
        </div>
        <ul class="video_battle">
            <li
                v-for="(item, index) in filedList"
                :key="item.id"
                @click="handleTab(index)"
            >
                {{ item.name }}
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
                    name: "真實戰場"
                },
                {
                    id: "00002",
                    name: "四季天時"
                },
                {
                    id: "00003",
                    name: "海量兵種"
                },
                {
                    id: "00004",
                    name: "攻城略地"
                }
            ],
            videoList: [
                {
                    id: "01",
                    videoSrc: require("../../assets/media/battle.mp4")
                },
                {
                    id: "02",
                    videoSrc: require("../../assets/media/top.mp4")
                },
                {
                    id: "03",
                    videoSrc: require("../../assets/media/battle.mp4")
                },
                {
                    id: "04",
                    videoSrc: require("../../assets/media/top.mp4")
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
            text-indent: -9999px;
            cursor: pointer;
            &:nth-child(1) {
                width: 1.88rem;
                height: 0.5rem;
                background: url(".././../assets/imgs/battle/n1.png") no-repeat;
                background-size: 100% 100%;
                &:hover {
                    width: 1.88rem;
                    height: 0.5rem;
                    background: url(".././../assets/imgs/battle/n1_.png")
                        no-repeat;
                    background-size: 100% 100%;
                }
            }
            &:nth-child(2) {
                width: 1.88rem;
                height: 0.5rem;
                background: url(".././../assets/imgs/battle/n2.png") no-repeat;
                background-size: 100% 100%;
                &:hover {
                    width: 1.88rem;
                    height: 0.5rem;
                    background: url(".././../assets/imgs/battle/n2_.png")
                        no-repeat;
                    background-size: 100% 100%;
                }
            }
            &:nth-child(3) {
                width: 1.88rem;
                height: 0.5rem;
                background: url(".././../assets/imgs/battle/n3.png") no-repeat;
                background-size: 100% 100%;
                &:hover {
                    width: 1.88rem;
                    height: 0.5rem;
                    background: url(".././../assets/imgs/battle/n3_.png")
                        no-repeat;
                    background-size: 100% 100%;
                }
            }
            &:nth-child(4) {
                width: 1.88rem;
                height: 0.5rem;
                background: url(".././../assets/imgs/battle/n4.png") no-repeat;
                background-size: 100% 100%;
                &:hover {
                    width: 1.88rem;
                    height: 0.5rem;
                    background: url(".././../assets/imgs/battle/n4_.png")
                        no-repeat;
                    background-size: 100% 100%;
                }
            }
        }
    }
}
</style>
