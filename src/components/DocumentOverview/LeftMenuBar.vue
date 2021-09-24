<template>
  <div class="menu-bar">
    <div class="top">
      <div class="item">
        <svg-icon icon-class="icon_add_doc" />
        <div class="text">{{ $t('fileLibrary.leftMenuBar.top.addFile') }}</div>
      </div>
      <div class="item">
        <svg-icon icon-class="icon_Import" />
        <div class="text">{{ $t('fileLibrary.leftMenuBar.top.importFile') }}</div>
      </div>
    </div>
    <div class="content-view">
      <div class="item my-file-view">
        <div class="title">{{ $t('fileLibrary.leftMenuBar.contentView.myFiles') }}</div>
        <div class="tree">
          <FileDialog />
        </div>
      </div>
      <div class="item date-view">
        <div class="title">{{ $t('fileLibrary.leftMenuBar.contentView.dateFiles') }}</div>
        <div class="tree">
          <TimeSort />
        </div>
      </div>
      <div class="item search-view">
        <div class="title">{{ $t('fileLibrary.leftMenuBar.contentView.searchView') }}</div>
        <div class="tree">
          <SearchView />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FileDialog from './FileDialog'
import TimeSort from './TimeSort'
import SearchView from './SearchView'

export default {
  name: "MenuBar",
  components: {
    FileDialog,
    TimeSort,
    SearchView
  }
}
</script>

<style scoped lang="less">
@import "../../style/index";

.menu-bar {
  width: 100%;
  height: 40px;
  border-bottom: 1px;
  border-bottom: solid 1px @borderColor;

  .content-view {
    padding: 0px 11px 0px 16px;

    > div .title {
      font-family: PingFangSC-Medium;
      font-size: 14px;
      color: #595959;
      line-height: 22px;
      margin-top: 8px;
    }

    .item {
      .tree {
        padding: 8px 0;
      }
    }

    .my-file-view {
      border-bottom: solid 1px @borderColor;
    }

    .date-view {
      border-bottom: solid 1px @borderColor;

    }

    .search-view {
      border-bottom: solid 1px @borderColor;
    }
  }

  .top {
    height: 100%;
    line-height: 40px;
    flex-shrink: 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 12px 16px;

    .item {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-right: 12px;
      border-radius: 2px;

      &:hover {
        .text {
          color: #1FA3F6;
        }

        /deep/ .svg-icon {
          color: #1FA3F6;
        }
      }

      /deep/ .svg-icon {
        font-size: 16px;
        color: #1FA3F6;
      }

      img {
        height: 16px;
        width: 16px;
        margin: 0 6px 0 16px;

      }

      .text {
        line-height: 16px;
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #595959;
      }
    }
  }
}
</style>
