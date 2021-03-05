<template>
  <el-container id="nav">
    <sideBar />
    <el-container style="width: 100%" class="sss">
      <el-header>
        <myHeader></myHeader>
      </el-header>
      <el-main>
        <myContent></myContent>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';
import sideBar from './sidbar.vue';
import myHeader from './header.vue';
import myContent from './main.vue';
export default defineComponent({
  components: { sideBar, myHeader, myContent },
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
