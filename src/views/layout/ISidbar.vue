<template>
  <el-aside style="overflow-y: hidden;width:200px" class="sidebar">
    <el-scrollbar class="default-scrollbar" wrap-class="default-scrollbar__wrap" view-class="default-scrollbar__view">
      <div id="el-menu">
        <div class="logo">demo</div>
        <el-menu class="el-menu-vertical-demo" router>
          <template v-for="(item,index) in sidbarList" :key="index">
            {{currentRoute}}
            <el-menu-item :index="index+''" :route="{name:item.name}" :class="currentRoute == item.name?'is-active':''">
              <i class="el-icon-s-data"></i>
              <template #title>{{item.name}}</template>
            </el-menu-item>
          </template>
        </el-menu>
      </div>
    </el-scrollbar>
  </el-aside>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
export default defineComponent({
  setup() {
    const route = useRoute();
    const currentRoute = ref("");
    onMounted(() => {
      currentRoute.value = route.name as string;
    });
    const sidbarList = computed(() =>
      JSON.parse(sessionStorage.getItem("ruleList") as string)
    );
    watch(
      () => route.name,
      (val) => {
        currentRoute.value = val as string;
      }
    );
    return {
      sidbarList,
      currentRoute
    };
  }
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
