<script setup lang="ts">
import type { RButtonEvents, RButtonProps } from './types';

interface Props extends Omit<RButtonProps, keyof RButtonEvents> {}
withDefaults(defineProps<Props>(), {
  type: 'button',
});

interface Emits {
  (e: 'click'): void;
}
const emit = defineEmits<Emits>();
</script>

<template>
  <button
    class="rw-button"
    :type="type"
    @click="emit('click')"
  >
    <slot
      v-if="$slots.loadingSlot && loading"
      name="loadingSlot"
    />

    <slot v-else />
  </button>
</template>
