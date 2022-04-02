import { getShareInfo } from '@/utils/share.js'
import { getUrlKey, okload } from '@/utils/wxLoad.js'
import { getToken, setToken, removeToken } from '@/utils/loading.js'
export default function (router) {
  router.beforeEach((to, from, next) => {
    // const id = getUrlKey('id')
    // const url = '' + window.location.origin + window.location.pathname + id && '?id=' + id
    // setToken(
    //   '8f775ca6645e5512e84bd54f30d417688a8edbece64adf3c10c33b54045178f8d3261ab77b63463740339e181099600d5e872b9b4c2f995ace6e2a974eec55a55726b9ee532fdb4a01e6449788adc7ce'
    // )
    if (getToken()) {
      // console.log(window.location.origin + window.location.pathname + id ? '?id=' + id : '', id, url, getToken())
      if (to.path == '/') {
        let wxConfig = {
          title: '天空之橙·DESIGN',
          url: location.href,
          desc: '聚焦青年时尚，做年轻人喜爱的一切',
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
