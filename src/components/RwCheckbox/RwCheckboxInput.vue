<script setup lang="ts">
import { useVModel } from '@vueuse/core';
import type { RwCheckboxEvents, RwCheckboxProps } from './types';

interface Props extends Omit<RwCheckboxProps, keyof RwCheckboxEvents> {}
const props = defineProps<Props>();

interface Emits {
  (e: 'update:modelValue', value: boolean): void;
}
const emit = defineEmits<Emits>();

const selected = useVModel(props, 'modelValue', emit);
</script>

<template>
  <input
    v-model="selected"
    :checked="selected"
    class="rw-checkbox__input"
    type="checkbox"
  >

  <span
    class="rw-checkbox__checkmark"
  />
</template>
