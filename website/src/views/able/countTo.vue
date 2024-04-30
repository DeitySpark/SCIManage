<template>
  <el-card class="box-card col-center" shadow="never">
    <div class="box-card-title">数字动画 🍝🍝🍝🍝</div>
    <div class="number-grow-warp">
      <span ref="numberGrow" :data-time="time" class="number-grow" :data-value="number">0</span>
    </div>
  </el-card>
</template>

<script setup>
/* 需求说明：
    1.数字不需要千位符，但是为了防止以后要有 所以加了个参数判断，默认是没有的
    2.数字整数变动
    3.组件改为行内元素，能更好的兼容页面样式
    4.第二次数字变动在上次的数字累加
    5.添加监听器防止页面不更新的情况
*/
import { onMounted, reactive, ref, watch } from "vue";
const time = reactive(6000);
const thousandSign = ref(false);
const number = ref(997052786868686);
const oldValue = ref(6868686);
const numberGrow = ref(null);
const setNumberGrow = (ele) => {
  let value = number.value - oldValue.value;
  let step = (value * 10) / (time * 100);
  let current = 0;
  let start = oldValue.value;
  let t = setInterval(function () {
    start += step;
    if (start > number.value) {
      clearInterval(t);

      start = number.value;
      t = null;
    }
    if (current === start) {
      return;
    }
    current = parseInt(start);
    oldValue.value = current;
    if (thousandSign.value) {
      ele.innerHTML = current.toString().replace(/(\d)(?=(?:\d{3}[+]?)+$)/g, "$1,");
    } else {
      ele.innerHTML = current.toString();
    }
  }, 10);
};

watch(number.value, (newV, oldV) => {
  setNumberGrow(numberGrow.value);
  // gsap.to(this, { duration: 0.5, tweened: Number(n) || 0 });
});

// watch: {
//     number(n) {
//       gsap.to(this, { duration: 0.5, tweened: Number(n) || 0 })
//     }
//   }
onMounted(() => {
  setNumberGrow(numberGrow.value);
});
</script>

<style lang="scss" scoped>
.box-card {
  width: 100%;
  .box-card-title {
    margin-bottom: 20px;
  }
}
.number-grow-warp {
  transform: translateZ(0);
}
</style>
