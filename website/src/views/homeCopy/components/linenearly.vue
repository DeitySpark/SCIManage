<template>
  <div id="linenearly" style="width: 100%; height: 100%"></div>
</template>

<script setup name="GMVnearly">
import * as echarts from 'echarts'
import { onMounted } from 'vue'

const getEcharts = () => {
  var chartDom = document.getElementById('linenearly')
  var myChart = echarts.init(chartDom)

  const option = {
    tooltip: {
      //鼠标悬停时显示对应数据
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    color: ['#87A2E8FF', '#74CCCCFF'],
    title: {
      text: '近一年的DAU/DNU',
      top: '8px',
      left: '10px',
      bottom: '8px',
      textStyle: {
        color: '#191e24',
        fontSize: '14',
      },
    },
    legend: {
      // 图例
      data: ['DAU', 'DNU'],
      top: 8,
      right: 16, // 修改位置
      icon: 'circle', //原型
      textStyle: {
        color: '#191e2480', //字体颜色
      },
    },
    grid: {
      // 上下左右 边距
      top: '8%',
      left: '3%',
      right: '3%',
      bottom: '8%',
      top: '15%',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        axisTick: { show: false },
        data: [
          '1月',
          '2月',
          '3月',
          '4月',
          '5月',
          '6月',
          '7月',
          '8月',
          '9月',
          '10月',
          '11月',
          '12月',
        ],
        axisLine: {
          // 轴线的颜色以及宽度
          lineStyle: {
            color: '#A6A6A628',
          },
        },
        axisLabel: {
          // 轴文字的配置
          show: true,
          textStyle: {
            color: '#191e2480',
          },
        },
        splitLine: {
          // 分割线配置
          lineStyle: {
            color: '#A6A6A628',
            // type: "dashed", // 虚线
          },
        },
      },
    ],
    yAxis: [
      {
        min: 0, // 最小值
        // splitNumber: 3, //划分3格
        type: 'value',
        axisLine: {
          // 轴线的颜色以及宽度
          show: false,
        },
        axisLabel: {
          // 轴文字的配置
          show: true,
          //   textStyle: {
          //     color: "#fff",
          //   },
        },
        splitLine: {
          // 分割线配置
          lineStyle: {
            color: '#A6A6A628',
            // type: "dashed",
          },
        },
      },
    ],
    series: [
      {
        name: 'DAU',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series',
        },
        data: [120, 132, 101, 134, 90, 230, 210, 134, 90, 230, 210, 230],
      },
      {
        name: 'DNU',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series',
        },
        data: [120, 132, 101, 134, 90, 230, 210, 134, 90, 230, 210, 290],
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
    getEcharts()
  }, 1000)
})
</script>
