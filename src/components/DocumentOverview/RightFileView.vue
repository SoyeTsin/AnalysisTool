<template>
  <div class="right-file-view">
    <div class="title">
      <div class="checkbox">{{ isImageList(fileContent).length }}{{ $t('fileLibrary.RightFileView.nape') }}</div>
      <div class="path">{{ fileContent.path }}</div>
    </div>
    <div class="content">
      <ImageMiniView v-for="(item,index) in isImageList(fileContent)" :key="index" :image="item" class="image-view" />
    </div>
  </div>
</template>

<script>
import ImageMiniView from "@/components/DocumentOverview/ImageMiniView";

export default {
  name: "RightFileView",
  components: { ImageMiniView },
  computed: {
    fileContent() {
      return this.$store.state.fileContent
    }
  }, methods: {
    isImageList(e) {
      const list = []
      e.fileContent.forEach(item => {
        if (item.isImage) {
          list.push(item)
        }
      })
      return list
    }
  }
}
</script>

<style scoped lang="less">
.right-file-view {
  padding: 16px;

  .title {
    width: 100%;
    height: 32px;
    display: flex;
    justify-content: space-between;
    background: rgba(0, 0, 0, 0.04);
    padding: 0 16px;
    align-items: center;

    .checkbox {
      content: '';
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #8C8C8C;
      line-height: 22px;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      &::before {
        display: block;
        content: ' ';
        width: 14px;
        height: 14px;
        border: solid 1px #8C8C8C;
        margin-right: 8px;
      }
    }

    .path {
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #8C8C8C;
      text-align: right;
      line-height: 22px;
    }
  }

  .content {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;

    .image-view {
      width: 146px;
      height: 146px;
    }
  }
}

</style>
