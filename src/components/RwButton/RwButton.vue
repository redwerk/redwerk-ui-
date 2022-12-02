<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(defineProps<{
  loading?: boolean;
  type?: 'button' | 'submit';
  href?: string;
  to?: string | Record<string, any>;
  target?: '_self' | '_blank' | '_parent' | '_top',
  rel?: string,
  tag?: string,
}>(), {
  type: 'button',
  href: undefined,
  to: undefined,
  target: undefined,
  rel: undefined,
  tag: undefined,
});

interface Emits {
  (e: 'click'): void;
}
const emit = defineEmits<Emits>();

const component = computed(() => {
  if (props.tag) {
    return props.tag;
  }

  if (props.href) {
    return 'a';
  }

  if (props.to) {
    return 'router-link';
  }

  return 'button';
});
</script>

<template>
  <component
    :is="component"
    class="rw-button"
    :type="type"
    @click="emit('click')"
    :href="href"
    :to="to"
    :target="target"
  >
    <slot
      v-if="$slots.loadingSlot && loading"
      name="loadingSlot"
    />

    <slot v-else />
  </component>
</template>

<style lang="scss">
.rw-button {
  outline: none;
  text-align: center;
  border: none;
  font-size: 14px;
  padding: 10px 16px;
  text-transform: uppercase;
  box-shadow: 0 1px 5px #0003, 0 2px 2px #00000024, 0 3px 1px -2px #0000001f;
  cursor: pointer;
  border-radius: 3px;
  line-height: 0.8em;
  background-color: transparent;
  text-decoration: none;
}
</style>
