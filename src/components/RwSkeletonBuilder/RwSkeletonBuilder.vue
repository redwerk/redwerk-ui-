<script setup lang="ts">
import RwSkeleton from '../RwSkeleton/RwSkeleton.vue';

const props = withDefaults(defineProps<{
  structure: string[][],
  loading: boolean,
  horizontal: boolean,
  behavior: string,
}>(), {
  structure: () => ([]),
  loading: false,
  horizontal: false,
  behavior: 'gradient',
});
</script>

<template>
  <slot v-if="!loading" />

  <div
    :class="['rw-skeleton-builder', { horizontal }]"
    v-else
  >
    <RwSkeleton
      v-for="(item, index) in structure"
      :key="index"
      :class="['rw-skeleton', item, behavior]"
    />
  </div>
</template>

<style lang="scss">
.rw-skeleton-builder {
  &.horizontal {
    display: flex;
  }
}

</style>
