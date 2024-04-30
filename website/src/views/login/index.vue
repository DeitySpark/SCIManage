<template>
  <div class="login-container flx-center">
    <div class="login-box">
      <div class="login-left">
        <div class="title">高效记录生活</div>
        <div class="sub">轻松收集，有效整理</div>
        <img src="../../assets/login.png" alt="" />
      </div>

      <div class="login-form">
        <div class="login-logo">
          <img class="login-icon" src="../../assets/logo.png" alt="" />
          <p class="logo-text">欢迎登录</p>
        </div>
        <el-form
          ref="loginFormRef"
          :model="loginForm"
          :rules="loginRules"
          size="large"
        >
          <el-form-item prop="username">
            <el-input
              :prefix-icon="User"
              v-model="loginForm.username"
              placeholder="用户名"
            >
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              :prefix-icon="Lock"
              type="password"
              show-password
              v-model="loginForm.password"
              placeholder="密码"
            >
            </el-input>
          </el-form-item>
          <div class="flx-row">
            <el-checkbox
              style="flex: 1"
              v-model="loginForm.checked"
              label="记住我"
              size="large"
            />
            <span>忘记密码？</span>
          </div>
        </el-form>

        <div class="login-btn">
          <el-button
            :icon="CircleClose"
            round
            @click="resetForm(loginFormRef)"
            size="large"
            >重置</el-button
          >
          <el-button
            :icon="UserFilled"
            round
            @click="login(loginFormRef)"
            size="large"
            type="primary"
            :loading="loading"
          >
            登录
          </el-button>
        </div>
        <el-divider>其他方式登录 </el-divider>
        <div class="flx-row">
          <span class="img"
            ><svg
              focusable="false"
              class=""
              data-icon="github"
              width="25px"
              height="25px"
              fill="#888888"
              aria-hidden="true"
              viewBox="64 64 896 896"
            >
              <path
                d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"
              ></path></svg></span
          ><span class="img"
            ><svg
              focusable="false"
              class=""
              data-icon="wechat"
              width="25px"
              height="25px"
              fill="#888888"
              aria-hidden="true"
              viewBox="64 64 896 896"
            >
              <path
                d="M690.1 377.4c5.9 0 11.8.2 17.6.5-24.4-128.7-158.3-227.1-319.9-227.1C209 150.8 64 271.4 64 420.2c0 81.1 43.6 154.2 111.9 203.6a21.5 21.5 0 019.1 17.6c0 2.4-.5 4.6-1.1 6.9-5.5 20.3-14.2 52.8-14.6 54.3-.7 2.6-1.7 5.2-1.7 7.9 0 5.9 4.8 10.8 10.8 10.8 2.3 0 4.2-.9 6.2-2l70.9-40.9c5.3-3.1 11-5 17.2-5 3.2 0 6.4.5 9.5 1.4 33.1 9.5 68.8 14.8 105.7 14.8 6 0 11.9-.1 17.8-.4-7.1-21-10.9-43.1-10.9-66 0-135.8 132.2-245.8 295.3-245.8zm-194.3-86.5c23.8 0 43.2 19.3 43.2 43.1s-19.3 43.1-43.2 43.1c-23.8 0-43.2-19.3-43.2-43.1s19.4-43.1 43.2-43.1zm-215.9 86.2c-23.8 0-43.2-19.3-43.2-43.1s19.3-43.1 43.2-43.1 43.2 19.3 43.2 43.1-19.4 43.1-43.2 43.1zm586.8 415.6c56.9-41.2 93.2-102 93.2-169.7 0-124-120.8-224.5-269.9-224.5-149 0-269.9 100.5-269.9 224.5S540.9 847.5 690 847.5c30.8 0 60.6-4.4 88.1-12.3 2.6-.8 5.2-1.2 7.9-1.2 5.2 0 9.9 1.6 14.3 4.1l59.1 34c1.7 1 3.3 1.7 5.2 1.7a9 9 0 006.4-2.6 9 9 0 002.6-6.4c0-2.2-.9-4.4-1.4-6.6-.3-1.2-7.6-28.3-12.2-45.3-.5-1.9-.9-3.8-.9-5.7.1-5.9 3.1-11.2 7.6-14.5zM600.2 587.2c-19.9 0-36-16.1-36-35.9 0-19.8 16.1-35.9 36-35.9s36 16.1 36 35.9c0 19.8-16.2 35.9-36 35.9zm179.9 0c-19.9 0-36-16.1-36-35.9 0-19.8 16.1-35.9 36-35.9s36 16.1 36 35.9a36.08 36.08 0 01-36 35.9z"
              ></path></svg></span
          ><span class="img"
            ><svg
              focusable="false"
              class=""
              data-icon="alipay-circle"
              width="25px"
              height="25px"
              fill="#888888"
              aria-hidden="true"
              viewBox="64 64 896 896"
            >
              <path
                d="M308.6 545.7c-19.8 2-57.1 10.7-77.4 28.6-61 53-24.5 150 99 150 71.8 0 143.5-45.7 199.8-119-80.2-38.9-148.1-66.8-221.4-59.6zm460.5 67c100.1 33.4 154.7 43 166.7 44.8A445.9 445.9 0 00960 512c0-247.4-200.6-448-448-448S64 264.6 64 512s200.6 448 448 448c155.9 0 293.2-79.7 373.5-200.5-75.6-29.8-213.6-85-286.8-120.1-69.9 85.7-160.1 137.8-253.7 137.8-158.4 0-212.1-138.1-137.2-229 16.3-19.8 44.2-38.7 87.3-49.4 67.5-16.5 175 10.3 275.7 43.4 18.1-33.3 33.4-69.9 44.7-108.9H305.1V402h160v-56.2H271.3v-31.3h193.8v-80.1s0-13.5 13.7-13.5H557v93.6h191.7v31.3H557.1V402h156.4c-15 61.1-37.7 117.4-66.2 166.8 47.5 17.1 90.1 33.3 121.8 43.9z"
              ></path></svg></span
          ><span class="img"
            ><svg
              focusable="false"
              class=""
              data-icon="google-circle"
              width="25px"
              height="25px"
              fill="#888888"
              aria-hidden="true"
              viewBox="64 64 896 896"
            >
              <path
                d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm167 633.6C638.4 735 583 757 516.9 757c-95.7 0-178.5-54.9-218.8-134.9C281.5 589 272 551.6 272 512s9.5-77 26.1-110.1c40.3-80.1 123.1-135 218.8-135 66 0 121.4 24.3 163.9 63.8L610.6 401c-25.4-24.3-57.7-36.6-93.6-36.6-63.8 0-117.8 43.1-137.1 101-4.9 14.7-7.7 30.4-7.7 46.6s2.8 31.9 7.7 46.6c19.3 57.9 73.3 101 137 101 33 0 61-8.7 82.9-23.4 26-17.4 43.2-43.3 48.9-74H516.9v-94.8h230.7c2.9 16.1 4.4 32.8 4.4 50.1 0 74.7-26.7 137.4-73 180.1z"
              ></path></svg></span
          ><span class="img"
            ><svg
              focusable="false"
              class=""
              data-icon="twitter-circle"
              width="25px"
              height="25px"
              fill="#888888"
              aria-hidden="true"
              viewBox="64 64 896 896"
            >
              <path
                d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm215.3 337.7c.3 4.7.3 9.6.3 14.4 0 146.8-111.8 315.9-316.1 315.9-63 0-121.4-18.3-170.6-49.8 9 1 17.6 1.4 26.8 1.4 52 0 99.8-17.6 137.9-47.4-48.8-1-89.8-33-103.8-77 17.1 2.5 32.5 2.5 50.1-2a111 111 0 01-88.9-109v-1.4c14.7 8.3 32 13.4 50.1 14.1a111.13 111.13 0 01-49.5-92.4c0-20.7 5.4-39.6 15.1-56a315.28 315.28 0 00229 116.1C492 353.1 548.4 292 616.2 292c32 0 60.8 13.4 81.1 35 25.1-4.7 49.1-14.1 70.5-26.7-8.3 25.7-25.7 47.4-48.8 61.1 22.4-2.4 44-8.6 64-17.3-15.1 22.2-34 41.9-55.7 57.6z"
              ></path></svg
          ></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup name="login">
import axios from 'axios'
import { useStore } from 'vuex' // 引入useStore 方法
import {
  CircleClose,
  UserFilled,
  Lock,
  User,
  Iphone,
} from '@element-plus/icons-vue'
import { Base64 } from 'js-base64'
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
const loginFormRef = ref()
const loading = ref(false)
const router = useRouter()
const loginForm = reactive({
  'username': 'admin',
  'password': '123456',
  'checked': true,
})
const loginRules = reactive({
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
})

const globalStore = useStore() // 该方法用于返回store 实例

const login = (formEl) => { // 登录
  if (!formEl) return
  formEl.validate((valid) => {  // 校验表单
    if (valid) {  // 校验通过
      loading.value = true
      console.log(globalStore)  // 打印store 实例

      if (loginForm.checked) {  // 判断是否勾选记住我
        let password = Base64.encode(loginForm.password) // base64加密
        setCookie(loginForm.username, password, 7)  // 设置cookie
      } else {
        setCookie('', '', -1)
      }
      // 调用vuex中的login 方法
      globalStore.dispatch('user/login', loginForm)
    } else {
      console.log('error submit!')
      return false
    }
  })
}

const setCookie = (userId, password, days) => {
  let date = new Date() // 获取时间
  date.setTime(date.getTime() + 24 * 60 * 60 * 1000 * days) // 保存的天数
  // 字符串拼接cookie
  window.document.cookie =
    'userId' + '=' + userId + ';path=/;expires=' + date.toGMTString()
  window.document.cookie =
    'password' + '=' + password + ';path=/;expires=' + date.toGMTString()
}

// 读取cookie 将用户名和密码回显到input框中
const getCookie = () => {
  if (document.cookie.length > 0) {
    let arr = document.cookie.split('; ') //分割成一个个独立的“key=value”的形式
    for (let i = 0; i < arr.length; i++) {
      let arr2 = arr[i].split('=') // 再次切割，arr2[0]为key值，arr2[1]为对应的value
      if (arr2[0] === 'userId') {
        loginForm.username = arr2[1]
      } else if (arr2[0] === 'password') {
        loginForm.password = Base64.decode(arr2[1]) // base64解密
        loginForm.checked = true
      }
    }
  }
}
const resetForm = (formEl) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
