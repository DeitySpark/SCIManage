<template>
  <el-icon class="icon-style" @click="dialogVisible = true"><Search /></el-icon>

  <el-dialog v-model="dialogVisible" :show-close="false">
    <template #header>
      <el-input
        v-model="searchValue"
        placeholder="搜索"
        class="input-with-select"
      >
        <template #prepend>
          <el-button :icon="Search" />
        </template>
      </el-input>
    </template>
    <div class="centent col-center">暂无搜索结果🦁🦁🦁🦁</div>
    <template #footer>
      <div class="footer-tip flx-row">
        <span>↩</span> 确认 <span class="ml10">⇅</span>切换
        <span class="ml10" style="font-size: 10px">ESC</span>关闭
      </div>
    </template>
  </el-dialog>
</template>

<script setup>
import { Search, Top, Bottom } from '@element-plus/icons-vue'
import { nextTick, onMounted, ref } from 'vue'
const dialogVisible = ref(false)
const searchValue = ref('')

onMounted(() => {
  nextTick(() => {
    document.addEventListener('keyup', function (e) {
      if (e.keyCode == 27) {
        dialogVisible.value = false
      }
    })
  })
})
</script>

<style lang="scss" scoped>
.input-with-select {
  height: 40px;
}
.footer-tip {
  height: 20px;
  padding: 0;
  font-size: 12px;

  span {
    display: flex;
    width: 20px;
    height: 18px;
    padding-bottom: 2px;
    margin-right: 0.4em;
    background-color: linear-gradient(-225deg, #d5dbe4, #f8f8f8);
    border-radius: 2px;
    box-shadow: inset 0 -2px #cdcde6, inset 0 0 1px 1px #fff,
      0 1px 2px 1px #1e235a66;
    align-items: center;
    justify-content: center;
  }
}
</style>
