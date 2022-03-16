<template>
  <div class="content">
    <!-- <van-image :src="imgUrl" class="ImageStyl"></van-image> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgUrl: require('../../assets/newIMG.png')
    }
  }
}
</script>
<style lang="scss">
.content {
  height: 92.333vh;
  overflow: hidden;
  background: #120c0e;
  background: url('../../assets/phoneBg.png') no-repeat 100% 100%;
  background-size: 100% 100%;
  .ImageStyl {
    padding: 0;
    width: 100%;
  }
}
</style>
