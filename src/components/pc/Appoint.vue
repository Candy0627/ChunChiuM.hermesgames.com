<template>
    <div class="appoint_wrap" id="appoint" ref="appoint">
        <img src="../../assets/imgs/appoint/appoint_bg.jpg" alt="" />
        <!-- appoint start -->
        <div class="appoint">
            <img
                src="../../assets/imgs/appoint/scroll_bg.png"
                alt=""
                class="appoint_img"
            />

            <div class="select" @click="handleClickShow">
                {{ selectedArea }}
                <img src="../../assets/imgs/arrow.png" alt="" class="arrow" />
            </div>

            <!-- 地区下拉 -->
            <transition>
                <ul class="select_ul" v-show="options.isSelect">
                    <li
                        v-for="item in area"
                        :key="item.id"
                        @click="
                            changeValue(
                                item.id,
                                item.area,
                                item.areaCode,
                                item.tips,
                                item.areaSimple,
                                item.maxlength
                            )
                        "
                    >
                        {{ item.area }}
                    </li>
                </ul>
            </transition>

            <div class="phone">
                <span class="fl">+{{ selectedAreaCode }}</span>
                <input
                    type="text"
                    class="fr"
                    v-model="phone"
                    :placeholder="selectedtips"
                    :maxlength="selectedMaxlength"
                />
            </div>
            <input
                type="checkbox"
                class="checkbox"
                v-model="checked"
                @click="handleCheckbox(this)"
            />
            <label for="checkbox" v-show="ischecksimpol"> {{ checked }} </label>
            <img
                src="../../assets/imgs/appoint/check.png"
                alt=""
                class="check_img"
                v-show="isCheck"
            />
            <router-link
                to=""
                class="btn btn_appoint_now"
                @click.native="handleClickAppoint()"
                >立即预约</router-link
            >
            <div>
                <div class="fb-login-button self-fb" @click="fbLogin()" v-if="!isLogin">
                    <img src="../../assets/imgs/appoint/fb_login.png" alt="" />
                </div>
                <div class="self-span ep-one" v-else> {{facebookName}}</div>
            </div>
            <!-- <div
                class="fb-login-button"
                data-width=""
                data-size="medium"
                data-button-type="login_with"
                data-layout="default"
                data-auto-logout-link="false"
                data-use-continue-as="false"
                @click="fbLogin()"
            ></div> -->
            <div
                class="fb-like"
                data-href="https://www.facebook.com/ChunChiuM"
                data-width=""
                data-layout="standard"
                data-action="like"
                data-size="large"
            ></div>
            <a
                href="https://chunqiuios.onelink.me/GB4k/c8a448d2"
                class="btn btn_app"
            ></a>
            <a
                href="https://chunqiuand.onelink.me/ZoEl/87776227"
                class="btn btn_gp"
            ></a>
            <a href="https://www.facebook.com/ChunChiuM" class="btn btn_fb"></a>
        </div>
        <!-- appoint end -->
        <img src="../../assets/imgs/appoint/bot.png" alt="" class="bot_img" />
        <img
            src="../../assets/imgs/appoint/appoint_people.png"
            alt=""
            class="people_img"
        />
        <div class="progress">
            <img
                src="../../assets/imgs/simpol.png"
                alt=""
                class="simpol"
                v-show="isTrue"
                :style="{ left: left_simpol + 'rem' }"
            />
            <div class="line">
                <img
                    src="../../assets/imgs/wline0.png"
                    alt=""
                    v-show="number == 0"
                />
                <img
                    src="../../assets/imgs/wline05.png"
                    alt=""
                    v-show="number > 0 && number < 100000"
                />
                <img
                    src="../../assets/imgs/wline5.png"
                    alt=""
                    v-show="number == 100000"
                />
                <img
                    src="../../assets/imgs/wline5-10.png"
                    alt=""
                    v-show="number > 100000 && number < 300000"
                />
                <img
                    src="../../assets/imgs/wline10.png"
                    alt=""
                    v-show="number == 300000"
                />
                <img
                    src="../../assets/imgs/wline10-20.png"
                    alt=""
                    v-show="number > 300000 && number < 500000"
                />
                <img
                    src="../../assets/imgs/wline20.png"
                    alt=""
                    v-show="number == 500000"
                />
                <img
                    src="../../assets/imgs/wline20-30.png"
                    alt=""
                    v-show="number > 500000 && number < 800000"
                />
                <img
                    src="../../assets/imgs/wline30.png"
                    alt=""
                    v-show="number == 800000"
                />
                <img
                    src="../../assets/imgs/wline30-50.png"
                    alt=""
                    v-show="number > 800000 && number < 1000000"
                />
                <img
                    src="../../assets/imgs/wline50.png"
                    alt=""
                    v-show="number >= 1000000"
                />
            </div>
            <img
                src="../../assets/imgs/appoint/process.png"
                alt=""
                class="appoint_process"
            />
            <img
                src="../../assets/imgs/appoint/finished.png"
                alt=""
                class="finished finished5w"
                v-if="number >= 100000"
            />
            <img
                src="../../assets/imgs/appoint/finished.png"
                alt=""
                class="finished finished10w"
                v-if="number >= 300000"
            />
            <img
                src="../../assets/imgs/appoint/finished.png"
                alt=""
                class="finished finished20w"
                v-if="number >= 500000"
            />
            <img
                src="../../assets/imgs/appoint/finished.png"
                alt=""
                class="finished finished30w"
                v-if="number >= 800000"
            />
            <img
                src="../../assets/imgs/appoint/finished.png"
                alt=""
                class="finished finished50w"
                v-if="number >= 1000000"
            />
        </div>
    </div>
</template>

<script>
export default {
    name: "Appoint",
    props: {
        msg: String
    },
    data () {
        return {
            selectedArea: "台灣",
            options: {
                isSelect: false
            },
            phone: "",
            isCheck: false,
            checked: false,
            area: [
                {
                    id: "0",
                    area: "台灣",
                    areaCode: "886",
                    tips: "請填9位數行動電話號碼",
                    areaSimple: "tw",
                    maxlength: 9
                },
                {
                    id: "1",
                    area: "香港",
                    areaCode: "852",
                    tips: "請填8位數行動電話號碼",
                    areaSimple: "xg",
                    maxlength: 8
                },
                {
                    id: "2",
                    area: "澳門",
                    areaCode: "853",
                    tips: "請填8位數行動電話號碼",
                    areaSimple: "am",
                    maxlength: 8
                },
                {
                    id: "3",
                    area: "新加坡",
                    areaCode: "65",
                    tips: "請填8位數行動電話號碼",
                    areaSimple: "xjp",
                    maxlength: 8
                },
                {
                    id: "4",
                    area: "馬來西亞",
                    areaCode: "60",
                    tips: "請填9或10位數電話號碼",
                    areaSimple: "mlxy",
                    maxlength: 10
                }
            ],
            ischecksimpol: false,
            selectedAreaCode: "886",
            selectedAreaId: 0,
            selectedtips: "請填0後的9位數行動電話號碼",
            selectedSimple: "tw",
            selectedMaxlength: 9,
            number: 0,
            left_simpol: 0,
            isTrue: false,
            isLogin: false, // 登录状态,初始为未登陆
            facebookId: 0,
            facebookName: "",
            platform: ""
        };
    },
    mounted () {
        this.getNumber();
        this.$emit(
            "getAppointKm",
            this.$refs.appoint.getBoundingClientRect().top
        );

        window.fbAsyncInit = function () {
            FB.init({
                appId: "272873607521962",
                status: true,
                xfbml: true,
                version: "v2.7"
            });
        };

        let storeTime = localStorage.getItem("date");
        if (storeTime) {
            let curTime = new Date().getTime();
            console.log("当前的时间戳", curTime);
            // 24h
            if (curTime - storeTime > 86400000) {
                localStorage.clear();
            }
        } else {
        }

        this.initPv();
    },
    methods: {
        handleClickShow () {
            this.options.isSelect = !this.options.isSelect;
            this.phone = "";
        },
        /**
         * 下拉赋值
         */
        changeValue (id, areaName, areaCode, tips, areaSimple, maxlength) {
            this.options.isSelect = false;
            this.selectedArea = areaName;
            this.selectedAreaCode = areaCode;
            this.selectedAreaId = id;
            this.selectedtips = tips;
            this.selectedSimple = areaSimple;
            this.selectedMaxlength = maxlength;
        },
        handleCheckbox () {
            console.log(this.checked);
            if (this.checked === false) {
            } else {
            }
        },
        getNumber () {
            let datas = "";
            this.getHttp(
                this,
                datas,
                "/api/appointment/getPeopleCount",
                function (obj, data) {
                    if (data.code === 200) {
                        obj.number = data.data;
                        let n = obj.number;
                        // 定义的假数据
                        // n = 850000;
                        // obj.number = n;
                        if (n === 0) {
                            obj.left_simpol = 0;
                            obj.isTrue = false;
                        }
                        if (n > 0 && n < 100000) {
                            obj.left_simpol = 0.18;
                            obj.isTrue = false;
                        }
                        if (n === 100000) {
                            obj.isTrue = true;
                            obj.left_simpol = 0.45;
                        }
                        if (n > 100000 && n < 300000) {
                            obj.isTrue = true;
                            obj.left_simpol = 1.35;
                        }
                        if (n === 300000) {
                            obj.isTrue = true;
                            obj.left_simpol = 2.3;
                        }
                        if (n > 300000 && n < 500000) {
                            obj.isTrue = true;
                            obj.left_simpol = 3.3;
                        }
                        if (n === 500000) {
                            obj.isTrue = true;
                            obj.left_simpol = 4.15;
                        }
                        if (n > 500000 && n < 800000) {
                            obj.isTrue = true;
                            obj.left_simpol = 5.3;
                        }
                        if (n === 800000) {
                            obj.isTrue = true;
                            obj.left_simpol = 5.9;
                        }
                        if (n > 800000 && n < 1000000) {
                            obj.isTrue = true;
                            obj.left_simpol = 7.09;
                        }
                        if (n >= 1000000) {
                            obj.isTrue = true;
                            obj.left_simpol = 7.6;
                        }
                    } else {
                        obj.$message(data.message);
                    }
                }
            );
        },
        init () {
            if (window.pageYOffset >= this.val - 100) {
                this.isSlideBar = true;
            } else {
                this.isSlideBar = false;
            }
        },
        initPv () {
            if (!this.platform) {
                this.platform = -1;
            }
            let datas = {
                platform: this.platform
            };
            this.getHttp(this, datas, "/api/appointment/pv", function (obj, res) {
                // console.log("统计的pv", res.message);
            });
        },
        initUv () {
            if (!this.platform) {
                this.platform = -1;
            }
            let datas = {
                facebook_id: this.facebookId,
                platform: this.platform
            };
            this.getHttp(this, datas, "/api/appointment/uv", function (obj, data) {
                console.log(data.message);
            });
        },
        fbLogin () {
            // 已登录才能进行预约接口
            let that = this;
            FB.login(function (response) {
                if (response.authResponse) {
                    console.log("欢迎光临!获取你的信息.... ");
                    FB.api("/me", function (response) {
                        that.isLogin = true;
                        that.facebookId = response.id;
                        that.facebookName = response.name;
                        console.log(response, "很高兴看到你, " + response.name + ".", "fb id是", that.facebookId);
                        localStorage.setItem("userInfo", JSON.stringify(response));
                        localStorage.setItem("date", new Date());
                        // 登录过后要统计uv
                        that.initUv();
                    });
                } else {
                    console.log(
                        "用户已取消登录或未完全授权."
                    );
                }
            });
        },
        handleClickAppoint () {
            let areaCode = this.area[this.selectedAreaId].areaCode;
            let selectedSimple = this.area[this.selectedAreaId].areaSimple;
            let tel = areaCode + this.phone;
            this.platform = this.getQueryString("flatform");

            if (!this.platform) {
                this.platform = -1;
            }
            if (!this.isLogin) {
                this.$message(
                    "請先進行facebook登錄!"
                );
                return false;
            }
            if (this.checked === !true) {
                this.$message(
                    "請您先勾選同意個人資料的蒐集使用及接收獎勵簡訊!"
                );
                return false;
            }

            if (this.phone === "") {
                this.$message("電話號碼不能爲空！");
                return false;
            }
            if (!this.validatePhone(this.phone, areaCode)) {
                this.$message("電話號碼格式錯誤!");
                return false;
            }
            console.log(this.platform);
            if (this.isLogin) {
                let datas = {
                    phone: "+" + tel,
                    zone: selectedSimple,
                    platform: this.platform,
                    facebook_id: this.facebookId
                };

                this.postHttp(this, datas, "/api/appointment/store", function (
                    obj,
                    data
                ) {
                    if (data.code === 200) {
                        obj.$message(data.message);
                    } else {
                        obj.$message(data.message);
                    }
                });
            } else {
                this.$message("請先進行facebook登錄!");
            }
        },
        validatePhone (phone, areaCode) {
            let map = {
                886: /^9\d{8}$/,
                852: /^\d{8}$/,
                853: /^\d{8}$/,
                65: /^\d{8}$/,
                60: /^\d{9,10}$/
            };
            return map[areaCode].test(phone);
        },
        getQueryString (name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
            var l = decodeURI(window.location.search);
            var r = l.substr(1).match(reg);
            if (r != null) return unescape(r[2]);
            return null;
        }
    }
};
</script>

<style scoped lang="scss">
.fb-like {
    height: 27px !important;
    left: 2.8rem;
    top: 1.32rem;
}
.fb-login-button {
    width: 2.4rem;
    height: 0.46rem;
    position: absolute;
    left: 2.22rem;
    top: 1.32rem;
    z-index: 1;
    cursor: pointer;
}
.self-span {
    width: 1.4rem;
    height: 0.3rem;
    position: absolute;
    left: 2.22rem;
    top: 1.32rem;
    z-index: 1;
    font-size: 0.2rem;
    cursor: pointer;
    color: #000;
    text-align: left;
}
.fb-login-button {
    left: 1.7rem;
}
.self-fb img {
    width: 1.46rem;
    height: 0.29rem;
}
//上半场过渡的初始状态，下半场动画的结束状态
.v-enter,
.v-leave-to {
    opacity: 0;
    transform: translateY(-50px);
}

// 设置上半场动画的结束状态、下半场过渡的初始状态
.v-enter-to,
.v-leave {
    opacity: 0.6;
    transform: translateY(0);
}

// 设置上半场过渡、下半场过渡的时间、运动曲线
.v-enter-active,
.v-leave-active {
    transition: all 1s ease;
}

.appoint_wrap {
    position: relative;
    width: 100%;
    .appoint {
        position: absolute;
        left: 2.57rem;
        top: 0.78rem;
        .check_img {
            position: absolute;
            width: 0.17rem;
            height: 0.16rem;
            left: 4.13rem;
            top: 1.48rem;
            cursor: pointer;
        }
        .checkbox {
            position: absolute;
            width: 0.18rem;
            height: 0.18rem;
            left: 4.05rem;
            top: 3.11rem;
            cursor: pointer;
        }
        .btn {
            display: inline-block;
            position: absolute;
            text-indent: -9999px;
            &.btn_appoint_now {
                left: 4.02rem;
                top: 4.7rem;
                width: 1.91rem;
                height: 0.56rem;
                background: url(".././../assets/imgs/appoint/btn_appoint.png")
                    no-repeat;
                background-size: 100% 100%;
                transition: all 0.9s;
                &:hover {
                    width: 1.91rem;
                    height: 0.56rem;
                    background: url(".././../assets/imgs/appoint/btn_appoint_hover.png")
                        no-repeat;
                    background-size: 100% 100%;
                }
            }
            &.btn_app {
                right: 0.59rem;
                top: 3.59rem;
                width: 1.18rem;
                height: 0.41rem;
                background: url(".././../assets/imgs/appoint/btn_app.png")
                    no-repeat;
                background-size: 100% 100%;
                transition: all 0.9s;
                &:hover {
                    opacity: 0.8;
                }
            }
            &.btn_gp {
                right: 0.59rem;
                top: 4.1rem;
                width: 1.18rem;
                height: 0.41rem;
                background: url(".././../assets/imgs/appoint/btn_gp.png")
                    no-repeat;
                background-size: 100% 100%;
                transition: all 0.9s;
                &:hover {
                    opacity: 0.8;
                }
            }
            &.btn_fb {
                right: 0.59rem;
                top: 4.6rem;
                width: 1.18rem;
                height: 0.41rem;
                background: url(".././../assets/imgs/appoint/btn_fb.png")
                    no-repeat;
                background-size: 100% 100%;
                transition: all 0.9s;
                &:hover {
                    opacity: 0.8;
                }
            }
        }
        .phone {
            position: absolute;
            width: 3.79rem;
            height: 0.47rem;
            left: 4.14rem;
            top: 2.52rem;
            text-align: center;
            border: none;
            background: none;
            span {
                display: inline-block;
                width: 20%;
                color: #827e6e;
                height: 0.47rem;
                line-height: 0.55rem;
                font-size: 0.24rem;
                font-weight: 600;
            }
            input {
                width: 80%;
                height: 116%;
                color: #827e6e;
                font-weight: 600;
                font-size: 0.22rem;
                border: none;
                background: none;
            }
        }
        .select_ul {
            position: absolute;
            left: 2.16rem;
            top: 3.03rem;
            width: 1.72rem;
            height: 2.25rem;
            background: url(".././../assets/imgs/select_bg.png") no-repeat;
            background-size: 100% 100%;
            transition: all 0.9s;
            li {
                width: 85%;
                margin: 0 auto;
                height: 0.45rem;
                line-height: 0.45rem;
                text-align: center;
                font-size: 0.24rem;
                color: #ffffff;
                border-bottom: 1px solid #faf7de;
                cursor: pointer;
                &:last-child {
                    border-bottom: none !important;
                }
            }
        }
        .select {
            width: 1.7rem;
            text-align: center;
            position: absolute;
            left: 2.22rem;
            top: 2.65rem;
            font-size: 0.22rem;
            color: #ffffff;
            text-align: left;
            text-indent: 0.28rem;
            cursor: pointer;
            .arrow {
                position: absolute;
                width: 0.35rem;
                height: 0.2rem;
                right: 0.14rem;
                top: 50%;
                margin-top: -0.07rem;
            }
            select {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: none;
                border: none;
            }
        }
    }
    .appoint_img {
        width: 10.7rem;
        height: 6.22rem;
    }
    .appoint_in {
        position: absolute;
        top: 0.73rem;
    }
    .bot_img {
        position: absolute;
        top: 7.25rem;
        left: 0;
        z-index: 1;
    }
    .people_img {
        width: 6.57rem;
        height: 10.8rem;
        position: absolute;
        top: 0;
        right: 0;
        z-index: 1;
    }
    .progress {
        position: absolute;
        left: 3rem;
        bottom: 0.4rem;
        z-index: 1;
        width: 9.14rem;
        height: 2.1rem;
        .appoint_process {
            width: 8.9rem;
            height: 2.04rem;
            position: absolute;
            left: 0;
            bottom: -0.1rem;
        }
        .simpol {
            width: 0.82rem;
            height: 0.8rem;
            position: absolute;
            top: -0.6rem;
            left: 0;
        }
        .finished {
            width: 0.62rem;
            height: 0.71rem;
            position: absolute;
            top: 0.71rem;
        }
        .finished5w {
            left: 0.26rem;
        }
        .finished10w {
            left: 2.1rem;
        }
        .finished20w {
            left: 3.94rem;
        }
        .finished30w {
            left: 5.78rem;
        }
        .finished50w {
            left: 7.62rem;
        }
    }
}
</style>
