<template>
    <div class="military_wrap">
        <img src="../../assets/imgs/military_bg.jpg" alt="" />
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
        <div class="jun" v-if="con === 'jun'">
            <div class="people">
                <img src="../../assets/imgs/hero/jun_name.png" alt="" />
                <img
                    src="../../assets/imgs/hero/jun_people.png"
                    alt=""
                    class="peo"
                />
            </div>
            <div class="content">
                <img
                    src="../../assets/imgs/hero/jun_info.png"
                    alt=""
                    class="info"
                />
                <img
                    src="../../assets/imgs/hero/jun_corps.png"
                    alt=""
                    class="corps"
                />
            </div>
        </div>
        <div class="gong" v-if="con === 'gong'">
            <div class="people">
                <img src="../../assets/imgs/hero/gong_name.png" alt="" />
                <img
                    src="../../assets/imgs/hero/gong_people.png"
                    alt=""
                    class="peo"
                />
            </div>
            <div class="content">
                <img
                    src="../../assets/imgs/hero/gong_info.png"
                    alt=""
                    class="info"
                />
                <img
                    src="../../assets/imgs/hero/gong_corps.png"
                    alt=""
                    class="corps"
                />
            </div>
        </div>
        <div class="qi" v-if="con === 'qi'">
            <div class="people">
                <img src="../../assets/imgs/hero/qi_name.png" alt="" />
                <img
                    src="../../assets/imgs/hero/qi_people.png"
                    alt=""
                    class="peo"
                />
            </div>
            <div class="content">
                <img
                    src="../../assets/imgs/hero/qi_info.png"
                    alt=""
                    class="info"
                />
                <img
                    src="../../assets/imgs/hero/qi_corps.png"
                    alt=""
                    class="corps"
                />
            </div>
        </div>
        <div class="bu" v-if="con === 'bu'">
            <div class="people">
                <img src="../../assets/imgs/hero/bu_name.png" alt="" />
                <img
                    src="../../assets/imgs/hero/bu_people.png"
                    alt=""
                    class="peo"
                />
            </div>
            <div class="content">
                <img
                    src="../../assets/imgs/hero/bu_info.png"
                    alt=""
                    class="info"
                />
                <img
                    src="../../assets/imgs/hero/bu_corps.png"
                    alt=""
                    class="corps"
                />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Military",
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
            con: "jun"
        };
    },
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
        }
    }
};
</script>

<style scoped lang="scss">
.military_wrap {
    position: relative;
    width: 100%;
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
            left:0 !important;
        }
        .info{
            width: 8.21rem !important;
            height: 1.12rem !important;
        }
        .corps{
            width: 8.23rem !important;
            height: 4.06rem !important;
        }
    }
    .gong {
        .peo {
            width: 7.72rem !important;
            height: 11.97rem !important;
            left:0 !important;
        }
        .info{
            width: 8.31rem !important;
            height: 1.06rem !important;
        }
        .corps{
            width: 8.31rem !important;
            height: 4.06rem !important;
        }
    }
    .qi {
        .peo {
            width: 8.27rem !important;
            height: 9.03rem !important;
            top:1.77rem !important;
            left:0 !important;
        }
        .info{
            width: 7.96rem !important;
            height: .76rem !important;
        }
        .corps{
            width: 8.95rem !important;
            height: 4.08rem !important;
        }
    }
    .bu {
        .peo {
            width: 6.99rem !important;
            height: 10.2rem !important;
            top:1.63rem !important;
            left:0 !important;
        }
        .info{
            width: 8.37rem !important;
            height: .99rem !important;
        }
        .corps{
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
        img {
            display: inline-block;
            position: absolute;
            left: 7.51rem;
            &:nth-child(1) {
                width: 8.1rem;
                height: 0.98rem;
                top: 2.67rem;
            }
            &:nth-child(2) {
                width: 8.21rem;
                height: 4.03rem;
                top: 4.25rem;
            }
        }
    }
}
</style>
