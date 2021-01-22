<template>
    <div class="footer">
        <img src="../../assets/imgs/footer_bg.png" alt="" />
        <ul>
            <li><a href="www.baidu.com"></a></li>
            <li><a href="javascript"></a></li>
            <li><a href="javascript"></a></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "Footer",
    props: {
        msg: String
    }
};
</script>

<style scoped lang="scss">
.footer {
    width: 100%;
    position: absolute;
    bottom: 0;
}
.footer ul {
    width: 2.5rem;
    height: 0.5rem;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -2.6rem;
}
.footer ul li {
    width: 0.75rem;
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
        left: 0;
    }
    &:nth-child(2) {
        left: 0.9rem;
    }
    &:nth-child(3) {
        right: 0;
    }
}
</style>
