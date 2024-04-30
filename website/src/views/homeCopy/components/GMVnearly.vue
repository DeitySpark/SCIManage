<template>
  <div id="main" style="width: 100%; height: 100%"></div>
</template>

<script setup name="GMVnearly">
import * as echarts from 'echarts'
import { onMounted } from 'vue'

const getEcharts = () => {
  var chartDom = document.getElementById('main')
  var myChart = echarts.init(chartDom)

  const option = {
    tooltip: {
      //鼠标悬停时显示对应数据
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    title: {
      text: '出入库情况',
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
      data: ['出库', '入库'],
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
        max: 500, //最大值
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
        name: '出库',
        type: 'bar',
        barWidth: 10, // 柱图宽度
        barGap: '30%',
        // label: labelOption,
        emphasis: {
          focus: 'series',
        },
        data: [320, 332, 401, 334, 390, 320, 332, 301, 334, 390, 320, 332],
        // ↓ 这里可以改变渐变色的方向
        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
          {
            offset: 0,
            color: '#6E48E6',
          },
          {
            offset: 1,
            color: '#3AA6FA ',
          },
        ]),
      },
      {
        name: '入库',
        type: 'bar',
        barWidth: 10, // 柱图宽度
        // label: labelOption,
        emphasis: {
          focus: 'series',
        },
        data: [220, 182, 191, 234, 290, 220, 182, 191, 234, 290, 220, 182],
        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
          {
            offset: 0,
            color: '#9DDD92',
          },
          {
            offset: 1,
            color: '#10BFAA',
          },
        ]),
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
