<template>
  <el-card style="height: 85vh">
    <div id="line" style="width: 100%; height: 80vh"></div>
  </el-card>
</template>

<script setup>
import * as echarts from 'echarts'
import { onMounted } from 'vue'

const getHistorgram = () => {
  document.getElementById('line').setAttribute('_echarts_instance_', '')
  var chartDom = document.getElementById('line')
  var myChart = echarts.init(chartDom)
  let app = {}
  var option = {
    tooltip: {
      trigger: 'axis',
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        formatter: '{value} °C',
      },
    },
    series: [
      {
        name: 'Highest',
        type: 'line',
        data: [10, 11, 13, 11, 12, 12, 9],
        markPoint: {
          data: [
            { type: 'max', name: 'Max' },
            { type: 'min', name: 'Min' },
          ],
        },
        markLine: {
          data: [{ type: 'average', name: 'Avg' }],
        },
      },
      {
        name: 'Lowest',
        type: 'line',
        data: [1, -2, 2, 5, 3, 2, 0],
        markPoint: {
          data: [{ name: '周最低', value: -2, xAxis: 1, yAxis: -1.5 }],
        },
        markLine: {
          data: [
            { type: 'average', name: 'Avg' },
            [
              {
                symbol: 'none',
                x: '90%',
                yAxis: 'max',
              },
              {
                symbol: 'circle',
                label: {
                  position: 'start',
                  formatter: 'Max',
                },
                type: 'max',
                name: '最高点',
              },
            ],
          ],
        },
      },
    ],
  }
  option && myChart.setOption(option)
  window.onresize = () => {
    myChart.resize()
  }
}

onMounted(() => {
  setTimeout(() => {
    getHistorgram()
  }, 1000)
})
</script>
