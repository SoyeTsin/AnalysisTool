<template>
  <div class="base">
    <top-menu class="top" />
    <div class="content-box">
      <left-menu />
      <div class="right-content">
        <div class="center-box">
          <router-view class="router-content" />
          <right-menu />
        </div>
        <foot class="foot" />
      </div>
    </div>
  </div>
</template>
<script>

import TopMenu from "@/layout/TopMenu";
import LeftMenu from "@/layout/LeftMenu";
import RightMenu from "@/layout/RightMenu";
import Foot from "@/layout/Foot";

export default {
  name: "Base",
  components: { Foot, RightMenu, LeftMenu, TopMenu },
  data() {
    return {};
  },
  mounted() {
  },
  methods: {}
};
</script>
<style lang="less" scoped>
.base {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .top {
    height: 36px;
  }

  .content-box {
    height: 100%;
    flex: 1;
    background-color: #FFFFFF;
    display: flex;
    justify-content: flex-start;

    .right-content {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: flex-start;
      flex-direction: column;

      .center-box {
        flex: 1;
        display: flex;
        justify-content: flex-start;

        .router-content {
          flex: 1;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }

  .foot {
  }
}
</style>
