<template>
  <div class="introduce">
    <HeaderTop :name="name" :image="image" />
    <div class="typeList">
      <div class="onebox" v-for="(item, index) in typeList" :key="item.id">
        <h4 class="title">{{ item.title }}</h4>
        <Swiper :Pid="item.id" :list="item.list" :autoplay="autoplay + index * 100" />
      </div>
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
      image: 'http://tccdn.greatorange.cn/%E7%AE%80%E4%BB%8B-%E5%A4%A9%E7%A9%BA%E4%B9%8B%E6%A9%99banner.png',
      typeList: [
        {
          id: 1,
          title: '赋能产业',
          desc: '价值文化',
          text: '挖掘个人潜能，为公司创造价值',
          list: [
            {
              name: '视频制作',
              image: 'http://mfyfile.greatorange.cn/type-box-5.png'
            },
            {
              name: '活动推广',
              image: 'http://tccdn.greatorange.cn/SKY/20210816154351/569/hdtg (1).jpg'
            },
            {
              name: '科技智能',
              image: 'http://mfyfile.greatorange.cn/%E7%A7%91%E6%8A%80%E6%99%BA%E8%83%BD.jpg'
            },
            {
              name: '专业营销',
              image:
                'http://tccdn.greatorange.cn/%E4%BC%81%E4%B8%9A%E8%B4%A3%E4%BB%BB-%E4%B8%93%E4%B8%9A%E8%90%A5%E9%94%80.png'
            }
          ]
        },
        {
          id: 2,
          title: '赋能城市',
          desc: '开心文化',
          text: '因为热爱，生活和工作都很可爱',
          list: [
            {
              name: '智联空间',
              image: 'http://tccdn.greatorange.cn/%E5%9B%BE%E7%89%872.png'
            },
            {
              name: '智造空间',
              image: 'http://mfyfile.greatorange.cn/MFY20201221571/WechatIMG4258.jpg'
            },
            {
              name: '智造空间',
              image: 'http://tccdn.greatorange.cn/guangw8.png'
            }
          ]
        },
        {
          id: 3,
          title: '赋能未来',
          desc: '数据文化',
          text: '知行合一，一一直到，更要做到',
          list: [
            {
              name: '天橙学院',
              text: '全国影视传媒行业人才提供交流·赋能的专业化学习型平台',
              image: 'http://tccdn.greatorange.cn/SKY/20210816154705/690/天橙学院3232.png'
            },
            {
              name: '云创空间',
              text: '为人才集聚打造最IN的商务社交空间，实现人才互联，技术共享，生态融合，城市有光',
              image: 'http://tccdn.greatorange.cn/SKY/20210816154953/32/企业责任-云创空间.png'
            },
            {
              name: '魔方云',
              text: '一个面向文创行业的装束赋能平台，加速行业数字化转型',
              image: 'http://tccdn.greatorange.cn/%E4%BC%81%E4%B8%9A%E8%B4%A3%E4%BB%BB-%E9%AD%94%E6%96%B9%E4%BA%91.png'
            },
            {
              name: '城市合伙人',
              text: '共享与赋能现在它正裹挟着浑身的商业价值能量狂奔而来',
              image: 'http://tccdn.greatorange.cn/SKY/20210816154953/32/企业责任-云创空间.png'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.introduce {
  // background: red;
  .list {
    .onebox {
      padding: 50px 0 50px 40px;
      background: #fff;
      h4 {
        font-size: 24px;
        // font-weight: 600;
        border-bottom: 4px solid #fe9526;
        // padding: 0 10px 10px 0;
        display: inline-block;
        letter-spacing: 2px;
      }
      h4:first-letter {
        color: #fe9526;
        font-size: 34px;
        padding: 0 4px;
        margin-top: -10px;
      }
      p {
        padding: 8px 0;
        font-size: 18px;
        letter-spacing: 2px;
      }
      .desc {
        font-weight: 600;
      }
      .text {
        font-size: 16px;
      }
    }
    .bg {
      background: #f3f3f3;
    }
  }
  .typeList {
    .onebox {
      width: 100%;
      box-sizing: border-box;
      .title {
        width: 30%;
        margin: 20px auto;
        text-align: center;
        font-size: 24px;
        border-bottom: 4px solid #fe9526;
      }
    }
  }
}
</style>
