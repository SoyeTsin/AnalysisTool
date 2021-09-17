<template>
  <div class="catalogue">
    <div class="add-import">
      <div>添加</div>
      <div>导入</div>
    </div>
    <div class="catalogue-content">目录</div>
  </div>
</template>

<script>
/**
 * @author Soye
 * @date 2021/9/16
 * @Description: 左侧文件目录
 */
export default {
  name: "Catalogue"
}
</script>

<style scoped lang="less">
.catalogue {
  min-width: 200px;
  height: 100%;
  background-color: red;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  .add-import {
    width: 100%;
    height: 40px;
  }

  .catalogue-content {
    flex: 1;
  }

}
</style>
