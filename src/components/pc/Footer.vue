<template>
    <div class="footer_wrap">
        <img src="../../assets/imgs/footer_bg.png" alt="" />
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
.footer_wrap {
    position: absolute;
    width: 100%;
    bottom: 0;
}
</style>
