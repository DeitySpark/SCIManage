<template>
  <el-card>
    <ThesisInfo :thesis-data="$store.state.thesis" :is-show="isShow" :is-disabled="isDisabled"/>
    <el-card>
      <Actions :is-show="isShow" :data="$store.state.thesis.thesis"/>
    </el-card>
  </el-card>
</template>

<script lang="ts" setup>
import Actions from "../../components/actions.vue";
import ThesisInfo from './thesisInfo.vue'
import {useStore} from "vuex";
const $store = useStore()
const isShow = {
  save : true,
  view: true,
  edit: false,
  delete: true
}
const isDisabled = false

</script>

<style lang="scss" scoped>
</style>
