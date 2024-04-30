<template>
  <router-view v-if="isRouterAlive"></router-view>
</template>

<script setup>
import { onMounted, ref, nextTick, provide } from "vue";
import { useStore } from "vuex";
// 局部组件刷新
const isRouterAlive = ref(true);
const globalStore = useStore();
const reload = () => {
  isRouterAlive.value = false;
  nextTick(() => {
    isRouterAlive.value = true;
    console.log("数据刷新成功");
  });
};

provide("reload", reload);
onMounted(() => {
  globalStore.dispatch("user/changeThem", "#4060c7");
});
</script>

<style scoped lang="scss"></style>
