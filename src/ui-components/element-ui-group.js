import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css'	//引入element-ui
import {
  Container,
  Header,
  Aside,
  Main,
  Footer,
  Button,
  Menu,
  MenuItem,
  MenuItemGroup,
  Submenu,
  Row,
  Col,
  Breadcrumb,
  BreadcrumbItem,
  Loading, 
  Input,
  Carousel,
  CarouselItem,
  Card,
  Tag,
  Pagination
} from 'element-ui'	//引入element-ui

//Vue.use(ElementUI) 全局引入 .babelrc文件是隐藏文件,ctrl+p搜索该文件进行修改
//element-ui按需引入
Vue.use(Button)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Submenu)
Vue.use(Container)
Vue.use(Header)
Vue.use(Main)
Vue.use(Footer)
Vue.use(Aside)
Vue.use(Row)
Vue.use(Col)
Vue.use(MenuItemGroup)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Loading)
Vue.use(Input)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Card)
Vue.use(Tag)
Vue.use(Pagination)