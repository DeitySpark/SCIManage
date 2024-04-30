<template>
      <h1>个人信息</h1>
      <el-form :model="formData" label-width="80px">
        <el-form-item label="用户名称" >
          <el-input v-model="formData.name" :disabled="isDisabled"/>
        </el-form-item>
        <el-form-item label="E-mail">
          <el-input v-model="formData.email" :disabled="isDisabled" />
        </el-form-item>
        <el-form-item label="电话号码">
          <el-input v-model="formData.phone" :disabled="isDisabled" />
        </el-form-item>
        <el-form-item label="用户身份">
          <el-select v-model="formData.role.data" :disabled="isDisabled">
            <el-option label="管理员" value="1"></el-option>
            <el-option label="普通用户" value="0"></el-option>
          </el-select>
        </el-form-item>
      </el-form>

        <el-card>
          <PersonalAction :isShow="isShow" />
        </el-card>
</template>

<script lang="ts" setup>
import PersonalAction from "./PersonalAction.vue"
import {useStore} from "vuex";
const $store = useStore()
const formData = $store.state.user.UserInfo

const isDisabled = true
const isShow = {
  save: false,
  view: false,
  edit: true,
  delete: true
}
</script>

<style>

</style>
