<template>
    <el-col :span="4" :offset="3" class="g-home-left-col">
        <el-aside class="g-div g-box-shadow" style="width: auto">
            <el-row class="tac">
                <el-col class="g-padding-tb">
                    <div class="g-me">
                        夜慕
                    </div>
                    <div class="g-line"></div>
                    <el-menu :default-active="$route.path" router class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
                        <el-menu-item class="el-menu-item" index="/">
                            <div class="left-side-align">
                                <i class="el-icon-tickets"></i>
                                <span slot="title">技术分享</span>
                            </div>
                        </el-menu-item>
                        <el-menu-item class="el-icon-item" index="/Anecdote">
                            <div class="left-side-align">
                                <i class="el-icon-view"></i>
                                <span slot="title">新鲜趣闻</span>
                            </div>
                        </el-menu-item>
                        <el-menu-item class="el-menu-item" index="/LeaveMessages">
                            <div class="left-side-align">
                                <i class="el-icon-edit-outline"></i>
                                <span slot="title">给我留言</span>
                            </div>
                        </el-menu-item>
                        <el-menu-item class="el-menu-item" index="/wiriteArticles">
                            <div class="left-side-align">
                                <i class="el-icon-share"></i>
                                <span slot="title">分享我的网站</span>
                            </div>
                        </el-menu-item>
                    </el-menu>
                </el-col>
            </el-row>
        </el-aside>
        <el-aside class="g-div g-box-shadow g-margintop-aside" style="width: auto">
            <el-row class="tac">
                <el-col class="g-padding-tb">
                    <div class="g-me">
                        <i class="el-icon-info"></i>
                        <span slot="title">关于我</span>
                    </div>
                    <div class="g-line"></div>
                    <el-menu :default-active="$route.path" router class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
                        <el-menu-item class="el-menu-item " index="/">
                            <div class="left-side-align">
                                <span slot="title">关于</span>
                            </div>
                        </el-menu-item>
                    </el-menu>
                </el-col>
            </el-row>
        </el-aside>
    </el-col>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style>
</style>
