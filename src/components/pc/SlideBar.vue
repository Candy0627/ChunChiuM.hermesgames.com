<template>
    <div class="slidebar">
        <img src="../../assets/imgs/appoint/slide_bar.png" alt="" />
        <ul>
            <li><a href="javascript:;"></a></li>
            <li><a href="javascript:;"></a></li>
            <li><a href="javascript:;"></a></li>
        </ul>
        <em></em>
    </div>
</template>

<script>
export default {
    name: "SlideBar",
    props: {
        msg: String
    }
};
</script>

<style scoped lang="scss">
.slidebar {
    position: fixed;
    width: 1.54rem;
    height: 3.79rem;
    top: 30%;
    left: 0;
    z-index: 116;
}
.slidebar ul {
    width: 1rem;
    height: 1.04rem;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -.52rem;
    margin-top: -.28rem;
    z-index: 117;
}
.slidebar ul li {
    width: 100%;
    height: 0.333rem;
    position: absolute;
    cursor: pointer;
    /* background: pink;
    opacity: 0.6; */
    a{
        display: inline-block;
        width: 100%;
        height: 100%;
    }
    &:nth-child(1) {
        top: 0;
    }
    &:nth-child(2) {
        top: 0.355rem;
    }
    &:nth-child(3) {
        bottom: 0;
    }
}
</style>
