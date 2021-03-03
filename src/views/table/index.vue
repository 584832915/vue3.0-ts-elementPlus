<template>
  <div>
    <p style="margin-bottom:20px">type:{{type}}</p>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="name" label="姓名">
      </el-table-column>
      <el-table-column prop="age" label="年龄">
      </el-table-column>
      <el-table-column prop="address" label="地址">
      </el-table-column>
    </el-table>
  </div>

</template>

<script lang="ts">
import { useStore } from 'vuex';
import { computed, ComputedRef, defineComponent } from 'vue';
import { IGlobalState } from '@/store/index';
import { ListType, TableType } from '@/typings/table';
export default defineComponent({
  setup() {
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
    };
  },
});
</script>

<style scoped lang="scss">
</style>
