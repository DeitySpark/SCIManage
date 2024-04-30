<template>
  <el-card :shadow="never" class="col-center">
    <div class="p10">密码强度🍓🍇🍈🍉</div>
    <el-form
      label-position="left"
      label-width="100px"
      :model="formLabelAlign"
      style="width: 460px"
    >
      <el-form-item label="请输入密码">
        <el-input
          v-model="formLabelAlign.passsword"
          :prefix-icon="Lock"
          type="password"
          show-password
        />
      </el-form-item>
      <el-form-item label="密码强度">
        <el-progress
          v-show="formLabelAlign.passsword"
          :percentage="percentage"
          style="width: 460px"
          :status="status"
        />
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script setup>
import { reactive, ref, watch } from 'vue'
const formLabelAlign = reactive({
  passsword: '',
})

let percentage = ref(0)
let status = ref('exception')

const checkStrong = (sValue) => {
  var modes = 0
  if (sValue.length < 1) return modes
  if (/\d/.test(sValue)) modes++ //数字
  if (/[a-z]/.test(sValue)) modes++ //小写
  if (/[A-Z]/.test(sValue)) modes++ //大写
  if (/\W/.test(sValue)) modes++ //特殊字符
  switch (modes) {
    case 1:
      return 1
      break
    case 2:
      return 2
      break
    case 3:
    case 4:
      return sValue.length < 10 ? 3 : 4
      break
  }
  return modes
}

const statusChange = (modes) => {
  if (modes == 1) {
    percentage.value = 25
    status.value = 'exception'
  } else if (modes == 2) {
    percentage.value = 50
    status.value = 'exception'
  } else if (modes == 3) {
    percentage.value = 75
    status.value = 'warning'
  } else {
    percentage.value = 100
    status.value = 'success'
  }
}
watch(
  () => formLabelAlign.passsword,
  (newValue, oldValue) => {
    let modes = checkStrong(newValue)
    console.log(modes)
    statusChange(modes)
  }
)
</script>
