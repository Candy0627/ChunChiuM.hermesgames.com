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
            <div v-for="(item, index) in solganList" :key="item.id" class="solgan">
                <img :src="item.imgSrc" alt="" v-if="index === tabId" />
            </div>
        </div>
        <ul>
            <li v-for="(item,index) in filedList" :key="item.id"  @click="handleTab(index)">{{item.name}}</li>
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
                    name: "真實戰場1"
                },
                {
                    id: "00002",
                    name: "真實戰場2"
                },
                {
                    id: "00003",
                    name: "真實戰場3"
                },
                {
                    id: "00004",
                    name: "真實戰場4"
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
                    imgSrc: require("../../assets/imgs/battle/s1.png")
                },
                {
                    id: "003",
                    imgSrc: require("../../assets/imgs/battle/s1.png")
                },
                {
                    id: "004",
                    imgSrc: require("../../assets/imgs/battle/s1.png")
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
        margin-left:-22%;
        li {
            width: 1.9rem;
            height: 0.6rem;
            line-height: 0.6rem;
            margin-right: .8%;
            color: #ac9f7a;
            font-size: 0.24rem;
            background: url(".././../assets/imgs/battle/battle_info.png")
                no-repeat;
            background-size: 1.93rem 1.22rem;
            background-position: 0 -0.6rem;
            cursor: pointer;
            &:hover {
                background: url(".././../assets/imgs/battle/battle_info.png")
                    no-repeat;
                background-size: 1.93rem 1.22rem;
                background-position: 0 0;
            }
        }
    }
}
</style>
