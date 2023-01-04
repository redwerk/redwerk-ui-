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

function beforeEnter(el: HTMLElement) {
  el.style.height = '0';
}
function enter(el: HTMLElement) {
  el.style.height = `${el.scrollHeight}px`;
}
function beforeLeave(el: HTMLElement) {
  el.style.height = `${el.scrollHeight}px`;
}
function leave(el: HTMLElement) {
  el.style.height = '0';
}

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

    <transition
      name="accordion"
      @before-enter="beforeEnter"
      @enter="enter"
      @before-leave="beforeLeave"
      @leave="leave"
    >
      <DisclosurePanel class="content">
        <slot name="contentSlot" />
      </DisclosurePanel>
    </transition>
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
    transition: 150ms ease-out;
  }
}
</style>
