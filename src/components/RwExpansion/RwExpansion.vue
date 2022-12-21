<script setup lang="ts">
import {
  Disclosure, DisclosureButton, DisclosurePanel,
} from '@headlessui/vue';

const props = withDefaults(defineProps<{
  as: string,
  defaultOpen: boolean,
}>(), {
  as: 'div',
  defaultOpen: false,
});

</script>

<template>
  <Disclosure
    class="rw-expansion"
    v-slot="{ open }"
    :as="as"
    :default-open="defaultOpen"
  >
    <DisclosureButton class="activator">
      <slot
        name="activatorSlot"
        :open="open"
      />
    </DisclosureButton>

    <DisclosurePanel class="content">
      <slot name="contentSlot" />
    </DisclosurePanel>
  </Disclosure>
</template>

<style lang="scss">
.rw-expansion {
//TODO: add default styles
}
</style>
