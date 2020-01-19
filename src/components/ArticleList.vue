<template>
    <div class="dividing-line">
        <el-card class="box-card" v-for="(article, index) in articleSizeList" :key="index">
            <div slot="header" class="clearfix box-card-header">
                <div>
                    <span style="float: left;">{{ article.title }}</span>
                </div>
                <div>
                    <span style="float: left;margin-left: 1em">
                        <el-tag size="small" type="success">Vue.js</el-tag>
                    </span>
                </div>
                <div>
                    <el-button class="btn-seeDetails" type="text"><i class="el-icon-d-arrow-right"></i> 详情</el-button>
                </div>
            </div>
            <div class="text item card-content" style="display:flex">
                <div style="padding-top: 2px;padding-right: .5em"><i class="el-icon-document"></i></div>
                <p>{{ article.content }}</p>
            </div>
            <div class="card-content">
                <div class="card-time-line"></div>
                <div class="card-time">
                    <i class="el-icon-time"></i> {{ article.releaseTime }}
                </div>
            </div>
        </el-card>
    </div>
</template>

<script>
import "../../static/less/articleList.less";
//静态页面显示
var date = new Date();
var seperator1 = "-";
var seperator2 = ":";
var month = date.getMonth() + 1;
var strDate = date.getDate();
if (month >= 1 && month <= 9) {
  month = "0" + month;
}
if (strDate >= 0 && strDate <= 9) {
  strDate = "0" + strDate;
}
var demoTime =
  date.getFullYear() +
  seperator1 +
  month +
  seperator1 +
  strDate +
  " " +
  date.getHours() +
  seperator2 +
  date.getMinutes() +
  seperator2 +
  date.getSeconds();

export default {
  props: {
    articlePageSize: {
      type: Number,
      default: 6
    }
  },
  data() {
    return {
      articleList: [
        {
          title: "文章标题1",
          content: "文章内容1",
          releaseTime: demoTime
        },
        {
          title: "文章标题2",
          content: "文章内容2",
          releaseTime: demoTime
        },
        {
          title: "文章标题3",
          content: "文章内容3",
          releaseTime: demoTime
        },
        {
          title: "文章标题4",
          content: "文章内容4",
          releaseTime: demoTime
        },
        {
          title: "文章标题5",
          content: "文章内容5",
          releaseTime: demoTime
        },
        {
          title: "文章标题6",
          content: "文章内容6",
          releaseTime: demoTime
        },
        {
          title: "文章标题7",
          content: "文章内容7",
          releaseTime: demoTime
        },
        {
          title: "文章标题8",
          content: "文章内容8",
          releaseTime: demoTime
        },
        {
          title: "文章标题9",
          content: "文章内容9",
          releaseTime: demoTime
        }
      ],
      articleSizeList: []
    };
  },
  created() {
    console.log("articleList:");
    console.log(this.articleList);
    console.log("articlePageSize: " + this.articlePageSize);
    console.log("i");
    for (var i = 0; i < this.articlePageSize; i++) {
      this.articleSizeList[i] = {
        title: "",
        content: "",
        releaseTime: ""
      };
      this.articleSizeList[i] = this.articleList[i];
      console.log(i);
    }
    console.log(this.articleSizeList);
  },
  mounted() {},
  methods: {}
};
</script>

<style>
</style>