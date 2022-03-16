<template>
  <div class="AboutContent">
    <div class="header">
      <AboutHeader :textList="aboutList" />
    </div>
    <div class="content">
      <div class="headerImg">
        <van-image fit="cover" :src="getData.cover" class="hImg"></van-image>
      </div>
      <h4 class="title">
        <van-icon name="diamond" size="20px" /> <span class="titleName">{{ getData.title }}</span>
      </h4>
      <div class="contentHtml">
        <div v-html="getData.content"></div>
      </div>
    </div>
  </div>
</template>
<script>
import { getAbout } from '@/api/user'
import AboutHeader from '@/components/AboutHeader'

export default {
  components: {
    AboutHeader
  },
  data() {
    return {
      getData: { cover: '' },
      aboutList: []
    }
  },
  created() {
    this.getContent()
    this.getList()
  },
  methods: {
    getList() {
      this.aboutList = JSON.parse(localStorage.getItem('ABOUTLIST'))
    },
    getContent() {
      const { id } = this.$route.query
      if (id) {
        getAbout({
          id
        }).then(res => {
          console.log(res.data)
          this.getData = res.data[0]
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/mixin.scss';

.content {
  margin-top: 18%;
  height: 100%;
  // background: $contentBackground;
  .headerImg {
    box-shadow: 5px 0px 5px #ccc;
    height: 180px;
    margin: 0 auto;
    overflow: hidden;
    .hImg {
      width: 100%;
      height: 100%;
    }
  }
  .title {
    font-size: 20px;
    text-align: left;
    margin-top: 20px;
    padding: 8px 0;
    background: #fe9526;
    padding-left: 20px;
    .titleName {
      margin-left: 8px;
    }
  }
  .contentHtml {
    overflow: hidden;
    padding: 20px;
    box-sizing: border-box;
    border-bottom: 2px solid #fe9526;
    ::v-deep img {
      width: 100%;
      height: auto;
    }
  }
}
</style>
