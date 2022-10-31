<template>
  <RwSelect
    v-model="modelValue"
    itemValue="id"
    itemTitle="label"
    :items="items"
  >
    Example

    <template #placeholderSlot>Select item</template>
  </RwSelect>
</template>

<script setup lang="ts">
import {ref} from "vue";
import RwSelect from 'redwerk-ui-/RwSelect'

const modelValue = ref(null)

items = [
  { id: 1, label: 'Example 1' },
  { id: 2, label: 'Example 2' },
];
</script>
