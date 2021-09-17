<template>
  <div class="base">
    <top-menu class="top" />
    <div class="content-box">
      <left-menu />
      <div class="right-content">
        <div class="main-content">
          <DocumentOverview />
        </div>
        <foot class="foot" />
      </div>
    </div>
  </div>
</template>
<script>

import TopMenu from "@/layout/TopMenu";
import LeftMenu from "@/layout/LeftMenu";
import Foot from "@/layout/Foot";
import DocumentOverview from "@/components/DocumentOverview/DocumentOverview"

export default {
  name: "Base",
  components: { Foot, LeftMenu, TopMenu, DocumentOverview },
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

      .main-content {
        display: flex;
        justify-content: space-between;
        flex: 1;
      }
    }
  }

  .foot {
  }
}
</style>
