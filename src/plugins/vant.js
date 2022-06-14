// 按需全局引入 vant组件
import Vue from 'vue'
import {
  Button,
  List,
  Cell,
  Tabbar,
  TabbarItem,
  Image as VanImage,
  NavBar,
  Icon,
  Field,
  Sticky,
  Popup,
  Empty,
  Swipe,
  SwipeItem,
  Lazyload
} from 'vant'
Vue.use(Field)
Vue.use(Button)
Vue.use(Icon)
Vue.use(Popup)
Vue.use(Cell)
Vue.use(VanImage)
Vue.use(List)
Vue.use(Sticky)
Vue.use(Empty)
Vue.use(NavBar)
Vue.use(Tabbar).use(TabbarItem)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Lazyload)
