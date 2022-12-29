<script setup lang="ts">
import RwSkeleton from '../RwSkeleton/RwSkeleton.vue';

withDefaults(defineProps<{
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
    <template
      v-for="(item, index) in structure"
      :key="index"
    >
      <div
        class="skeletons-list"
        v-if="item.length > 1"
      >
        <RwSkeleton
          v-for="(subItem, subIndex) in item"
          :key="subIndex"
          :class="['rw-skeleton', subItem, behavior]"
        />
      </div>

      <RwSkeleton
        v-else
        :class="['rw-skeleton', item, behavior]"
      />
    </template>
  </div>
</template>

<style lang="scss">
.rw-skeleton-builder {
  &.horizontal {
    display: flex;
  }
}

</style>
