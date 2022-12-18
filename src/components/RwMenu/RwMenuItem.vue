<script lang="ts" setup>

import { MenuItem } from '@headlessui/vue';

interface Props {
  disabled?: boolean
}
withDefaults(defineProps<Props>(), {
  disabled: false,
});
</script>

<template>
  <MenuItem
    class="rw-menu-item"
    :disabled="disabled"
    as="template"
    v-slot="{ active, close }"
  >
    <slot
      :active="active"
      :disabled="disabled"
      :close="close"
    />
  </MenuItem>
</template>
