<template>
  <div class="homepage">
    <div class="header">
      <div class="header-userinfo flexbetween">
        <div class="userinfo flexstart" @click="goGZ">
          <div class="user-img">
            <img src="@/assets/logo.jpg" alt="" />
          </div>
          <div class="info">
            <div class="userinfo-name">{{ title }}</div>
            <div class="userinfo-adress">上海</div>
          </div>
        </div>

        <div class="user-button flexbetween">
          <!-- <div class="button">私信</div> -->
          <div class="button gz" @click="goGZ">关注</div>
        </div>
      </div>
      <div class="header-desc">
        <div class="flexstart desc">
          <!-- <i class="iconfont icon-rz iconlogo rz"></i> -->
          <img src="@/assets/rz.png" class="rz" alt="" />
          空间设计美学自媒体
        </div>
        <div class="flexstart desc">分享全球设计创意&空间美学</div>
        <div class="flexstart desc">Design 设计｜建筑·空间·景观·运营</div>
        <div class="flexstart desc">「设计上海」有趣的灵魂在这里遇见</div>
        <div class="flexstart desc"><i class="iconfont icon-guanzhuchenggong iconlogo"></i>{{ numman }}个朋友关注</div>
        <div class="flexstart desc">
          <a
            style="color: var(--gzh-color)"
            href="https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzA4NTA2OTAyNA==&scene=110#wechat_redirect"
            target="_blank"
          >
            <i class="iconfont icon-geren icongzlogo"></i>公众号：{{ title }}
          </a>
        </div>
      </div>
      <div class="header-label">
        <ul class="flexstart">
          <li>#天空之橙·Design</li>
          <li>#设计</li>
          <li>#空间</li>
          <li>#建筑</li>
          <li>#室内</li>
        </ul>
      </div>
    </div>
    <div class="back">
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="getVideoList">
        <div class="liststyle flexbetween">
          <div class="block" @click="goVideo(item)" v-for="item in list" :key="item.id">
            <!-- {{ item }} -->
            <div class="block-img">
              <van-image width="100%" fit="cover" height="100%" :src="item.cover" />
              <div class="zan-num flexstart">
                <i class="iconfont icon-icon- icon"></i>
                <span>{{ item.like_num }}</span>
                <i class="iconfont icon-zhiding1 iconzd" v-show="item.is_top == 1"></i>
              </div>
            </div>
            <p>{{ item.name }}</p>
          </div>
        </div>
      </van-list>
    </div>
  </div>
</template>
<script>
import { getVideoList, getInfo } from '@/api/user.js'
import { setvideo } from '@/utils/loading'
import { setShareInfo } from '@/utils/share'
import { formatTime, bigNumberTransform } from '@/utils/index.js'
export default {
  data() {
    return {
      title: '天空之橙·DESIGN',
      numman: 0,
      list: [],
      loading: false,
      finished: false,
      pageInfo: '',
      listQuery: {
        page: 1
      }
    }
  },
  created() {
    // this.getVideoList()
    document.title = this.title
    this.getInfo()
  },
  methods: {
    // 获取配置
    getInfo() {
      getInfo().then(res => {
        this.pageInfo = res.data
        this.numman = res.data.gz_num
        localStorage.setItem('NUM', res.data.gz_num)
      })
    },
    goGZ() {
      location.href =
        'https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzA4NTA2OTAyNA==&scene=110#wechat_redirect'
    },
    goVideo(data) {
      // this.$router.replace({
      //   path: '/videodetaile',
      //   query: {
      //     id: data.id
      //   }
      // })
      // return
      this.$router.push({
        path: '/videodetaile',
        query: {
          id: data.id,
          page: data.page
        }
      })
    },
    randomNum(minNum, maxNum) {
      switch (arguments.length) {
        case 1:
          return parseInt(Math.random() * minNum + 1, 10)
          break
        case 2:
          return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10)
          break
        default:
          return 0
          break
      }
    },
    getVideoList() {
      getVideoList(this.listQuery).then(res => {
        console.log(res)
        res = res.data

        if (res.length > 0) {
          res.map(item => {
            item['page'] = this.listQuery.page
            item['like_num'] = bigNumberTransform(item['like_num'])
            item['cover'] = item['cover'] || item['video_url'] + '?vframe/jpg/offset/' + (item.zhen_num || 1)
            return item
          })
          if (this.listQuery.page == 1) {
            this.list = res
          } else {
            this.list = this.list.concat(res)
          }
          setvideo(this.list)
          this.listQuery.page++
          this.loading = false
        } else {
          this.finished = true
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.homepage {
  background: var(--color-scheme-background);
  color: var(--color-scheme-text-color);
  height: 100%;
  line-height: 1;
  font-size: 14px;
  .header {
    padding: 8px 18px;
    box-sizing: border-box;

    .header-userinfo {
      margin-bottom: 14px;
      .userinfo {
        flex: 1;
        .user-img {
          width: 56px;
          height: 56px;
          display: block;
          border-radius: 50%;
          overflow: hidden;
          // background: #ff0000;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .info {
          padding-left: 8px;
          .userinfo-name {
            font-size: 18px;
            font-weight: bold;
            color: var(--color-scheme-title-color);
          }
          .userinfo-adress {
            margin-top: 8px;
            font-size: 16px;
          }
        }
      }

      .user-button {
        flex-shrink: 0;
        .button {
          padding: 7px 14px;
          border-radius: 4px;
          font-weight: 800;
          font-size: 14px;
          margin-left: 8px;
          background: #f6f6f6;
        }
        .gz {
          background: #ff9a2e;
          color: rgb(240, 240, 240);
        }
      }
    }
    .header-desc {
      .rz {
        color: #fdc309;
        width: 16px;
      }
      .iconlogo {
        margin-right: 4px;
        font-size: 18px;
        // font-weight: 600;
      }
      .icongzlogo {
        margin-right: 4px;
        font-size: 16px;
      }
      .desc {
        margin-top: 10px;
        a {
          text-decoration: unset;
        }
      }
    }
    .header-label {
      margin-top: 40px;
      ul {
        flex-wrap: nowrap;
      }
      li {
        white-space: nowrap;
        margin-right: 6px;
        background: var(--color-li-background);
        padding: 4px 6px;
        border-radius: 10px;
        font-size: 13px;
      }
    }
  }
  .back {
    background: var(--color-li-background);
  }
  .liststyle {
    flex-wrap: wrap;
    padding: 8px;
    box-sizing: border-box;
    // background: #ececec;
    .block {
      width: 49.4%;
      margin-bottom: 6px;
      border-radius: 4px;
      overflow: hidden;
      background: var(--color-scheme-background);
      position: relative;

      .block-img {
        height: 200px;
        background: #ff9a2e;
        position: relative;
        .zan-num {
          position: absolute;
          right: 10px;
          z-index: 2;
          bottom: 10px;
          // background: rgba(0, 0, 0, 0.3);
          background: #615b59;
          padding: 0 5px;
          height: 18px;
          font-size: 12px;
          border-radius: 20px;
          color: #fff;
          line-height: 18px;
          .icon {
            font-size: 13px;
            padding: 0;
          }
          span {
            padding: 0;
            margin: 0 3px;
          }
          .iconzd {
            padding: 0;
            font-size: 12px;
            padding-left: 3px;
            border-left: 1px solid rgb(175, 175, 175);
          }
        }
      }
      p {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        padding: 8px 6px;
        box-sizing: border-box;
        color: #333;
        color: var(--color-scheme-title-color);
      }
    }
  }
}
</style>
