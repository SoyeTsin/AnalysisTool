<template>
  <div ref="element" class="document-overview">
    <div class="column-left" :style="{height: viewHeight+'px'}">
      <div class="resize-bar" />
      <div class="resize-line" />
      <div class="resize-save">
        <LeftMenuBar />
      </div>
    </div>
    <div class="column-right" :style="{height: viewHeight+'px'}">
      右侧的内容，右侧的内容，右侧的内容，右侧的内容
    </div>
  </div>
</template>

<script>
/**
 * @author Soye
 * @date 2021/9/16
 * @Description: 文件库
 */
import LeftMenuBar from "@/components/DocumentOverview/LeftMenuBar";

export default {
  name: "DocumentOverview",
  components: {
    LeftMenuBar
  }, data() {
    return {
      viewHeight: 0 // 100
    }
  },
  mounted() {
    this.viewHeight = this.$refs.element.offsetHeight
  }
}
</script>

<style scoped lang="less">
@import "../../style/index";

.document-overview {
  width: 100%;
  height: 100%;
  background-color: #FFFFFF;
  padding: 0;

  .column {
    overflow: hidden;
  }

  .column-left {
    height: 900px;
    position: relative;
    float: left;

    &::after {
      display: block;
      content: ' ';
      position: absolute;
      top: 39px;
      right: 0;
      border-top: solid 1px @borderColor;
      width: 15px;
      height: 0;
      z-index: 10;
    }
  }

  .column-right {
    height: 900px;
    padding: 16px;
    box-sizing: border-box;
    overflow: hidden;
  }

  .resize-save {
    position: absolute;
    top: 0;
    right: 5px;
    bottom: 0;
    left: 0;
    overflow-x: hidden;
  }

  .resize-bar {
    min-width: 200px;
    max-width: 500px;
    height: inherit;
    resize: horizontal;
    cursor: ew-resize;
    cursor: col-resize;
    opacity: 0;
    overflow: scroll;
  }

  /* 拖拽线 */

  .resize-line {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    //border-right: 2px solid @borderColor;
    border-left: 1px solid @borderColor;
    pointer-events: none;
  }

  .resize-bar:hover ~ .resize-line,
  .resize-bar:active ~ .resize-line {
    border-left: 1px dashed skyblue;
  }

  .resize-bar::-webkit-scrollbar {
    width: 200px;
    height: inherit;
  }
}
</style>
