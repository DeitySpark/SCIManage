<template>
  <el-card>
    <div class="card-title">markdown编辑器🍬🍬🍬🍭🍭🍭<span @click="gotoUrl">[文档链接]</span></div>
    <v-md-editor model="text" height="80vh"></v-md-editor>
  </el-card>
</template>
<script setup>
import { ref } from "vue";
const text = ref("");
const gotoUrl = () => {
  window.open("https://ckang1229.gitee.io/vue-markdown-editor/zh/#%E4%BB%8B%E7%BB%8D", "_blank");
};
</script>
<style lang="scss" scoped>
.card-title {
  padding-bottom: 10px;
  font-size: 18px;
  font-weight: bold;
  span {
    color: #673ab7;
    cursor: pointer;
  }
}
</style>
