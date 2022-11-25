<script setup lang="ts">
import { useVModel } from '@vueuse/core';

interface Props {
  modelValue: boolean;
}
const props = defineProps<Props>();

interface Emits {
  (e: 'update:modelValue', value: boolean): void;
}
const emit = defineEmits<Emits>();

const selected = useVModel(props, 'modelValue', emit);
</script>

<template>
  <span class="rw-checkbox-input">
    <input
      v-model="selected"
      :checked="selected"
      class="rw-checkbox-input__input"
      type="checkbox"
    >

    <span
      class="rw-checkbox-input__checkmark"
    />
  </span>
</template>
