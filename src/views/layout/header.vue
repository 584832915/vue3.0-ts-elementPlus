<template>
  <div class="header">
    <div>
      <i class="el-icon-user-solid"></i>
      <span>我是姓名</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {
    console.log(11111);
  },
});
</script>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: flex-end;
  line-height: 60px;
  padding: 0 30px;
  background-color: #2f54eb;
  color: white;
  .el-icon-user-solid {
    font-size: 24px;
    line-height: 60px;
    margin-right: 10px;
  }
}
</style>
