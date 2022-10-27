<script setup lang="ts">
import { useVModel } from '@vueuse/core';
import { computed } from 'vue';
// import { RwRatingEvents, RwRatingProps } from './types';
// interface Props extends Omit<RwRatingProps, keyof RwRatingEvents> {}

interface RwRatingEvents {
  ['onUpdate:modelValue']: () => void;
}
interface RwRatingProps extends RwRatingEvents {
  modelValue: number;
  count?: number;
}

const props = withDefaults(defineProps<RwRatingProps>(), {
  count: 5,
});

interface Emits {
  (e: 'update:modelValue', value: boolean): void;
}
const emit = defineEmits<Emits>();

const value = useVModel(props, 'modelValue', emit);

function getCurrentIconName(countNumber: number) {
  if (countNumber <= value.value) {
    return 'fullSlot';
  }

  // if (countNumber <= value.value && !Number.isInteger(value.value)) {
  //   return 'partSlot';
  // }

  return 'emptySlot';
}

const icons = computed(() => {
  const iconList: string[] = [];
  for (let i = 0; i < props.count; i += 1) {
    iconList.push(getCurrentIconName(i + 1));
  }

  return iconList;
});

function setReviewRating(item: number) {
  console.log('setReviewRating', icons.value);
}

function setDefaultRating() {
  console.log('setReviewRating');
}
</script>

<template>
  <div class="rw-rating">
    <label
      class="rw-rating__item"
      v-for="(icon, index) in icons"
      @mouseover="setReviewRating(index + 1)"
      @mouseout="setDefaultRating()"
      :key="index"
    >
      <input
        class="rw-rating__item-input"
        v-model="value"
        :value="index + 1"
        name="rating"
        type="radio"
      >

      <slot
        :name="icon"
      />
    </label>
  </div>
</template>

<style scoped lang="scss">
.rw-rating {
  &__item {
    &-input {
      display: none;
    }
  }
}
</style>
