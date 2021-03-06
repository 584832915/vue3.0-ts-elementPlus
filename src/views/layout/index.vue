<template>
  <el-container id="nav">
    <MysideBar />
    <el-container style="width: 100%" class="sss">
      <el-header>
        <MyHeader></MyHeader>
      </el-header>
      <el-main>
        <MyContent></MyContent>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';
import MysideBar from './ISidbar.vue';
import MyHeader from './IHeader.vue';
import MyContent from './IMain.vue';
export default defineComponent({
  components: { MysideBar, MyHeader, MyContent },
  setup() {
    const route = useRoute();
    const id = route.query.id;
    console.log(id);
  },
});
</script>

<style scoped lang="scss">
.el-header {
  padding: unset;
}
</style>
