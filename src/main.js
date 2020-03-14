import Vue from 'vue'
import App from './App.vue'
import axIos from 'axios'
import global from './global/global'
import { Button, Form, Field } from 'vant'
import 'vant/lib/button/style'
import { Row, Col } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from '../route'

Vue.config.productionTip = false
Vue.prototype.$axios = axIos
Vue.prototype.$global = global

Vue.use(Button)
Vue.use(Form)
Vue.use(Field)
Vue.use(Row)
Vue.use(Col)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
