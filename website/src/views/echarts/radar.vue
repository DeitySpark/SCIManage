<template>
  <el-card style="height: 85vh">
    <div id="radar" style="width: 100%; height: 80vh"></div>
  </el-card>
</template>

<script setup>
import * as echarts from 'echarts'
import { onMounted } from 'vue'

const getHistorgram = () => {
  document.getElementById('radar').setAttribute('_echarts_instance_', '')
  var chartDom = document.getElementById('radar')
  var myChart = echarts.init(chartDom)
  let app = {}
  var option = {
    color: ['#33ccff ', '#ff99cc'],
    radar: {
      // shape: 'circle',
      indicator: [
        { name: '体重', max: 6500 },
        { name: '打败', max: 16000 },
        { name: '完成目标', max: 30000 },
        { name: '身体年龄', max: 38000 },
        { name: '运动量', max: 52000 },
        // { name: 'Marketing', max: 25000 },
      ],
    },
    series: [
      {
        name: 'Budget vs spending',
        type: 'radar',
        data: [
          {
            value: [4200, 3000, 20000, 35000, 50000, 18000],
            name: 'Allocated Budget',
          },
          {
            value: [5000, 14000, 28000, 26000, 42000, 21000],
            name: 'Actual Spending',
            areaStyle: {
              color: new echarts.graphic.RadialGradient(0.1, 0.6, 1, [
                {
                  color: 'rgba(255, 145, 124, 0.1)',
                  offset: 0,
                },
                {
                  color: '#ff99cc ',
                  offset: 1,
                },
              ]),
            },
          },
        ],
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
