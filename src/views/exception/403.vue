<template>
  <div class="exception">
    <div class="imgBlock">
      <div class="imgEle" />
    </div>
    <exception type="403" :message="$t('message.page_not_found')" />
  </div>
</template>

<script>
import Exception from '@/components/Exception';

export default {
  name: 'Exception403',
  components: {
    Exception
  },
  computed: {
    message: () => {
      return `<button type="button" class="ant-btn ant-btn-default" ref='goBack'> &nbsp; $t("message.back_btn") &nbsp; </button>`;
    }
  }
};
</script>
<style lang="less">
.exception {
  display: flex;
  align-items: center;
  height: 80%;
  min-height: 500px;
  width: 100%;

  .imgBlock {
    flex: 0 0 62.5%;
    width: 62.5%;
    padding-right: 152px;
    zoom: 1;

    &::before,
    &::after {
      content: ' ';
      display: table;
    }

    &::after {
      clear: both;
      height: 0;
      font-size: 0;
      visibility: hidden;
    }
  }

  .imgEle {
    float: right;
    width: 100%;
    max-width: 430px;
    height: 360px;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: contain;
    background-image: url('../../assets/exception/RVRUAYdCGeYNBWoKiIwB.svg');
  }

  .content {
    flex: auto;

    h1 {
      margin-bottom: 24px;
      font-weight: 600;
      font-size: 72px;
      line-height: 72px;
    }

    .desc {
      margin-bottom: 16px;
      font-size: 20px;
      line-height: 28px;
    }

    .actions {
      button:not(:last-child) {
        margin-right: 8px;
      }
    }
  }
}

</style>

