<template>
  <el-icon id="fullscreen" class="icon-style" @click="handleFullScreen">
    <component :is="icon ? 'Rank' : 'FullScreen'"></component>
  </el-icon>
</template>

<script setup>
import screenfull from 'screenfull'
import { ref, onMounted, onBeforeMount } from 'vue'

import { ElMessage } from 'element-plus'

let icon = ref(screenfull.isFullscreen)
const handleFullScreen = () => {
  if (screenfull.isEnabled) {
    screenfull.toggle()
  }
}

const changeIcon = () => {
  icon.value = screenfull.isFullscreen
}

onMounted(() => {
  screenfull.on('change', changeIcon)
})

onBeforeMount(() => {
  screenfull.off('change')
})
</script>

<style scoped></style>
