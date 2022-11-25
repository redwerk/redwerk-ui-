<script setup lang="ts">
import { useVModel } from '@vueuse/core';
import { computed, ref } from 'vue';
import RwIcon from '../RwIcon/RwIcon.vue';

interface Props {
  modelValue: number;
  count?: number;
}
const props = withDefaults(defineProps<Props>(), {
  count: 5,
});

interface Emits {
  (e: 'update:modelValue', value: boolean): void;
}
const emit = defineEmits<Emits>();

const value = useVModel(props, 'modelValue', emit);

const focusedStar = ref(value.value);

function getCurrentIconName(countNumber: number) {
  if (countNumber <= Math.floor(focusedStar.value)) {
    return 'fullSlot';
  }

  if (countNumber === Math.ceil(focusedStar.value)) {
    return 'partSlot';
  }

  return 'emptySlot';
}

const icons = computed(() => {
  const iconList: string[] = [];
  for (let i = 1; i < props.count + 1; i += 1) {
    iconList.push(getCurrentIconName(i));
  }

  return iconList;
});

function setReviewValue(item: number) {
  focusedStar.value = item;
}

function setInitialValue() {
  focusedStar.value = value.value;
}

function setValue(item: number) {
  focusedStar.value = item;
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
