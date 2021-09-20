<template>
  <div class="left">
    <div class="left-top">
      <div v-for="(item,index) in menuArray" :key="index">
        <div :class="(item.active?'active':'')+' menu'" :title="$t(item.name)">
          <svg-icon :icon-class="item.icon" />
        </div>
      </div>
    </div>
    <div class="left-bottom">
      <div v-for="(item,index) in menuBottomArray" :key="index">
        <div :class="(item.active?'active':'')+' menu'" :title="$t(item.name)">
          <svg-icon :icon-class="item.icon" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * @author Soye
 * @date 2021/9/16
 * @Description: 左侧菜单栏
 */
export default {
  name: "LeftMenu",
  data() {
    return {
      menuArray: [
        {
          name: 'fileLibrary.LeftMenu.library',
          icon: 'icon_Library',
          active: true
        }, {
          name: 'fileLibrary.LeftMenu.report',
          icon: 'icon_report2',
          active: false
        }, {
          name: 'fileLibrary.LeftMenu.stencil',
          icon: 'icon_stencil',
          active: false
        }, {
          name: 'fileLibrary.LeftMenu.oval',
          icon: 'icon_full_screen',
          active: false
        }
      ],
      menuBottomArray: [
        {
          name: 'fileLibrary.LeftMenu.options',
          icon: 'icon_options',
          active: false
        }, {
          name: 'fileLibrary.LeftMenu.help',
          icon: 'icon_help',
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
  /deep/ .svg-icon{
    color: black;
  }
  .left-top, .left-bottom {
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
      .svg-icon{
        opacity: 1;
      }
    }

    .left-icon {
      color: white;
    }

    .menu.active {
      background-color: #1FA3F6;
      .svg-icon{
        opacity: 1;
      }
    }
  }

  .left-bottom {
    .menu {
      margin-bottom: 12px;
    }
  }

  .svg-icon {
    font-size: 24px;
    opacity: 0.65;
  }
}
</style>
