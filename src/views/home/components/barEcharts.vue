<template>
  <div class="title">
    {{title}}
  </div>
  <div id="echarts"></div>
</template>

<script lang="ts">
import { defineComponent, nextTick, onMounted, watch } from 'vue';
import { onBeforeRouteLeave } from 'vue-router';
interface YaxisType {
  min: number;
  max: number;
}
export default defineComponent({
  props: {
    title: {
      type: String,
    },
  },
  setup(prop) {
    let myChart: any;
    const option = {
      title: {
        text: '动态数据',
        subtext: '纯属虚构',
      },
      grid: {
        right: '2%',
        left: '6%',
      },
      legend: {
        data: ['昨日进出', '最新进出'],
      },
      xAxis: {
        axisLine: {
          lineStyle: {
            color: 'rgba(217, 217, 217, 1)', // x轴边框颜色
            width: 1,
          },
        },
        axisTick: {
          alignWithLabel: true,
        },
        axisLabel: {
          margin: 10,
          interval: 0,
          rotate: 0,
          textStyle: {
            fontSize: 14,
          },
          color: 'rgba(255, 255, 255)',
        },
        data: [],
      },
      yAxis: {
        type: 'value',
        axisTick: {
          show: false,
        },
        axisLine: {
          lineStyle: {
            color: 'white', // y轴边框颜色
            width: 0,
          },
        },
        min: function (value: YaxisType) {
          if (value.min > 100) {
            return 100;
          } else {
            return 0;
          }
        },
        max: function (value: YaxisType) {
          return value.max;
        },
        axisLabel: {
          margin: 20,
          interval: 'auto',
          textStyle: {
            fontSize: 14,
          },
          color: 'white',
          formatter: function (value: number) {
            if (value > 10000) {
              return value / 10000 + 'W';
            } else if (value > 1000) {
              return value / 1000 + 'K';
            } else {
              return value;
            }
          },
        },
        splitLine: {
          lineStyle: {
            color: 'rgba(232, 232, 232, 1)',
            type: 'dotted', // 折线图表格行边框样式
          },
        },
      },
      tooltip: {
        axisPointer: {
          type: 'line',
        },
        trigger: 'axis',
        backgroundColor: 'white',
        textStyle: {
          color: 'rgba(0,0,0,0.65)',
        },
        extraCssText: 'box-shadow: 0 2px  8px 0 rgba(0, 0, 0, 0.15);',
        padding: [5, 15],
      },
      series: [
        {
          name: '最新进出',
          data: [20, 40, 20, 50, 40, 10, 23, 20],
          type: 'bar',
          showBackground: false,
          barWidth: 30,
          itemStyle: {
            normal: {
              color: '#59A7F9',
            },
            emphasis: {
              color: '#1A7BE2',
            },
          },
        },
        {
          name: '昨日进出',
          type: 'line',
          smooth: true,
          symbol: 'circle',
          symbolSize: 5,
          showSymbol: false,
          lineStyle: {
            normal: {
              width: 3, // 波形图波浪的边框
              borderWidth: 3,
              color: '#FFA731',
            },
          },
          itemStyle: {
            normal: {
              color: '#FFA731',
            },
          },
          data: [12, 50, 56, 10, 12, 15, 30, 50],
        },
      ],
    };
    let timer: NodeJS.Timeout;
    onMounted(() => {
      const timeArr: string[] = [];
      for (let i = 0; i <= 7; i++) {
        timeArr.push(moment().subtract(i, 'minutes').format('HH:mm:ss'));
      }
      nextTick(() => {
        myChart = echarts.init(document.getElementById('echarts'), 'dark');
        (option.xAxis.data as string[]) = timeArr.reverse();
        myChart.setOption(option);
        timer = setInterval(function () {
          console.log('timer');
          option.xAxis.data.shift();
          (option.xAxis.data as string[]).push(moment().format('HH:mm:ss'));
          option.series[0].data.shift();
          option.series[1].data.shift();
          option.series[0].data.push(Math.round(Math.random() * 1000));
          option.series[1].data.push(Math.round(Math.random() * 1000));
          myChart.setOption(option);
        }, 5000);
      });
    });
    onBeforeRouteLeave(() => {
      clearInterval(timer);
    });
    watch(
      () => prop.title,
      (title) => {
        console.log(title, 888888);
      }
    );

    return {};
  },
});
</script>

<style scoped lang="scss">
#echarts {
  width: 100%;
  height: 700px;
}
.title {
  font-size: 26px;
  margin-bottom: 20px;
}
</style>
