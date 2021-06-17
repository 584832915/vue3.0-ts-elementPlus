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
      const dataL: DataType = {
        xData: [],
        yData: []
      };
      for (let i = 1; i < 13; i++) {
        dataL.xData.push(i + "月份");
        dataL.yData.push(Math.round(Math.random() * 100));
      }
      return dataL;
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
        text: "demo",
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
        },
        formatter: (params: Record<string, any>) => {
          return `<span style="color:red">${
            params[0].data + params[1].data
          }</span>`;
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
        data: ["女", "男"]
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
          type: "slider",
          xAxisIndex: 0,
          backgroundColor: "#999",
          show: true,
          height: 10,
          start: 0,
          end: 30
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