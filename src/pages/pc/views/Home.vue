<template>
  <div class="home">
    <Video />
    <SlideBar />
    <Appoint />
    <Map />
    <Military />
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
import Military from "@/components/pc/Military.vue";
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
        Military,
        BattleFiled,
        Rule,
        Footer
    }
};
</script>

<style lang="scss" scoped>
.home {
  font-size: 0;
}
</style>
