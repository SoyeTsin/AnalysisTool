<template>
  <div class="top">
    <div class="left">TITLE</div>
    <div class="right">
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
.top {
  -webkit-app-region: drag;
  -webkit-user-select: none;
  height: 36px;
  background-image: linear-gradient(to top, rgb(56, 56, 56), rgb(110, 110, 110));
  width: 100%;
  border-bottom: solid 1px rgb(137, 137, 137);
  line-height: 36px;
  color: white;
  text-indent: 12px;
  font-size: 14px;

  display: flex;
  justify-content: space-between;

  .right {
    -webkit-app-region: no-drag;
    display: flex;
    justify-content: flex-end;

    > div {
      width: 35px;
      text-align: center;
      line-height: 35px;
      height: 35px;
      text-indent: 0;
    }

    > div:active, > div:hover {
      background-color: rgb(50, 50, 50);
    }
  }
}
</style>
