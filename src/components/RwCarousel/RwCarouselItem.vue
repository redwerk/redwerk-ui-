<script lang="ts" setup>
import {
  onBeforeUnmount, onMounted, ref, getCurrentInstance, computed,
} from 'vue';
import { useIntersectionObserver } from '@vueuse/core';

const emit = defineEmits<{
  (e: 'visibilityChange', value: boolean): void;
}>();

const slideRef = ref<HTMLDivElement>();

const slideKey = computed(() => `slide-${String(getCurrentInstance()?.vnode.key)}`);

const intersection = ref();

const isVisible = ref(false);

function startIntersection() {
  if (!slideRef.value) {
    return;
  }

  intersection.value = useIntersectionObserver(
    slideRef,
    ([{ isIntersecting }]) => {
      isVisible.value = isIntersecting;
      emit('visibilityChange', isIntersecting);
    },
  );
}

function stopIntersection() {
  if (intersection.value) {
    intersection.value.stop();
    intersection.value = undefined;
  }
}

onMounted(() => {
  startIntersection();
});

onBeforeUnmount(() => {
  stopIntersection();
});
</script>

<template>
  <div
    class="rw-carousel-item"
    ref="slideRef"
    :data-slide="slideKey"
  >
    <slot :visible="isVisible" />
  </div>
</template>
