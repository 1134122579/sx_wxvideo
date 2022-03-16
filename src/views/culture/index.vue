<template>
  <div class="arr">
    <AboutHeader :textList="AboutList" />

    <div class="Wh">
      <!-- <AboutHeader :titleShow="titleShow" :textList="textList" /> -->
      <div class="contentCulture">
        <!-- <div class="pageTitle">企业文化</div> -->
        <div class="titleLsit">
          <div class="list" v-for="(item, index) in list" :key="item.id">
            <h4 class="list_t">{{ item.title }}</h4>
            <p>{{ item.dec }}</p>
          </div>
        </div>
      </div>
      <!-- 十七条 -->
      <div ref="container">
        <van-sticky :container="container" @scroll="scroll">
          <div class="headerSticky">
            <van-image fit="contain" v-show="!isFixed" class="stickyImage" :src="sickD"></van-image>
            <!-- <transition name="van-slide-down">
              <van-image fit="contain" v-show="!isFixed" class="stickyImage" :src="sickD"></van-image>
            </transition>
            <transition name="van-slide-down">
              <van-image fit="contain" v-show="isFixed" class="stickyImage" :src="sickDs"></van-image>
            </transition> -->
          </div>
        </van-sticky>
        <div class="contentCulture top">
          <div class="titleHeader">天橙十七条</div>
          <div class="titleLsit widthTitle">
            <div class="list" v-for="(item, index) in textList" :key="item.id">
              <a :href="item.link" class="">
                <h4 class="list_t T_noBorder">{{ item.title }}</h4>
                <!-- <div class="newBorder"></div> -->
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AboutHeader from '@/components/AboutHeader'

export default {
  components: {
    AboutHeader
  },
  data() {
    return {
      AboutList: [],

      isFixed: false,
      sickD: require('../../assets/dp.png'),
      sickDs: require('../../assets/dps.png'),
      container: null,
      textList: [
        {
          id: 1,
          title: '没有人能一开始就做好也没有人一直都做不好',
          dec: '',
          link: 'https://mp.weixin.qq.com/s?__biz=MzA4NTA2OTAyNA==&mid=2648908216&idx=1&sn=637f4f7738932d1674f5245322081796&chksm=87ca1c37b0bd952123b851b3278c02b318dbe74865dc606cdcfd5aac8829ee1f664d0c6d5cbe&scene=21#wechat_redirect'
        },
        {
          id: 2,
          title: '燃烧吧，大脑！',
          dec: '',
          link: 'http://mp.weixin.qq.com/s?__biz=MzA4NTA2OTAyNA==&mid=2648908303&idx=1&sn=0e820b5bb7a892508c29e67fb3158f1a&chksm=87ca1f80b0bd96960cc9bd04dfed49e910d16dd11b58319b948f082833ca4fc5857054972b9e&scene=21#wechat_redirect'
        },
        {
          id: 3,
          title: '不做“差不多先生”',
          dec: '',
          link: 'http://mp.weixin.qq.com/s?__biz=MzA4NTA2OTAyNA==&mid=2648908339&idx=1&sn=09b04dafce3b6716157b478e99d3420e&chksm=87ca1fbcb0bd96aa7e7deb7c68abebcc27520019b45c79b970ad853080367e7ff5f5a552a9b9&scene=21#wechat_redirect'
        },
        {
          id: 4,
          title: '打工者的心态正在悄悄毁掉你”',
          dec: '',
          link: 'http://mp.weixin.qq.com/s?__biz=MzA4NTA2OTAyNA==&mid=2648908383&idx=1&sn=4aa8af9963786e99c7d33eb80f7e1401&chksm=87ca1fd0b0bd96c6c2fad3e272e5c37ade48d4974b06d6785f988d705dfd0f8c9eea1bae4950&scene=21#wechat_redirect'
        },
        {
          id: 5,
          title: '与其寻找自己喜欢的工作不如先喜欢已有的工作',
          dec: '',
          link: 'http://mp.weixin.qq.com/s?__biz=MzA4NTA2OTAyNA==&mid=2648908433&idx=1&sn=45212dd3bbafee5c2e7e2cf9163d0722&chksm=87ca1f1eb0bd960835b96b35e8a5154bcd63b6290e19fdc55e2d8c9417f640c936a5d8f39437&scene=21#wechat_redirect'
        },
        {
          id: 6,
          title: '不要以现在的能力束缚对未来的想象',
          dec: '',
          link: 'http://mp.weixin.qq.com/s?__biz=MzA4NTA2OTAyNA==&mid=2648908501&idx=1&sn=a4d5514be4602165c950dc254cd5e1ec&chksm=87ca1f5ab0bd964c53256cfd4bad69d36f3ab617302bb706431aa0cd132caadf0450b5ec482a&scene=21#wechat_redirect'
        },
        {
          id: 7,
          title: '当认为不行了的时候才是工作的开始',
          dec: '',
          link: 'http://mp.weixin.qq.com/s?__biz=MzA4NTA2OTAyNA==&mid=2648908507&idx=1&sn=717f57383723f062af33c8988aa3faf7&chksm=87ca1f54b0bd96427f61bb13e14282de2c18abedd2d8193bee004047cc91a2b0b89b227d7f0f&scene=21#wechat_redirect'
        },
        {
          id: 8,
          title: '牛逼的人生都是连滚带爬的',
          dec: '',
          link: 'http://mp.weixin.qq.com/s?__biz=MzA4NTA2OTAyNA==&mid=2648908617&idx=1&sn=9cf073ff057e138ec64c327ec93c13bd&chksm=87ca1ec6b0bd97d0e026988d0493f8a1d858f5322dea7afe5b3455a6bd2decec13bd67ebdcad&scene=21#wechat_redirect'
        },
        {
          id: 9,
          title: '人要脸，树要皮',
          dec: '',
          link: 'http://mp.weixin.qq.com/s?__biz=MzA4NTA2OTAyNA==&mid=2648908674&idx=1&sn=9d12b5a59ee3cb1a80ecd3f36d70f9e7&chksm=87ca1e0db0bd971bf0226a2fd60f662f41d930968de39c2036499973954d398b8b8757c59dd9&scene=21#wechat_redirect'
        },
        {
          id: 10,
          title: '不做语言的巨人行动的矮子',
          dec: '',
          link: 'http://mp.weixin.qq.com/s?__biz=MzA4NTA2OTAyNA==&mid=2648908696&idx=1&sn=de8aadbfae6006583633c676703b7b57&chksm=87ca1e17b0bd9701019e018ea8b10f6f9532900199c9fd500e8250d9e640b869ffcc63188ba5&scene=21#wechat_redirect'
        },
        {
          id: 11,
          title: '乐观构想，悲观计划，愉快执行',
          dec: '',
          link: 'http://mp.weixin.qq.com/s?__biz=MzA4NTA2OTAyNA==&mid=2648908745&idx=1&sn=9cc888429d9e6ebaf80bff218e7d7600&chksm=87ca1e46b0bd9750b108140dc18312821d1432fa493a54f0171f6732fd692fb22307adf00580&scene=21#wechat_redirect'
        },
        {
          id: 12,
          title: '话更少，做更多，但更好',
          dec: '',
          link: 'http://mp.weixin.qq.com/s?__biz=MzA4NTA2OTAyNA==&mid=2648908854&idx=1&sn=7618a108ffadc9ec21202af33fee64b6&chksm=87ca19b9b0bd90af793bd2a1780c05cc4b7880c471f50d4f1d53edfad54bb8be1916918fd9f4&scene=21#wechat_redirect'
        },
        {
          id: 13,
          title: '打开天窗说亮话',
          dec: '',
          link: 'http://mp.weixin.qq.com/s?__biz=MzA4NTA2OTAyNA==&mid=2648908936&idx=1&sn=6f5dd6909f0f6beefd8821d2bbdb2e41&chksm=87ca1907b0bd9011db3cb390651e0ef85466d3c1789958fe3eaa25470b68a98b74ffff4c97c7&scene=21#wechat_redirect'
        },
        {
          id: 14,
          title: '真正的成熟从告别玻璃心开始',
          dec: '',
          link: 'http://mp.weixin.qq.com/s?__biz=MzA4NTA2OTAyNA==&mid=2648909042&idx=1&sn=61e53939162c0632658b67ce48e81cb0&chksm=87ca197db0bd906b63ab825b6a5993aba8eca2f0d9252bc366e44e1b6f084f30396c580ef5da&scene=21#wechat_redirect'
        },
        {
          id: 15,
          title: '个人能力≠对企业的贡献',
          dec: '',
          link: 'http://mp.weixin.qq.com/s?__biz=MzA4NTA2OTAyNA==&mid=2648909065&idx=1&sn=0925f4ca025c766abe002171e19d0b40&chksm=87ca1886b0bd9190585b212cb262245e80e1d9f9e069804abbe9a0739a3d0207eedd1e83325f&scene=21#wechat_redirect'
        },
        {
          id: 16,
          title: '做自燃型的人勇于在“漩涡中心”工作',
          dec: '',
          link: 'http://mp.weixin.qq.com/s?__biz=MzA4NTA2OTAyNA==&mid=2648909329&idx=1&sn=d06bbe4b7fa1af0366a103b2c439975e&chksm=87ca1b9eb0bd92883e89bfa5b0d82fb35cbda6dd278cc5f5c6e25a27e7ec24e1c238a48bffc5&scene=21#wechat_redirect'
        },
        {
          id: 17,
          title: '最美的风景往往留给少数人',
          dec: '',
          link: 'http://mp.weixin.qq.com/s?__biz=MzA4NTA2OTAyNA==&mid=2648909515&idx=2&sn=31ae1c8dfc396ea9bb817022f16db550&chksm=87ca1b44b0bd9252126b75ec9e89288737c810ddd83a3d4dac4f8c944b015515f096a6fe12fc&scene=21#wechat_redirect'
        }
      ],
      titleShow: false,
      list: [
        {
          id: 1,
          title: '讲贡献',
          dec: '挖掘个人潜能，为公司创造价值'
        },
        {
          id: 2,
          title: '不抱怨',
          dec: '因为热爱，生活和工作都很可爱'
        },
        {
          id: 3,
          title: '抓落实',
          dec: '知行合一 知道，更要做到'
        },
        {
          id: 4,
          title: '加油干',
          dec: '有人还在空想犹豫，有人选择干了在说'
        }
      ]
    }
  },
  methods: {
    scroll(event) {
      console.log(event)
      let { isFixed } = event
      this.isFixed = isFixed
    }
  },
  mounted() {
    this.container = this.$refs.container
  }
}
</script>

<style lang="scss" scoped>
.arr {
  // background: #fff;
  width: 100%;
  height: 100%;
}

.Wh {
  // background: #fff;
  margin-top: 160px;
  width: 100%;
  height: 100%;
  background: #fff url('../../assets/gq.png') no-repeat;
  background-position: center center;
  background-size: contain;
  background-attachment: fixed;
}
.Wh:before {
  content: '';
  position: fixed;
  z-index: -1;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #fff url('../../assets/gq.png') center center no-repeat;
  background-size: contain;
}
.contentCulture {
  // min-height: 100vh;
  padding-bottom: 40px;
  box-sizing: border-box;
  .titleHeader {
    font-size: 40px;
    width: 100%;
    text-align: center;
    color: #fe9526;
  }
  .pageTitle {
    background: #fe9526;
    padding: 20px 0;
    text-align: center;
    color: #fcfcfc;
    font-size: 28px;
    letter-spacing: 10px;
    // text-shadow: 5px 5px 5px #fcfcfc;
  }
  .titleLsit {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 50%;
    margin: 0 auto;

    .list {
      margin-top: 20px;
      text-align: center;
      letter-spacing: 4px;
      width: 100%;
      // background: chartreuse;

      a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
        width: 100%;
        .newBorder {
          // margin-top: 10px;
          // width: 30%;
          // border-bottom: 4px solid #fe9526;
          // color: #fff;
          height: 40px;
          width: 40%;
          background: url('../../assets/jtC.png') no-repeat;
          background-size: 100%;
          background-position: center center;
        }
      }
      .list_t {
        width: 50%;
        text-align: center;
        display: inline-block;
        padding: 5px 10px;
        font-size: 22px;
        // color: #fe9526;
        color: #4d4d4d;
        border-bottom: 5px solid #fe9526;
      }
      .T_noBorder {
        text-indent: 26px;
        width: 100%;
        text-align: left;
        border: none;
        font-size: 18px;
      }

      p {
        margin-top: 10px;
        font-size: 16px;
      }
    }
  }
  .widthTitle {
    width: 80%;
  }
}
.top {
  margin-top: 2.5rem;
}

.headerSticky {
  // background: #fff;
  height: 160px;
  box-sizing: border-box;
  .stickyImage {
    height: 100%;
  }
}
</style>
