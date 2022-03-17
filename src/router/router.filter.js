import { getShareInfo } from '@/utils/share.js'
import { getUrlKey, okload } from '@/utils/wxLoad.js'
import { getToken, setToken, removeToken } from '@/utils/loading.js'
export default function (router) {
  router.beforeEach((to, from, next) => {
    // const id = getUrlKey('id')
    // const url = '' + window.location.origin + window.location.pathname + id && '?id=' + id
    if (getToken()) {
      // console.log(window.location.origin + window.location.pathname + id ? '?id=' + id : '', id, url, getToken())
      let wxConfig = {
        title: '天空之橙',
        url: location.href,
        desc: '聚焦青年时尚，做年轻人喜爱的一切',
        link: location.href,
        imgUrl: 'http://tccdn.greatorange.cn/SKY/20210816095130/723/logo.png'
      }
      getShareInfo(wxConfig)
      next()
    } else {
      okload()
    }
  })
}
