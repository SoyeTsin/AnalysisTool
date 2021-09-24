<template>
  <div>
    <div :id="treeData.id" class="main-area" @click="changeActive(treeData.id)">
      <svg-icon v-if="fileActive.indexOf(treeData.id)>=0" icon-class="icon_doc" />
      <svg-icon v-else icon-class="icon_add_doc" />
      <div class="text">
        {{ treeData.file }}
      </div>
    </div>
    <div class="child">
      <TreeComp v-for="item in treeData.children" :key="item.id" :tree-data="item" />
    </div>
  </div>
</template>

<script>
// 在应用中加载node模块
const fs = require('fs');

// 引入 aysnc模块
const async = require('async');
// 引入path模块
const path = require('path');
// 用来判断图片类型
const imageinfo = require('imageinfo');

export default {
  name: "TreeComp",
  props: {
    treeData: {
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      active: [],
      nowId: ''
    }
  },
  computed: {
    fileActive() {
      return this.$store.state.fileActive
    },
    fileObject() {
      return this.$store.state.fileObject
    }
  },
  methods: {
    // 1.获取完整的文件夹路径
    // 2.查找当前文件夹下的所有文件
    // 3.事件：获取当前文件夹名称和层级
    changeActive(id) {
      this.nowId = id
      this.active = []
      this.$store.commit('changeFileActive', [])

      this.getActive(id)
      // 初始化fileActive
      this.active = []
      // 将当前文件夹下的数据传递给总数组
      this.main()
    },
    // 4.传递当前文件夹获得active数组
    getActive(id) {
      // 先缓存当前id
      this.active.push(id)
      const idArr = id.split('-')
      idArr.pop()
      let str = ''
      for (const i in idArr) {
        if (i < (idArr.length - 1)) {
          str += `${idArr[i]}-`
        } else {
          str += idArr[i]
        }
      }
      if (str.indexOf('-') >= 0) {
        this.getActive(str)
      } else {
        // 把最后一个id加入active
        this.active.push(str)
        // 发送结果active
        this.$store.commit('changeFileActive', this.active)
        console.log(this.fileActive)
        // 获取当前文件夹下的目录
        this.main()
      }
    },
    filterFile(files = []) {
      const fileList = []
      const fileContent = []
      files.forEach((item, index) => {
        if (item.type === 'directory') {
          fileList.push({ ...item, id: `${this.treeData.id}-${index}` })
        } else if (item.type === 'file') {
          fileContent.push({ ...item, id: `${this.treeData.id}-${index}` })
        }
      })
      // 将当前目录下所有文件加入状态树
      this.$store.commit('changeFileContent', { path: this.treeData.path, fileContent })
      // 添加当前文件夹列表到状态树中fileObject对应的children下
      this.treeData.children = fileList
      this.$forceUpdate()
    },
    updateFileObject(data) {
      if (data.children) {
        for (let i = 0; i < data.children.length; i++) {
          if (data.id === this.nowId) {
            console.log(">>>>>>>>>>>", data)
          } else {
            console.log()
          }
        }
      }
    },
    displayFiles(err, files) {
      if (err) {
        return alert('sorry, we could not display your files');
      }
      this.filterFile(files)
    },
    main() {
      // 该函数的作用是：获取到用户个人文件夹的路径，并获取到该文件夹下的文件列表信息
      const folderPath = this.treeData.path
      this.getFilesInFolder(folderPath, (err, files) => {
        if (err) {
          console.log('当前文件夹没有文件了');
        }
        console.log(files);

        // files.forEach((file) => {
        //   console.log(`${folderPath}/${file}`);
        // });

        this.inspectAndDescribeFiles(folderPath, files, this.displayFiles);
      });
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
            const info = imageinfo(fs.readFileSync(filePath));
            if (info.mimeType) {
              result.isImage = true;
              // result.fileData = fs.readFileSync(filePath)// 是图片就缓存文件信息
            }
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
.child {
  padding-left: 12px;
}

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
</style>
