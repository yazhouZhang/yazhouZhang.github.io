import Vue from 'vue'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
Vue.use(mavonEditor)

export default {
    directives: {
        highlight(el) {
            let blocks = el.querySelectorAll('pre code');
            blocks.forEach((block) => {
                hljs.highlightBlock(block)
            })
        }
    },
}