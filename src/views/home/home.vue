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
          设计美学自媒体
        </div>
        <div class="flexstart desc">设计美学自媒体</div>
        <div class="flexstart desc"><i class="iconfont icon-guanzhuchenggong iconlogo"></i>10个朋友关注</div>
        <div class="flexstart desc">
          <a
            style="color: #55648c"
            href="https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzAwNzczOTk3OA==&scene=110#wechat_redirect"
            target="_blank"
          >
            <i class="iconfont icon-geren icongzlogo"></i>公众号：{{ title }}
          </a>
        </div>
      </div>
      <div class="header-label">
        <ul class="flexstart">
          <li>#{{ title }}</li>
          <li>#建筑</li>
          <li>#人文情怀</li>
        </ul>
      </div>
    </div>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="getVideoList">
      <div class="liststyle flexbetween">
        <div class="block" @click="goVideo(item)" v-for="item in list" :key="item.id">
          <!-- {{ item }} -->
          <div class="block-img">
            <van-image width="100%" fit="cover" height="100%" :src="item.cover" />
          </div>
          <p>{{ item.name }}</p>
          <div class="zan-num flexstart">
            <i class="iconfont icon-icon- icon"></i>
            <span>{{ item.like_num }}</span>
            <i class="iconfont icon-zhiding1 iconzd" v-show="item.is_top == 1"></i>
          </div>
        </div>
      </div>
    </van-list>
  </div>
</template>
<script>
import { getVideoList } from '@/api/user.js'
export default {
  data() {
    return {
      title: '天空之橙·DESIGN',
      list: [],
      loading: false,
      finished: false,
      listQuery: {
        page: 1
      }
    }
  },
  created() {
    // this.getVideoList()
    document.title = this.title
  },
  methods: {
    goGZ() {
      location.href =
        'https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzAwNzczOTk3OA==&scene=110#wechat_redirect'
    },
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1)
        }

        // 加载状态结束
        this.loading = false

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true
        }
      }, 1000)
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
          id: data.id
        }
      })
    },
    getVideoList() {
      getVideoList(this.listQuery).then(res => {
        console.log(res)
        res = res.data
        if (res.length > 0) {
          res.map(item => {
            item['cover'] = item['video_url'] + '?vframe/jpg/offset/1'
            return item
          })
          if (this.listQuery.page == 1) {
            this.list = res
          } else {
            this.list = this.list.concat(res)
          }
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
  // background: #fff;
  // color: #7a7a7a;
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
            font-size: 14px;
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
      li {
        margin-right: 8px;
        // background: #f6f6f6;
        background: var(--color-li-background);
        padding: 3px 8px;
        border-radius: 10px;
        font-size: 13px;
      }
    }
  }
  .liststyle {
    flex-wrap: wrap;
    padding: 8px;
    box-sizing: border-box;
    // background: #ececec;
    background: var(--color-li-background);
    .block {
      width: 49.4%;
      margin-bottom: 6px;
      border-radius: 4px;
      overflow: hidden;
      background: var(--color-scheme-background);
      position: relative;

      .block-img {
        height: 180px;
        background: #ff9a2e;
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
      .zan-num {
        position: absolute;
        right: 10px;
        z-index: 2;
        top: 158px;
        // background: rgba(0, 0, 0, 0.3);
        background: #615b59;
        padding: 2px 5px;
        font-size: 12px;
        border-radius: 20px;
        color: #fff;
        line-height: 1;
        .icon {
          font-size: 13px;
        }
        span {
          margin: 0 3px;
        }
        .iconzd {
          font-size: 12px;
          padding-left: 3px;
          border-left: 1px solid rgb(175, 175, 175);
        }
      }
    }
  }
}
</style>
