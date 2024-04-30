<template>
  <el-icon @click="openDrawer" class="icon-style"><Setting /></el-icon>
  <el-drawer v-model="drawerVisible" title="布局设置" size="300px">
    <el-divider>主题颜色</el-divider>
    <div class="flx-row">
      <div
        class="theme-item"
        v-for="item in colorList"
        :key="item"
        :style="{ backgroundColor: item }"
        @click="changePrimary(item)"
      >
        <el-icon v-if="item == themeConfig.primary" class="icon"
          ><Select
        /></el-icon>
      </div>
    </div>
    <el-divider>导航栏颜色</el-divider>
    <div class="flx-row">
      <div
        class="theme-item"
        v-for="item in tabColorList"
        :key="item"
        :style="{ backgroundColor: item }"
        @click="changeTabCole(item)"
      >
        <el-icon v-if="item == themeConfig.tabColor" class="icon"
          ><Select
        /></el-icon>
      </div>
    </div>
    <!-- <el-switch v-model="value2" class="mt-2" style="margin-left: 24px" inline-prompt :active-icon="Check" :inactive-icon="Close" /> -->
    <div class="flx-row">
      <div class="flx-tit">侧边栏模式</div>
      <el-switch
        v-model="value2"
        @change="changeGreyOrWeak($event)"
        class="mt-2"
        style="margin-left: 24px"
        inline-prompt
        :active-icon="Sunny"
        :inactive-icon="Moon"
      />
    </div>
    <div class="flx-row">
      <div class="flx-tit">标签栏是否显示</div>
      <el-switch
        v-model="istags"
        @change="changeTags($event)"
        class="mt-2"
        style="margin-left: 24px"
      />
    </div>
    <!-- <div class="theme-item">
        <el-color-picker
          v-model="themeConfig.primary"
          :predefine="colorList"
          @change="changePrimary"
        >
        </el-color-picker>
      </div> -->
    <!--  <div class="theme-item">
        <span>暗黑模式</span>
        <SwitchDark></SwitchDark>
      </div>
      <div class="theme-item">
        <span>灰色模式</span>
        <el-switch
          v-model="themeConfig.isGrey"
          @change="changeGreyOrWeak($event, 'grey')"
        />
      </div>
      <div class="theme-item">
        <span>色弱模式</span>
        <el-switch
          v-model="themeConfig.isWeak"
          @change="changeGreyOrWeak($event, 'weak')"
        />
      </div>
      <br />
      <el-divider class="divider" content-position="center">
       <el-icon><Setting /></el-icon>
        界面设置
      </el-divider>
      <div class="theme-item">
        <span>折叠菜单</span>
        <el-switch v-model="isCollapse" />
      </div>
      <div class="theme-item">
        <span>面包屑导航</span>
        <el-switch v-model="themeConfig.breadcrumb" />
      </div>
      <div class="theme-item">
        <span>标签栏</span>
        <el-switch v-model="themeConfig.tabs" />
      </div>
      <div class="theme-item">
        <span>页脚</span>
        <el-switch v-model="themeConfig.footer" />
      </div> -->
  </el-drawer>
</template>

<script setup>
import { ref, computed, useAttrs } from 'vue'
import { Sunny, Moon } from '@element-plus/icons-vue'
import store from '../../../store/index.js'
import { mix } from '../../../utils/color.js'
import { useStore } from 'vuex'
const value2 = ref(true)
const istags = computed(() => {
  return store.getters.themeConfig.istags
})
// 预定义主题颜色
const colorList = [
  '#4060c7',
  '#409EFF',
  '#009688',
  '#27ae60',
  '#e74c3c',
  '#fd726d',
  '#f39c12',
  '#9b59b6',
]
// 预导航栏颜色
const tabColorList = [
  '#FFFFFF',
  '#333333',
  '#009688',
  '#27ae60',
  '#e74c3c',
  '#fd726d',
  '#f39c12',
  '#9b59b6',
]

// 主题初始化
const globalStore = useStore()
const themeConfig = computed(() => {
  return store.getters.themeConfig
})

const changePrimary = (val) => {
  globalStore.dispatch('user/changeThem', val)
}
const changeTabCole = (val) => {
  globalStore.dispatch('user/changeTabColor', val)
}
const drawerVisible = ref(false)
const openDrawer = () => {
  drawerVisible.value = true
}

const changeGreyOrWeak = (e) => {
  globalStore.dispatch('user/changeMenuColor', e)
}
const changeTags = (e) => {
  globalStore.dispatch('user/changeTags', e)
}
</script>

<style scoped lang="scss">
.icon-style {
  font-size: 20px;
  cursor: pointer;
  margin: 0 11px;
}
.flx-row {
  flex-wrap: wrap;
}
.flx-tit {
  color: #303133;
  flex: 1;
  font-size: 14px;
}
.theme-item {
  margin: 16px 5px;
  width: 20px;
  height: 20px;
  cursor: pointer;
  border: 1px solid #ddd;
  border-radius: 2px;
  position: relative;
  .icon {
    color: #fff;
    position: absolute;
    top: 3px;
    right: 3px;
    font-size: 14px;
  }
}
</style>
