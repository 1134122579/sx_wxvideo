<template>
  <div class="grow">
    <HeaderTop :name="name" :image="image" />
    <div class="growstyle">
      <div class="growBox" v-for="(item, index) in list" :key="index">
        <h4 class="title">{{ item.title }}</h4>
        <!-- <p class="text">{{ item.text }}</p> -->
        <p class="desc">{{ item.desc }}</p>
        <van-image class="imgUrl" fit="fit" :src="item.imgUrl"></van-image>
      </div>
    </div>
    <div class="onebox">
      <h4 class="title">员工活动</h4>
      <Swiper :list="listSwiper" :autoplay="autoplay" />
    </div>
  </div>
</template>

<script>
import HeaderTop from '../../components/HeaderTop'
import Swiper from '../../components/VanSwiper'

export default {
  components: {
    HeaderTop,
    Swiper
  },
  data() {
    return {
      autoplay: 3000,
      name: '',
      image: 'http://tccdn.greatorange.cn/%E5%A4%9A%E5%85%83%E6%96%87%E5%8C%96.jpg',

      list: [
        {
          title: '办公环境',
          text: '人才是天橙最宝贵的财富。',
          desc: '作为天空之橙全国总部，布局在淄博******地带的文化长廊，为员工提供良好的工作空间、社交空间、资源共享空间。除此以外，我们在上海、深圳、成都、厦门等多个城市均建立了分支机构，并为当地员工打造了舒适、创新，体现天橙文化特色的办公环境。',
          imgUrl: 'http://tccdn.greatorange.cn/%E5%8A%9E%E5%85%AC%E7%8E%AF%E5%A2%83%20%E6%94%B9.jpg'
        },
        {
          title: '多元文化',
          text: '2017年1月23日，盛视天橙与上海交大—南加州大学文化创意产业学院共同创办的天橙学院正式启动。天橙学院旨在通过社群培训学习，资源共享，发扬文创精神，提升行业水平的联合性组织.',
          desc: '天橙一直以来坚持提供平等、透明、无歧视的工作环境，对不同性别、地区、民族、宗教信仰的员工给予充分尊重，同时，严格遵守国家相关规定，维护员工利益，共同创造一个平等、和谐、多元文化融合发展的工作环境。',
          imgUrl: 'http://tccdn.greatorange.cn/guangw_28.png'
        }
      ],
      listSwiper: [
        {
          name: '天橙嘉年华',
          image: 'http://tccdn.greatorange.cn/%E5%A4%A9%E6%A9%99%E5%98%89%E5%B9%B4%E5%8D%8E.png'
        },
        {
          name: '天橙年会',
          image: 'http://tccdn.greatorange.cn/%E5%A4%A9%E6%A9%99%E5%B9%B4%E4%BC%9A.png'
        },
        {
          name: '天橙文化日',
          image: 'http://tccdn.greatorange.cn/%E5%A4%A9%E6%A9%99%E6%96%87%E5%8C%96%E6%97%A5.png'
        },
        {
          name: '天橙之夜',
          image: 'http://tccdn.greatorange.cn/%E5%A4%A9%E6%A9%99%E4%B9%8B%E5%A4%9C.png'
        },
        {
          name: '主题展厅',
          image: 'http://tccdn.greatorange.cn/%E4%B8%BB%E9%A2%98%E5%B1%95%E5%8E%85.png'
        },
        {
          name: '员工大会',
          image: 'http://tccdn.greatorange.cn/%E5%91%98%E5%B7%A5%E5%A4%A7%E4%BC%9A.png'
        }
      ]
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
      .title {
        width: 30%;
        text-align: center;
        font-size: 20px;
        border-bottom: 3px solid #fe9c34;
        margin: 10px auto;
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
  .onebox {
    color: #5f5f5f;
    .title {
      width: 30%;
      text-align: center;
      font-size: 20px;
      border-bottom: 3px solid #fe9c34;
      margin: 10px auto;
    }
  }
}
</style>
