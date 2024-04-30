<template>
  <template v-for="subItem in menuList" :key="subItem.path">
    <el-menu-item
      v-if="!subItem.children"
      :index="subItem.url"
      :route="subItem.url"
    >
      <el-icon>
        <component :is="subItem.icon"></component>
      </el-icon>
      <span>{{ subItem.title }}</span>
    </el-menu-item>
    <!--有多级菜单-->
    <el-sub-menu
      v-if="subItem.children"
      :key="subItem.url"
      :index="subItem.url"
    >
      <template #title>
        <el-icon>
          <component :is="subItem.icon"></component>
        </el-icon>
        <span> {{ subItem.title }}</span>
      </template>
      <!--递归组件，把遍历的值传回子组件，完成递归调用-->
      <menu-items :menuList="subItem.children"></menu-items>
    </el-sub-menu>
  </template>
</template>

<script setup>
defineProps(['menuList'])
</script>

<style scoped>
.icons {
  width: 24px;
  height: 18px;
}
</style>
