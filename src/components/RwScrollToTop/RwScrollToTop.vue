<script setup lang="ts">
import { onBeforeMount, ref } from 'vue';
import RwButton from '../RwButton/RwButton.vue';
import RwIcon from '../RwIcon/RwIcon.vue';

const showScrollToTop = ref(false);

function onUserScroll() {
  const screenHeight = window.innerHeight;
  showScrollToTop.value = window.scrollY >= screenHeight;
}

function scrollToTop() {
  if (window) {
    window.scrollTo(0, 0);
  }
}

onBeforeMount(() => {
  window.document.addEventListener('scroll', onUserScroll);
});
</script>

<template>
  <RwButton
    class="rw-scroll-to-top"
    v-show="showScrollToTop"
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
  padding: 0;
  border-radius: 50%;
  width: 40px;
  height: 40px;
}
</style>
