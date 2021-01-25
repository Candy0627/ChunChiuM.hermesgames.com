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
                    class="img info"
                />
                <img
                    src="../../assets/imgs/hero/title2.png"
                    alt=""
                    class="img"
                />
                <div class="corps_center">
                    <!-- <img src="../../assets/imgs/hero/jun_corps.png" alt="" /> -->
                    <ol>
                        <li>
                            <img src="../../assets/jun/1--1.png" alt="">
                            <img src="../../assets/jun/1-1.png" alt="">
                        </li>
                        <li>
                            <img src="../../assets/jun/1--2.png" alt="">
                            <img src="../../assets/jun/1-2.png" alt="">
                        </li>
                        <li>
                            <img src="../../assets/jun/1--3.png" alt="">
                            <img src="../../assets/jun/1-3.png" alt="">
                        </li>
                        <li>
                            <img src="../../assets/jun/1--4.png" alt="">
                            <img src="../../assets/jun/1-4.png" alt="">
                        </li>
                        <li>
                            <img src="../../assets/jun/1--5.png" alt="">
                            <img src="../../assets/jun/1-5.png" alt="">
                        </li>
                        <li>
                            <img src="../../assets/jun/1--6.png" alt="">
                            <img src="../../assets/jun/1-6.png" alt="">
                        </li>
                        <li>
                            <img src="../../assets/jun/1--7.png" alt="">
                            <img src="../../assets/jun/1-7.png" alt="">
                        </li>
                        <li>
                            <img src="../../assets/jun/1--8.png" alt="">
                            <img src="../../assets/jun/1-8.png" alt="">
                        </li>
                        <li>
                            <img src="../../assets/jun/1--9.png" alt="">
                            <img src="../../assets/jun/1-9.png" alt="">
                        </li>
                    </ol>
                </div>
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
                    class="img info"
                />
                <img
                    src="../../assets/imgs/hero/title2.png"
                    alt=""
                    class="img"
                />
                <div class="corps_center">
                    <!-- <img src="../../assets/imgs/hero/gong_corps.png" alt="" /> -->
                    <ol>
                        <li>
                            <img src="../../assets/gong/1--1.png" alt="">
                            <img src="../../assets/gong/1-1.png" alt="">
                        </li>
                        <li>
                            <img src="../../assets/gong/1--2.png" alt="">
                            <img src="../../assets/gong/1-2.png" alt="">
                        </li>
                        <li>
                            <img src="../../assets/gong/1--3.png" alt="">
                            <img src="../../assets/gong/1-3.png" alt="">
                        </li>
                        <li>
                            <img src="../../assets/gong/1--4.png" alt="">
                            <img src="../../assets/gong/1-4.png" alt="">
                        </li>
                        <li>
                            <img src="../../assets/gong/1--5.png" alt="">
                            <img src="../../assets/gong/1-5.png" alt="">
                        </li>
                        <li>
                            <img src="../../assets/gong/1--6.png" alt="">
                            <img src="../../assets/gong/1-6.png" alt="">
                        </li>
                        <li>
                            <img src="../../assets/gong/1--7.png" alt="">
                            <img src="../../assets/gong/1-7.png" alt="">
                        </li>
                        <li>
                            <img src="../../assets/gong/1--8.png" alt="">
                            <img src="../../assets/gong/1-8.png" alt="">
                        </li>
                        <li>
                            <img src="../../assets/gong/1--9.png" alt="">
                            <img src="../../assets/gong/1-9.png" alt="">
                        </li>
                    </ol>
                </div>
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
                    class="img info"
                />
                <img
                    src="../../assets/imgs/hero/title2.png"
                    alt=""
                    class="img"
                />
                <div class="corps_center">
                    <!-- <img src="../../assets/imgs/hero/qi_corps.png" alt="" /> -->
                    <ol>
                        <li>
                            <img src="../../assets/qi/1--1.png" alt="">
                            <img src="../../assets/qi/1-1.png" alt="">
                        </li>
                        <li>
                            <img src="../../assets/qi/1--2.png" alt="">
                            <img src="../../assets/qi/1-2.png" alt="">
                        </li>
                        <li>
                            <img src="../../assets/qi/1--3.png" alt="">
                            <img src="../../assets/qi/1-3.png" alt="">
                        </li>
                        <li>
                            <img src="../../assets/qi/1--4.png" alt="">
                            <img src="../../assets/qi/1-4.png" alt="">
                        </li>
                        <li>
                            <img src="../../assets/qi/1--5.png" alt="">
                            <img src="../../assets/qi/1-5.png" alt="">
                        </li>
                        <li>
                            <img src="../../assets/qi/1--6.png" alt="">
                            <img src="../../assets/qi/1-6.png" alt="">
                        </li>
                        <li>
                            <img src="../../assets/qi/1--7.png" alt="">
                            <img src="../../assets/qi/1-7.png" alt="">
                        </li>
                        <li>
                            <img src="../../assets/qi/1--8.png" alt="">
                            <img src="../../assets/qi/1-8.png" alt="">
                        </li>
                        <li>
                            <img src="../../assets/qi/1--9.png" alt="">
                            <img src="../../assets/qi/1-9.png" alt="">
                        </li>
                        <li>
                            <img src="../../assets/qi/1--10.png" alt="">
                            <img src="../../assets/qi/1-10.png" alt="">
                        </li>
                    </ol>
                </div>
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
                    class="img info"
                />
                <img
                    src="../../assets/imgs/hero/title2.png"
                    alt=""
                    class="img"
                />
                <div class="corps_center">
                    <!-- <img
                        src="../../assets/imgs/hero/bu_corps.png"
                        alt=""
                        class="corps"
                    /> -->
                    <ol>
                        <li>
                            <img src="../../assets/bu/1--1.png" alt="">
                            <img src="../../assets/bu/1-1.png" alt="">
                        </li>
                        <li>
                            <img src="../../assets/bu/1--2.png" alt="">
                            <img src="../../assets/bu/1-2.png" alt="">
                        </li>
                        <li>
                            <img src="../../assets/bu/1--3.png" alt="">
                            <img src="../../assets/bu/1-3.png" alt="">
                        </li>
                        <li>
                            <img src="../../assets/bu/1--4.png" alt="">
                            <img src="../../assets/bu/1-4.png" alt="">
                        </li>
                        <li>
                            <img src="../../assets/bu/1--5.png" alt="">
                            <img src="../../assets/bu/1-5.png" alt="">
                        </li>
                        <li>
                            <img src="../../assets/bu/1--6.png" alt="">
                            <img src="../../assets/bu/1-6.png" alt="">
                        </li>
                        <li>
                            <img src="../../assets/bu/1--7.png" alt="">
                            <img src="../../assets/bu/1-7.png" alt="">
                        </li>
                        <li>
                            <img src="../../assets/bu/1--8.png" alt="">
                            <img src="../../assets/bu/1-8.png" alt="">
                        </li>
                        <li>
                            <img src="../../assets/bu/1--9.png" alt="">
                            <img src="../../assets/bu/1-9.png" alt="">
                        </li>
                        <li>
                            <img src="../../assets/bu/1--10.png" alt="">
                            <img src="../../assets/bu/1-10.png" alt="">
                        </li>
                    </ol>
                </div>
            </div>
        </div>
        <div class="mask">

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
            height: 0.76rem !important;
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
                    position: relative;
                    width: 18%;
                    height: 1.7rem;

                    margin-right: 2%;
                    margin-top: 1.5%;
                    cursor: pointer;
                    img{
                       &:nth-child(2) {
                           position: absolute;
                           bottom:.4rem;
                           left:.05rem;
                           transition: all .9s;
                        &:hover{
                            transform: scale(1.1,1.1);
                        }
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
            ol {
                top: 0.5rem;
                li{
                    img{
                       &:nth-child(2) {
                           position: absolute;
                           bottom:.5rem;
                           left:.05rem;
                           transition: all .9s;
                        &:hover{
                            transform: scale(1.1,1.1);
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
            ol {
                top: 0.5rem;
                li {
                    width: 16%;
                    height: 1.7rem;
                    margin-right: 2.8%;
                    margin-top:0;
                    cursor: pointer;
                    img{
                       &:nth-child(2) {
                           position: absolute;
                           bottom:.55rem;
                           left:.05rem;
                           transition: all .9s;
                        &:hover{
                            transform: scale(1.1,1.1);
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
            ol {
                top: 0.5rem;
                li {
                    width: 16%;
                    height: 1.7rem;

                    margin-right: 2.8%;
                    margin-top: .6rem;
                    cursor: pointer;
                    img{
                       &:nth-child(2) {
                           position: absolute;
                           bottom:.5rem;
                           left:.05rem;
                           transition: all .9s;
                        &:hover{
                            transform: scale(1.1,1.1);
                        }
                       }
                    }
                }
            }
        }
    }
}
</style>
