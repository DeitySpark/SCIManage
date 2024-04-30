<template>
  <el-popover :width="400" placement="bottom" trigger="click">
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
      <el-tab-pane label="通知" name="first">
        <div class="notice-lists">
          <div class="item one-cut-txt" v-for="item in notList" :key="item.id"><span class="type">通知</span> {{ item.text }}</div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="公告" name="second">
        <div class="notice-lists">
          <div class="item one-cut-txt" v-for="item in notList" :key="item.id"><span class="type">公告</span> {{ item.text }}</div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="系统消息" name="third">
        <div class="notice-lists">
          <div class="item one-cut-txt" v-for="item in notList" :key="item.id">
            <span class="type" style="color: rgb(47, 96, 194); background-color: #e8f3ff">系统消息</span>
            {{ item.text }}
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
    <template #reference>
      <el-icon class="icon-style" @click="visible = !visible"><bell /></el-icon>
    </template>
  </el-popover>
</template>
<script setup name="messages">
import { Bell } from "@element-plus/icons-vue";
import { nextTick, onMounted, ref } from "vue";

import { noticeLists } from "../../../api/modules/index.js";
const visible = ref(false);
const activeName = ref("first");
const notList = ref("first");

onMounted(() => {
  nextTick(() => {
    noticeLists().then((res) => {
      notList.value = res.data.data;
    });
  });
});
</script>
<style lang="scss" scoped>
.icon-style {
  font-size: 20px;

  cursor: pointer;
  margin: 0 11px;
}
.notice-lists {
  height: 260px;
  overflow: scroll;

  .item {
    font-size: 14px;
    padding: 10px;
    color: #666;

    .type {
      font-size: 10px;
      padding: 5px 10px;
      font-weight: 500;
      line-height: 0px;
      color: #fa4a1e;
      text-align: left;
      border-radius: 6px;
      background: #fa4a1e14;

      &.error-type {
        color: #4060c7;
        background: #e8f3ff;
      }
    }
  }
}
</style>
