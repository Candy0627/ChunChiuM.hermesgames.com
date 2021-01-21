<template>
    <div class="home">
        <div class="video">
            <video
                width="100%"
                height="100%"
                class="one-background-video"
                muted="muted"
                data-autoplay
                autoplay
                loop
            >
                <source src="../../../assets/top.mp4" type="video/mp4" />
            </video>
        </div>
        <Appoint />
        <Map />
        <Military />
        <BattleFiled />
        <img
            alt="video"
            src="../../../assets/imgs/rules_bg.jpg"
            width="100%"
            class="rules"
        />
        <Footer />
    </div>
</template>

<script>
import Appoint from "@/components/pc/Appoint.vue";
import Map from "@/components/pc/Map.vue";
import Military from "@/components/pc/Military.vue";
import BattleFiled from "@/components/pc/BattleFiled.vue";
import Footer from "@/components/pc/Footer.vue";

export default {
    name: "home",
    components: {
        Appoint,
        Map,
        Military,
        BattleFiled,
        Footer
    }
};
</script>

<style lang="scss" scoped>
.home{
    font-size: 0;
}
</style>
