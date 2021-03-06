<template>
  <div>
    <div>在 3.x 中，过滤器已删除，不再支持。相反地，我们建议用方法调用或计算属性替换它们。</div>

    <p style="margin:20px 0">type:{{type}}</p>

    <ITable :tableData="tableData" :configs="configs"></ITable>
  </div>

</template>

<script lang="ts">
import { useStore } from 'vuex';
import { computed, ComputedRef, defineComponent } from 'vue';
import { IGlobalState } from '@/store/index';
import { ListType, TableType, configType } from '@/typings/table';
import ITable from './component/ITable.vue';
export default defineComponent({
  components: { ITable },
  setup() {
    const configs: configType[] = [
      {
        label: '姓名',
        prop: 'name',
        filterFun: 'strNull',
      },
      {
        label: '年龄',
        prop: 'age',
        filterFun: 'strNull',
      },
      {
        label: '地址',
        prop: 'address',
        filterFun: 'strNull',
      },
    ];
    const store = useStore<IGlobalState>();
    console.log(store);
    const type: ComputedRef<TableType> = computed(
      () => store.state.table.currentType
    );
    const tableData: ComputedRef<ListType[]> = computed(
      () => store.state.table.tableData
    );
    return {
      type,
      tableData,
      configs,
    };
  },
});
</script>

<style scoped lang="scss">
</style>
