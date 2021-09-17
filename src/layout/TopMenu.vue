<template>
  <div class="top">
    <div class="top-left">
      <img class="logo" src="../assets/logo.png">
      <div class="text">TITLE TITLE TITLE</div>
    </div>
    <div class="top-right">
      <div @click.stop="windowMin">
        <span class="icon iconfont">&#xe60c;</span>
      </div>
      <div @click.stop="windowMax">
        <span v-if="!ifMax" class="icon iconfont">&#xe665;</span>
        <span v-if="ifMax" class="icon iconfont">&#xe608;</span>
      </div>
      <div @click.stop="windowClose">
        <span class="icon iconfont">&#xe62b;</span>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * @author Soye
 * @date 2021/9/16
 * @Description: 顶部标题栏
 */
export default {
  name: "TopMenu",
  data() {
    return {
      ifMax: false
    }
  },
  mounted() {
    // 监听窗口的最大化操作
    this.$electron.ipcRenderer.on('mainWindowMax', (event) => {
      this.ifMax = true
    });
    this.$electron.ipcRenderer.on('mainWindowUnmax', (event) => {
      this.ifMax = false
    });
  },
  methods: {
    windowMin() {
      this.$electron.ipcRenderer.send('windowMin')
      // this.$electron.ipcRenderer.send('windowMin')
      console.log('windowMin')
    },
    windowMax() {
      this.ifMax = !this.ifMax
      this.$electron.ipcRenderer.send('windowMax');
      console.log('windowMax')
    },
    windowClose() {
      this.$electron.ipcRenderer.send('windowClose');
      console.log('windowClose')
    }
  }
}
</script>

<style scoped lang="less">
@import "../style/index";
.top {
  -webkit-app-region: drag;
  -webkit-user-select: none;
  height: 40px;
  background-color: #FFFFFF;
  width: 100%;
  border-bottom: solid 1px @borderColor;
  line-height: 36px;
  color: white;
  text-indent: 12px;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .top-left {
    height: 24px;
    font-size: 16px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.85);
    line-height: 24px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-left: 12px;

    .logo {
      height: 24px;
      width: 24px;
    }

    .text {
      height: 24px;
      font-size: 16px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: rgba(0, 0, 0, 0.85);
      line-height: 24px;
    }
  }

  .top-right {
    -webkit-app-region: no-drag;
    display: flex;
    justify-content: flex-end;

    > div {
      width: 35px;
      text-align: center;
      line-height: 35px;
      height: 35px;
      text-indent: 0;
      color: #000000;
    }

    > div:active, > div:hover {
      background-color: #e5e5e5;
    }
  }
}
</style>
