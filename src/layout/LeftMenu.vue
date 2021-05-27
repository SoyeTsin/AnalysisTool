<template>
  <div class="left">
    <div v-for="(item,index) in menuArray" :key="index">
      <div :class="(item.active?'active':'')+' menu'" :title="item.name">
        <i :class="' icon iconfont left-icon '+item.icon" />
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
  width: 36px;
  background-color: rgb(50, 50, 50);
  border-right: solid 1px rgb(137, 137, 137);

  .menu {
    cursor: pointer;
    width: 35px;
    height: 35px;
    background-color: rgb(38, 38, 38);
    display: flex;
    justify-content: center;
    align-items: center;

  }
  .menu:hover{
    background-color: rgb(58,58,58);
  }
  .left-icon {
    color: white;
  }
  .menu.active{
    background-color: rgb(80, 80, 80);
  }
}
</style>
