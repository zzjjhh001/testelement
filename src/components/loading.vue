<template>
  <div>
    <div>
      <button @click="fetch" >单个按钮</button>
      <button >单个按钮</button>
    </div>
    <div>
      <button @click="fetch2" >全屏</button>
    </div>
    <div class="container" v-loading.body="showLoading"  element-loading-text="加载中" element-loading-background="rgba(0, 0, 0, 0.8)" ></div>
    <div v-loading.fullScreen="showFullLoading"  element-loading-text="加载中" element-loading-background="rgba(0, 0, 0, 0.8)" ></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showLoading: false,
      showFullLoading: false
    }
  },
  methods: {
    fetch() {
      this.showLoading = true;
      const _this = this
      setTimeout(() => {
        _this.showLoading = false;
      }, 1000)
    },
    fetch2() {
      this.showFullLoading = true;
      const _this = this
      setTimeout(() => {
        _this.showFullLoading = false;
      }, 1000)
    }
  }
}
</script>
<style  lang='scss' scoped>
.container {
  height: 200px;
  background-color: red;
}
</style>