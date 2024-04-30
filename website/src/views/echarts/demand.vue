<template>
  <el-card style="height: 85vh">
    <canvas id="myCanvas" style="width: 100%; height: 442px"></canvas>
  </el-card>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";

let x = reactive("");
let y = reactive("");
let r = reactive("");
let color = reactive("");
let speedX = reactive("");
let speedY = reactive("");

const getCanvas = () => {
  var canvas = document.getElementById("myCanvas");
  canvas.width = document.documentElement.clientWidth;
  canvas.height = document.documentElement.clientHeight;
  var ctx = canvas.getContext("2d");
  //创建小球的构造函数
  function Ball() {
    x = randomNum(3, canvas.width - 3);
    y = randomNum(3, canvas.height - 3);
    r = randomNum(1, 3);
    color = randomColor();
    speedX = randomNum(-3, 3) * 0.2;
    speedY = randomNum(-3, 3) * 0.2;
  }
  Ball.prototype = {
    //绘制小球
    draw: function () {
      ctx.beginPath();
      ctx.globalAlpha = 1;
      ctx.fillStyle = color;
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    },
    //小球移动
    move: function () {
      x += speedX;
      y += speedY;
      //为了合理性,设置极限值
      if (x <= 3 || x > canvas.width - 3) {
        speedX *= -1;
      }
      if (y <= 3 || y >= canvas.height - 3) {
        speedY *= -1;
      }
    },
  };
  //存储所有的小球
  var balls = [];
  //创建200个小球
  for (var i = 0; i < 150; i++) {
    var ball = new Ball();
    balls.push(ball);
  }
  //   main();

  //   function main() {
  //     ctx.clearRect(0, 0, canvas.width, canvas.height);

  //     //使用关键帧动画，不断的绘制和清除
  //     window.requestAnimationFrame(main);
  //   }
  //添加鼠标移动事件
  //记录鼠标移动时的mouseX坐标
  var mouseX;
  var mouseY;
  canvas.onmousemove = function (e) {
    var ev = event || e;
    mouseX = ev.offsetX;
    mouseY = ev.offsetY;
  };

  //随机函数
  function randomNum(m, n) {
    return Math.floor(Math.random() * (n - m + 1) + m);
  }
  //随机颜色
  function randomColor() {
    return "rgb(" + randomNum(0, 255) + "," + randomNum(0, 255) + "," + randomNum(0, 255) + ")";
  }
};

onMounted(() => {
  getCanvas();
  // document.getElementById('main').style.backgroundImage = 'url("' + context.canvas.toDataURL() + '")';
});
</script>
