<template>
  <el-row class="data-lists">
    <el-col :span="9" :class="{ shake: disabled }"
      ><div class="data-item-one flx-row">
        <div class="item-left">
          <img src="../../assets/home.png" alt="" srcset="" />
        </div>
        <div class="item-right">
          <div class="item-right-top">
            <div class="tit">本期活动GMX</div>
            <div class="num">1523.53w</div>
          </div>
          <div class="line"></div>
          <div class="item-right-bottom flx-row">
            <div class="item">
              <div class="tit">类目一</div>
              <div class="num">53w</div>
            </div>
            <div class="item">
              <div class="tit">类目一</div>
              <div class="num">53w</div>
            </div>
            <div class="item">
              <div class="tit">类目一</div>
              <div class="num">53w</div>
            </div>
          </div>
        </div>
      </div></el-col
    >
    <el-col :span="9" :class="{ shake: disabled }"
      ><div class="data-item-two">
        <div class="item">
          <div class="item-des flx-row">
            <img src="../../assets/icon1.png" alt="" />
            <div class="right">
              <div class="num">934.7w <span>29.74</span></div>
              <div class="txt">今日DAU</div>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="item-des flx-row" style="margin-right: 0px">
            <img src="../../assets/icon2.png" alt="" />
            <div class="right">
              <div class="num">264.7w <span>29.74</span></div>
              <div class="txt">今日DAU</div>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="item-des flx-row">
            <div class="right border-right-1px">
              <div class="num">24.93w</div>
              <div class="txt">今日DAU</div>
            </div>
            <div class="right">
              <div class="num">984.52w</div>
              <div class="txt">总用户数</div>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="item-des flx-row" style="margin-right: 0px">
            <div class="right border-right-1px">
              <div class="num">84.52w</div>
              <div class="txt">GPS</div>
            </div>
            <div class="right">
              <div class="num">84.52w</div>
              <div class="txt">特权</div>
            </div>
          </div>
        </div>
      </div></el-col
    >
    <el-col :span="6" :class="{ shakeRight: disabled }">
      <div class="data-item-three">
        <div class="tit">待处理</div>
        <div class="content">
          <div class="item">
            <div class="item-data">
              <div class="tit">退款申请</div>
              <div class="num">89 <span>条</span></div>
              <el-icon class="icon"><ArrowRight /></el-icon>
            </div>
          </div>
          <div class="item">
            <div class="item-data">
              <div class="tit">退款申请</div>
              <div class="num">89 <span>条</span></div>
              <el-icon class="icon"><ArrowRight /></el-icon>
            </div>
          </div>
          <div class="item">
            <div class="item-data">
              <div class="tit">退款申请</div>
              <div class="num">89 <span>条</span></div>
              <el-icon class="icon"><ArrowRight /></el-icon>
            </div>
          </div>
          <div class="item">
            <div class="item-data">
              <div class="tit">退款申请</div>
              <div class="num">89 <span>条</span></div>
              <el-icon class="icon"><ArrowRight /></el-icon>
            </div>
          </div>
        </div>
      </div>
    </el-col>
  </el-row>
  <el-row class="dataLayer">
    <el-col :span="18">
      <div class="flx-row">
        <div class="datalayer-echarts" :class="{ shake: disabled }">
          <GMVnearly></GMVnearly>
        </div>
        <div class="datalayer-echarts" :class="{ shake: disabled }">
          <linenearly></linenearly>
        </div>
      </div>
      <div class="table-data" :class="{ shake: disabled }">
        <div class="tit">主题页列表</div>
        <div class="table-box">
          <el-table
            :data="tableData"
            :header-cell-style="{
              background: '#FAFBFDFF',
              fontWeight: '400',
              fontSize: '14px',
              padding: '0',
              fontHeight: '36px',
              height: '36px',
            }"
            :row-style="{
              fontWeight: '400',
              fontSize: '14px',
              padding: '0',
              fontHeight: '44px',
              height: '44px',
            }"
          >
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
              <template v-slot:default="scope" v-if="item.props === 'type'">
                <span class="type" v-if="scope.row[item.props] == true"
                  >外部链接</span
                >
                <span
                  class="type error-type"
                  v-if="scope.row[item.props] == false"
                  >内部链接</span
                >
              </template>
              <template v-slot:default="scope" v-if="item.props === 'state'">
                <span v-if="scope.row[item.props] == true">
                  <i class="state"></i>已上线</span
                >
                <span v-if="scope.row[item.props] == false">
                  <i class="state error-state"></i>已下线</span
                >
              </template>
              <template v-slot:default="scope" v-if="item.props === 'actions'">
                <el-icon class="icon-edit" @click="editorClick(scope.row)"
                  ><Edit
                /></el-icon>
                <el-popconfirm
                  confirm-button-text="确认"
                  cancel-button-text="取消"
                  :icon="InfoFilled"
                  icon-color="#626AEF"
                  title="确认删除该主题?"
                  @confirm="DeleteItem(index)"
                >
                  <template #reference>
                    <el-icon class="icon-dele"><Delete /></el-icon>
                  </template>
                </el-popconfirm>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </el-col>
    <el-col :span="6">
      <div class="data-item-three" :class="{ shakeRight: disabled }">
        <div class="tit">常用功能</div>
        <div class="content">
          <div class="item">
            <div class="item-data flx-row">
              <div class="tit">
                <el-icon><Histogram /></el-icon>订单列表
              </div>
              <el-icon class="icon"><ArrowRight /></el-icon>
            </div>
          </div>
          <div class="item">
            <div class="item-data flx-row">
              <div class="tit">
                <el-icon><Avatar /></el-icon>用户列表
              </div>
              <el-icon class="icon"><ArrowRight /></el-icon>
            </div>
          </div>
          <div class="item">
            <div class="item-data">
              <div class="tit">
                <el-icon><HomeFilled /></el-icon>首页配置
              </div>
              <el-icon class="icon"><ArrowRight /></el-icon>
            </div>
          </div>
          <div class="item">
            <div class="item-data">
              <div class="tit">
                <el-icon><PictureFilled /></el-icon>主题配置
              </div>
              <el-icon class="icon"><ArrowRight /></el-icon>
            </div>
          </div>
          <div class="item">
            <div class="item-data">
              <div class="tit">
                <el-icon><Menu /></el-icon>活动管理
              </div>
              <el-icon class="icon"><ArrowRight /></el-icon>
            </div>
          </div>
          <div class="item">
            <div class="item-data">
              <div class="tit">
                <el-icon><Tools /></el-icon>退款申请
              </div>
              <el-icon class="icon"><ArrowRight /></el-icon>
            </div>
          </div>
        </div>
      </div>
      <div class="notice">
        <div class="notice-news">
          <img src="../../assets/homebg.jpeg" alt="" />
          <div class="txt one-cut-txt">
            查看更多查看更多查看更多查看更查看更多查看更多查看更多查看更
          </div>
        </div>
      </div>
      <div class="data-item-three" :class="{ shakeRight: disabled }">
        <div class="tit">公告栏</div>
        <div class="notice-lists">
          <div class="item one-cut-txt" v-for="item in notList" :key="item.id">
            <span class="type">通知</span> {{ item.text }}
          </div>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import GMVnearly from './components/GMVnearly.vue'
import linenearly from './components/linenearly.vue'
import { options } from './options.js'
import { homeList, noticeLists } from '../../api/modules/index.js'
const tableData = ref([])
const notList = ref([])
const disabled = ref(false)

const DeleteItem = (index) => {
  tableData.value.splice(index, 1)
}

const initData = () => {
  homeList().then((res) => {
    tableData.value = res.data.data
  })

  noticeLists().then((res) => {
    notList.value = res.data.data
  })
}

onMounted(() => {
  initData()
  disabled.value = true
  setTimeout(() => {
    disabled.value = false
  }, 1500)
})
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
