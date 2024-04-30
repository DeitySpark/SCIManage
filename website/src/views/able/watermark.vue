<template>
  <el-row>
    <el-col>
      <el-card shadow="never">
        <div class="p10">水印组件🍬🍬🍬🍭🍭🍭</div>
        <el-form :inline="true" ref="formRef" :model="numberValidateForm" label-width="100px" class="demo-ruleForm">
          <el-form-item
            label="水印名称"
            prop="text"
            :rules="[
              { required: true, message: 'age is required' },
              { type: 'text', message: '请输入水印名称' },
            ]"
          >
            <el-input v-model="numberValidateForm.text" type="text" autocomplete="off" />
          </el-form-item>
          <el-form-item label="选择水印颜色" prop="color">
            <el-color-picker v-model="numberValidateForm.color" show-alpha />
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="submitForm(formRef)">创建</el-button>
            <el-button @click="resetForm(formRef)">取消</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </el-col>
  </el-row>
</template>

<script setup>
import { reactive } from "vue";
import { setWatermark, clear } from "./index.js";

const numberValidateForm = reactive({
  text: "",
  color: "#4060c7",
});
const submitForm = () => {
  console.log(numberValidateForm.color);
  setWatermark(numberValidateForm.text, numberValidateForm.color);
};

const resetForm = () => {
  numberValidateForm.text = "";
  numberValidateForm.color = "";
  clear();
};
</script>
