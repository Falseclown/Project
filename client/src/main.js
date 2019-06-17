import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import "./static/js/flexble"
import './static/css/common.scss'
import './static/icon/iconfont.css'
import baseui from './utils/baseui'
import { DatePicker} from 'element-ui';
Vue.use(baseui)
Vue.component('Item', () => import('./views/home/item.vue'))
Vue.use(DatePicker)

new Vue({
  el:'#app',
  router,
  store,
  render(createElement){
    return createElement(App)
  }
})
