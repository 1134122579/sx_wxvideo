import { getShareInfo } from '@/utils/share.js'
import { getUrlKey, okload } from '@/utils/wxLoad.js'
import { getToken, setToken, removeToken } from '@/utils/loading.js'
export default function (router) {
  router.beforeEach((to, from, next) => {
    // const id = getUrlKey('id')
    // const url = '' + window.location.origin + window.location.pathname + id && '?id=' + id
    // setToken(
    //   'a4ce553db34efe4f291f9f8f84b28f39a55fd5b874abec849afeb3e7d4350e876b9f9eced8c44f7ef3f5eba2836759cf5e872b9b4c2f995ace6e2a974eec55a55726b9ee532fdb4a01e6449788adc7ce'
    // )
    if (getToken()) {
      // console.log(window.location.origin + window.location.pathname + id ? '?id=' + id : '', id, url, getToken())
      if (to.path == '/') {
        let wxConfig = {
          title: '天空之橙·DESIGN',
          url: location.href,
          desc: '聚焦青年时尚，做年轻人喜爱的一切',
          link: location.href,
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
