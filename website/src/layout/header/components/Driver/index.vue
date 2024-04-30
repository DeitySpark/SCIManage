<template>
  <el-icon @click="handleDriver"><Position /></el-icon>
</template>

<script setup>
import Driver from 'driver.js'
import 'driver.js/dist/driver.min.css'
import { onMounted, ref } from 'vue'
import { steps } from './index.js'

let driver = ref('')

onMounted(() => {
  driver.value = new Driver({
    className: 'scoped-class', //包裹driver.js弹窗的类名 className to wrap driver.js popover
    animate: true, // 高亮元素改变时是否显示动画 Animate while changing highlighted element
    opacity: 0.75, //背景透明度(0 表示只有弹窗并且没有遮罩) Background opacity (0 means only popovers and without overlay)
    padding: 10, //  元素与边缘的距离 Distance of element from around the edges
    allowClose: true, // 是否允许点击遮罩时关闭 Whether clicking on overlay should close or not
    overlayClickNext: false, //是否允许点击遮罩时移到到下一步 Should it move to next step on overlay click
    doneBtnText: '完成', // 最终按钮上的文本 Text on the final button
    closeBtnText: '跳过', // 当前步骤关闭按钮上的文本 Text on the close button for this step
    nextBtnText: '下一步', //当前步骤下一步按钮上的文本 Next button text for this step
    prevBtnText: '上一步',
  })
})
const handleDriver = () => {
  driver.value.defineSteps(steps)
  driver.value.start()
}
</script>

<style lang="scss" scoped></style>
