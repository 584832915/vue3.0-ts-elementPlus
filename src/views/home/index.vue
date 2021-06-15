<template>
  <div>
    <el-button @click="changeTitles">父改值</el-button>
    <BarChart></BarChart>
    <BarEcharts :title="title"></BarEcharts>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import BarEcharts from "./components/BarEcharts.vue";
import BarChart from "./components/BarChart.vue";

export default defineComponent({
  components: { BarEcharts, BarChart },
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
