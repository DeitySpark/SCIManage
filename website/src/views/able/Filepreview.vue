<template>
  <el-card class="box-card" shadow="never">
    <div class="box-card-title">文件预览 🍱🍱🍱🍱🍱</div>

    <el-card class="mt20" shadow="never">
      <div class="item flx-row" v-for="item in file_lists" :key="item.id">
        <div class="name">{{ item.name }}</div>
        <div class="btn" @click="viewItem(item)">预览</div>
        <div class="btn">下载</div>
      </div>
    </el-card>
  </el-card>
  <el-dialog v-model="centerDialogVisible" width="80%" title="文件预览" center>
    <iframe :src="iframeUrl" frameborder="0" width="100%" height="600"></iframe>
  </el-dialog>
</template>

<script setup>
//   .doc,.docx,.pdf,.ppt,.pptx,.xlsx,.xls,.jpg,.JPEG,.png,.gif
import { ref, reactive } from 'vue'
const centerDialogVisible = ref(false)
const iframeUrl = ref('')
const file_lists = ref([
  {
    url: 'https://lthink-b2b.oss-cn-shenzhen.aliyuncs.com/distributor_shop/20230221/da6770e2e351f4e059e2679875646a5e.pdf',
    name: '不要想太多，不要熬夜，要经常笑.pdf',
  },
  {
    url: 'https://lthink-b2b.oss-cn-shenzhen.aliyuncs.com/distributor_shop/20230221/57241b95256cc7deda8ea4b98196bb08.xlsx',
    name: '不要想太多，不要熬夜，要经常笑.xlsx',
  },
  {
    url: 'https://lthink-b2b.oss-cn-shenzhen.aliyuncs.com/distributor_shop/20230221/f53330af74e356ebb0de1b48a09418ae.pptx',
    name: '不要想太多，不要熬夜，要经常笑.pptx',
  },
  {
    url: 'https://lthink-b2b.oss-cn-shenzhen.aliyuncs.com/distributor_shop/20230221/4ae5d1993c1b7218e04d096d58106d35.docx',
    name: '不要想太多，不要熬夜，要经常笑.docx',
  },
])

const viewItem = (item) => {
  centerDialogVisible.value = !centerDialogVisible.value
  let index = item.url.lastIndexOf('.')
  let ext = item.url.substr(index)
  console.log(ext)
  iframeUrl.value =''
  if (ext == '.xlsx' || ext == '.docx' || ext == '.pptx') {
    iframeUrl.value =
      'https://view.officeapps.live.com/op/view.aspx?src=' + item.url
  } else {
    iframeUrl.value = item.url
  }
}
</script>

<style lang="scss" scoped>
.item {
  padding: 10px;
  border-bottom: 1px solid #f0f2f5;

  .name {
    flex: 1;
    color: #666;
  }
  .btn {
    color: #29d;
    padding: 0 10px;
  }
}
</style>
