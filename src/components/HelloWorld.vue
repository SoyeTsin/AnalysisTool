<template>
  <div class="hello">
    <div class="box">
      <img :src="base64Data" class="image">
      <canvas
        ref="canvas"
        class="canvas"
        width="640"
        height="512"
        @mousedown.stop="mousedown"
        @mouseup.stop="mouseup"
        @mousemove="mousemove"
      />
    </div>
  </div>
</template>

<script>
import base64Data from '../assets/temper_file/base64'
import jsonData from '../assets/temper_file/temper.json'

export default {
  name: 'HelloWorld',
  data() {
    return {
      base64Data,
      jsonData,
      canvas: null,
      img: new Image(), // 背景图片缓存
      context: {}, // canvas对象,
      flag: false,
      startX: 0, startY: 0,
      endX: 0, endY: 0
    }
  },
  mounted() {
    this.initDraw()
  },
  methods: {
    initDraw() {
      // 初始化画布
      this.canvas = this.$refs.canvas
      this.context = this.canvas.getContext('2d')
    },
    mousedown(e) {
      this.flag = true;
      this.startX = e.offsetX; // 鼠标落下时的X
      this.startY = e.offsetY; // 鼠标落下时的Y
    },
    mouseup() {
      this.flag = false;
      this.img.src = this.canvas.toDataURL(); // 每次 mouseup 都保存一次画布状态
      this.getMark()
    },
    mousemove(e) {
      this.endX = e.offsetX; // 鼠标落下时的X
      this.endY = e.offsetY; // 鼠标落下时的Y
      this.drawRect(e)
    },
    drawRect(e) {
      if (this.flag) {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        // this.loadImage()
        this.context.beginPath();
        this.context.strokeRect(this.startX, this.startY, e.offsetX - this.startX, e.offsetY - this.startY);
      }
    },
    loadImage() {
      this.context.drawImage(this.img, 0, 0, this.canvas.width, this.canvas.height);
      // this.context.strokeRect(20, 20, 150, 100);
    },
    getMark() {
      let startDit = this.startY * 640 + this.startX
      let endDit = this.endY * 640 + this.endX
      const maxNum = [];
      const minNum = [];
      if (startDit > endDit) {
        [startDit, endDit] = [endDit, startDit]
      }
      const arr = []
      if (this.startY > this.endY) {
        [this.startY, this.endY] = [this.endY, this.startY]
      }
      if (this.startX > this.endX) {
        [this.startX, this.endX] = [this.endX, this.startX]
      }
      if (this.startX === this.endX && this.startY === this.endY) {
        return
      }
      for (let i = 0; i <= this.endY - this.startY; i++) {
        for (let j = 0; j <= this.endX - this.startX; j++) {
          const num = (this.startY + i) * 640 + this.startX + j
          if (num > startDit && num < endDit) {
            arr.push({ key: num, value: jsonData[num] })
          }
        }
      }

      arr.sort((a, b) => {
        if (a.value > b.value) {
          return 1
        } else if (a.value < b.value) {
          return -1
        } else {
          return 0
        }
      })

      minNum.push(arr[0])
      arr.forEach(item => {
        if (arr[0].value === item.value) {
          minNum.push(item)
        }
        if (arr[arr.length - 1].value === item.value) {
          maxNum.push(item)
        }
      })
      this.showMark(minNum, maxNum)
    },
    showMark(minNum, maxNum) {
      // 遍历方框的点

      if (this.startY > this.endY) {
        [this.startY, this.endY] = [this.endY, this.startY]
      }
      if (this.startX > this.endX) {
        [this.startX, this.endX] = [this.endX, this.startX]
      }
      const blue = minNum
      const red = maxNum
      // for (let i = 0; i <= this.endY - this.startY; i++) {
      //   for (let j = 0; j <= this.endX - this.startX; j++) {
      //     const num = (this.startY + i) * 640 + this.startX + j
      //     for (const k in minNum) {
      //       if (minNum[k].key * 1 === num) {
      //         blue.push({ x: this.startX + j, y: (this.startY + i), ...minNum[k] })
      //       }
      //     }
      //     for (const p in maxNum) {
      //       if (maxNum[p].key * 1 === num) {
      //         red.push({ x: this.startX + j, y: (this.startY + i), ...maxNum[p] })
      //       }
      //     }
      //   }
      // }

      blue.forEach(item => {
        item.x = item.key % 640
        item.y = (item.key - (item.key % 640)) / 640
        const ctx = this.context
        // 填充三角形（等边）
        ctx.beginPath();
        ctx.moveTo(item.x, item.y); // 从（100,0）开始
        ctx.lineTo(item.x - 5, item.y + 8);// 从(100,0)开始，画到 (0,173)结束
        ctx.lineTo(item.x + 5, item.y + 8); // (0,173)-(200,173)
        ctx.fillStyle = '#00ff00';// 以纯色绿色填充
        ctx.fill(); // 闭合形状并且以填充方式绘制出来
      })
      red.forEach(item => {
        item.x = item.key % 640
        item.y = (item.key - (item.key % 640)) / 640
        const ctx = this.context
        // 填充三角形（等边）
        ctx.beginPath();
        ctx.moveTo(item.x, item.y); // 从（100,0）开始
        ctx.lineTo(item.x - 5, item.y + 8);// 从(100,0)开始，画到 (0,173)结束
        ctx.lineTo(item.x + 5, item.y + 8); // (0,173)-(200,173)
        ctx.fillStyle = '#ff0000';// 以纯色绿色填充
        ctx.fill(); // 闭合形状并且以填充方式绘制出来
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.box {
  position: relative;
  width: 640px;
  height: 512px;

  .image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}

</style>
