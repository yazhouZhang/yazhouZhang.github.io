<template>
    <div>
        <div type="primary" 
          v-loading="loading2" 
          v-loading.fullscreen.lock="fullscreenLoading" 
          element-loading-background="white" 
          element-loading-text="Loading"></div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      fullscreenLoading: false,
      loading2: true
    };
  },
  mounted() {
    this.fullscreenLoading = true;
    setTimeout(() => {
      this.fullscreenLoading = false;
    }, 2500);
  },
  methods: {}
};
</script>

<style>
</style>
