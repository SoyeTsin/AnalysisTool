<template>
  <div class="left">
    <div class="left-top">
      <div v-for="(item,index) in menuArray" :key="index">
        <div :class="(item.active?'active':'')+' menu'" :title="item.name">
          <i :class="' icon iconfont left-icon '+item.icon" />
        </div>
      </div>
    </div>
    <div class="left-bottom">
      <div v-for="(item,index) in menuArray" :key="index">
        <div :class="(item.active?'active':'')+' menu'" :title="item.name">
          <i :class="' icon iconfont left-icon '+item.icon" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LeftMenu",
  data() {
    return {
      menuArray: [
        {
          name: 'Pan',
          icon: 'icon-huabi',
          active: false
        }, {
          name: 'Target',
          icon: 'icon-aim',
          active: false
        }, {
          name: 'Square',
          icon: 'icon-zhifangkuang',
          active: true
        }, {
          name: 'Oval',
          icon: 'icon-tuoyuan',
          active: false
        }
      ]
    }
  }
}
</script>

<style scoped lang="less">
.left {
  height: 100%;
  width: 56px;
  background-color: #000000;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;

  .left-top,.left-bottom {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    .menu {
      cursor: pointer;
      width: 32px;
      height: 32px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 12px;
      border-radius: 4px;
      color: #FFFFFF;
    }

    .menu:hover {
      background-color: rgba(31, 163, 246, 0.5);
    }

    .left-icon {
      color: white;
    }

    .menu.active {
      background-color: #1FA3F6;
    }
  }
  .left-bottom{
    .menu{
      margin-bottom: 12px;
    }
  }
}
</style>
