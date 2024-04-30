<template>
  <el-card class="box-card" shadow="never">
    <div class="box-card-title">文件上传 🍱🍱🍱🍱🍱</div>
    <el-upload
      class="upload-demo"
      drag
      multiple
      :show-file-list="true"
      :limit="excelLimit"
      :http-request="uploadExcel"
      :before-upload="beforeExcelUpload"
      :on-exceed="handleExceed"
      :on-success="excelUploadSuccess"
      :on-error="excelUploadError"
      accept="application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    >
      <el-icon class="el-icon--upload"><upload-filled /></el-icon>
      <div class="el-upload__text">将文件拖到此处<em>或点击上传</em></div>
      <template #tip>
        <div class="el-upload__tip">请上传 .xls , .xlsx 标准格式文件</div>
      </template>
    </el-upload>
  </el-card>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { ElNotification } from 'element-plus'
// 最大文件数
const excelLimit = ref(1)
// 文件上传
const uploadExcel = (param) => {}
const beforeExcelUpload = (file) => {
  const isExcel =
    file.type === 'application/vnd.ms-excel' ||
    file.type ===
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
  const isLt5M = file.size / 1024 / 1024 < 5
  if (!isExcel)
    ElNotification({
      message: '上传文件只能是 xls / xlsx 格式！',
      type: 'warning',
    })
  if (!isLt5M)
    ElNotification({
      message: '上传文件大小不能超过 5MB！',
      type: 'warning',
    })
  return isExcel && isLt5M
}

// 文件数超出提示
const handleExceed = () => {
  ElNotification({
    message: '最多只能上传一个文件！',
    type: 'warning',
  })
}

// 上传错误提示
const excelUploadError = () => {
  ElNotification({
    message: '导入数据失败，请您重新上传！',
    type: 'error',
  })
}

// 上传成功提示
const excelUploadSuccess = () => {
  ElNotification({
    message: '导入数据成功！',
    type: 'success',
  })
}
</script>

<style lang="scss" scoped>
.box-card {
  width: 100%;
  .box-card-title {
    padding-bottom: 20px;
  }
}
.upload-demo {
  width: 50%;
}
</style>
