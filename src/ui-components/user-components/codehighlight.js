import Hljs from 'highlight.js'
import 'highlight.js/styles/vs2015.css'
// 常用配色 gruvbox-dark vs2015 monokai-sublime atom-one-dark androidstudio

let Highlight = {}
Highlight.install = function (Vue, options) {
  Vue.directive('highlight', function (el) {
    let blocks = el.querySelectorAll('pre code');
    blocks.forEach((block) => {
      Hljs.highlightBlock(block)
    })
  })
}
export default Highlight

// highLight官网      https://highlightjs.org/
// highLight配色方案  https://highlightjs.org/static/demo/