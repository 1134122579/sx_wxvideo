<template>
  <div class="home">
    <video-player
      v-if="isvideoshow"
      class="video-player vjs-custom-skin"
      ref="videoPlayer"
      :playsinline="true"
      :options="playerOptions"
      @play="onPlayerPlay($event)"
      @pause="onPlayerPause($event)"
      @ended="onPlayerEnded($event)"
      @waiting="onPlayerWaiting($event)"
      @playing="onPlayerPlaying($event)"
      @loadeddata="onPlayerLoadeddata($event)"
      @timeupdate="onPlayerTimeupdate($event)"
      @canplay="onPlayerCanplay($event)"
      @canplaythrough="onPlayerCanplaythrough($event)"
      @statechanged="playerStateChanged($event)"
      @ready="playerReadied"
    >
    </video-player>
    <!-- 播放按钮 -->
    <div @click.stop="" class="bofang" @click="paly">
      <i class="iconfont icon-bofang bofangicon" v-show="isbofang"></i>
    </div>
    <!-- 底部 -->
    <div class="foolter">
      <div class="desc">
        {{ videoinfo.name }}
      </div>
      <div class="userinfo flexbetween">
        <div class="user-info flexstart" @click="goGZ">
          <div class="user-img">
            <img src="@/assets/logo.jpg" alt="" />
          </div>
          <div class="user-name">
            <p class="usertitle flexstart">天空之橙·DESIGN <img src="../../assets/rz.png" alt="" /></p>
            <p>10个朋友关注</p>
          </div>
        </div>
        <div class="user-button">
          <ul>
            <li @click="setcollect">
              <i class="iconfont icon-shoucang2" v-show="videoinfo.is_collect == 1"></i>
              <i class="iconfont icon-shoucang" v-show="videoinfo.is_collect != 1"></i>
              <span>{{ videoinfo.collect_num }}</span>
            </li>
            <li>
              <i class="iconfont icon-jurassic_openeyes"></i>
              <span>{{ videoinfo.pv_num }}</span>
            </li>
            <li @click="setzan">
              <i class="iconfont icon-aixin1" v-show="videoinfo.is_like == 1"></i>
              <i class="iconfont icon-aixin" v-show="videoinfo.is_like != 1"></i>
              <span>{{ videoinfo.like_num }}</span>
            </li>
            <li @click="lookpl">
              <i class="iconfont icon-xiaoxi"></i>
              <span>{{ videoinfo.pl_num }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 评论 -->
    <van-popup
      v-model="show"
      :close-on-popstate="true"
      close-icon-position="top-left"
      close-icon="arrow-down"
      closeable
      round
      position="bottom"
      :style="{ height: '70%' }"
    >
      <div class="comment">
        <div class="comment-title">评论列表</div>
        <div class="cmmentlist">
          <van-list
            v-if="comment.length > 0"
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="getVideoComment"
            :immediate-check="false"
          >
            <ul class="list">
              <li class="listblock" v-for="item in comment" :key="item.id">
                <van-image class="headimgurl" round width="50px" height="50px" :src="item.headimgurl" />
                <div class="commentblock">
                  <div class="commentblock-header flexstart">
                    <div class="name">
                      {{ item.nicaname }}
                    </div>
                    <div class="time">
                      {{ item.create_time }}
                    </div>
                  </div>
                  <div class="commentblock-desc">
                    {{ item.content }}
                  </div>
                </div>
              </li>
            </ul>
          </van-list>
          <van-empty v-show="comment.length <= 0" description="暂无评论" />
        </div>
        <div class="comment-floter">
          <van-field v-model="value" center clearable placeholder="发表评论">
            <template #button>
              <van-button size="small" type="primary" @click="setcomment">发送</van-button>
            </template>
          </van-field>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import { getVideoDetails, zanVideo, comment_video, collect_video, getVideoComment, setVideoPv } from '@/api/user.js'
import { getShareInfo } from '@/utils/share.js'
import { getUrlKey } from '@/utils/wxLoad.js'
import { formatTime } from '@/utils/index.js'
export default {
  name: 'Home',
  data() {
    return {
      isvideoshow: false,
      is_collect: false,
      is_like: false,
      isbofang: true,
      list: [],
      loading: false,
      finished: false,
      refreshing: false,
      comment: [],
      value: '',
      show: false,
      page: 1,
      videoinfo: {},
      playerOptions: {
        // playbackRates: [0.5, 1.0, 1.5, 2.0, 3.0], // 可选的播放速度
        autoplay: true, // 如果为 true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 是否视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
          {
            type: 'video/mp4', // 类型
            // src: ''
            src: 'http://mfyfile.greatorange.cn/MFYVideo1611813886594町洋0150无水印中文加S.mp4' // url地址
          }
        ],
        poster: '', // 封面地址
        notSupportedMessage: '此视频暂无法播放，请稍后再试', // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true, // 当前时间和持续时间的分隔符
          durationDisplay: true, // 显示持续时间
          remainingTimeDisplay: true, // 是否显示剩余时间功能
          fullscreenToggle: false // 是否显示全屏按钮
        }
      }
    }
  },
  created() {
    this.getVideoDetails()
    this.setVideoPv()
    this.getVideoComment()
  },
  mounted() {
    // pushHistory()
    // // 监听历史记录点, 添加返回事件监听
    // console.log('onpopstate')
    // window.onpopstate = () => {
    //   // 输入要返回的上一级路由地址
    //   this.$router.replace({ path: '/' })
    // }
  },
  methods: {
    setVideoPv() {
      setVideoPv({ video_id: this.$route.query.id }).then(res => {
        console.log(res)
      })
    },

    lookpl() {
      this.show = true
    },

    // 获取视频评论列表
    goGZ() {
      this.$router.replace({
        path: '/'
      })
    },
    getVideoComment() {
      this.loading = true
      getVideoComment({ video_id: this.$route.query.id, page: this.page }).then(res => {
        console.log(res)
        res = res.data
        if (res.length > 0) {
          res.map(item => {
            item['create_time'] = formatTime(new Date(item['create_time'].replaceAll('-', '/')))
            return item
          })
          if (this.page == 1) {
            this.comment = res
          } else {
            this.comment = this.comment.concat(res)
          }
          console.log(this.comment, 'this.comment')
          this.page++
          this.loading = false
        } else {
          this.finished = true
        }
      })
    },
    // 点赞
    setcollect() {
      let { is_collect, id: video_id } = this.videoinfo
      if (is_collect == 1) return
      is_collect = is_collect == 1 ? 2 : 1
      collect_video({ video_id, is_collect }).then(res => {
        if (is_collect == 1) {
          // this.videoinfo.is_collect = 1
          this.$toast('收藏成功')
        } else {
          this.$toast('取消收藏')
        }
        this.getVideoDetails()
      })
    },
    setzan() {
      let { is_like, id: video_id } = this.videoinfo
      if (is_like == 1) return
      is_like = is_like == 1 ? 2 : 1
      zanVideo({ video_id, is_like }).then(res => {
        if (is_like == 1) {
          // this.videoinfo.is_like = 1
          this.$toast('点赞成功')
        } else {
          this.$toast('取消点赞')
        }
        this.getVideoDetails()
      })
    },
    setcomment() {
      let video_id = this.$route.query.id
      this.$toast.loading({
        message: '加载中...',
        forbidClick: true
      })
      console.log('12121', video_id, this)
      let content = this.value
      if (!content) {
        this.$toast('请输入评论')
        return
      }
      comment_video({
        video_id,
        content
      }).then(res => {
        this.$toast.clear()
        // this.$toast('评论成功')
        this.value = ''
        this.page = 1
        this.finished = false
        this.getVideoComment()
        this.getVideoDetails()
      })
    },

    // 获取视频详情
    async getVideoDetails() {
      const id = getUrlKey('id')
      let res = await getVideoDetails({ video_id: this.$route.query.id })
      // this.$refs.videoPlayer.player.src(res.data.video_url)
      this.playerOptions['sources'][0]['src'] = res.data.video_url
      this.playerOptions['poster'] = res.data.video_url + '?vframe/jpg/offset/' + (res.data.zhen_num || 1)
      this.isvideoshow = true
      console.log(this.playerOptions, 'getVideoDetails')
      document.title = res.data.name
      this.videoinfo = res.data
      let wxConfig = {
        title: res.data.name,
        url: location.href,
        desc: '',
        link: window.location.origin + window.location.pathname + '?id=' + id,
        imgUrl: res.data.video_url + '?vframe/jpg/offset/' + (res.data.zhen_num || 1)
      }
      getShareInfo(wxConfig)
    },

    // this.$refs.videoPlayer.player.pause() // 暂停
    //  // 重置进度条
    paly() {
      console.log(this.isbofang)
      if (this.isbofang) {
        this.$refs.videoPlayer.player.play() // 播放
      } else {
        this.$refs.videoPlayer.player.pause() // 暂停
      }
    },
    pause() {
      this.$refs.videoPlayer.player.pause() // 暂停
    },
    // 播放回调
    onPlayerPlay(player) {
      console.log('player play!', player)
      this.isbofang = false
    },
    // 暂停回调
    onPlayerPause(player) {
      console.log('player pause!', player)
      this.isbofang = true
    },
    // 视频播完回调
    onPlayerEnded($event) {
      console.log($event)
    },
    // DOM元素上的readyState更改导致播放停止
    onPlayerWaiting($event) {
      console.log($event)
    },
    // 已开始播放回调
    onPlayerPlaying($event) {
      console.log($event)
    },
    // 当播放器在当前播放位置下载数据时触发
    onPlayerLoadeddata($event) {
      console.log($event)
    },
    // 当前播放位置发生变化时触发。
    onPlayerTimeupdate($event) {
      console.log($event)
    },
    //媒体的readyState为HAVE_FUTURE_DATA或更高
    onPlayerCanplay(player) {
      // console.log('player Canplay!', player)
    },
    //媒体的readyState为HAVE_ENOUGH_DATA或更高。这意味着可以在不缓冲的情况下播放整个媒体文件。
    onPlayerCanplaythrough(player) {
      // console.log('player Canplaythrough!', player)
    },
    //播放状态改变回调
    playerStateChanged(playerCurrentState) {
      // console.log('player current update state', playerCurrentState)
    },
    //将侦听器绑定到组件的就绪状态。与事件监听器的不同之处在于，如果ready事件已经发生，它将立即触发该函数。。
    playerReadied(player) {
      console.log('example player 1 readied', player)
    }
  }
}
</script>
<style lang="scss" scoped>
::v-deep.home {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #000;
  position: relative;
  .video-player {
    width: 100%;
    .video-js {
      .vjs-control-bar {
        background: rgba(0, 0, 0, 0);
        bottom: -31px;
        // 音量
        .vjs-volume-panel {
          display: none;
        }
        //
        // 时间
        .vjs-current-time,
        .vjs-no-flex .vjs-current-time {
          display: block;
        }
        // 进度
        .vjs-slider {
          background-color: #252525;
        }
      }
      // 播放按钮
      .vjs-big-play-button {
        display: none;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        .vjs-icon-placeholder {
          line-height: 1.5em;
        }
      }
    }
  }
  .foolter {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    font-size: 14px;
    color: #fff;
    padding: 10px 10px;
    box-sizing: border-box;
    // font-weight: 800;
    .desc {
      width: 90%;
    }
    .userinfo {
      .user-img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: #fff;
        margin-right: 10px;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
          display: block;
        }
      }
      .usertitle {
        font-weight: 800;
        img {
          width: 16px;
          display: block;
          margin-left: 4px;
        }
      }
      .user-button {
        ul {
          display: flex;
          justify-content: space-around;
          align-items: center;
          li {
            font-weight: normal;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            margin-left: 16px;
            width: 20px;
            i {
              padding: 0;
              font-size: 24px;
            }
            span {
              padding: 0;
            }
          }
        }
      }
    }
  }

  .comment {
    height: 100%;
    font-weight: 800;
    font-size: 14px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
    .comment-title {
      width: 100%;
      text-align: center;
      height: 50px;
      line-height: 50px;
      flex-shrink: 0;
    }
    .cmmentlist {
      flex: 1;
      width: 100%;
      background: #fafafa;
      overflow: auto;
      .list {
        height: 100%;
        padding: 14px;
        .listblock {
          display: flex;
          justify-content: flex-start;
          padding: 5px 0;
          .headimgurl {
            flex-shrink: 0;
          }
          align-items: flex-start;
          .commentblock {
            padding: 4px 8px;
            border-bottom: 2px solid #f2f2f4;
            padding-bottom: 18px;
            .commentblock-header {
              .name {
                color: #546891;
                margin-right: 14px;
              }
              .time {
                color: #aca8a9;
              }
            }
          }
        }
      }
    }
    .comment-floter {
      width: 100%;
    }
  }
  // .播放
  .bofang {
    position: absolute;
    // top: 50%;
    left: 0;
    // transform: translate(0, 50%);
    width: 100%;
    min-height: 210px;
    // background: wheat;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 5;
    color: #fff;
    .bofangicon {
      font-size: 40px;
    }
  }
}
</style>
