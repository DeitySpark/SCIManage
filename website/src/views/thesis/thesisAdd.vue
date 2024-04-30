<template>
  <ThesisInfo :thesis-data="$store.state.thesis" :is-show="isShow" :is-disabled="isDisabled"/>
  <el-card>
    <Actions :is-show="isShow" :data="$store.state.thesis.thesis"/>
  </el-card>
</template>

<script lang="ts" setup>
import Actions from "../../components/actions.vue";
import ThesisInfo from './thesisInfo.vue'
import {useStore} from "vuex";
const $store = useStore()
const isShow = {
  save: true,
  view: true,
  edit: false,
  delete: false
}
const isDisabled = false
console.log($store.state.thesis.thesis)
</script>

<style lang="scss" scoped>
</style>
