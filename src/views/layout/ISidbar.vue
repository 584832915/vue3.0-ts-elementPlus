<template>
  <el-aside style="overflow-y: hidden;width:200px" class="sidebar">
    <el-scrollbar class="default-scrollbar" wrap-class="default-scrollbar__wrap" view-class="default-scrollbar__view">
      <div id="el-menu">
        <div class="logo">demo</div>
        <el-menu default-active="1-4-1" class="el-menu-vertical-demo" router>
          <el-menu-item index="1" :route="{name:'首页'}">
            <i class="el-icon-s-data"></i>
            <template #title>首页</template>
          </el-menu-item>
          <el-menu-item index="2" :route="{name:'表格'}">
            <i class="el-icon-menu"></i>
            <template #title>表格</template>
          </el-menu-item>
          <el-menu-item index="3" :route="{name:'Suspense'}">
            <i class="el-icon-document"></i>
            <template #title>Suspense</template>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <template #title>导航四</template>
          </el-menu-item>
        </el-menu>
      </div>
    </el-scrollbar>
  </el-aside>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {},
});
</script>

<style scoped lang="scss">
.sidebar {
  transition: all 0.5s ease-out;
  position: relative;
  background-color: #1d1f28;
  .el-menu-vertical-demo {
    background-color: #1d1f28;
    .el-menu-item {
      color: white;
      font-size: 16px;
    }
  }
  .logo {
    font-size: 24px;
    height: 64px;
    line-height: 64px;
    background-color: #2f54eb;
    color: #ffffff;
    text-align: center;
    cursor: pointer;
    border-right: 1px solid white;
    margin-bottom: 20px;
  }
}
.el-menu-item.is-active {
  border-left: 6px solid #2f54eb;
  border-radius: 0px 20px 20px 0px;
  background: linear-gradient(90deg, #383d4c 0%, #3b4255 100%) !important;
  color: white !important;
}
.el-menu-item:hover {
  background: linear-gradient(90deg, #383d4c 0%, #3b4255 100%) !important;
}
.el-menu-item {
  height: 40px;
  line-height: 40px;
}
::v-deep(.el-submenu__title) {
  height: 40px;
  line-height: 40px;
  .svg-icon {
    font-size: 16px;
    margin-right: 8px;
    color: #999999;
  }
}
::v-deep(.el-scrollbar__wrap) {
  overflow-x: hidden !important;
}
::v-deep(.default-scrollbar) {
  width: 100%;
  height: 100%;
}
::v-deep(.el-scrollbar__thumb:hover) {
  background-color: rgba(144, 147, 153, 0);
}
::v-deep(.el-scrollbar__thumb) {
  background-color: rgba(144, 147, 153, 0);
}
</style>
