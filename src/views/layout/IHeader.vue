<template>
  <div class="header">
    <div>

    </div>
    <!-- <el-select v-model="value" placeholder="切换表格内容" @change="handleCommand">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
      </el-option>
    </el-select> -->
    <div>
      <i class="el-icon-user-solid"></i>
      <span>我是姓名</span>
    </div>
  </div>
</template>

<script lang="ts">
import { useStore } from "vuex";
import { defineComponent, ref } from "vue";
import { ItableState, OptionsType, TableType } from "../../typings/table";
import * as ActionType from "@/store/action-types";
export default defineComponent({
  setup() {
    const value = ref("");
    const options: OptionsType[] = [
      { label: "type1", value: 1 },
      { label: "type2", value: 2 },
      { label: "type3", value: 3 }
    ];
    const store = useStore<ItableState>();
    const handleCommand = (val: TableType) => {
      store.commit(ActionType.SET_CURRENTTYPE, val);
    };
    return {
      value,
      options,
      handleCommand
    };
  }
});
</script>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  line-height: 60px;
  padding: 0 30px;
  background-color: #2f54eb;
  color: white;
  .el-icon-user-solid {
    font-size: 24px;
    line-height: 60px;
    margin-right: 10px;
  }
  .el-select {
    margin-top: 12px;
  }
}
</style>
