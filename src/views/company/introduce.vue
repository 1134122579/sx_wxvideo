<template>
  <div class="introduce">
    <HeaderTop :name="name" :image="image" />
    <div class="list">
      <div :class="item.id % 2 == 0 ? 'onebox' : 'onebox bg'" v-for="item in list" :key="item.id">
        <h4 class="title">{{ item.title }}</h4>
        <p class="desc">{{ item.desc }}</p>
        <p class="text">{{ item.text }}</p>
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
      name: '企业文化',
      image: 'http://tccdn.greatorange.cn/%E7%AE%80%E4%BB%8B-%E5%A4%A9%E7%A9%BA%E4%B9%8B%E6%A9%99banner.png',
      list: [
        {
          id: 1,
          title: '讲贡献',
          desc: '价值文化',
          text: '挖掘个人潜能，为公司创造价值'
        },
        {
          id: 2,
          title: '不抱怨',
          desc: '开心文化',
          text: '因为热爱，生活和工作都很可爱'
        },
        {
          id: 3,
          title: '抓落实',
          desc: '数据文化',
          text: '知行合一，一一直到，更要做到'
        },
        {
          id: 4,
          title: '加油干',
          desc: '主动性',
          text: '有人还在空想犹豫，有人选择干了再说'
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
  }
}
</style>
