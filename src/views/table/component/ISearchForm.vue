<template>
  <el-form ref="form" :model="searchForm" label-width="100px" inline>
    <el-form-item v-for="(item, index) in serachConfig" :key="index" size="small" :label="item.type!=='none'?item.label+'：':''">
      <div v-if="item.type=='input'">
        <el-input v-model="searchForm[item.modelName]" :placeholder="item.placeholder?'请输入'+item.placeholder:'请输入'+item.label"></el-input>
      </div>
      <div v-if="item.type=='select'">
        <el-select v-model="searchForm[item.modelName]" :placeholder="item.placeholder?'请输入'+item.placeholder:'请输入'+item.label">
          <el-option v-for="(ele, index) in item.options" :key="index" :label="ele.label" :value="ele.value"></el-option>
        </el-select>
      </div>
    </el-form-item>
    <el-button @click="search">搜索</el-button>
  </el-form>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue';

export default defineComponent({
  props: {
    serachConfig: {
      type: Array,
      required: true,
    },
  },
  setup() {
    const searchForm = reactive({});
    const search = () => {
      console.log(searchForm);
    };
    return {
      searchForm,
      search,
    };
  },
});
</script>
<style lang="scss">
</style>