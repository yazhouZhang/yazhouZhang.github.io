// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "./ui-components/element-ui-group"
// import "./ui-components/font-awesome-group"
import "./ui-components/mavonEditorComponent"
import "./ui-components/VueMarkdown.js"
import "./ui-components/auto-textareaComponent"
import "./ui-components/highLight.js"

import axios from 'axios'

Vue.prototype.$axios = axios
Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  components: { App },
  template: '<App/>'
})
