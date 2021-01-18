<template>
  <div class="map_wrap">
    <img src="../../assets/imgs/map/map_bg.jpg" alt="" />
  </div>
</template>

<script>
export default {
  name: 'Map',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">
.map_wrap {
  position: relative;
  width: 100%;
}
</style>
