<script setup lang="ts">
import { useVModel } from '@vueuse/core';
import { computed, ref } from 'vue';
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

const currentIndex = ref(value.value);

function getCurrentIconName(countNumber: number) {
  if (countNumber <= Math.floor(currentIndex.value)) {
    return 'fullSlot';
  }

  if (countNumber === Math.ceil(currentIndex.value)) {
    return 'partSlot';
  }

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
  currentIndex.value = item;
}

function setDefaultRating() {
  currentIndex.value = value.value;
}
</script>

<template>
  <div class="rw-rating">
    <label
      class="rw-rating__item"
      v-for="(icon, index) in icons"
      @focusin="setReviewRating(index + 1)"
      @focusout="setDefaultRating()"
      @mouseover="setReviewRating(index + 1)"
      @mouseout="setDefaultRating()"
      :key="index"
      tabindex="0"
    >
      <input
        class="rw-rating__item-input"
        v-model="value"
        :value="index + 1"
        name="rating"
        type="radio"
      >
      <slot
        name="emptySlot"
        v-if="icon === 'emptySlot'"
      >
        empty
      </slot>

      <slot
        name="fullSlot"
        v-else-if="icon === 'fullSlot'"
      >
        full
      </slot>

      <slot
        name="partSlot"
        v-else
      >
        part
      </slot>
    </label>
  </div>
</template>

<style scoped lang="scss">
.rw-rating {
  &__item {
    cursor: pointer;

    &-input {
      display: none;
    }
  }
}
</style>
