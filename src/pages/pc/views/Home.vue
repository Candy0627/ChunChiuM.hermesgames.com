<template>
    <div class="home">
        <div class="video">
            <img
                alt="video"
                src="../../../assets/imgs/video.jpg"
                width="100%"
            />
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

<style lang="scss" scoped></style>
