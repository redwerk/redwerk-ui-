<script setup lang="ts">
import { useVModel } from '@vueuse/core';

import RwCheckboxLabel from './RwCheckboxLabel.vue';
import RwCheckboxInput from './RwCheckboxInput.vue';

interface RwCheckboxProps {
  modelValue: boolean;
}
const props = defineProps<RwCheckboxProps>();

interface Emits {
  (e: 'update:modelValue', value: boolean): void;
}
const emit = defineEmits<Emits>();

const selected = useVModel(props, 'modelValue', emit);
</script>

<template>
  <label class="rw-checkbox">
    <slot
      name="contentSlot"
      v-bind="{ modelValue: selected }"
    >
      <RwCheckboxInput v-model="selected" />

      <RwCheckboxLabel>
        <slot />
      </RwCheckboxLabel>
    </slot>
  </label>
</template>
