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
  width: 100%;

  .activator {
    font-size: 14px;
    padding: 10px 16px;
    cursor: pointer;
    width: inherit;
    text-align: left;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 3px;
    border: none;
  }

  .content {
    padding: 10px 16px;
  }
}
</style>
