<script setup lang="ts">
import { useVModel } from '@vueuse/core';
import { computed, ref } from 'vue';
import RwIcon from '../RwIcon/RwIcon.vue';
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

function setReviewValue(item: number) {
  currentIndex.value = item;
}

function setInitialValue() {
  currentIndex.value = value.value;
}

function setValue(item: number) {
  currentIndex.value = item;
  value.value = item;
}
</script>

<template>
  <div class="rw-rating">
    <label
      class="rw-rating__item"
      v-for="(icon, index) in icons"
      @focusin="setReviewValue(index + 1)"
      @focusout="setInitialValue()"
      @mouseover="setReviewValue(index + 1)"
      @mouseout="setInitialValue()"
      @keyup.enter="setValue(index + 1)"
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
        <RwIcon name="mdi:star-outline" />
      </slot>

      <slot
        name="fullSlot"
        v-else-if="icon === 'fullSlot'"
      >
        <RwIcon name="mdi:star" />
      </slot>

      <slot
        name="partSlot"
        v-else
      >
        <RwIcon name="mdi:star-half-full" />
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
