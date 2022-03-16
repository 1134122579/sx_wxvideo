<template>
  <div class="content">
    <!-- <Navbar :title="getData.name"></Navbar> -->
    <div class="nav">
      <van-icon name="arrow-left" size="40" @click="goOut" />
    </div>
    <!-- <div class="border">
      <div class="borderone borderColor"></div>
      <div class="bordertwo borderColor"></div>
      <div class="border3 borderColor"></div>
    </div> -->
    <div class="list" v-if="getData.length > 0">
      <div class="listStyle" v-for="(item, index) in getData" :key="index">
        <!-- <h4 class="title">{{ item.name }}</h4>
        <div class="desc">
          {{ item.desc }}
        </div> -->
        <div class="contentHtml">
          <van-image fit="cover" :src="item.img" style="width: 100%; height: 180px"></van-image>
        </div>
      </div>
    </div>
    <div class="NullStyle" v-if="getData.length <= 0">
      <van-empty description="暂无数据" />
    </div>
  </div>
</template>
<script>
import { getBuildFlim } from '@/api/user'
import Navbar from '@/components/Navbar.vue'

export default {
  components: {
    Navbar
  },
  data() {
    return {
      getData: null
    }
  },
  created() {
    this.getContent()
  },
  methods: {
    goOut() {
      this.$router.go(-1)
    },
    getContent() {
      const { id } = this.$route.query
      if (id) {
        getBuildFlim({
          class_id: id
        }).then(res => {
          console.log(res.data)
          this.getData = res.data
          if (res.data || res.data.length <= 0) {
            // alert('暂无内容！')
            // this.$router.go(-1)
            return
          }
        })
      } else {
        alert('重新进入！')
        this.$router.go(-1)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/mixin.scss';

.content {
  // margin: 20px;
  // height: 100%;
  background: #fff;
  // background: $contentBackground;
  .nav {
    padding: 20px 0 20px 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .border {
    padding-left: 20px;
    .borderColor {
      border-bottom: 4px solid #fe9526;
      margin-bottom: 20px;
    }
    .borderone {
      width: 40%;
    }
    .bordertwo {
      width: 30%;
    }
    .border3 {
      width: 20%;
    }
  }
  .listStyle {
    margin: 0 20px;
    color: #4f4f4f;
  }
  .title {
    font-size: 24px;
    text-shadow: 4px 5px 5px #ccc;
    text-align: center;
  }
  .desc {
    font-size: 16px;
    padding: 0 20px;
    margin-top: 10px;
    text-align: center;
  }
  .contentHtml {
    // margin-top: 20px;
  }
  .NullStyle {
    text-align: center;
    width: 100%;
    height: 80vh;
  }
}
</style>
