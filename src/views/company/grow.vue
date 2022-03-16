<template>
  <div class="grow">
    <HeaderTop :name="name" :image="image" />
    <div class="growstyle">
      <div class="growBox" v-for="(item, index) in list" :key="index">
        <h4 class="title">{{ item.title }}</h4>
        <p class="text">{{ item.text }}</p>
        <p class="desc">{{ item.desc }}</p>
        <a :href="item.pto">
          <van-image class="imgUrl" fit="fit" :src="item.imgUrl" @click="go(item)"></van-image>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderTop from '../../components/HeaderTop'

export default {
  components: {
    HeaderTop
  },
  data() {
    return {
      autoplay: 3000,
      name: '',
      image: 'http://tccdn.greatorange.cn/%E7%AE%80%E4%BB%8B-%E5%A4%A9%E7%A9%BA%E4%B9%8B%E6%A9%99banner.png',

      list: [
        {
          to: '/newculture',
          title: '人才发展',
          text: '人才是天橙最宝贵的财富。',
          desc: '公司一直高度重视员工发展，为每一位天橙人量身定制双通道事业发展路径以及丰富的学习资源，帮助每一个天橙人成就梦想，助力发展。',
          imgUrl: 'http://tccdn.greatorange.cn/guangw_27.png'
        },
        {
          pto: 'http://icci.greatorange.cn/m/',
          title: '天橙学院',
          text: '2017年1月23日，盛视天橙与上海交大—南加州大学文化创意产业学院共同创办的天橙学院正式启动。天橙学院旨在通过社群培训学习，资源共享，发扬文创精神，提升行业水平的联合性组织.',
          desc: '',
          imgUrl: 'http://tccdn.greatorange.cn/guangw_28.png'
        }
      ]
    }
  },
  methods: {
    go(value) {
      console.log(value)
      if (value.to) {
        this.$router.push({
          path: value.to
        })
      } else {
        location.href()
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.grow {
  .growstyle {
    padding: 20px;
    color: #5f5f5f;
    .growBox {
      width: 100%;
      .title {
        width: 30%;
        margin: 10px 0;
        text-align: left;
        font-size: 20px;
        border-bottom: 3px solid #fe9c34;
      }
      .text {
        padding: 10px 0;
      }
      .desc {
        padding: 10px 0;
      }
      .imgUrl {
        height: 180px;
        overflow: hidden;
        border-radius: 20px;
      }
    }
  }
}
</style>
