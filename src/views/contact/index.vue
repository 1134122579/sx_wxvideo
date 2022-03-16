<template>
  <div class="contact">
    <!-- {{ getData }} -->
    <!-- <AboutHeader :textList="AboutList" /> -->
    <div class="contactPhoneBg">
      <div class="boderB">
        <h4>联系方式</h4>
        <div class="top">
          <p class="lookText">
            <van-icon name="phone-o" color="#fff" />
            <a :href="'tel:' + getData.phone">{{ getData.phone }}</a>
          </p>
          <p class="lookText">
            <van-icon name="service" color="#fff" />
            <a :href="'tel:' + getData.mobile">{{ getData.mobile }}</a>
          </p>
          <p class="lookText">
            <van-icon name="envelop-o" color="#fff" />
            <a :href="'mailto:' + getData.email">{{ getData.email }}</a>
          </p>
          <!-- <p>{{ getData.gzh }}</p> -->
          <p class="lookText"><van-icon name="wechat" color="#fff" />{{ getData.wx }}</p>
        </div>
        <div class="bottom">
          <p v-for="(item, index) in getData.address" :key="index">
            <van-icon name="location-o" color="#fff" />
            <a
              :href="'http://api.map.baidu.com/geocoder?address=' + item + '&output=html&src=webapp.baidu.openAPIdemo'"
            >
              {{ item }}</a
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AboutHeader from '@/components/AboutHeader'

import { aboutUs } from '@/api/user'
export default {
  components: {
    // SwiperList
    AboutHeader
  },
  data() {
    return {
      getData: {
        phone: '',
        AboutList: []
      }
    }
  },
  created() {
    this.getAboutUs()
  },
  methods: {
    // 获取数据
    getAboutUs() {
      aboutUs().then(res => {
        this.getData = res.data
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/index';
.contact {
  overflow: hidden;
  box-sizing: border-box;
  height: 92.5vh;
  background: url('../../assets/phoneBg.png') no-repeat 100% 100%;
  background-size: 100% 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  box-sizing: border-box;
  .contactPhoneBg {
    color: #fff;
    padding: 40px;
    background: rgba(0, 0, 0, 0.4);
    width: 100%;
    height: 100%;
    flex-direction: column;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    .boderB {
      border: 2px solid #fff;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding-bottom: 40px;
      align-items: center;
      h4 {
        font-size: 20px;
        margin-top: -18px;
        background: rgba(5, 64, 118, 1);
        border-radius: 10px;
        letter-spacing: 8px;
        padding: 0 10px;
        color: #fe9526;
      }
      .top {
        width: 100%;
      }
    }
  }
  .van-icon {
    font-size: 20px;
    margin-right: 10px;
  }
  // align-items: center;
  .lookText {
    width: 80%;
    margin-left: 10%;
    margin-top: 40px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  p {
    text-align: right;
    font-size: 18px;
    margin-top: 10px;
    display: flex;
    justify-content: flex-start;
    align-content: center;
    a {
      color: #fff;
      text-decoration: none;
    }
    a:link {
      text-decoration: none;
    }
    a:visited {
      text-decoration: none;
    }
    a:active {
      text-decoration: none;
    }
  }

  .bottom {
    border-top: 3px solid #fff;
    padding-top: 20px;
    margin: 0 20px;
    p {
      text-align: left;
      a {
        font-size: 16px;
        color: #fff;
      }
    }
  }
}
</style>
