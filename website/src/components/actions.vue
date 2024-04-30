<template>
  <el-icon
      class="icon-save"
      @click="ItemSave(router, props.data)"
      v-if="isShow.save"
  >
    <FolderChecked />
  </el-icon>
  <el-icon class="icon-view" @click="ItemView(router, props.data)" v-if="isShow.view"
  >
    <View/>
  </el-icon>
  <el-icon class="icon-edit" @click="editorClick(router, props.data)" v-if="isShow.edit"
  >
    <Edit
    />
  </el-icon>
  <el-popconfirm
      confirm-button-text="确认"
      cancel-button-text="取消"
      :icon="InfoFilled"
      icon-color="#626AEF"
      title="确认删除?"
      @confirm="DeleteItem(index)"

  >
    <template #reference v-if="isShow.delete">
      <el-icon class="icon-dele" >
        <Delete/>
      </el-icon>
    </template>
  </el-popconfirm>
</template>

<script lang="ts" setup>
import {
  Edit,
  Delete,
  InfoFilled,
  View,
  FolderChecked
} from '@element-plus/icons-vue'
import {useRouter} from "vue-router";
import {
  ItemSave,
  ItemView,
  editorClick,
  DeleteItem,
} from "../router/actions"

const router = useRouter()

const props = defineProps({
  data: Object,
  isShow: Object
})
console.log(props.data)
</script>

<style scoped>
.icon-save {
  font-size: 20px;
  color: #ab9ac9;
  margin: 0 10px;
}
.icon-save:hover {
  color: #5a5a91;
}.icon-view {
  font-size: 20px;
  color: #ab9ac9;
  margin: 0 10px;
}
.icon-view:hover {
  color: #5a5a91;
}
.icon-edit {
  font-size: 20px;
  color: #ab9ac9;
  margin: 0 10px;
}
.icon-edit:hover {
  color: #5a5a91;
}
.icon-dele {
  font-size: 20px;
  color: #ff5722;
  margin: 0 10px;
}
.icon-dele:hover {
  color: #701704;
}
</style>
