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
        <div class="typeText">
          <p v-for="item in getData.typetext1" class="" :key="item">{{ item }}</p>
        </div>
        <p>{{ getData.text1 }}</p>
      </div>

      <!-- <div class="onebox">
        <span class="text">THE PAPK</span>
        <van-image :src="oneBox.image"></van-image>
        <p>{{ oneBox.name }}</p>

      </div> -->
      <!-- 轮播 -->
      <div class="contentSwiper">
        <Swiper :list="listTop" :autoplay="autoplay" />
      </div>
      <!-- <div class="treebox">
        <van-image class="ImageStyle" :src="twoBox.image"></van-image>
        <p><span></span>{{ twoBox.name }}</p>
      </div> -->
      <!-- 轮播 -->
      <div class="contentSwiper" v-for="item in videoList">
        <div class="textcontent">
          <h3 class="title">{{ item.title }}</h3>
          <p>{{ item.text1 }}</p>
          <p>{{ item.text2 }}</p>
          <p>{{ item.text3 }}</p>
          <p>{{ item.text4 }}</p>
        </div>
        <div class="swipoerStyle">
          <Swiper :list="item.list" :autoplay="autoplay" />
        </div>
      </div>
      <div class="twobox">
        <van-image class="imageStyle" :src="twoBox.image"></van-image>
        <p><span></span>{{ twoBox.name }}</p>
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
        title: '做年轻人喜爱的新农村',
        typetext: ['科技兴农', '文旅融合'],
        typetext1: ['直播助农', '人才互联'],
        text1: '以科技文创助力乡村振兴中的“五大振兴打造年轻人喜爱的新农村',
        text2: '让公园不再只是消食、遛娃的单一场景助推城市公园的改造与升级',
        text3: '对地方经济的转型发展提供有益的产业探索'
      },
      oneBox: {
        name: '每一座公园,都是片区居民的后花是幸福故事的发生地,记录着成长的足迹,藏着无数人的回忆',
        image: 'http://mfyfile.greatorange.cn/type-box-5.png'
      },
      twoBox: {
        name: '建设年轻人喜爱的党建展馆、党史馆、党群活动中心，以数字科技输出内容，以期组织振兴',
        image: 'http://tccdn.greatorange.cn/SKY/20210813133707/673/qw.png'
      },
      list: [
        {
          // name: '视频制作',
          image: 'http://mfyfile.greatorange.cn/type-box-5.png'
        },
        {
          // name: '科技智能',
          image: 'http://mfyfile.greatorange.cn/%E7%A7%91%E6%8A%80%E6%99%BA%E8%83%BD.jpg'
        },
        {
          // name: '专业营销',
          image:
            'http://tccdn.greatorange.cn/%E4%BC%81%E4%B8%9A%E8%B4%A3%E4%BB%BB-%E4%B8%93%E4%B8%9A%E8%90%A5%E9%94%80.png'
        }
      ],
      listTop: [
        {
          // name: '视频制作',
          image: 'http://tccdn.greatorange.cn/SKY/20210816151932/134/图片3.png'
        },
        {
          // name: '科技智能',
          image: 'http://tccdn.greatorange.cn/SKY/20210816152020/613/图片4.png'
        },
        {
          // name: '专业营销',
          image: 'http://tccdn.greatorange.cn/SKY/20210816152044/963/图片5.png'
        },
        {
          // name: '专业营销',
          image: 'http://tccdn.greatorange.cn/SKY/20210816152122/124/图片6.png'
        },
        {
          // name: '专业营销',
          image: 'http://tccdn.greatorange.cn/SKY/20210816152147/862/图片8.png'
        },
        {
          // name: '专业营销',
          image: 'http://tccdn.greatorange.cn/SKY/20210816152212/373/图片10.jpg'
        }
      ],
      videoList: [
        {
          title: '短视频营销中心直播基地',
          text1: '建立短视频营销中心和直播基地',
          text2: '打造集创意设计+包装+销售为一体的A|智能工厂',
          text3: '以内容智造精品',
          text4: '以互联网构助推产业振兴',

          list: [
            {
              image: 'http://tccdn.greatorange.cn/SKY/20210813132129/787/p.jpg'
            },
            {
              image: 'http://mfyfile.greatorange.cn/%E7%A7%91%E6%8A%80%E6%99%BA%E8%83%BD.jpg'
            },
            {
              image:
                'http://tccdn.greatorange.cn/%E4%BC%81%E4%B8%9A%E8%B4%A3%E4%BB%BB-%E4%B8%93%E4%B8%9A%E8%90%A5%E9%94%80.png'
            }
          ]
        },
        {
          title: '文化特色民宿',
          text1: '挖掘本地特色文化VIP',
          text2: '以青年喜爱的方式重新呈现',
          text3: '民宿+绿色',
          text4: '文化引领，生态融合',
          list: [
            {
              image: 'http://tccdn.greatorange.cn/SKY/20210813132441/345/e.png'
            },
            {
              image: 'http://tccdn.greatorange.cn/SKY/20210813132506/928/f.png'
            },
            {
              image: 'http://tccdn.greatorange.cn/SKY/20210813132531/227/h.png'
            },
            {
              image: 'http://tccdn.greatorange.cn/SKY/20210813132617/986/r.png'
            }
          ]
        },
        {
          title: '农创基地',
          text1: '设立农村双创基地',
          text2: '以“赋能大讲堂”“民建中央百城赋能创先中新中心”等品牌内容链接上海以及长三角',
          text3: '聚集更多青年人才回乡发展',
          text4: '助力人才振兴。',
          list: [
            {
              image: 'http://tccdn.greatorange.cn/SKY/20210813132930/142/p.jpg'
            }
          ]
        },
        {
          title: '党建活动中心',
          text1: '建设年轻人喜爱的建展馆、党史馆、党群活动中心',
          text2: '以数字科技输出内容',
          text3: '以期组织振兴。',
          text4: '',
          list: [
            {
              image: 'http://tccdn.greatorange.cn/SKY/20210816151458/11/图片2.jpg'
            }
          ]
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
        .borderT {
          border-top: 3px solid #fe9526;
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
      // border-radius: 20px;
      overflow: hidden;
      .textcontent {
        padding-left: 40px;
        width: 80%;
        .title {
          padding: 10px 0;
          width: 40%;
          font-size: 16px;
          text-align: left;
        }
      }

      .swipoerStyle {
        margin: 20px 10px;
        border-radius: 20px;
        overflow: hidden;
      }
    }
    // 特殊图
    .onebox {
      position: relative;
      padding: 20px;
      margin: 30px 0;
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
      .imageStyle {
        height: 180px;
      }
      .text {
        position: absolute;
        display: block;
        width: 34%;
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
        width: 34%;
        letter-spacing: 2px;
        right: 0;
        top: 0;
        bottom: 8px;
        padding: 40px 20px;
      }
    }
    .treebox {
      position: relative;
      margin: 40px 20px;
      .ImageStyle {
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
        color: #fff;
        background: rgba(0, 0, 0, 0.4);
        width: 50%;
        letter-spacing: 2px;
        left: -10px;
        top: 10px;
        padding: 10px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        span {
          color: #fe9526;
          width: 14px;
          margin-right: 10px;
          display: inline-block;
          border-bottom: #fe9526 3px solid;
        }
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
