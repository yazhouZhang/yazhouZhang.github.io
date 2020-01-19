<template>
  <div>
    <el-row justify="center">
      <el-col :span="18">
        <div>
          <mavon-editor id="markdown-article-show" class="g-code-back"  :ishljs="true" :subfield="true" :toolbarsFlag="true"
            :defaultOpen="'preview'" :codeStyle="'monokai-sublime'" :boxShadow="true" :editable="true" v-highlight/>
        </div>
      </el-col>
    </el-row>
    
    <el-footer class="g-div g-footer g-box-shadow"></el-footer>
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
