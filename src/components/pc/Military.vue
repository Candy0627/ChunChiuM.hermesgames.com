<template>
    <div class="military_wrap">
        <img src="../../assets/imgs/military_bg.jpg" alt="" />
        <ul>
            <li>君</li>
            <li>弓</li>
            <li>騎</li>
            <li>步</li>
        </ul>
        <div class="people">
            <img src="../../assets/imgs/hero/baiqi/name.png" alt="" />
            <img src="../../assets/imgs/hero/baiqi/baiqi.png" alt="" />
        </div>
        <div class="content">
            <img src="../../assets/imgs/hero/baiqi/info.png" alt="" />
            <img src="../../assets/imgs/hero/baiqi/corps.png" alt="" />
        </div>
    </div>
</template>

<script>
export default {
  name: 'Military',
  props: {
    msg: String
  }
}
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
            text-indent: -9999px;
            cursor: pointer;
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
            right:3.2rem;
            &:nth-child(1) {
                width: 8.1rem;
                height: .98rem;
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
