<template>
  <el-card>
    <el-form class="form">
      <el-form-item
          class=" form-item"
          v-for="item in options"
          :key="item.props"
          :label="item.label"
          :prop="item.props"
          label-width="100px"
      >
        <el-input class="d-input" v-model="Data[item.props]" :disabled="props.isDisabled"></el-input>
      </el-form-item>
      <el-form-item
          label="摘要:"
          label-width="100px"
      >
        <el-input
            class="d-input"
            v-model="Data['summary']"
            type="textarea"
            :rows = "5"
            :disabled="props.isDisabled"
        ></el-input>
      </el-form-item>
    </el-form>
  </el-card>

</template>

<script lang="ts" setup>
import {options} from '../options'
import {defineProps} from "vue";

const props = defineProps({
  thesisData: Object,
  isShow: Object,
  isDisabled: Boolean
})

const Data = props.thesisData.thesis

console.log(Data, props.isShow)


</script>

<style scoped>
.henader-card {
  padding: 0 50px;
  margin-bottom: 20px;
}

.form {
  width: 100%;
  margin: 0 auto;
  padding: 20px 10px;
}

.d-input {
  width: 100%;
  margin-right: 20px;
}

</style>
