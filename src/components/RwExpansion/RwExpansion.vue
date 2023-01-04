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

    <div class="wrapper-content">
      <DisclosurePanel
        :class="['content', { open }]"
        static
      >
        <slot name="contentSlot" />
      </DisclosurePanel>
    </div>
  </Disclosure>
</template>

<style lang="scss">
.rw-expansion {
  width: 100%;
  display: grid;

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

  .wrapper-content {
    display: flex;
    flex-direction: column;

    .content {
      transition: .3s;
      overflow: hidden;
      flex-basis: 0;
      opacity: 0;

      &.open {
        flex: 1;
        opacity: 1;
      }
    }
  }
}
</style>
