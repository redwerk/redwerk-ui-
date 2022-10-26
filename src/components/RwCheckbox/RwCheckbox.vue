<script setup lang="ts">
import { useVModel } from '@vueuse/core';
import type { RwCheckboxEvents, RwCheckboxProps } from './types';
import RwCheckboxLabel from './RwCheckboxLabel.vue';
import RwCheckboxInput from './RwCheckboxInput.vue';

interface Props extends Omit<RwCheckboxProps, keyof RwCheckboxEvents> {}
const props = defineProps<Props>();

interface Emits {
  (e: 'update:modelValue', value: boolean): void;
}
const emit = defineEmits<Emits>();

const selected = useVModel(props, 'modelValue', emit);
</script>

<template>
  <label class="rw-checkbox">
    <!--    <slot>-->
    <RwCheckboxInput
      v-model="selected"
    />

    <RwCheckboxLabel>
      <slot name="labelSlot" />
    </RwCheckboxLabel>
    <!--    </slot>-->
  </label>
</template>
