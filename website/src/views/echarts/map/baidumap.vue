<template>
  <el-card>
    <div id="container"></div>
  </el-card>
</template>

<script setup>
import { onMounted } from "vue";
const initMap = () => {
  var map = new BMapGL.Map("container"); // 创建地图实例
  var point = new BMapGL.Point(116.404, 39.915); // 创建点坐标
  var marker = new BMapGL.Marker(point); // 创建标注
  map.addOverlay(marker);
  map.centerAndZoom(point, 15); // 初始化地图，设置中心点坐标和地图级别
  map.enableScrollWheelZoom(true);
  var scaleCtrl = new BMapGL.ScaleControl(); // 添加比例尺控件
  map.addControl(scaleCtrl);
  var zoomCtrl = new BMapGL.ZoomControl(); // 添加缩放控件
  map.addControl(zoomCtrl);
  var cityCtrl = new BMapGL.CityListControl(); // 添加城市列表控件
  map.addControl(cityCtrl);
  map.addEventListener("click", function (e) {
    // 拿到点击地图上这一点的经纬度
    // alert(e.point.lng + ", " + e.point.lat);
    // 让地图中心平滑移动到点击的点
    map.panTo(new BMap.Point(e.point.lng, e.point.lat));
  });
};

onMounted(() => {
  initMap();
});
</script>

<style lang="scss" scoped>
#container {
  width: 100%;
  height: 85vh;
}
</style>
