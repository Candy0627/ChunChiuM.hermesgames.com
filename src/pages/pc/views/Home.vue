<template>
    <div class="home">
        <Video />
        <SlideBar v-if="isSlideBar" />
        <Appoint @getAppointKm="getAppointKm" />
        <Map />
        <Hero />
        <BattleFiled />
        <Rule />
        <Footer />
    </div>
</template>

<script>
import SlideBar from "@/components/pc/SlideBar.vue";
import Video from "@/components/pc/Video.vue";
import Appoint from "@/components/pc/Appoint.vue";
import Map from "@/components/pc/Map.vue";
import Hero from "@/components/pc/Hero.vue";
import BattleFiled from "@/components/pc/BattleFiled.vue";
import Rule from "@/components/pc/Rule.vue";
import Footer from "@/components/pc/Footer.vue";

export default {
    name: "Home",
    components: {
        SlideBar,
        Video,
        Appoint,
        Map,
        Hero,
        BattleFiled,
        Rule,
        Footer
    },
    data () {
        return {
            isSlideBar: true,
            val: 0
        };
    },
    mounted () {
        window.addEventListener("scroll", this.init, true);
    },
    methods: {
        getAppointKm (val) {
            this.val = val;
        }
    }
};
</script>

<style lang="scss" scoped>
.home {
    font-size: 0;
}
</style>
