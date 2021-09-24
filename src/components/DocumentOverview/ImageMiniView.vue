<template>
  <div class="image-box">
    <img :src="src">
    <div>{{ image.file }}</div>
  </div>
</template>

<script>
// 在应用中加载node模块
const fs = require('fs');

export default {
  name: "ImageMiniView",
  props: {
    image: {
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      src: ''
    }
  },
  created() {
    fs.readFile(this.image.path, (err, data) => {
      if (err) {
        // console.log(err);
      } else {
        // base64图片编码字符串
        this.src = "data:image/jpg;base64," + data.toString('base64')
      }
    })
  }
}
</script>

<style scoped lang="less">
.image-box{
  width: 100%;
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  img{
    width: 100%;
  }
}
</style>
