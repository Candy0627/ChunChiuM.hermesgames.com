<template>
    <div class="military_wrap">
        <span></span>
        <div class="con">
            <video
                width="100%"
                height="100%"
                class="one-background-video"
                muted="muted"
                data-autoplay
                autoplay
                loop
                poster=""
            >
                <source src="../../assets/battle.mp4" type="video/mp4" />
            </video>
            <!-- <img src="../../assets/imgs/video_bg.jpg" alt="" /> -->
            <img src="../../assets/imgs/battle/s1.png" alt="" />
        </div>
        <ul>
            <li @clcik="handleTab()">真實戰場</li>
            <li>真實戰場</li>
            <li>真實戰場</li>
            <li>真實戰場</li>
            <li>真實戰場</li>
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
            nameList: [
                {
                    id: "01",
                    name: "真實戰場"
                }
            ]
        };
    },
    methods: {
        handleTab () {

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
        img {
            margin: 0 auto;
            &:nth-child(2) {
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
        width: 54%;
        position: absolute;
        bottom: 0.67rem;
        left: 50%;
        margin-left:-27%;
        li {
            width: 2rem;
            height: 0.6rem;
            line-height: 0.6rem;
            color: #ac9f7a;
            font-size: 0.24rem;
            background: url(".././../assets/imgs/battle/battle_info.png")
                no-repeat;
            background-size: 1.95rem 1.22rem;
            background-position: 0 -0.6rem;
            cursor: pointer;
            &:hover {
                background: url(".././../assets/imgs/battle/battle_info.png")
                    no-repeat;
                background-size: 1.95rem 1.22rem;
                background-position: 0 0;
            }
        }
    }
}
</style>
