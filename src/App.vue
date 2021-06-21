<template>
  <div id="nav">
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
export default defineComponent({});
</script>
<style lang="scss">
#nav {
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0;
  right: 0;
  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.2s ease;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0;
  }
}
</style>
