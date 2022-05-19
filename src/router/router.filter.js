import { getShareInfo } from '@/utils/share.js'
import { getUrlKey, okload } from '@/utils/wxLoad.js'
import { getToken, setToken, removeToken } from '@/utils/loading.js'
export default function (router) {
  router.beforeEach((to, from, next) => {
    // const id = getUrlKey('id')
    // const url = '' + window.location.origin + window.location.pathname + id && '?id=' + id
    // setToken(
    //   'ac7a60360421e1e7bdceb758e731ae699c11896a390acf7d16ce1879627f2e38bee8b76d194f53b4f8921bb47848028c5e872b9b4c2f995ace6e2a974eec55a55726b9ee532fdb4a01e6449788adc7ce'
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
