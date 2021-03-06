<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column :prop="item.prop" :label="item.label" v-for="(item,index) in configs" :key="index">
        <template #default="scope">
          {{filterFunObj[item.filterFun](scope.row[item.prop])}}
        </template>
      </el-table-column>
    </el-table>
  </div>

</template>
<script lang="ts">
import { defineComponent } from 'vue';
import * as filterObj from '@/utils/filterFunction';

export default defineComponent({
  props: {
    tableData: {
      required: true,
    },
    configs: {
      type: Array,
      required: true,
    },
  },
  setup() {
    const filterFunObj = filterObj;
    return {
      filterFunObj,
    };
  },
});
</script>