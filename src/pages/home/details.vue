<template>
  <div>
    <el-row style="width: 100%">
        <el-header class="g-div g-header">
            <el-row :gutter="20" class="g-paddingtop-header">
                <el-col :span="5" class="g-paddingtop-header-col"></el-col>
                <el-col :span="6" class="g-paddingtop-header-col g-align-left">
                    <el-breadcrumb separator-class="el-icon-arrow-right">
                      <el-breadcrumb-item class="breadcrumb-font" :to="{ path: '/' }">我的个人首页</el-breadcrumb-item>
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
                      <el-button class="btn-search" type="primary" size="medium" plain>搜索</el-button>
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
        <el-row justify="center" align="middle" class="g-paddingTophalf">
          <transition v-if="articleShow">
            <el-col :span="20" :offset="2" class="g-home-right-col">
                <el-main id="main" class="g-home-main" >
                  <div class="main-title"></div>
                  <div>
                    <div class="article-div g-box-shadow">
                      <vue-markdown v-highlight>{{articleString}}</vue-markdown>
                    </div>
                  </div>
                </el-main>
            </el-col>
          </transition>
        </el-row>
        <el-row>
          <div v-if="articleFooter">
            <el-footer class="g-div g-footer g-box-shadow">
            </el-footer>
          </div>
        </el-row>
    </el-row>
  </div>
</template>

<script>
import VueMarkdown from "vue-markdown";
import UserHeader from "@/components/UserHeader.vue";
import CarouselHeader from "@/components/CarouselHeader.vue";
import "../../../static/less/home.less";
import "../../../static/less/articleList.less";
import "../../../static/less/details.less";

import articleMD from "../../../static/data/markdown/test.md";
const fileRead = require("fs");

export default {
  name: "home",
  data() {
    return {
      // 过渡加载动画
      articleShow: false,
      articleFooter: false,

      articleString: "",
      activeIndex: "1",
      activeIndex2: "1",
      addStr: "",
      inputSearch: "",
    };
  },
  components: {
    UserHeader,
    CarouselHeader,
    VueMarkdown
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    const loadingInstance = this.$loading({
      lock: true,
      text: 'Loading',
      // spinner: 'el-icon-loading',
      background: 'rgba(255, 255, 255, 1)'
    });
    setTimeout(() => {
      this.$axios.get("http://localhost:8080/static/data/articles.json", {}).then((res) => {
        // console.log("axios get data:");
        for(var i=0; i<res.data.results.length; i++) {
          if(this.$route.query.articleId == res.data.results[i].id && res.data.results[i].fileName) {
            this.articleString = require("../../../static/data/markdown/" + res.data.results[i].fileName  + ".md");
          }
        }
        this.$nextTick(() => {
          loadingInstance.close();
          console.log("Dom渲染完毕");
          //渲染完毕
        });
      })
    }, 2000);
    setTimeout(() => {
      this.fadeShow();
    }, 2250);
  },
  methods: {
    fadeShow() {
      this.articleShow = !this.articleShow;
      this.articleFooter = !this.articleFooter;
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
