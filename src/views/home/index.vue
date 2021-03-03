<template>
  <div>
    <el-button @click="changeTitles">父改值</el-button>
    <barEcharts :title="title"></barEcharts>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import barEcharts from './components/barEcharts.vue';

export default defineComponent({
  components: { barEcharts },
  setup() {
    const title = ref('我是父级title');
    const changeTitles = () => {
      title.value = '更改后的值';
    };
    return {
      title,
      changeTitles,
    };
  },
});
</script>

<style scoped lang="scss">
</style>
