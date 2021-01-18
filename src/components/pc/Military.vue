<template>
  <div class="military_wrap">
    <img src="../../assets/imgs/military_bg.jpg" alt="" />
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
}
</style>
