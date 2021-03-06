<template>
  <div>
    <div style="margin-bottom:20px">在 3.x 中，过滤器已删除，不再支持。相反地，我们建议用方法调用或计算属性替换它们。</div>

    <ISearchForm :serachConfig='serachConfig'></ISearchForm>

    <ITable :tableData="tableData" :configs="configs"></ITable>

  </div>

</template>

<script lang="ts">
import { useStore } from 'vuex';
import { computed, ComputedRef, defineComponent } from 'vue';
import { IGlobalState } from '@/store/index';
import {
  ListType,
  TableType,
  configType,
  serachConfigType,
} from '@/typings/table';
import ITable from './component/ITable.vue';
import ISearchForm from './component/ISearchForm.vue';
export default defineComponent({
  components: { ITable, ISearchForm },
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
    const serachConfig: serachConfigType[] = [
      {
        type: 'input',
        label: '输入框',
        modelName: 'employerInfo',
        placeholder: '',
      },
      {
        type: 'select',
        label: '请选择',
        modelName: 'orderStatus',
        options: [
          { label: '全部', value: '' },
          { label: '分类1', value: '-2' },
          { label: '分类2', value: '-1' },
        ],
      },
    ];
    const store = useStore<IGlobalState>();
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
      serachConfig,
    };
  },
});
</script>

<style scoped lang="scss">
</style>
