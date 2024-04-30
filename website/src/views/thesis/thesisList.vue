<template>
  <el-card shadow="never" class="henader-card" >
    <div class="flx-row">
      <el-form :inline="true" style="flex: 1">
        <el-input placeholder="请输入搜索内容" v-model="searchData" clearable />
      </el-form>
      <div class="flex-right">
        <el-button type="primary" :icon="Search" @click="searchClick" class="ml20">搜索</el-button>
        <el-button type="primary" @click="addItem(router)">+添加</el-button>
      </div>
    </div>
  </el-card>


  <el-table
      :data="filterTableData"
      style="width: 100%"
      height="100%"
  >
    <el-table-column label="序号" width="80">
      <template #default="scope">
        <span>{{ scope.$index + 1 }}</span>
      </template>
    </el-table-column>
    <el-table-column
        v-for="item in options"
        :key="item.type"
        :prop="item.props"
        :label="item.label"
        :width="item.width"
        :align="item.align"
        show-overflow-tooltip
        :fixed="item.fixed"
    >
    </el-table-column>
    <el-table-column label="操作" width="200">
      <template #default="scope">
        <actions :data="scope.row" :is-show="isShow"/>
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts" setup>
// 导入组件
import {
  Search,
  Edit,
  Delete,
  InfoFilled,
  View,
} from '@element-plus/icons-vue'
import {computed, onMounted, ref} from 'vue'
import {useRouter} from "vue-router";
const router = useRouter()
// 导入数据
import {options} from "../options";
import {getSciList} from "../../api/modules/index"
import {
  addItem,
} from "../../router/actions"
import Actions from "../../components/actions.vue";

const list = ref([])
const search = ref('')
const searchData = ref('')
const searchClick = () => {
  search.value = searchData.value

}
const filterTableData = computed(() =>
    list.value.filter(
        (data) =>
            !search.value ||
            data.title.toLowerCase().includes(search.value.toLowerCase())
    )
)
const isShow = {
  save: false,
  view: true,
  edit: true,
  delete: true
}
const initData = () =>{
  // 获取数据
  if (list.value.length > 0) {
    return
  }
  getSciList().then((res) => {
    // console.log(res.data.data.list)
    let value = res.data.data.list
    // 遍历数组，把string类型的时间转换成Data类型
    value.forEach((item) => {
      // 转换成年-月-日 时:分:秒
      item.publish_time = new Date(item.publish_time).toLocaleString()
    })
    // console.log(value)
    list.value = value
  })
}

onMounted(()=>{
  initData()
})
</script>


<style lang="scss" scoped>
.henader-card {
  padding: 0 50px;
  margin-bottom: 20px;
}

</style>
