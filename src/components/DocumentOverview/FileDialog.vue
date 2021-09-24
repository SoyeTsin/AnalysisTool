<template>
  <div class="container">
    <TreeComp :tree-data="fileObject" />
  </div>
</template>

<script>
// 在应用中加载node模块
const fs = require('fs');
const osenv = require('osenv');

// 引入 aysnc模块
const async = require('async');
// 引入path模块
const path = require('path');

import TreeComp from "@/components/DocumentOverview/TreeComp";

export default {
  name: 'FileListingPage',
  components: { TreeComp },
  data() {
    return {
      fileList: []
    }
  },
  computed: {
    fileObject() {
      return this.$store.state.fileObject
    }
  },
  mounted() {
    this.main()
  },
  methods: {
    filterFile(files = []) {
      files.forEach((item, index) => {
        if (item.type === 'directory') {
          this.fileList.push({ ...item, id: `0-${index}` })
        }
      })
      this.$store.commit('changeFileObject', { file: this.getUsersHomeFolder(), children: this.fileList, id: '0' })
    },
    displayFiles(err, files) {
      if (err) {
        return alert('sorry, we could not display your files');
      }
      this.filterFile(files)
    },
    main() {
      // 该函数的作用是：获取到用户个人文件夹的路径，并获取到该文件夹下的文件列表信息
      const folderPath = `${this.getUsersHomeFolder()}\\Documents`
      this.getFilesInFolder(folderPath, (err, files) => {
        if (err) {
          console.log('对不起，您没有加载您的home folder');
        }
        console.log(files);

        // files.forEach((file) => {
        //   console.log(`${folderPath}/${file}`);
        // });

        this.inspectAndDescribeFiles(folderPath, files, this.displayFiles);
      });
    },
    getUsersHomeFolder() {
      return osenv.home();
    },
    getFilesInFolder(folderPath, cb) {
      // 使用 fs.readdir 来获取文件列表
      fs.readdir(folderPath, cb);
    },
    inspectAndDescribeFiles(folderPath, files, cb) {
      // 使用 async 模块调用异步函数并收集结果
      async.map(files, (file, asyncCB) => {
        const resolveFilePath = path.resolve(folderPath, file);
        this.inspectAndDescribeFile(resolveFilePath, asyncCB);
      }, cb);
    },
    inspectAndDescribeFile(filePath, cb) {
      const result = {
        file: path.basename(filePath),
        path: filePath,
        type: ''
      };
      fs.stat(filePath, (err, stat) => {
        if (err) {
          cb(err);
        } else {
          if (stat.isFile()) { // 判断是否是文件
            result.type = 'file';
          }
          if (stat.isDirectory()) { // 判断是否是目录
            result.type = 'directory';
          }
          cb(err, result);
        }
      });
    }
  }
}
</script>

<style scoped lang="less">
.container {
  .main-area {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 22px;
    padding: 0 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    cursor: pointer;
    margin-bottom: 2px;
    box-sizing: border-box;
    border: solid 1px #ffffff;

    &.active {
      border: dotted 1px #1fa3f6;
      height: 22px;
    }

    .text {
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #595959;
      line-height: 22px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

}

</style>
