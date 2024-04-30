<template>
  <el-card style="height: 80vh" class="posRe">
    
    <mindmap
      style="height: 75vh"
      ref="mind"
      v-model="data"
      :add-node-btn="addnodeBtn"
      :download-btn="downloadBtn"
      :ctm="ctm"
      :zoom="zoom"
      :edit="edit"
      scale-extent="[0.1,0.8]"
      :sharp-corner="sharpCorner"
    ></mindmap>

    <div class="flx-row posbtn">
      <!-- <el-button @click="editItem">编辑</el-button> -->
      <el-button>下载</el-button>
      <el-button @click="sharpCorner=!sharpCorner">样式切换</el-button>
      <!-- 放大  编辑 下载 -->
    </div>
  </el-card>

  <el-card class="mt20">
    <el-input v-model="inputValue" type="text" placeholder="Please input">
      <template #prepend>
        <div @click="dialogVisible = true">
          <el-icon><Document /></el-icon> 模板库
        </div>
      </template>
      <template #append
        ><el-button class="btn" icon="Promotion" :loading="Iconloading" @click="createMind"> 生成</el-button></template
      >
    </el-input>
  </el-card>

  <el-dialog v-model="dialogVisible" title="模板库" width="60%" draggable>
    <div class="flx-row dialog-content">
      <div class="flx1 dialog-lists">
        <div v-for="item in list" :key="item.id" class="drag-item" @click="sendItem(item)">
          {{ item.name }}
        </div>
      </div>
      <div class="flx1 dialog-right">
        <textarea class="dialog-input" v-model="md"></textarea>
        <el-button class="pos-btn" round @click="UseTemplates"
          ><el-icon><EditPen /></el-icon> 使用模板</el-button
        >
      </div>
    </div>
  </el-dialog>
</template>

<script setup>
// import mindmap from '@hellowuxin/mindmap'

import mindmap from "vue3-mindmap";
import { onMounted, reactive, ref } from "vue";
import "vue3-mindmap/dist/style.css";
const addnodeBtn = ref(true);
const downloadBtn = ref(true);
const sharpCorner = ref(false);
const dialogVisible = ref(false);
const Iconloading = ref(false);
const ctm = ref(true);
const zoom = ref(true);
const mind = ref(null);
const edit = ref(true);
const inputValue = ref("");
const md= ref('')
const selectTemp= ref('')
const list = ref([
  { name: "2023年度计划", md: "" },
  { name: "运营知识地图", md: "" },
  { name: "考试复习规划", md: "" },
  { name: "总结内容框架", md: "" },
  { name: "项目管理方案", md: "" },
  { name: "用户旅程地图", md: "" },
  { name: "魔兽世界风格", md: "" },
  { name: "产品思维导图", md: "" },
  { name: "创业策划思维导图", md: "" },
  { name: "市场营销思维导图", md: "" },
  { name: "学习笔记思维导图", md: "" },
  { name: "组织架构思维导图", md: "" },
  { name: "个人成长思维导图", md: "" },
  { name: "教学计划思维导图", md: "" },
  { name: "网站架构思维导图", md: "" },
  { name: "企业战略思维导图", md: "" },
]);
const data = reactive( [{
      "name":"如何学习D3",
      "children": [
        {
          "name":"预备知识",
          "children": [
            { "name":"HTML & CSS" },
            { "name":"JavaScript" },
          ]
        },
        {
          "name":"安装",
          "_children": [
            { "name": "折叠节点" }
          ]
        },
        {
          "name":"进阶",
          "left": true
        },
      ]
    }]);

const createMind = () => {
  data.value = [{
    name:selectTemp.value,
    children: [
      // {
      //   name: "预备知识",
      //   children: [{ name: "HTML & CSS" }, { name: "JavaScript" }],
      // },
      // {
      //   name: "安装",
      //   collapse: true,
      //   children: [{ name: "折叠节点" }],
      // },
      { name: "笔记总结", collapse: true },
      { name: "日程安排", collapse: true },
      { name: "项目管理", collapse: true },
      { name: "头脑风暴", collapse: true },
      { name: "框架梳理", collapse: true },
      { name: "一键生成", collapse: true },
    ],

  }]
  console.log()
};

const sendItem = (item) => {
  selectTemp.value =item.name;
  md.value=`生成${item.name}的思维导图`
}

const UseTemplates = () => {
  inputValue.value=`生成${selectTemp.value}的思维导图`;
  dialogVisible.value = false;

}


onMounted(() => {
  console.log(mind);
  console.log(mindmap);
  // data.value = [{ name: "思维导图", children: [ { name: "笔记总结", collapse: true },
  //     { name: "日程安排", collapse: true },
  //   { name: "项目管理", collapse: true },]
  // }];
      
  console.log(data)
});
</script>



<style lang="scss" scoped>
.posRe{
  position: relative;
  .posbtn{
    position: absolute;
    top:30px;
    right:30px;
  }
}


.dialog-content {
  width: 100%;
  height: 40vh;
  overflow: hidden;
  .dialog-lists {
    overflow: scroll;
    height: 40vh;
    .drag-item {
      padding: 10px 0;
      border-bottom: 1px solid #f5f5f5;
    }
  }
  .dialog-right {
    margin-left: 10px;
    background-color: #f7f8fa;
    height: 100%;
    position: relative;
    .dialog-input {
      width: 95%;
      height: 95%;
      padding: 2.5%;
      border: none;
      background-color: #f7f8fa;
    }
    .pos-btn {
      position: absolute;
      right: 10px;
      bottom: 10px;
    }
  }
}
</style>