import Vue from 'vue'
import 'font-awesome/css/font-awesome.css'
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import solid from '@fortawesome/fontawesome-free-solid'
import regular from '@fortawesome/fontawesome-free-regular'
import brands from '@fortawesome/fontawesome-free-brands'

fontawesome.library.add(solid)
fontawesome.library.add(regular)
fontawesome.library.add(brands)

Vue.component('font-awesome-icon', FontAwesomeIcon)

/* 在下面两种方式中任选一种 */

// 仅引入用到的图标以减小打包体积
// import 'vue-awesome/icons/flag'

// 或者在不关心打包体积时一次引入全部图标
import 'vue-awesome/icons'

/* 任选一种注册组件的方式 */

// import Icon from 'vue-awesome/components/Icon'

// 全局注册（在 `main .js` 文件中）
Vue.component('icon', Icon)

// 或局部注册（在组件文件中）
export default {
  components: {
    Icon
  }
}