<template>
  <div class="city">
    <HeaderTop :name="name" :image="image" />
    <div class="contentCity">
      <!-- 文字 -->
      <div class="contenttext">
        <div class="title">
          {{ getData.title }}
        </div>
        <div class="typeText">
          <p v-for="item in getData.typetext" :key="item">{{ item }}</p>
        </div>
        <p>{{ getData.text1 }}</p>
        <!-- <span>◆</span> -->
        <p>{{ getData.text2 }}</p>
        <!-- <span>◆</span>
        <p>{{ getData.text3 }}</p> -->
      </div>
      <!-- 轮播 -->
      <div class="contentSwiper">
        <!-- <h3 class="title">以内容运营提升公园人气</h3> -->
        <Swiper :list="list" :autoplay="autoplay" />
      </div>

      <div class="onebox">
        <span class="text">THE PAPK</span>
        <van-image class="imagestyle" fit="cover" :src="oneBox.image"></van-image>
        <p>{{ oneBox.name }}</p>
      </div>
      <div class="twobox">
        <van-image class="imagestyle" fit="cover" :src="twoBox.image"></van-image>
        <p>{{ twoBox.name }}</p>
      </div>

      <!-- l列表 -->
      <!-- <div class="contentList">
        <div class="ListBox" v-for="(item, index) in contentList" :key="index">
          <h4><span></span> {{ item.title }}</h4>
          <p>{{ item.text }}</p>
          <van-image class="imgaeStyle" :src="item.image"></van-image>
          <span class="borderB"></span>
        </div>
      </div> -->
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
      image: 'http://tccdn.greatorange.cn/SKY/20210816155614/761/城市名片.png',
      getData: {
        title: '做年轻人喜爱的公园',
        typetext: ['文化赋能', '内容运营'],
        text1: '我们以文化赋能，打造年轻人喜爱的公园，以内容运营提升公园人气',
        text2: '让公园不再只是消食、遛娃的单一场景，助推城市公园的改造与升级',
        text3: '对地方经济的转型发展提供有益的产业探索'
      },
      oneBox: {
        name: '每一座公园,都是片区居民的后花是幸福故事的发生地,记录着成长的足迹,藏着无数人的回忆',
        image: 'http://tccdn.greatorange.cn/SKY/20210813113907/78/k.png'
      },
      twoBox: {
        name: '想让年轻人越来越爱往公园跑,那就要先让公园变得又酷又潮,蹦野迪、吃美食、滑板冲浪攀岩夜跑……只要会耍爱玩脑洞够大,就能让公园拥有更多的新潮新鲜与活力。',
        image: 'http://tccdn.greatorange.cn/SKY/20210813130528/634/m.png'
      },
      list: [
        {
          // name: '视频制作',
          image: 'http://tccdn.greatorange.cn/SKY/20210813130937/98/图片10.jpg'
        },
        {
          // name: '科技智能',
          image: 'http://tccdn.greatorange.cn/SKY/20210813131047/848/图片11.jpg'
        },
        {
          // name: '专业营销',
          image: 'http://tccdn.greatorange.cn/SKY/20210813131104/987/图片12.jpg'
        },
        {
          // name: '专业营销',
          image: 'http://tccdn.greatorange.cn/SKY/20210813131126/396/图片13.jpg'
        },
        {
          // name: '专业营销',
          image: 'http://tccdn.greatorange.cn/SKY/20210813131147/76/图片14.jpg'
        }
      ],
      contentList: [
        {
          title: '营销赋能',
          text: '营销赋能工作台，极大地为提案环节营销赋能，提升提案成交率以及成交价',
          image: 'http://tccdn.greatorange.cn/%E8%90%A5%E9%94%80%E8%B5%8B%E8%83%BD.png'
        },
        {
          title: '交易赋能',
          text: '为行业内的企业/自由人，提供交易撮合管理系统，规范制作与财务全流程，创业更简单，用工更容易',
          image: 'http://tccdn.greatorange.cn/SKY/20210816161734/122/交易赋能.png'
        },
        {
          title: '制作赋能',
          text: '搭建行业内社群资源，为同行业输出强大制作能力，提供创意、制作、后期、转包等',
          image: 'http://tccdn.greatorange.cn/%E5%88%B6%E4%BD%9C%E8%B5%8B%E8%83%BD.png'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.city {
  background: #fff;
  .contentCity {
    // 文字
    .contenttext {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      padding: 0 40px;
      color: #6f6f6f;
      margin: 10px 0;

      .title {
        font-size: 18px;
        margin: 10px 0;
        padding: 0 10px;
        border-bottom: 3px solid #fe9526;
      }
      .typeText {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 60%;
        overflow: hidden;
        margin: 10px 0;
        p {
          flex-shrink: 0;
          text-align: center;
          padding: 0 20px;
          border-left: 1px solid #fe9526;
        }
      }
      span {
        font-size: 28px;
        color: #fe9526;
      }
      p {
        line-height: 28px;
        font-size: 14px;
        text-align: center;
      }
    }
    // 轮播
    .contentSwiper {
      margin: 20px 10px;
      color: #6f6f6f;
      // border-radius: 20px;
      overflow: hidden;
      .title {
        padding: 10px 0;
        font-size: 16px;
        text-align: center;
      }
    }
    // 特殊图
    .onebox {
      position: relative;
      padding: 20px;
      margin: 40px 0;
      .imagestyle {
        width: 100%;
        height: 180px;
      }
      .text {
        position: absolute;
        display: block;
        width: 40%;
        height: 60px;
        left: -10px;
        top: -10px;
        z-index: 2;
        text-align: end;
        padding: 34px 20px 0 0;
        color: #696868;
        font-size: 16px;
        box-sizing: border-box;
        background: rgba(255, 255, 255, 0.8);
      }
      p {
        position: absolute;
        bottom: -20px;
        color: #fff;
        background: rgba(0, 0, 0, 0.4);
        width: 60%;
        right: 10px;
        padding: 20px;
      }
    }
    .twobox {
      position: relative;
      margin: 40px 20px;
      overflow: hidden;
      .imagestyle {
        width: 100%;
        height: 220px;
      }
      .text {
        position: absolute;
        display: block;
        width: 40%;
        height: 60px;
        left: -10px;
        top: -10px;
        z-index: 2;
        text-align: end;
        padding: 34px 20px 0 0;
        color: #696868;
        font-size: 16px;
        box-sizing: border-box;
        background: rgba(255, 255, 255, 0.8);
      }
      p {
        position: absolute;
        color: #fff;
        background: rgba(0, 0, 0, 0.4);
        width: 40%;
        letter-spacing: 2px;
        left: 0;
        top: 0;
        bottom: 10px;
        padding: 40px 20px;
      }
    }
    // 列表
    .contentList {
      color: #6f6f6f;
      .ListBox {
        h4 {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          margin: 10px;
          font-size: 20px;
          span {
            display: inline-block;
            width: 40px;
            border-bottom: 1px solid #fe9526;
            margin-right: 10px;
          }
        }
        p {
          font-size: 14px;
          margin: 10px 40px;
        }
        .imgaeStyle {
          margin: 0 10px;
          border-radius: 20px;
          overflow: hidden;
          height: 180px;
        }
      }
    }
  }
}
</style>
