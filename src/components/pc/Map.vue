<template>
    <div class="map_wrap">
        <img src="../../assets/imgs/map/map_bg.jpg" alt />
        <img src="../../assets/imgs/map/title.png" alt class="title" />

        <!-- 左边国家信息 -->
        <div class="info_con">
            <div class="yan_c">
                <div class="yan" v-if="selectedName == 'yan'">
                    <img
                        src="../../assets/imgs/map/yan/info.png"
                        class="info animate__animated animate__fadeInDown"
                        v-show="show"
                    />
                    <img
                        src="../../assets/imgs/map/yan/fea.png"
                        alt
                        class="fea animate__animated animate__fadeInUp"
                        v-show="show"
                    />
                </div>
            </div>
            <div class="zhao_c">
                <div class="zhao" v-if="selectedName == 'zhao'">
                    <img
                        src="../../assets/imgs/map/zhao/info.png"
                        class="info animate__animated animate__fadeInDown"
                        v-show="show"
                    />
                    <img
                        src="../../assets/imgs/map/zhao/fea.png"
                        alt
                        class="fea animate__animated animate__fadeInUp"
                        v-show="show"
                    />
                </div>
            </div>
            <div class="qin_c">
                <div class="qin" v-if="selectedName == 'qin'">
                    <img
                        src="../../assets/imgs/map/qin/info.png"
                        class="info animate__animated animate__fadeInDown"
                        v-show="show"
                    />
                    <img
                        src="../../assets/imgs/map/qin/fea.png"
                        alt
                        class="fea animate__animated animate__fadeInUp"
                        v-show="show"
                    />
                </div>
            </div>
            <div class="chu_c">
                <div class="chu" v-if="selectedName == 'chu'">
                    <img
                        src="../../assets/imgs/map/chu/info.png"
                        class="info animate__animated animate__fadeInDown"
                        v-show="show"
                    />
                    <img
                        src="../../assets/imgs/map/chu/fea.png"
                        alt
                        class="fea animate__animated animate__fadeInUp"
                        v-show="show"
                    />
                </div>
            </div>
            <div class="wei_c">
                <div class="wei" v-if="selectedName == 'wei'">
                    <img
                        src="../../assets/imgs/map/wei/info.png"
                        class="info animate__animated animate__fadeInDown"
                        v-show="show"
                    />
                    <img
                        src="../../assets/imgs/map/wei/fea.png"
                        alt
                        class="fea animate__animated animate__fadeInUp"
                        v-show="show"
                    />
                </div>
            </div>
            <div class="han_c">
                <div class="han" v-if="selectedName == 'han'">
                    <img
                        src="../../assets/imgs/map/han/info.png"
                        class="info animate__animated animate__fadeInDown"
                        v-show="show"
                    />
                    <img
                        src="../../assets/imgs/map/han/fea.png"
                        alt
                        class="fea animate__animated animate__fadeInUp"
                        v-show="show"
                    />
                </div>
            </div>
            <div class="qi_c">
                <div class="qi" v-if="selectedName == 'qi'">
                    <img
                        src="../../assets/imgs/map/qi/info.png"
                        class="info animate__animated animate__fadeInDown"
                        v-show="show"
                    />
                    <img
                        src="../../assets/imgs/map/qi/fea.png"
                        alt
                        class="fea animate__animated animate__fadeInUp"
                        v-show="show"
                    />
                </div>
            </div>
        </div>

        <!-- 中间地图 -->
        <div class="map">
            <img src="../../assets/imgs/map/map_bg.png" alt />
            <div
                v-for="item in mapList"
                :key="item.id"
                @click="handleClickMap(item.name)"
            >
                <em
                    :class="item.cur"
                    class="cur"
                    v-show="selectedName == item.name"
                ></em>
                <em :class="item.name" class="no"></em>
            </div>
        </div>

        <!--右边转盘 -->
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

                <img
                    src="../../assets/imgs/map/yan/name_on.png"
                    alt=""
                    :style="{ left: `${l}rem`, top: `${t}rem` }"
                    v-if="isShow && selectedName == 'yan'"
                />
                <img
                    src="../../assets/imgs/map/zhao/name_on.png"
                    alt=""
                    :style="{ left: `${l}rem`, top: `${t}rem` }"
                    v-if="isShow && selectedName == 'zhao'"
                />
                <img
                    src="../../assets/imgs/map/qin/name_on.png"
                    alt=""
                    :style="{ left: `${l}rem`, top: `${t}rem` }"
                    v-if="isShow && selectedName == 'qin'"
                />
                <img
                    src="../../assets/imgs/map/chu/name_on.png"
                    alt=""
                    :style="{ left: `${l}rem`, top: `${t}rem` }"
                    v-if="isShow && selectedName == 'chu'"
                />
                <img
                    src="../../assets/imgs/map/wei/name_on.png"
                    alt=""
                    :style="{ left: `${l}rem`, top: `${t}rem` }"
                    v-if="isShow && selectedName == 'wei'"
                />
                <img
                    src="../../assets/imgs/map/han/name_on.png"
                    alt=""
                    :style="{ left: `${l}rem`, top: `${t}rem` }"
                    v-if="isShow && selectedName == 'han'"
                />
                <img
                    src="../../assets/imgs/map/qi/name_on.png"
                    alt=""
                    :style="{ left: `${l}rem`, top: `${t}rem` }"
                    v-if="isShow && selectedName == 'qi'"
                />

                <li
                    v-for="(item, index) in circle"
                    :key="item.id"
                    @click="handleClickCricle(index, item.name, item.pos)"
                >
                    <em
                        :data_name="item.name"
                        :data_pos="item.pos"
                        :class="{
                            m_52: item.pos === -52,
                            m_26: item.pos === -26,
                            m0: item.pos === 0,
                            m26: item.pos === 26,
                            m52: item.pos === 52
                        }"
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
            isShow: false,
            selectedName: "qin",
            circle: [
                {
                    id: 1,
                    name: "yan",
                    pos: -52
                },
                {
                    id: 2,
                    name: "zhao",
                    pos: -26
                },
                {
                    id: 3,
                    name: "qin",
                    pos: 0
                },
                {
                    id: 4,
                    name: "chu",
                    pos: 26
                },
                {
                    id: 5,
                    name: "wei",
                    pos: 52
                }
            ],
            l: -0.04,
            t: 4.53,
            mapList: [
                {
                    id: 1,
                    name: "yan",
                    cur: "yan_cur"
                },
                {
                    id: 2,
                    name: "zhao",
                    cur: "zhao_cur"
                },
                {
                    id: 3,
                    name: "qin",
                    cur: "qin_cur"
                },
                {
                    id: 4,
                    name: "chu",
                    cur: "chu_cur"
                },
                {
                    id: 5,
                    name: "wei",
                    cur: "wei_cur"
                },
                {
                    id: 6,
                    name: "han",
                    cur: "han_cur"
                },
                {
                    id: 7,
                    name: "qi",
                    cur: "qi_cur"
                }
            ],
            count: 0,
            beforDeg: 0,
            shun26: false,
            shun52: false,
            ni_26: false,
            ni_52: false
        };
    },
    mounted () {
        this.show = true;
        this.isShow = true;
    },
    methods: {
        handleClickCricle (i, name, pos) {
            this.isShow = false;
            this.beforDeg = this.defaultDeg;
            switch (pos) {
            case -52:
                this.ni_52 = true;
                if (this.shun26) {
                    // this.defaultDeg = 0;
                    this.shun26 = false;
                    this.defaultDeg = -this.defaultDeg - 25.7142857142857143 * 2;
                } else if (this.shun52) {
                    // this.defaultDeg = 0;
                    this.shun52 = false;
                    this.defaultDeg = -this.defaultDeg - 25.7142857142857143 * 2;
                } else if (this.count === 0) {
                    if (name === "zhao") {
                        this.defaultDeg = -25.7142857142857143 * 2 * 4;
                    }
                    if (name === "yan") {
                        this.defaultDeg = -25.7142857142857143 * 2 * 1;
                    }
                    if (name === "qi") {
                        this.defaultDeg = -25.7142857142857143 * 2 * 5;
                    }
                    if (name === "han") {
                        this.defaultDeg = -25.7142857142857143 * 2 * 2;
                    }
                    if (name === "wei") {
                        this.defaultDeg = -25.7142857142857143 * 2 * 6;
                    }
                    if (name === "chu") {
                        this.defaultDeg = -25.7142857142857143 * 2 * 3;
                    }
                    if (name === "qin") {
                        this.defaultDeg = -25.7142857142857143 * 2 * 7;
                    }
                } else {
                    this.defaultDeg = this.beforDeg + (-25.7142857142857143 * 2);
                }

                if (name === "zhao") {
                    // this.defaultDeg = -(26 + 26 + 26 + 26 + 26 + 26 + 26);
                    this.circle[0].name = "qi";
                    this.circle[1].name = "yan";
                    this.circle[2].name = "zhao";
                    this.circle[3].name = "qin";
                    this.circle[4].name = "chu";
                    this.selectedName = "zhao";
                    this.l = -0.03;
                    this.t = 4.62;
                    setTimeout(() => {
                        this.isShow = true;
                    }, 150);
                    this.count++;
                    console.log("此时c的值", this.c);
                }
                if (name === "yan") {
                    // this.defaultDeg = -(26 + 26);
                    this.circle[0].name = "han";
                    this.circle[1].name = "qi";
                    this.circle[2].name = "yan";
                    this.circle[3].name = "zhao";
                    this.circle[4].name = "qin";
                    this.selectedName = "yan";
                    this.l = -0.03;
                    this.t = 4.62;
                    setTimeout(() => {
                        this.isShow = true;
                    }, 150);
                }
                if (name === "qi") {
                    // this.defaultDeg = -(26 + 26 + 26);
                    this.circle[0].name = "wei";
                    this.circle[1].name = "han";
                    this.circle[2].name = "qi";
                    this.circle[3].name = "yan";
                    this.circle[4].name = "zhao";
                    this.selectedName = "qi";
                    this.l = -0.02;
                    this.t = 4.6;
                    setTimeout(() => {
                        this.isShow = true;
                    }, 150);
                }
                if (name === "han") {
                    // this.defaultDeg = -(26 + 26 + 26 + 26);
                    this.circle[0].name = "chu";
                    this.circle[1].name = "wei";
                    this.circle[2].name = "han";
                    this.circle[3].name = "qi";
                    this.circle[4].name = "yan";
                    this.selectedName = "han";
                    this.l = -0.03;
                    this.t = 4.57;
                    setTimeout(() => {
                        this.isShow = true;
                    }, 150);
                }
                if (name === "wei") {
                    // this.defaultDeg = -(26 + 26 + 26 + 26 + 26);
                    this.circle[0].name = "qin";
                    this.circle[1].name = "chu";
                    this.circle[2].name = "wei";
                    this.circle[3].name = "han";
                    this.circle[4].name = "qi";
                    this.selectedName = "wei";
                    this.l = -0.03;
                    this.t = 4.58;
                    setTimeout(() => {
                        this.isShow = true;
                    }, 150);
                }
                if (name === "chu") {
                    // this.defaultDeg = -(26 + 26 + 26 + 26 + 26 + 26);
                    this.circle[0].name = "zhao";
                    this.circle[1].name = "qin";
                    this.circle[2].name = "chu";
                    this.circle[3].name = "wei";
                    this.circle[4].name = "han";
                    this.selectedName = "chu";
                    this.l = -0.03;
                    this.t = 4.59;
                    setTimeout(() => {
                        this.isShow = true;
                    }, 150);
                }
                if (name === "qin") {
                    // this.defaultDeg = -(26 + 26 + 26 + 26 + 26 + 26 + 26);
                    this.circle[0].name = "yan";
                    this.circle[1].name = "zhao";
                    this.circle[2].name = "qin";
                    this.circle[3].name = "chu";
                    this.circle[4].name = "wei";
                    this.selectedName = "qin";
                    this.l = -0.03;
                    this.t = 4.63;
                    setTimeout(() => {
                        this.isShow = true;
                    }, 150);
                }
                break;
            case -26:
                this.ni_26 = true;
                if (this.shun26) {
                    // this.defaultDeg = 0;
                    this.shun26 = false;
                    this.defaultDeg = -this.defaultDeg - 25.7142857142857143 * 1;
                } else if (this.shun52) {
                    // this.defaultDeg = 0;
                    this.shun52 = false;
                    this.defaultDeg = -this.defaultDeg - 25.7142857142857143 * 1;
                } else if (this.count === 0) {
                    if (name === "zhao") {
                        this.defaultDeg = -25.7142857142857143;
                    }
                    if (name === "yan") {
                        this.defaultDeg = -25.7142857142857143 * 2;
                    }
                    if (name === "qi") {
                        this.defaultDeg = -25.7142857142857143 * 3;
                    }
                    if (name === "han") {
                        this.defaultDeg = -25.7142857142857143 * 4;
                    }
                    if (name === "wei") {
                        this.defaultDeg = -25.7142857142857143 * 5;
                    }
                    if (name === "chu") {
                        this.defaultDeg = -25.7142857142857143 * 6;
                    }
                    if (name === "qin") {
                        this.defaultDeg = -25.7142857142857143 * 7;
                    }
                } else {
                    this.defaultDeg = this.beforDeg + (-25.7142857142857143);
                }

                if (name === "zhao") {
                    this.circle[0].name = "qi";
                    this.circle[1].name = "yan";
                    this.circle[2].name = "zhao";
                    this.circle[3].name = "qin";
                    this.circle[4].name = "chu";
                    this.selectedName = "zhao";
                    this.l = -0.03;
                    this.t = 4.58;
                    setTimeout(() => {
                        this.isShow = true;
                    }, 150);
                }
                if (name === "yan") {
                    this.circle[0].name = "han";
                    this.circle[1].name = "qi";
                    this.circle[2].name = "yan";
                    this.circle[3].name = "zhao";
                    this.circle[4].name = "qin";
                    this.selectedName = "yan";
                    this.l = -0.03;
                    this.t = 4.58;
                    setTimeout(() => {
                        this.isShow = true;
                    }, 150);
                }
                if (name === "qi") {
                    this.circle[0].name = "wei";
                    this.circle[1].name = "han";
                    this.circle[2].name = "qi";
                    this.circle[3].name = "yan";
                    this.circle[4].name = "zhao";
                    this.selectedName = "qi";
                    this.l = -0.02;
                    this.t = 4.6;
                    setTimeout(() => {
                        this.isShow = true;
                    }, 150);
                }
                if (name === "han") {
                    this.circle[0].name = "chu";
                    this.circle[1].name = "wei";
                    this.circle[2].name = "han";
                    this.circle[3].name = "qi";
                    this.circle[4].name = "yan";
                    this.selectedName = "han";
                    this.l = -0.02;
                    this.t = 4.56;
                    setTimeout(() => {
                        this.isShow = true;
                    }, 150);
                }
                if (name === "wei") {
                    this.circle[0].name = "qin";
                    this.circle[1].name = "chu";
                    this.circle[2].name = "wei";
                    this.circle[3].name = "han";
                    this.circle[4].name = "qi";
                    this.selectedName = "wei";
                    this.l = -0.04;
                    this.t = 4.59;
                    setTimeout(() => {
                        this.isShow = true;
                    }, 150);
                }
                if (name === "chu") {
                    this.circle[0].name = "zhao";
                    this.circle[1].name = "qin";
                    this.circle[2].name = "chu";
                    this.circle[3].name = "wei";
                    this.circle[4].name = "han";
                    this.selectedName = "chu";
                    this.l = -0.03;
                    this.t = 4.59;
                    setTimeout(() => {
                        this.isShow = true;
                    }, 150);
                }
                if (name === "qin") {
                    this.circle[0].name = "yan";
                    this.circle[1].name = "zhao";
                    this.circle[2].name = "qin";
                    this.circle[3].name = "chu";
                    this.circle[4].name = "wei";
                    this.selectedName = "qin";
                    this.l = -0.03;
                    this.t = 4.63;
                    setTimeout(() => {
                        this.isShow = true;
                    }, 150);
                    this.count++;
                }
                break;
            case 0:
                this.defaultDeg = 0;
                break;
            case 26:
                this.shun26 = true;
                if (this.ni_26) {
                    // this.defaultDeg = 0;
                    this.ni_26 = false;
                    this.defaultDeg = this.defaultDeg + 25.7142857142857143 * 1;
                } else if (this.ni_52) {
                    // this.defaultDeg = 0;
                    this.ni_52 = false;
                    this.defaultDeg = this.defaultDeg + 25.7142857142857143 * 1;
                } else if (this.count === 0) {
                    if (name === "chu") {
                        this.defaultDeg = 25.7142857142857143;
                    }
                    if (name === "wei") {
                        this.defaultDeg = 25.7142857142857143 * 2;
                    }
                    if (name === "han") {
                        this.defaultDeg = 25.7142857142857143 * 3;
                    }
                    if (name === "qi") {
                        this.defaultDeg = 25.7142857142857143 * 4;
                    }
                    if (name === "yan") {
                        this.defaultDeg = 25.7142857142857143 * 5;
                    }
                    if (name === "zhao") {
                        this.defaultDeg = 25.7142857142857143 * 6;
                    }
                    if (name === "qin") {
                        this.defaultDeg = 25.7142857142857143 * 7;
                        this.count++;
                    }
                } else {
                    this.defaultDeg = this.beforDeg + (25.7142857142857143);
                }

                if (name === "zhao") {
                    // this.defaultDeg = 26 + 26 + 26 + 26 + 26 + 26;
                    this.circle[0].name = "qi";
                    this.circle[1].name = "yan";
                    this.circle[2].name = "zhao";
                    this.circle[3].name = "qin";
                    this.circle[4].name = "chu";
                    this.selectedName = "zhao";
                    this.l = -0.03;
                    this.t = 4.4;
                    setTimeout(() => {
                        this.isShow = true;
                    }, 150);
                }
                if (name === "yan") {
                    // this.defaultDeg = 26 + 26 + 26 + 26 + 26;
                    this.circle[0].name = "han";
                    this.circle[1].name = "qi";
                    this.circle[2].name = "yan";
                    this.circle[3].name = "zhao";
                    this.circle[4].name = "qin";
                    this.selectedName = "yan";
                    this.l = -0.03;
                    this.t = 4.43;
                    setTimeout(() => {
                        this.isShow = true;
                    }, 150);
                }
                if (name === "qi") {
                    // this.defaultDeg = 26 + 26 + 26 + 26;
                    this.circle[0].name = "wei";
                    this.circle[1].name = "han";
                    this.circle[2].name = "qi";
                    this.circle[3].name = "yan";
                    this.circle[4].name = "zhao";
                    this.selectedName = "qi";
                    this.l = -0.03;
                    this.t = 4.43;
                    setTimeout(() => {
                        this.isShow = true;
                    }, 150);
                }
                if (name === "han") {
                    // this.defaultDeg = 26 + 26 + 26;
                    this.circle[0].name = "chu";
                    this.circle[1].name = "wei";
                    this.circle[2].name = "han";
                    this.circle[3].name = "qi";
                    this.circle[4].name = "yan";
                    this.selectedName = "han";
                    this.l = 0.03;
                    this.t = 4.42;
                    setTimeout(() => {
                        this.isShow = true;
                    }, 150);
                }
                if (name === "wei") {
                    // this.defaultDeg = 26 + 26;
                    this.circle[0].name = "qin";
                    this.circle[1].name = "chu";
                    this.circle[2].name = "wei";
                    this.circle[3].name = "han";
                    this.circle[4].name = "qi";
                    this.selectedName = "wei";
                    this.l = -0.03;
                    this.t = 4.46;
                    setTimeout(() => {
                        this.isShow = true;
                    }, 150);
                }
                if (name === "chu") {
                    // this.defaultDeg = 26;
                    this.circle[0].name = "zhao";
                    this.circle[1].name = "qin";
                    this.circle[2].name = "chu";
                    this.circle[3].name = "wei";
                    this.circle[4].name = "han";
                    this.selectedName = "chu";
                    this.l = -0.04;
                    this.t = 4.5;
                    setTimeout(() => {
                        this.isShow = true;
                    }, 150);
                }
                if (name === "qin") {
                    // this.defaultDeg = 26 + 26 + 26 + 26 + 26 + 26 + 26;
                    this.circle[0].name = "yan";
                    this.circle[1].name = "zhao";
                    this.circle[2].name = "qin";
                    this.circle[3].name = "chu";
                    this.circle[4].name = "wei";
                    this.selectedName = "qin";
                    this.l = -0.03;
                    this.t = 4.33;
                    setTimeout(() => {
                        this.isShow = true;
                    }, 150);
                }
                break;
            case 52:
                this.shun52 = true;
                if (this.ni_26) {
                    // this.defaultDeg = 0;
                    this.ni_26 = false;
                    this.defaultDeg = this.defaultDeg + 25.7142857142857143 * 2;
                } else if (this.ni_52) {
                    this.defaultDeg = 0;
                    this.ni_52 = false;
                    this.defaultDeg = 25.7142857142857143 * 2;
                } else if (this.count === 0) {
                    if (name === "wei") {
                        this.defaultDeg = 25.7142857142857143 * 2 * 1;
                    }
                    if (name === "qi") {
                        this.defaultDeg = 25.7142857142857143 * 2 * 2;
                    }
                    if (name === "zhao") {
                        this.defaultDeg = 25.7142857142857143 * 2 * 3;
                    }
                    if (name === "chu") {
                        this.defaultDeg = 25.7142857142857143 * 2 * 4;
                    }
                    if (name === "han") {
                        this.defaultDeg = 25.7142857142857143 * 2 * 5;
                    }
                    if (name === "yan") {
                        this.defaultDeg = 25.7142857142857143 * 2 * 6;
                    }
                    if (name === "qin") {
                        this.defaultDeg = 25.7142857142857143 * 2 * 7;
                        this.count++;
                    }
                } else {
                    this.defaultDeg = this.beforDeg + (25.7142857142857143 * 2);
                }

                if (name === "wei") {
                    // this.defaultDeg = 26 + 26;
                    this.circle[0].name = "qin";
                    this.circle[1].name = "chu";
                    this.circle[2].name = "wei";
                    this.circle[3].name = "han";
                    this.circle[4].name = "qi";
                    this.selectedName = "wei";
                    this.l = -0.03;
                    this.t = 4.45;
                    setTimeout(() => {
                        this.isShow = true;
                    }, 150);
                }
                if (name === "qi") {
                    // this.defaultDeg = 26 + 26 + 26 + 26;
                    this.circle[0].name = "wei";
                    this.circle[1].name = "han";
                    this.circle[2].name = "qi";
                    this.circle[3].name = "yan";
                    this.circle[4].name = "zhao";
                    this.selectedName = "qi";
                    this.l = -0.02;
                    this.t = 4.43;
                    setTimeout(() => {
                        this.isShow = true;
                    }, 150);
                }
                if (name === "zhao") {
                    // this.defaultDeg = 26 + 26 + 26 + 26 + 26 + 26;
                    this.circle[0].name = "qi";
                    this.circle[1].name = "yan";
                    this.circle[2].name = "zhao";
                    this.circle[3].name = "qin";
                    this.circle[4].name = "chu";
                    this.selectedName = "zhao";
                    this.l = -0.03;
                    this.t = 4.4;
                    setTimeout(() => {
                        this.isShow = true;
                    }, 150);
                }
                if (name === "chu") {
                    // this.defaultDeg = 26 + 26 + 26 + 26 + 26 + 26 + 26 + 26;
                    this.circle[0].name = "zhao";
                    this.circle[1].name = "qin";
                    this.circle[2].name = "chu";
                    this.circle[3].name = "wei";
                    this.circle[4].name = "han";
                    this.selectedName = "chu";
                    this.l = -0.03;
                    this.t = 4.28;
                    setTimeout(() => {
                        this.isShow = true;
                    }, 150);
                }
                if (name === "han") {
                    // this.defaultDeg = 26 + 26 + 26 + 26 + 26 + 26 + 26 + 26 + 26 + 26;
                    this.circle[0].name = "chu";
                    this.circle[1].name = "wei";
                    this.circle[2].name = "han";
                    this.circle[3].name = "qi";
                    this.circle[4].name = "yan";
                    this.selectedName = "han";
                    this.l = -0.02;
                    this.t = 4.26;
                    setTimeout(() => {
                        this.isShow = true;
                    }, 150);
                }
                if (name === "yan") {
                    // this.defaultDeg = 26 + 26 + 26 + 26 + 26 + 26 + 26 + 26 + 26 + 26 + 26 + 26;
                    this.circle[0].name = "han";
                    this.circle[1].name = "qi";
                    this.circle[2].name = "yan";
                    this.circle[3].name = "zhao";
                    this.circle[4].name = "qin";
                    this.selectedName = "yan";
                    this.l = 0;
                    this.t = 4.33;
                    setTimeout(() => {
                        this.isShow = true;
                    }, 150);
                }
                if (name === "qin") {
                    // this.defaultDeg = 26 + 26 + 26 + 26 + 26 + 26 + 26 + 26 + 26 + 26 + 26 + 26 + 26 + 26;
                    this.circle[0].name = "yan";
                    this.circle[1].name = "zhao";
                    this.circle[2].name = "qin";
                    this.circle[3].name = "chu";
                    this.circle[4].name = "wei";
                    this.selectedName = "qin";
                    this.l = -0.01;
                    this.t = 4.24;
                    setTimeout(() => {
                        this.isShow = true;
                    }, 150);
                }
            }
        },
        handleClickMap (name) {
            this.isShow = false;
            console.log("当前的点击地图名字", name);
            switch (name) {
            case "qin":
                this.defaultDeg = 0;
                this.circle[0].name = "yan";
                this.circle[1].name = "zhao";
                this.circle[2].name = "qin";
                this.circle[3].name = "chu";
                this.circle[4].name = "wei";
                this.selectedName = "qin";
                this.l = -0.03;
                this.t = 4.54;
                setTimeout(() => {
                    this.isShow = true;
                }, 150);
                break;
            case "zhao":
                this.defaultDeg = -25.75;
                this.circle[0].name = "qi";
                this.circle[1].name = "yan";
                this.circle[2].name = "zhao";
                this.circle[3].name = "qin";
                this.circle[4].name = "chu";
                this.selectedName = "zhao";
                this.l = -0.03;
                this.t = 4.58;
                setTimeout(() => {
                    this.isShow = true;
                }, 150);
                break;
            case "yan":
                this.defaultDeg = -(26 + 26);
                this.circle[0].name = "han";
                this.circle[1].name = "qi";
                this.circle[2].name = "yan";
                this.circle[3].name = "zhao";
                this.circle[4].name = "qin";
                this.selectedName = "yan";
                this.l = -0.03;
                this.t = 4.62;
                setTimeout(() => {
                    this.isShow = true;
                }, 150);
                break;
            case "chu":
                this.defaultDeg = 26;
                this.circle[0].name = "zhao";
                this.circle[1].name = "qin";
                this.circle[2].name = "chu";
                this.circle[3].name = "wei";
                this.circle[4].name = "han";
                this.selectedName = "chu";
                this.l = -0.04;
                this.t = 4.5;
                setTimeout(() => {
                    this.isShow = true;
                }, 150);
                break;
            case "wei":
                this.defaultDeg = 26 + 26;
                this.circle[0].name = "qin";
                this.circle[1].name = "chu";
                this.circle[2].name = "wei";
                this.circle[3].name = "han";
                this.circle[4].name = "qi";
                this.selectedName = "wei";
                this.l = -0.03;
                this.t = 4.45;
                setTimeout(() => {
                    this.isShow = true;
                }, 150);
                break;
            case "han":
                this.defaultDeg = 26 + 26 + 26;
                this.circle[0].name = "chu";
                this.circle[1].name = "wei";
                this.circle[2].name = "han";
                this.circle[3].name = "qi";
                this.circle[4].name = "yan";
                this.selectedName = "han";
                this.l = 0.02;
                this.t = 4.42;
                setTimeout(() => {
                    this.isShow = true;
                }, 150);
                break;
            case "qi":
                this.defaultDeg = 26 + 26 + 26 + 26;
                this.circle[0].name = "wei";
                this.circle[1].name = "han";
                this.circle[2].name = "qi";
                this.circle[3].name = "yan";
                this.circle[4].name = "zhao";
                this.selectedName = "qi";
                this.l = -0.03;
                this.t = 4.45;
                setTimeout(() => {
                    this.isShow = true;
                }, 150);
                break;
            }
        }
    }
};
</script>

<style scoped lang="scss">
.animate__animated {
    animation-duration: 0.6s;
}
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

        img {
            position: absolute;
            left: 0;
        }

        .info {
            width: 4.35rem;
            height: 2.86rem;
            top: 0;
            left: -0.7rem;
        }

        .fea {
            width: 2.53rem;
            height: 1.92rem;
            top: 3.87rem;
            left: -0.79rem;
        }

        .qin {
            width: 4.35rem;
        }
        .yan {
            width: 4.77rem;
            .info {
                width: 4.77rem;
                height: 2.68rem;
                top: 0;
            }

            .fea {
                width: 2.81rem;
                height: 1.92rem;
                top: 3.87rem;
            }
        }
        .zhao {
            width: 4.35rem;
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
        .chu {
            width: 5.23rem;
            .info {
                width: 5.23rem;
                height: 3.46rem;
                top: 0;
            }

            .fea {
                width: 2.62rem;
                height: 1.92rem;
                top: 3.87rem;
            }
        }
        .wei {
            width: 5.23rem;
            .info {
                width: 5.23rem;
                height: 3.5rem;
                top: 0;
            }

            .fea {
                width: 2.64rem;
                height: 1.94rem;
                top: 3.87rem;
            }
        }
        .han {
            width: 3.77rem;
            .info {
                width: 3.77rem;
                height: 3.47rem;
                top: 0;
            }

            .fea {
                width: 2.64rem;
                height: 1.94rem;
                top: 3.87rem;
            }
        }
        .qi {
            width: 4.44rem;
            .info {
                width: 4.44rem;
                height: 3.47rem;
                top: 0;
            }

            .fea {
                width: 2.76rem;
                height: 1.94rem;
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
        .cur {
            z-index: 2;
        }
        .no {
            z-index: 1;
        }
        img {
            width: 100%;
        }

        em {
            display: inline-block;
            cursor: pointer;
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

        .yan_cur {
            display: inline-block;
            width: 2.85rem;
            height: 1.69rem;
            position: absolute;
            top: 0;
            right: 0.61rem;
            background: url(".././../assets/imgs/map/yan/map_on.png") no-repeat;
            background-size: 100% 100%;
        }

        .zhao {
            width: 4.21rem;
            height: 2.73rem;
            position: absolute;
            top: 0;
            left: 2.18rem;
            background: url(".././../assets/imgs/map/zhao/map.png") no-repeat;
            background-size: 100% 100%;
            &:hover {
                background: url(".././../assets/imgs/map/zhao/map_on.png")
                    no-repeat;
                background-size: 100% 100%;
            }
        }

        .zhao_cur {
            width: 4.21rem;
            height: 2.73rem;
            position: absolute;
            top: 0;
            left: 2.18rem;
            background: url(".././../assets/imgs/map/zhao/map_on.png") no-repeat;
            background-size: 100% 100%;
        }

        .qin {
            width: 3.93rem;
            height: 6.32rem;
            position: absolute;
            top: 0.75rem;
            left: 0;
            background: url(".././../assets/imgs/map/qin/map.png") no-repeat;
            background-size: 100% 100%;
            &:hover {
                background: url(".././../assets/imgs/map/qin/map_on.png")
                    no-repeat;
                background-size: 100% 100%;
            }
        }

        .qin_cur {
            width: 3.93rem;
            height: 6.32rem;
            position: absolute;
            top: 0.75rem;
            left: 0;
            background: url(".././../assets/imgs/map/qin/map_on.png") no-repeat;
            background-size: 100% 100%;
        }

        .chu {
            width: 6rem;
            height: 3.6rem;
            position: absolute;
            bottom: 0rem;
            right: -0.03rem;
            background: url(".././../assets/imgs/map/chu/map.png") no-repeat;
            background-size: 100% 100%;
            &:hover {
                background: url(".././../assets/imgs/map/chu/map_on.png")
                    no-repeat;
                background-size: 100% 100%;
            }
        }

        .chu_cur {
            width: 6rem;
            height: 3.6rem;
            position: absolute;
            bottom: 0rem;
            right: -0.03rem;
            background: url(".././../assets/imgs/map/chu/map_on.png") no-repeat;
            background-size: 100% 100%;
        }

        .wei {
            width: 3.15rem;
            height: 2.38rem;
            position: absolute;
            top: 2.29rem;
            right: 1.75rem;
            background: url(".././../assets/imgs/map/wei/map.png") no-repeat;
            background-size: 100% 100%;
            &:hover {
                background: url(".././../assets/imgs/map/wei/map_on.png")
                    no-repeat;
                background-size: 100% 100%;
            }
        }

        .wei_cur {
            width: 3.15rem;
            height: 2.38rem;
            position: absolute;
            top: 2.33rem;
            right: 1.75rem;
            background: url(".././../assets/imgs/map/wei/map_on.png") no-repeat;
            background-size: 100% 100%;
        }

        .han {
            width: 2.62rem;
            height: 3.18rem;
            position: absolute;
            top: 2.18rem;
            right: 3.8rem;
            background: url(".././../assets/imgs/map/han/map.png") no-repeat;
            background-size: 100% 100%;
            &:hover {
                background: url(".././../assets/imgs/map/han/map_on.png")
                    no-repeat;
                background-size: 100% 100%;
            }
        }

        .han_cur {
            width: 2.62rem;
            height: 3.18rem;
            position: absolute;
            top: 2.18rem;
            right: 3.8rem;
            background: url(".././../assets/imgs/map/han/map_on.png") no-repeat;
            background-size: 100% 100%;
        }

        .qi {
            width: 2.98rem;
            height: 2.61rem;
            position: absolute;
            top: 1.45rem;
            right: 0.2rem;
            background: url(".././../assets/imgs/map/qi/map.png") no-repeat;
            background-size: 100% 100%;
            &:hover {
                background: url(".././../assets/imgs/map/qi/map_on.png")
                    no-repeat;
                background-size: 100% 100%;
            }
        }

        .qi_cur {
            width: 2.98rem;
            height: 2.61rem;
            position: absolute;
            top: 1.45rem;
            right: 0.2rem;
            background: url(".././../assets/imgs/map/qi/map_on.png") no-repeat;
            background-size: 100% 100%;
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
        margin-top: -3.38rem;
        animation: circle 20s infinite linear;
    }

    .cicle_big {
        position: absolute;
        width: 10rem;
        height: 9.99rem;
        right: -35.2%;
        right: 0.01rem;
        top: 50%;
        margin-top: -4.96rem;
        transition: all 1.6s;
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
        img {
            position: absolute;
            z-index: 999;
            &:nth-of-type(2) {
                width: 1.37rem;
                height: 1.06rem;
            }
        }
        li {
            position: absolute;
            width: 1.37rem;
            height: 1.07rem;
            border-radius: 100%;
            cursor: pointer;

            .center0 {
                left: -0.04rem;
                top: 4.53rem;
            }

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

            .m_52 {
                left: 1.84rem;
                top: 1.16rem;
            }

            .m_26 {
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
