<template>
  <div>
    等一秒钟~~~~~~~
    <Suspense>
      <template #default>
        <SuspenseDemo></SuspenseDemo>
      </template>
      <template #fallback>
        <div>
          loading~~~~~~~~~~~~~~~
        </div>
      </template>
    </Suspense>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SuspenseDemo from './components/Suspense.vue';

export default defineComponent({
  components: { SuspenseDemo },
  setup() {},
});
</script>

<style scoped lang="scss">
</style>
