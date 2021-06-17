<template>
  <div>{{title}}</div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  async setup() {
    const title = "我出来了~~~~";
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("");
      }, 1000);
    });
    return {
      title
    };
  }
});
</script>

<style scoped lang="scss">
</style>
