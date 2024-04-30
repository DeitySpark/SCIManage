<template>
  <el-card class="box-card col-center" shadow="never">
    <div class="box-card-title">引导页 🍮🍯🍳🍔</div>

    <el-button type="primary" @click.prevent.stop="guide">开启指引</el-button>
  </el-card>
</template>

<script setup>
import Driver from "driver.js";
import "driver.js/dist/driver.min.css";

const guide = () => {
  const driver = new Driver({
    allowClose: false,
    doneBtnText: "结束",
    closeBtnText: "关闭",
    nextBtnText: "下一步",
    prevBtnText: "上一步",
  });
  driver.defineSteps(steps);
  driver.start();
};

const steps = [
  {
    element: "#collapseIcon",
    popover: {
      title: "Collapse Icon",
      description: "Open && Close sidebar",
      position: "right",
    },
  },
  {
    element: "#breadcrumb",
    popover: {
      title: "Breadcrumb",
      description: "Indicate the current page location",
      position: "right",
    },
  },

  {
    element: "#fullscreen",
    popover: {
      title: "Full Screen",
      description: "Full Screen, Exit The Full Screen Page",
      position: "left",
    },
  },
];
</script>

<style lang="scss" scoped>
.box-card {
  width: 100%;
  .box-card-title {
    margin-bottom: 20px;
  }
}
</style>
