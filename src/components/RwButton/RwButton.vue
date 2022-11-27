<script setup lang="ts">
withDefaults(defineProps<{
  loading?: boolean;
  type?: 'button' | 'submit';
}>(), {
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
