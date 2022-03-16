import {
  getShareInfo
} from '@/utils/share.js'

export default function(router) {
  router.beforeEach((to, from, next) => {
    let wxConfig = {
      title: '天空之橙',
      url: location.href,
      desc: "聚焦青年时尚，做年轻人喜爱的一切",
      link: 'http://h5.skyoranges.com/skyh5',
      imgUrl: 'http://tccdn.greatorange.cn/SKY/20210816095130/723/logo.png'
    };
    getShareInfo(wxConfig)
    next()
  })

}
