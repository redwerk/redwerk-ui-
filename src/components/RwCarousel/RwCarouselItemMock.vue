<script lang="ts" setup>
import {
  onBeforeUnmount, onMounted, ref, getCurrentInstance, computed,
} from 'vue';
import { useIntersectionObserver } from '@vueuse/core';

const emit = defineEmits<{
  (e: 'visibilityChange', value: boolean): void;
}>();

const slideRef = ref<HTMLDivElement>();

const componentKey = computed(() => getCurrentInstance()?.vnode.key as string || '');
const slideKey = computed(() => `slide-mock-${componentKey.value}`);

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
    {
      rootMargin: '0px',
      // threshold: 1.0,
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
    class="rw-carousel-item-mock"
    ref="slideRef"
    :data-slide="slideKey"
  >
    <slot :visible="isVisible" />
  </div>
</template>
