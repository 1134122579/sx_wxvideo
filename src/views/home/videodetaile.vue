<template>
  <div class="home">
    <div class="video-list">
      <div class="video-block" @click="dblclick">
        <video-player
          class="video-player vjs-custom-skin"
          ref="videoPlayer"
          webkit-playsinline="true"
          x5-playsinline="true"
          x5-video-orientation="landscape"
          :playsinline="true"
          :options="playerOptions"
          v-show="!videoloading"
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
        <div class="bofang">
          <i class="iconfont icon-bofang bofangicon" v-show="isbofang"></i>
        </div>
      </div>
      <!-- 底部 -->
      <div class="foolter">
        <div class="desc">
          <p>{{ videoinfo.desc }}</p>
        </div>
        <div class="userinfo flexbetween">
          <div class="user-info flexstart" @click="goGZ(videoinfo)">
            <div class="user-img">
              <img src="@/assets/logo.jpg" alt="" />
            </div>
            <div class="user-name">
              <p class="usertitle flexstart">天空之橙<img src="../../assets/rz.png" alt="" /></p>
              <p style="color: #8c8c8c">{{ numman }}个朋友关注</p>
            </div>
          </div>
          <div class="user-button">
            <ul>
              <li @click="setcollect">
                <i class="iconfont icon-shoucang-x" style="color: #fd9632" v-show="videoinfo.is_collect == 1"></i>
                <i class="iconfont icon-shoucang" v-show="videoinfo.is_collect != 1"></i>
                <span>{{ videoinfo.collect_num }}</span>
              </li>
              <li @click="onshare">
                <i class="iconfont icon-fenxiang"></i>
                <!-- <i class="iconfont icon-jurassic_openeyes"></i> -->
                <span>{{ videoinfo.pv_num }}</span>
              </li>
              <li @click="setzan">
                <i
                  class="iconfont icon-like-x like fa-heart"
                  style="color: #e75d58"
                  v-show="videoinfo.is_like == 1"
                ></i>
                <i class="iconfont icon-like like" v-show="videoinfo.is_like != 1"></i>
                <span>{{ videoinfo.like_num }}</span>
              </li>
              <li @click="lookpl">
                <i class="iconfont icon-duihuaqipao"></i>
                <span>{{ videoinfo.pl_num }}</span>
              </li>
            </ul>
          </div>
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
    <!-- 分享提示 -->
    <van-popup
      v-model="isshareShow"
      :close-on-popstate="true"
      position="top"
      :style="{ maxHeight: '100%', background: 'rgba(0,0,0,0)' }"
    >
      <img
        style="width: 100%; box-sizing: border-box; padding: 20px 20px 56px 144px"
        src="@/assets/fx.png"
        alt=""
        @click="
          () => {
            isshareShow = false
          }
        "
      />
    </van-popup>
  </div>
</template>

<script>
import {
  getVideoDetails,
  getVideoList,
  zanVideo,
  comment_video,
  collect_video,
  getVideoComment,
  setVideoPv
} from '@/api/user.js'
import { getShareInfo } from '@/utils/share.js'
import { getUrlKey } from '@/utils/wxLoad.js'
import { formatTime, bigNumberTransform } from '@/utils/index.js'
import { getvideo } from '@/utils/loading'
let clickTime = 0

export default {
  name: 'Home',
  data() {
    return {
      numman: 12,
      listnum: 2,
      is_next: true,
      videoloop: true,
      isshareShow: false,
      listQuery: {
        page: 1
      },
      videoList: [],
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
      isvideoshow: true,
      index: 0,
      videoloading: true,
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
            src: '' // url地址
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
    this.getvideolist(this.$route.query.page || 1)
    this.getVideoDetails(this.$route.query.id)
    this.setVideoPv()
    this.numman = localStorage.getItem('NUM') || 1

    // this.getVideoComment()
  },
  mounted() {
    this.adtouch()
  },
  methods: {
    isIos() {
      let u = navigator.userAgent
      let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1 //android终端
      let isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) //
      if (isIOS) {
        return false
      } else {
        return true
      }
    },
    playsinline() {
      this.$set(this.playerOptions, 'muted', false)
      return this.isIos()
    },
    // 滑动事件
    adtouch() {
      let that = this
      var startx, starty
      //获得角度
      function getAngle(angx, angy) {
        return (Math.atan2(angy, angx) * 180) / Math.PI
      }

      //根据起点终点返回方向 1向上 2向下 3向左 4向右 0未滑动
      function getDirection(startx, starty, endx, endy) {
        var angx = endx - startx
        var angy = endy - starty
        var result = 0

        //如果滑动距离太短
        if (Math.abs(angx) < 2 && Math.abs(angy) < 2) {
          return result
        }

        var angle = getAngle(angx, angy)
        console.log(angle)
        if (angle >= -135 && angle <= -45) {
          result = 1
        } else if (angle > 45 && angle < 135) {
          result = 2
        } else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
          result = 3
        } else if (angle >= -45 && angle <= 45) {
          result = 4
        }

        return result
      }
      //手指接触屏幕
      document.addEventListener(
        'touchstart',
        function (e) {
          startx = e.touches[0].pageX
          starty = e.touches[0].pageY
        },
        false
      )
      //手指离开屏幕
      document.addEventListener(
        'touchend',
        function (e) {
          var endx, endy
          endx = e.changedTouches[0].pageX
          endy = e.changedTouches[0].pageY
          var direction = getDirection(startx, starty, endx, endy)
          switch (direction) {
            case 0:
              // alert('未滑动！')
              break
            case 1:
              that.is_next = true
              console.log(that.$refs, 'that.$refs')
              // that.$refs['vanswipe'].next()
              // that.listnum = 2
              // if (that.index < that.videoList.length - 1) {
              //   that.index += 1
              //   that.videoloop = true
              //   that.getVideoDetails(that.videoList[that.index].id)
              //   that.isvideoshow = !that.isvideoshow
              // } else {
              //   that.listnum = 1
              //   that.videoloop = false
              //   that.$toast('暂无更多')
              // }
              break
            case 2:
              that.is_next = false
              // that.$refs['vanswipe'].prev()
              // alert('向下！')
              break
            case 3:
              // alert('向左！')
              break
            case 4:
              // alert('向右！')
              break
            default:
          }
        },
        false
      )
    },
    dblclick(e) {
      console.log(e)
      if (clickTime === 0) {
        clickTime = new Date().getTime()
      } else {
        if (new Date().getTime() - clickTime < 300) {
          this.createHeart(e)
          this.setzan()
          clickTime = 0
        } else {
          clickTime = new Date().getTime()
          this.paly()
        }
      }
    },
    createHeart(e) {
      const loveMe = document.querySelector('.video-block')
      const heart = document.createElement('i')
      heart.classList.add('fa')
      heart.classList.add('fa-heart')

      const x = e.clientX
      const y = e.clientY
      const xInside = x
      const yInside = y
      // const leftOffset = e.target.offsetLeft
      // const topOffset = e.target.offsetTop

      // const xInside = x - leftOffset
      // const yInside = y - topOffset

      heart.style.top = `${yInside}px`
      heart.style.left = `${xInside}px`

      loveMe.appendChild(heart)

      setTimeout(() => heart.remove(), 1000)
    },
    onshare() {
      this.isshareShow = true
    },
    // 获取视频列表

    async getvideolist(page = 1) {
      this.listQuery['page'] = page
      let res = await getVideoList(this.listQuery)
      console.log(res)
      res = res.data
      if (res.length > 0) {
        let index = res.findIndex(item => item.id == this.$route.query.id)
        res.map(item => {
          item['page'] = this.listQuery.page
          item['like_num'] = bigNumberTransform(item['like_num'])
          item['cover'] = item['video_url'] + '?vframe/jpg/offset/' + (item.zhen_num || 1)
          return item
        })
        this.videoList = res.splice(index)
      } else {
        this.listQuery['page'] = 1
        this.getvideolist()
      }
    },
    onChange(event) {
      let that = this
      // 滑动
      console.log(this.videoList, 'getvideolist')
      console.log('滑动', event, that.is_next)
      that.listnum = 2
      this.isvideoshow = !this.isvideoshow
      if (that.is_next) {
        if (this.index < this.videoList.length - 1) {
          this.index += 1
          console.log('this.getVideoDetails', this.index, this.videoList[this.index])
          this.getVideoDetails(this.videoList[this.index].id)
        } else {
          // that.listnum = 1
          this.listQuery.page++
          this.getvideolist(this.listQuery.page)
          this.index = 0
          this.getVideoDetails(this.videoList[this.index].id)
          // that.videoloop = false
          // that.$toast('暂无更多')
        }
      } else {
        if (that.index <= 0) {
          this.index = this.videoList.length
          this.getVideoDetails(this.videoList[this.index].id)
        } else {
          this.index--
          this.getVideoDetails(this.videoList[this.index].id)
        }
        // if (that.index > 1) {
        //   that.index--
        //   that.videoloop = true
        //   console.log('this.getVideoDetails', this.index, this.videoList[this.index])
        //   that.getVideoDetails(that.videoList[that.index].id)
        // } else {
        //   // that.listnum = 1
        //   that.videoloop = false
        //   that.$toast('到达顶部')
        // }
      }
    },
    setVideoPv() {
      setVideoPv({ video_id: this.$route.query.id }).then(res => {
        // console.log(res)
      })
    },

    lookpl() {
      return
    },

    goGZ() {
      location.href =
        'https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzA4NTA2OTAyNA==&scene=110#wechat_redirect'
      return
      this.$router.replace({
        path: '/'
      })
    },
    // 获取视频评论列表

    getVideoComment() {
      this.loading = true
      getVideoComment({ video_id: this.$route.query.id, page: this.page }).then(res => {
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
      console.log(this.videoinfo, 'setcollect')
      if (is_collect == 1) return
      is_collect = is_collect == 1 ? 2 : 1
      collect_video({ video_id, is_collect }).then(res => {
        if (is_collect == 1) {
          // this.videoinfo.is_collect = 1
          this.$toast('收藏成功')
        } else {
          this.$toast('取消收藏')
        }
        this.getVideoDetails(video_id)
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
        this.getVideoDetails(video_id)
      })
    },
    setcomment() {
      let video_id = videoinfo.id
      this.$toast.loading({
        message: '加载中...',
        forbidClick: true
      })
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
        this.getVideoDetails(videoinfo.id)
      })
    },

    // 获取视频详情
    async getVideoDetails(video_id) {
      const id = getUrlKey('id')
      let res = await getVideoDetails({ video_id })
      let imgUrl = res.data.video_url + '?vframe/jpg/offset/' + (res.data.zhen_num || 1)
      this.videoloading = false
      let wxConfig = {
        title: res.data.share_title ? res.data.share_title : res.data.name,
        url: window.location.href,
        desc: '',
        link:
          window.location.origin + '/wxvideo/searchvideodetaile' + '?id=' + video_id + '&page=' + this.listQuery.page,
        imgUrl: res.data.cover || imgUrl
        // imgUrl: 'http://api.skyorange.cn/logo.jpg'
      }
      getShareInfo(wxConfig)
      // this.$refs.videoPlayer.player.src(res.data.video_url)
      this.$set(this.playerOptions.sources[0], 'src', res.data.video_url)
      this.$set(this.playerOptions, 'poster', res.data.video_url + '?vframe/jpg/offset/' + (res.data.zhen_num || 1))
      console.log(this.playerOptions, 'getVideoDetails')
      document.title = res.data.name
      let object = res.data
      let obj = {}
      for (const key in object) {
        if (Object.hasOwnProperty.call(object, key)) {
          const element = object[key]
          let noarr = ['is_collect', 'is_like', 'is_top', 'id']
          if (!noarr.includes(key)) {
            if (typeof element == 'number') {
              // element = bigNumberTransform(element)
              obj[key] = bigNumberTransform(element)
            } else {
              obj[key] = element
            }
          } else {
            obj[key] = element
          }
        }
      }
      this.videoinfo = obj
      console.log(this.videoinfo, ' this.videoinfo ')
    },
    //  // 重置进度条
    paly() {
      console.log(this.$refs)
      if (this.isbofang) {
        this.$refs['videoPlayer'].player.play() // 播放
      } else {
        this.$refs['videoPlayer'].player.pause() // 暂停
      }
      return
      try {
        if (this.isbofang) {
          this.$refs['videoPlayer'].player.play() // 播放
        } else {
          this.$refs['videoPlayer'].player.pause() // 暂停
        }
      } catch (error) {
        if (this.isbofang) {
          this.$refs['videoPlayer'][0].player.play() // 播放
        } else {
          this.$refs['videoPlayer'][0].player.pause() // 暂停
        }
      }
    },
    pause() {
      this.$refs.videoPlayer.player.pause() // 暂停
    },
    // 播放回调
    onPlayerPlay(player) {
      console.log('player play!', player)
      this.$set(this.playerOptions, 'muted', false)
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
      console.log($event, 'DOM元素上的readyState更改导致播放停止')
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
      // console.log($event)
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
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  // justify-content: center;
  background: #000;
  position: relative;
  .video-list {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    .video-block {
      width: 100%;
      flex: 1;
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      cursor: pointer;

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
      .fa-heart {
        position: absolute;
        animation: grow 0.6s linear;
        transform: translate(-50%, -50%) scale(0);
      }
      .fa-heart {
        color: #e75d58;
      }
      @keyframes grow {
        to {
          transform: translate(-50%, -50%) scale(10);
          opacity: 0;
        }
      }
    }

    .foolter {
      width: 100%;
      font-size: 14px;
      color: #cdcdcd;
      padding: 0 8px 0 18px;
      box-sizing: border-box;
      overflow: hidden;

      .desc {
        width: 100%;
        height: 80px;
        display: flex;
        justify-content: flex-start;
        align-items: flex-end;
        margin-bottom: 6px;
        font-size: 16px;
        p {
          max-height: 58px;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
        }
      }
      .userinfo {
        // padding-top: 0.30667rem;
        font-size: 14px;
        height: 80px;
        // font-weight: 800;
        box-sizing: border-box;
        padding-bottom: constant(safe-area-inset-bottom);
        padding-bottom: env(safe-area-inset-bottom);
        .user-info {
          width: 48%;
          flex-shrink: 0;
          .user-img {
            width: 42px;
            height: 42px;
            border-radius: 50%;
            background: rgb(226, 226, 226);
            margin-right: 10px;
            overflow: hidden;
            img {
              width: 100%;
              height: 100%;
              display: block;
            }
          }
          .user-name {
            font-size: 14px;
          }
          .usertitle {
            // font-weight: 800;
            font-size: 16px;
            font-weight: 600;
            img {
              width: 18px;
              display: block;
              margin-left: 4px;
            }
          }
        }
        .user-button {
          flex: 1;
          height: 100%;
          ul {
            height: 100%;
            display: flex;
            justify-content: space-around;
            align-items: center;
            li {
              font-weight: normal;
              display: flex;
              justify-content: space-evenly;
              align-items: center;
              flex-direction: column;
              // margin-left: 16px;
              box-sizing: border-box;
              padding: 12px 0;
              height: 100%;
              // width: 1.25rem;
              min-height: 77px;
              i {
                padding: 0;
                margin: 0;
                font-size: 26px;
                line-height: 1;
                display: inline-block;
                // height: 26px;
                color: #cdcdcd;
              }
              span {
                padding: 0;
                margin: 0;
                // margin-top: 3px;
                font-size: 14px;
                color: #cdcdcd;
              }
            }
          }
        }
      }
    }
  }
  .van-swipe {
    height: 100%;
    .product_swiper {
      height: 100%;
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
                color: #576b95;

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
