<template>
    <div class="map_wrap">
        <img src="../../assets/imgs/map/map_bg.jpg" alt="" />
        <img src="../../assets/imgs/map/title.png" alt="" class="title" />

        <div class="info">
            <div class="qin">
                <img src="../../assets/imgs/map/i_yan.png" alt="" />
                <!-- 秦人先祖嬴姓部族早在殷商時期就是鎮守西戎的得力助手。秦襄公派兵護送周平王東遷，被封為諸侯。秦國軍隊自商鞅變法實行獎勵軍功政策後 -->
            </div>
        </div>
        <div class="map">
            <!-- <img src="../../assets/imgs/map/map_bg.png" alt="" /> -->
            <img src="../../assets/imgs/map/yan.png" alt="" class="yan" />
            <img src="../../assets/imgs/map/zhao.png" alt="" class="zhao" />
            <img src="../../assets/imgs/map/qin.png" alt="" class="qin" />
            <img src="../../assets/imgs/map/chu.png" alt="" class="chu" />
            <img src="../../assets/imgs/map/wei.png" alt="" class="wei" />
            <img src="../../assets/imgs/map/han.png" alt="" class="han" />
            <img src="../../assets/imgs/map/qi.png" alt="" class="qi" />
        </div>
        <div class="circle">
            <img src="../../assets/imgs/map/smalll.png" alt="" />
            <ul :class="{ active: isActive }">
                <li class="center"></li>
                <li
                    :class="item.name"
                    v-for="item in circle"
                    :key="item.id"
                    @click="handleCricle(item.name, item.deg, item.pos)"
                ></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Map',
  props: {
    msg: String
  },
  data () {
    return {
      isActive: false,
      circle: [
        {
          id: '01',
          name: 'yan',
          deg: -60,
          pos: 1
        },
        {
          id: '02',
          name: 'zhao',
          deg: -30,
          pos: 2
        },
        {
          id: '03',
          name: 'qin',
          deg: 0,
          pos: 0
        },
        {
          id: '04',
          name: 'chu',
          pos: 3
        },
        {
          id: '05',
          name: 'wei',
          pos: 4
        },
        {
          id: '06',
          name: 'han'
        },
        {
          id: '07',
          name: 'qi',
          deg: -90
        },
        {
          id: '08',
          name: 'yan1'
        },
        {
          id: '09',
          name: 'zhao1'
        },
        {
          id: '10',
          name: 'qin1'
        },
        {
          id: '11',
          name: 'chu1'
        },
        {
          id: '12',
          name: 'wei1'
        },
        {
          id: '13',
          name: 'han1'
        },
        {
          id: '14',
          name: 'qi1'
        }
      ]
    }
  },
  methods: {
    handleCricle (name) {
      console.log('转的是', name)
      this.isActive = !this.isActive
    }
  }
}
</script>

<style scoped lang="scss">
/* 点击转动的样式 */
.active {
    transform: rotate(-60deg);
}
.map_wrap {
    position: relative;
    width: 100%;
    .info {
        position: absolute;
        left: 3.55rem;
        top: 2.33rem;
        .qin {
            width: 4.35rem;
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
        .yan {
            width: 2.85rem;
            height: 1.69rem;
            position: absolute;
            top: 0;
            right: 0.61rem;
        }
        .zhao {
            width: 4.21rem;
            height: 2.73rem;
            position: absolute;
            top: 0.03rem;
            left: 2.18rem;
        }
        .qin {
            width: 3.93rem;
            height: 6.32rem;
            position: absolute;
            top: 0.75rem;
            left: 0;
        }
        .chu {
            width: 5.77rem;
            height: 3.44rem;
            position: absolute;
            bottom: 0.01rem;
            right: 0.05rem;
        }
        .wei {
            width: 3.15rem;
            height: 2.38rem;
            position: absolute;
            top: 2.33rem;
            right: 1.75rem;
        }
        .han {
            width: 2.62rem;
            height: 3.18rem;
            position: absolute;
            top: 2.25rem;
            right: 3.8rem;
        }
        .qi {
            width: 2.98rem;
            height: 2.61rem;
            position: absolute;
            top: 1.45rem;
            right: 0.25rem;
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
    img {
        position: absolute;
        width: 7.05rem;
        height: 7.11rem;
        right: -28%;
        top: 50%;
        margin-top: -3.43rem;
        animation: circle 20s infinite linear;
    }
    ul {
        position: absolute;
        width: 10.12rem;
        height: 9.99rem;
        right: -35.2%;
        // right: 10%;
        top: 50%;
        margin-top: -4.83rem;
        background: url(".././../assets/imgs/map/big.png") no-repeat;
        background-size: 100% 100%;
        transition: all 0.9s;
        li {
            position: absolute;
            width: 1.07rem;
            height: 1.07rem;
            border-radius: 100%;
            cursor: pointer;
            /*background: pink;
            opacity: 0.6;*/
            &.qi {
                right: 5.45rem;
                top: 0.3rem;
            }
            &.yan {
                right: 7.2rem;
                top: 1.16rem;
            }
            &.zhao {
                right: 8.4rem;
                top: 2.66rem;
            }
            &.center {
                right: 8.75rem;
                top: 4.5rem;
            }
            &.qin {
                right: 8.75rem;
                top: 4.5rem;
            }
            &.chu {
                right: 8.35rem;
                top: 6.35rem;
            }
            &.wei {
                right: 7.15rem;
                top: 7.8rem;
            }
            &.han {
                right: 5.45rem;
                top: 8.6rem;
            }
            &.qi1 {
                right: 3.48rem;
                top: 8.6rem;
            }
            &.yan1 {
                right: 1.73rem;
                top: 7.81rem;
            }
            &.zhao1 {
                right: 0.57rem;
                top: 6.29rem;
            }
            &.qin1 {
                right: 0.16rem;
                top: 4.46rem;
            }
            &.chu1 {
                right: 0.59rem;
                top: 2.6rem;
            }
            &.wei1 {
                right: 1.75rem;
                top: 1.09rem;
            }
            &.han1 {
                right: 3.48rem;
                top: 0.27rem;
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
