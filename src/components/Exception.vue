<template>
  <div class="content">
    <h1>{{ $t('message.page_not_found') }}</h1>
    <div class="desc">{{ $t('message.page_not_found_des') }}</div>
    <div class="actions">
      <span @click="clickMethod" />
    </div>
  </div>
</template>

<script>

export default {
  name: 'Exception',
  props: {
    // type: {
    //     type: String,
    //     default: '404'
    // },
    message: {
      type: String,
      default: 'Please contact the administrator, or'
    },
    backUrl: {
      type: String,
      default: ''
    }
  },
  data() {
    return {};
  },
  created() {
    // 创建异常数据之后，保存store信息
    // sessionStorage.setItem('store', JSON.stringify(this.$store.state));
  },
  methods: {
    clickMethod() {
      if (this.message.indexOf('goBack') !== -1) {
        this.$router.back(-1);
      }
      return false;
    },
    handleToHome() {
      // this.$router.push(this.backUrl);
      this.$router.push('/login');
    }
  }
};
</script>
<style lang="less">
// @import "~ant-design-vue/lib/style/index";
.exception {
  display: flex;
  align-items: center;
  height: 80%;
  min-height: 500px;
  width: 100%;
  background-color: rgb(23, 23, 23);

  .imgBlock {
    flex: 0 0 62.5%;
    width: 62.5%;
    padding-right: 152px;
    zoom: 1;

    &::before,
    &::after {
      content: ' ';
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
    background-image: url('../assets/exception/RVRUAYdCGeYNBWoKiIwB.svg');
  }

  .content {
    flex: auto;

    h1 {
      margin-bottom: 24px;
      font-weight: 600;
      font-size: 72px;
      line-height: 72px;
      color: white;
    }

    .desc {
      margin-bottom: 16px;
      font-size: 20px;
      line-height: 28px;
      color: white;
    }

    .actions {
      button:not(:last-child) {
        margin-right: 8px;
      }
    }
  }
}

// @media screen and (max-width: @screen-xl) {
//     .exception {
//         .imgBlock {
//             padding-right: 88px;
//         }
//     }
// }

// @media screen and (max-width: @screen-sm) {
//     .exception {
//         display: block;
//         text-align: center;

//         .imgBlock {
//             margin: 0 auto 24px;
//             padding-right: 0;
//         }
//     }
// }

// @media screen and (max-width: @screen-xs) {
//     .exception {
//         .imgBlock {
//             margin-bottom: -24px;
//             overflow: hidden;
//         }
//     }
// }
</style>
