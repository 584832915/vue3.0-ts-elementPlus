<template>
  <div>
    <el-button @click="changeTitles">父改值</el-button>
    <BarChart></BarChart>
    <echarts :title="title"></echarts>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import BarChart from "./components/BarChart.vue";
import echarts from "./components/echarts.vue";
export default defineComponent({
  components: { echarts, BarChart },
  setup() {
    const title = ref("我是父级title");
    const changeTitles = () => {
      title.value = "更改后的值";
    };
    return {
      title,
      changeTitles
    };
  }
});
</script>

<style scoped lang="scss">
</style>
