<template>
  <div>
    <!-- loading加载动画 -->
    <div type="primary" v-loading="loading2" v-loading.fullscreen.lock="fullscreenLoading" element-loading-background="white" element-loading-text="Loading"></div>
    <el-row style="width: 100%">
      <el-container>
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
        <!-- <el-row :gutter="20" class="sub-header-div" type="flex" justify="center">
          <el-col :span="22">
            
          </el-col>
        </el-row> -->
        <el-row :gutter="20" class="sub-header-div">
          <user-header></user-header>
          <el-col :span="14" class="g-home-right-col">
            <el-container class="g-box-shadow">
              <el-header style="min-height: 14em;">
                <div class="carousel-header-div">
                  <carousel-header></carousel-header>
                </div>
              </el-header>
              <el-main id="main" class="g-div g-home-main" >
                
              </el-main>
            </el-container>
          </el-col>
        </el-row>
        <el-row>
          <el-footer class="g-div g-footer g-box-shadow">
            
          </el-footer>
        </el-row>
      </el-container>
    </el-row>
  </div>
</template>

<script>
import UserHeader from "@/components/UserHeader.vue";
import CarouselHeader from "@/components/CarouselHeader.vue";
export default {
  name: "home",
  data() {
    return {
      // loading加载动画
      fullscreenLoading: false,
      loading2: true,

      activeIndex: "1",
      activeIndex2: "1",
      Str: "我是div",
      addStr: "",
      inputSearch: ""
    };
  },
  components: {
    UserHeader,
    CarouselHeader
  },
  mounted() {
    // loading加载动画
    this.fullscreenLoading = true;
    setTimeout(() => {
      this.fullscreenLoading = false;
    }, 2500);
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
