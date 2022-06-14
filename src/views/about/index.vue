<template>
  <div class="About">
    <!-- 背景颜色 -->
    <!-- <div class="backgroundColor"></div> -->
    <!-- logo -->
    <AboutHeader :textList="AboutList" />
    <!-- <SwiperList class="AboutSwiper" :swiperList="swiperList" /> -->
    <!-- 目录 -->
    <div class="listContent">
      <div class="listStyle" v-for="(item, index) in AboutList" :key="index" @click="goPage(item)">
        <div class="text">
          <h3>
            <!-- <van-icon name="play" size="24px" /> -->
            <span>{{ item.title }}</span>
          </h3>
          <p class="descStyle">
            {{ item.desc }}
          </p>
        </div>
        <div class="headerImg">
          <van-image class="w_img" fit="fill" :src="item.cover" alt="" srcset="" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SwiperList from '@/components/Swiper.vue'
import AboutHeader from '@/components/AboutHeader'
import { getAbout } from '@/api/user'
export default {
  components: {
    SwiperList,
    AboutHeader
  },
  filters: {
    bgbFilter(data) {
      console.log(data)
      return data ? ' background-image:url("' + data + '")' : 'background:#ccc'
      // background:#ccc
    }
  },
  data() {
    return {
      phone: 1843854147,
      swiperList: [1, 2, 3, 4],
      AboutList: []
    }
  },
  created() {
    this.getAbout()
  },

  methods: {
    goPage(data) {
      let { id } = data
      this.$router.push({
        path: '/AboutContent',
        query: {
          id
        }
      })
    },
    // 获取数据
    getAbout() {
      console.log(1)
      getAbout().then(res => {
        console.log(res)
        this.AboutList = res.data
        localStorage.setItem('ABOUTLIST', JSON.stringify(res.data))
      })
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/css/mixin.scss';
.About {
  height: 100%;
  overflow: hidden;
  position: relative;
  padding-bottom: 0.033rem;

  // background: olivedrab;
  .AboutSwiper {
    height: 100%;
  }
  // logo

  .listContent {
    margin: 16% 0;
    margin-top: 160px;

    // 目录
    .listStyle {
      width: 100%;
      margin-top: 20px;
      position: relative;
      // min-height: 250px;
      // background-repeat: no-repeat;
      @include flexbox(center, center, column);
      .text {
        background: rgba(0, 0, 0, 0.4);
        position: absolute;
        z-index: 1;
        color: #fff;
        width: 60%;
        padding: 10px 20px;
        border-radius: 5px;
        h3 {
          display: flex;
          justify-content: flex-start;
          align-content: center;
          padding: 5px 0;
          span {
            font-size: 18px;
          }
        }
        p {
          line-height: 22px;
        }
        .descStyle {
          // text-indent: 30px;
          padding: 0 20px;
          box-sizing: border-box;
          @include textoverflow(3);
        }
      }
      .headerImg {
        width: 90%;
        overflow: hidden;
        border-radius: 4px;
        height: 160px;
        .w_img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }

  // 颜色
  .backgroundColor {
    position: absolute;
    right: 0;
    z-index: 0;
    width: 26%;
    height: 100%;
    background: #fe9526;
  }
}
</style>
