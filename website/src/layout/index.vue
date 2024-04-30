<template>
  <el-container class="container">
    <el-aside :style="{ backgroundColor: themeConfig.backgroundColor }"
    >
      <Menu />
    </el-aside>
    <el-container>
      <el-header>
        <Header></Header>
      </el-header>
      <el-main>
        <div class="main-tabs flx-row" v-if="themeConfig.istags">
          <tabs></tabs>
        </div>

        <div class="main-box">
          <router-view :class="{ shake: disabled }"></router-view>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup name="layout">
import {useRouter, onBeforeRouteUpdate} from 'vue-router'
import {ref, watch} from 'vue'
import store from '../store/index.js'
import Header from './header/index.vue'
import Menu from './menu/index.vue'
import tabs from './Tabs/index.vue'

const themeConfig = store.getters.themeConfig
console.log(themeConfig.backgroundColor)

let router = useRouter()
const disabled = ref(false)
// onMounted(() => {
//   disabled.value = true
//   setTimeout(() => {
//     disabled.value = false
//   }, 1500)
// })

watch(
    () => router.currentRoute.value.path,
    (newValue, oldValue) => {
      console.log('watch', newValue)
      console.log('watch', oldValue)
      if (newValue == oldValue) {
      } else {
        disabled.value = true
        setTimeout(() => {
          disabled.value = false
        }, 1000)
      }
    },
    {immediate: true}
)
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
