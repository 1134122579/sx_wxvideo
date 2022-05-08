import { getShareInfo } from '@/utils/share.js'
import { getUrlKey, okload } from '@/utils/wxLoad.js'
import { getToken, setToken, removeToken } from '@/utils/loading.js'
export default function (router) {
  router.beforeEach((to, from, next) => {
    // const id = getUrlKey('id')
    // const url = '' + window.location.origin + window.location.pathname + id && '?id=' + id
    // setToken(
    //   '322ec5e0520845d5c6c6d6dc022646cd8744dc7d551c8bd45a5fd4c6e75ecfcbc2142947572f481627f1c580728044a15e872b9b4c2f995ace6e2a974eec55a55726b9ee532fdb4a01e6449788adc7ce'
    // )
    if (getToken()) {
      // console.log(window.location.origin + window.location.pathname + id ? '?id=' + id : '', id, url, getToken())
      if (to.path == '/') {
        let wxConfig = {
          title: '天空之橙·Design｜建筑·空间·景观·运营「天空之橙·视频号」',
          url: location.href,
          desc: '',
          link: window.location.origin + window.location.pathname,
          // imgUrl: 'http://tccdn.greatorange.cn/SKY/20210816095130/723/logo.png'
          imgUrl: 'http://api.skyorange.cn/logo.jpg'
        }
        getShareInfo(wxConfig)
      }

      next()
    } else {
      okload()
    }
  })
}
