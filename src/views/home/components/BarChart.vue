// 柱状图
<template>
  <div id="barchart"></div>
</template>
<script lang="ts">
import { defineComponent, nextTick, onMounted } from "vue";
interface DataType {
  xData: string[];
  yData: number[];
}
export default defineComponent({
  setup() {
    const data = (function () {
      const data: DataType = {
        xData: [],
        yData: []
      };
      for (let i = 1; i < 13; i++) {
        data.xData.push(i + "月份");
        data.yData.push(Math.round(Math.random() * 100));
      }
      return data;
    })();
    const yData2 = new Array(12).fill(0);
    data.yData.forEach((val, index) => {
      if (val > 60) {
        yData2[index] = val - 60;
      }
    });
    const option = {
      backgroundColor: "#344b58",
      title: {
        text: "本年商场顾客男女人数统计",
        subtext: "BY Wang Dingding",
        x: "4%",

        textStyle: {
          color: "#fff",
          fontSize: "22"
        },
        subtextStyle: {
          color: "#90979c",
          fontSize: "16"
        }
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
          textStyle: {
            color: "#fff"
          }
        }
      },
      grid: {
        borderWidth: 0,
        top: 110,
        bottom: 95,
        textStyle: {
          color: "#fff"
        }
      },
      legend: {
        x: "4%",
        top: "8%",
        textStyle: {
          color: "#90979c"
        },
        data: ["女", "男", "平均"]
      },

      calculable: true,
      xAxis: [
        {
          type: "category",
          axisLine: {
            lineStyle: {
              color: "#90979c"
            }
          },
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          splitArea: {
            show: false
          },
          axisLabel: {
            interval: 0
          },
          data: data.xData
        }
      ],
      yAxis: [
        {
          type: "value",
          splitLine: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: "#90979c"
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            interval: 0
          },
          splitArea: {
            show: false
          }
        }
      ],
      dataZoom: [
        {
          show: true,
          height: 30,
          xAxisIndex: [0],
          bottom: 30,
          start: 10,
          end: 80,
          handleIcon:
            "path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z",
          handleSize: "110%",
          handleStyle: {
            color: "#d3dee5"
          },
          textStyle: {
            color: "#fff"
          },
          borderColor: "#90979c"
        },
        {
          type: "inside",
          show: true,
          height: 15,
          start: 1,
          end: 35
        }
      ],
      series: [
        {
          name: "女",
          type: "bar",
          stack: "总量",
          barMaxWidth: 35,
          barGap: "10%",
          itemStyle: {
            normal: {
              color: "rgba(255,144,128,1)",
              label: {
                show: true,
                textStyle: {
                  color: "#fff"
                },
                position: "inside",
                formatter: function (p: Record<string, any>) {
                  return p.value > 0 ? p.value : "";
                }
              }
            }
          },
          data: data.yData
        },
        {
          name: "男",
          type: "bar",
          stack: "总量",
          itemStyle: {
            normal: {
              color: "rgba(0,191,183,1)",
              barBorderRadius: 0,
              label: {
                show: true,
                position: "inside",
                formatter: function (p: Record<string, any>) {
                  return p.value > 0 ? p.value : "";
                }
              }
            }
          },
          data: yData2
        }
      ]
    };
    onMounted(() => {
      nextTick(() => {
        const myChart = echarts.init(
          document.getElementById("barchart"),
          "dark"
        );
        myChart.setOption(option);
        console.log(111111);
      });
    });
    return {};
  }
});
</script>

<style scoped lang="scss">
#barchart {
  width: 100%;
  height: 400px;
}
</style>