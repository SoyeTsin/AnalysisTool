<template>
  <div class="container">
    <div class="selecter">
      {{ dictorySelected }}
      <button placeholder="请选择目录" :disabled="true" type="button">

        <button type="primary" @click="showFileDialog()">选择目录</button>
      </button>
    </div>
    <div class="datatable">
      <div>共有 {{ tableData.length }} 条记录</div>
      <!--      <table v-loading="isLoading" element-loading-text="拼命加载中" :data="tableData" style="width: 100%">-->
      <!--        <el-table-column prop="filename" label="文件名" />-->
      <!--        <el-table-column prop="filesize" label="文件大小" fixed="right" width="100" />-->
      <!--      </table>-->
    </div>
  </div>
</template>

<script>
import isElectron from "is-electron";

const { dialog } = require('@electron/remote');
const fs = require('fs')
const path = require('path')

export default {
  name: 'FileListingPage',
  data() {
    return {
      dictorySelected: '',
      isLoading: false,
      tableData: []
    }
  },
  methods: {
    showFileDialog() {
      if (isElectron()) {
        dialog.showOpenDialog({ properties: ['openDirectory'] }, (filename) => {
          if (filename.length === 1) {
            this.dictorySelected = filename[0]
            this.listingFile(this.dictorySelected)
          }
        })
      }
    },
    listingFile(filepath) {
      this.isLoading = true
      if (isElectron()) {
        fs.readdir(filepath, (err, file) => {
          if (err) {
            this.isLoading = false
            return alert(err)
          }
          this.tableData = []
          for (const filename of file) {
            const stat = fs.statSync(path.join(filepath, filename))
            if (stat.isFile()) {
              if (path.extname(filename).toLowerCase() === '.md') {
                this.tableData.push({
                  filename: filename,
                  filesize: stat.size
                })
              }
            }
          }
          this.isLoading = false
        })
      }
    }
  }
}
</script>

<style scoped>
.container {
  padding: 10px;
}

.datatable {
  margin-top: 10px;
}
</style>
