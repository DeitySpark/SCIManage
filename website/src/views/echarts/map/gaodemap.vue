<template>
  <el-card>
    <div id="gaodeMap"></div>
  </el-card>
</template>

<script setup>
import { nextTick, onMounted } from 'vue'
const initGaoMap = () => {
  var map = new AMap.Map('gaodeMap', {
    zoom: 11, //级别
    center: [116.397428, 39.90923], //中心点坐标
    viewMode: '2D', //使用3D视图
  })
  // 在图面添加工具条控件，工具条控件集成了缩放、平移、定位等功能按钮在内的组合控件
  map.addControl(new AMap.ToolBar())

  // 在图面添加比例尺控件，展示地图在当前层级和纬度下的比例尺
  map.addControl(new AMap.Scale())

  // 在图面添加鹰眼控件，在地图右下角显示地图的缩略图
  map.addControl(new AMap.HawkEye({ isOpen: true }))

  // 在图面添加类别切换控件，实现默认图层与卫星图、实施交通图层之间切换的控制
  // map.addControl(new AMap.MapType())

  // 在图面添加定位控件，用来获取和展示用户主机所在的经纬度位置
  // map.addControl(new AMap.Geolocation())
  map.setFitView()
}

onMounted(() => {
  nextTick(() => {
    initGaoMap()
  })
})
</script>

<style lang="scss" scoped>
#gaodeMap {
  width: 100%;
  height: 85vh;
}
</style>
