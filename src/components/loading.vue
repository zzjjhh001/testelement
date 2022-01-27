<template>
  <div>
    <div>
      <button v-loading="showLoading" element-loading-text="加载中" @click="fetch" >单个按钮</button>
    </div>
    <div>
      <button>全屏</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showLoading: false
    }
  },
  methods: {
    fetch() {
      this.showLoading = true;
      const _this = this
      setTimeout(() => {
        _this.showLoading = false;
      }, 1000)
    }
  }
}
</script>
<style  lang='scss' scoped>

</style>