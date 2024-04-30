<template>
  <el-card class="box-card col-center" shadow="never">
    <div class="box-card-title">图片上传 🍱🍱🍱🍱🍱</div>
    <el-upload
      v-model:file-list="fileList"
      action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
      list-type="picture-card"
      :on-preview="handlePictureCardPreview"
      :on-remove="handleRemove"
    >
      <el-icon><Plus /></el-icon>
    </el-upload>
    <el-image-viewer v-if="dialogVisible" @close="imageView" style="width: 100px; height: 100px" :url-list="[dialogImageUrl]" />
  </el-card>
</template>

<script setup>
import { reactive, ref } from "vue";
import { Plus } from "@element-plus/icons-vue";

const dialogImageUrl = ref("");
const dialogVisible = ref(false);
const pictureUpload = ref(null);
const fileList = ref([]);
const handleRemove = (file) => {
  console.log(file);
};

const imageView = () => {
  dialogVisible.value = false;
};

const handlePictureCardPreview = (file) => {
  console.log(file.url);
  dialogImageUrl.value = file.url;
  dialogVisible.value = true;
};
</script>

<style lang="scss" scoped>
.box-card {
  width: 100%;
  .box-card-title {
    padding-bottom: 20px;
  }
}
.el-image-viewer__canvas {
  img {
    width: 120px !important;
    height: auto !important;
  }
}
</style>
