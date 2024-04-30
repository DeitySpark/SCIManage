<template>
  <el-icon class="icon-style" id="collapseIcon" @click="changeShrinkage">
    <component :is="!isCollapse ? 'Fold' : 'Expand'"></component>
  </el-icon>
  <el-breadcrumb separator="/" id="breadcrumb">
    <el-breadcrumb-item v-for="(item, index) in breadcrumbList" :key="index">
      <span class="no-redirect" v-if="index === breadcrumbList.length - 1" :style="{ color: themeConfig.footColor }">{{ item.meta.name }}</span>
      <span class="redirect" v-else @click="handleRedirect(item.path)" :style="{ color: themeConfig.footColor }">{{ item.meta.name }}</span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup>
import { watch, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import store from "../../../store";
import { useStore } from "vuex";
const route = useRoute();
const router = useRouter();

const breadcrumbList = ref([]);
const isCollapse = ref(false);
const globalStore = useStore();
const themeConfig = store.getters.themeConfig;
const initBreadcrumbList = () => {
  breadcrumbList.value = route.matched;
  console.log(route.matched);
};
const handleRedirect = (path) => {
  router.push(path);
};

const changeShrinkage = () => {
  isCollapse.value = !store.getters.isCollapse;
  globalStore.dispatch("user/changeIsCollapse", isCollapse.value);
};

watch(
  route,
  () => {
    initBreadcrumbList();
  },
  { deep: true, immediate: true }
);
</script>

<style lang="scss" scoped>
.no-redirect {
  // color: #97a8be;
  cursor: text;
}
.redirect {
  font-weight: 600;
  cursor: pointer;
  &:hover {
    color: #97a8be;
  }
}
.icon-style {
  font-size: 20px;
  cursor: pointer;
  margin-right: 20px;
}
</style>
