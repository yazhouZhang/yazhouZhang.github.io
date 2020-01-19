<template>
  <div class="layout">
    <div class="bg_icon noselect">
      <img :src="bg_icon" alt="">
    </div>
    <div id="bodyScroll" class="g-main-body">
    <el-row style="width: 100%">
      <el-container>
        <el-header class="g-div g-header">
            <el-row :gutter="20" class="g-paddingtop-header">
                <el-col :span="5" class="g-paddingtop-header-col"></el-col>
                <el-col :span="6" class="g-paddingtop-header-col g-align-left">
                    <el-breadcrumb separator-class="el-icon-arrow-right">
                      <el-breadcrumb-item class="breadcrumb-font" :to="{ path: '/' }">AsiaZhang个人首页</el-breadcrumb-item>
                    </el-breadcrumb>
                </el-col>
                <el-col :span="6">
                    <div class="div-search">
                      <!-- <el-input placeholder="请输入内容" v-model="inputSearch" class="input-with-select">
                        <el-button slot="append" class="btn-search" icon="el-icon-search"></el-button>
                      </el-input> -->
                      <el-input
                        placeholder="请输入内容"
                        v-model="inputSearch">
                        <i slot="prefix" class="el-input__icon el-icon-search"></i>
                      </el-input>
                      <el-button class="btn-search" type="primary" size="medium" plain @click="fadeShow">搜索</el-button>
                    </div>
                </el-col>
                <el-col :span="7"></el-col>
            </el-row>
        </el-header>
        <el-row :gutter="20" class="sub-header-div" type="flex" justify="center">
          <el-col :span="22">
            <!-- <div class="carousel-header-div">
              <carousel-header></carousel-header>
            </div> -->
          </el-col>
        </el-row>
        <el-row :gutter="20" class="g-paddingTophalf">
          <transition name="slide-fade-left">
            <div v-if="articleListShowLeft">
              <user-header></user-header>
            </div>
          </transition>          
          <transition name="slide-fade-right">
            <el-col v-if="articleListShowRight" :span="14" class="g-home-right-col">
              <el-container>
                <el-main ref="mainBody" id="main" class="g-home-main">
                  <div class="main-title">
                    
                  </div>
                  <div>
                    <div class="dividing-line">
                      <div v-for="(article, index) in articleList" :key="index">
                        <el-card class="box-card" v-show="article.isShow" @click.native="seeDetails(index)">
                          <div slot="header" class="clearfix box-card-header">
                              <div>
                                  <span style="float: left;">{{ article.title }}</span>
                              </div>
                              <div>
                                  <span style="float: left;margin-left: 1em">
                                      <el-tag size="small" :type="article.classification">{{ article.classificationName }}</el-tag>
                                  </span>
                              </div>
                              <div>
                                  <el-button class="btn-seeDetails" type="text" @click.native="seeDetails(index)"><i class="el-icon-d-arrow-right"></i> 详情</el-button>
                              </div>
                          </div>
                          <div class="text item card-content" style="display:flex">
                              <div style="padding-top: 2px;padding-right: .5em"><i class="el-icon-document"></i></div>
                              <p class="article-rief-content">{{ article.content }}</p>
                          </div>
                          <div class="card-content">
                            <div class="card-time-line"></div>
                              <div class="card-time">
                                <i class="el-icon-time"></i> {{ article.releaseTime }}
                              </div>
                          </div>
                        </el-card>
                      </div>
                    </div>
                  </div>
                  <div>
                    <!-- <el-pagination
                      class="pagination"
                      background
                      @size-change="handleSizeChange"
                      @current-change="handleCurrentChange"
                      :current-page="currentPage"
                      :page-sizes="pageSize"
                      :page-size="pageSize[0]"
                      layout="total, sizes, prev, pager, next, jumper"
                      :total="9">
                    </el-pagination> -->
                  </div>
                </el-main>
              </el-container>
            </el-col>
          </transition>
        </el-row>
        <el-row>
          <div v-if="articleListShowFooter">
            <el-footer class="g-div g-footer g-box-shadow">
            </el-footer>
          </div>
        </el-row>
      </el-container>
    </el-row>
    </div>
  </div>
</template>

<script>
import UserHeader from "@/components/UserHeader.vue";
import CarouselHeader from "@/components/CarouselHeader.vue";
import "../../../static/less/home.less";
import "../../../static/less/articleList.less";
import { setTimeout } from 'timers';

//静态页面显示
// var date = new Date();
// var seperator1 = "-";
// var seperator2 = ":";
// var month = date.getMonth() + 1;
// var strDate = date.getDate();
// if (month >= 1 && month <= 9) {
//   month = "0" + month;
// }
// if (strDate >= 0 && strDate <= 9) {
//   strDate = "0" + strDate;
// }
// var demoTime =
//   date.getFullYear() +
//   seperator1 +
//   month +
//   seperator1 +
//   strDate +
//   " " +
//   date.getHours() +
//   seperator2 +
//   date.getMinutes() +
//   seperator2 +
//   date.getSeconds();

export default {
  name: "home",
  data() {
    return {
      // 过渡加载动画
      articleListShowLeft: false,
      articleListShowRight: false,
      articleListShowFooter: false,
      bg_icon: require('../../assets/images/common/backgroud.png'),
      activeIndex: "1",
      activeIndex2: "1",
      Str: "我是div",
      addStr: "",
      inputSearch: "",
      //分页
      // currentPage: 2,
      // pageSize: [6, 12],
      // articlePageSize: 6,

      articleList: [],
      articleSizeList: [],

      scrollListenObj: {},
    };
  },
  components: {
    UserHeader,
    CarouselHeader
  },
  computed: {},
  watch: {},
  created() {
  },
  mounted() {
    const loadingInstance = this.$loading({
      lock: true,
      text: 'Loading',
      // spinner: 'el-icon-loading',
      background: 'rgba(255, 255, 255, 0.8)'
    });
    // 滚动时间监听
    document.getElementById("bodyScroll").addEventListener("scroll", this.handleScroll);
    // this.scrollListenObj = this.$refs.mainBody;
    // this.scrollListenObj.addEventListener("scroll", this.handleScroll);
    // loading加载动画
    setTimeout(() => {
      this.$axios.get("http://localhost:8080/static/data/articles.json", {})
      .then(res => {
        this.articleList = res.data.results;
        for(let i=0; i<this.articleList.length; i++) {
          this.$set(this.articleList[i], "isShow" ,true);
        }
        this.$nextTick(() => {
          loadingInstance.close();
          console.log("Dom渲染完毕");
          //渲染完毕
        });
      });
    }, 2000);
    setTimeout(() => {
      this.fadeShow();
    }, 2250);
    // console.log(this.articleList, "articleList");
  },
  methods: {
    seeDetails(index) {
      console.log("details");
      localStorage.setItem(
        "articleContentDetails",
        this.articleList[index].contentDetails
      );
      this.fadeShow();
      setTimeout(() => {
      this.$router.push({
        path: "/details",
        query: {
          articleId: this.articleList[index].id
        }
      });
      }, 1000);
    },
    // handleSizeChange(val) {
    //   this.articlePageSize = val;
    //   console.log(`每页 ${val} 条`);
    //   if(this.articlePageSize<this.articleList.length){
    //       for (var i = 0; i < this.articlePageSize; i++) {
    //         this.articleSizeList[i] = {
    //           title: "",
    //           content: "",
    //           releaseTime: ""
    //         };
    //         this.articleSizeList[i] = this.articleList[i];
    //       }
    //       console.log(this.articleSizeList)
    //     } else {
    //       for (var i = 0; i < this.articleList.length; i++) {
    //         this.articleSizeList[i] = {
    //           title: "",
    //           content: "",
    //           releaseTime: ""
    //         };
    //         this.articleSizeList[i] = this.articleList[i];
    //       }
    //       console.log(this.articleSizeList)
    //     }
    // },
    // handleCurrentChange(val) {
    //   console.log(`当前页: ${val}`);
    // }
    handleScroll(e) {
      // console.log(e);
      // console.log(e.target.scrollTop);
      // console.log(document.getElementById("bodyScroll"))
      // if(e.target.scrollTop<=100) {
      //   this.searchBox.backOpacityVal = e.target.scrollTop/100;
      //   this.searchBox.fontOpacityVal = e.target.scrollTop/100;
      //   this.searchBox.borderRadius = Math.abs(100 - e.target.scrollTop);
      //   this.searchBox.fontColorVal = "#FFFFFF";
      //   // 改变搜索框长度
      //   if(e.target.scrollTop > 84) {
      //     this.searchBox.widthChanged = e.target.scrollTop;
      //   } else {
      //     this.searchBox.widthChanged = 83.5;
      //   }
      //   // 改变搜索框背景透明度
      //   if(this.searchBox.fontOpacityVal < 0.26) {
      //     this.searchBox.fontOpacityVal = 0.26;
      //   }
      //   // 改变搜索框圆角
      //   if(this.searchBox.borderRadius < 4) {
      //     this.searchBox.borderRadius = 4;
      //   }
      // }
    },
    fadeShow() {
      this.articleListShowLeft = !this.articleListShowLeft;
      this.articleListShowRight = !this.articleListShowRight;
      this.articleListShowFooter = !this.articleListShowFooter;
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="less" scoped>
    .bg_icon{
          width: 100%;
          height: 100%;
          pointer-events: none;
          position: absolute;
          align-items: center;
          justify-content:center;
          img{
            width: 100%;
            height: 100%;
          }
        }
  // }
</style>
