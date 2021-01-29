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
            isSlideBar: false,
            val: 0
        };
    },
    mounted () {
        window.addEventListener("scroll", this.init, true);
        this.initPv();
    },
    methods: {
        getAppointKm (val) {
            this.val = val;
        },
        init () {
            if (window.pageYOffset >= this.val - 100) {
                this.isSlideBar = true;
            } else {
                this.isSlideBar = false;
            }
        },
        initPv () {
            this.getHttp(this, "", "/api/appointment/pv", function (obj, res) {
                console.log("统计的pv", res.message);
            });
        }
    }
};
</script>

<style lang="scss" scoped>
.home {
    font-size: 0;
}
</style>
