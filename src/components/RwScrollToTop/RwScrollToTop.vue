<script setup lang="ts">
import RwButton from '../RwButton/RwButton.vue';
import RwIcon from '../RwIcon/RwIcon.vue';

function scrollToTop() {
  window.scrollTo(0, 0);
}
</script>

<template>
  <RwButton
    class="rw-scroll-to-top"
    @click="scrollToTop()"
  >
    <slot>
      <RwIcon name="mdi:arrow-up" />
    </slot>
  </RwButton>
</template>

<style scoped lang="scss">
.rw-scroll-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1;
}
</style>
