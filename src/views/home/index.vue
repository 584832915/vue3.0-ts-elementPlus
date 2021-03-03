<template>
  <div>
    <barEcharts :title="title" @changeTitle="changeTitle"></barEcharts>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import barEcharts from './components/barEcharts.vue';

export default defineComponent({
  components: { barEcharts },
  setup() {
    let title = '我是父级title';
    const changeTitle = (val: string) => {
      title = val;
    };
    return {
      title,
      changeTitle,
    };
  },
});
</script>

<style scoped lang="scss">
</style>
