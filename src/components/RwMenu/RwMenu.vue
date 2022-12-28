<script setup lang="ts">
import {
  Menu, MenuButton, MenuItems,
} from '@headlessui/vue';
</script>

<template>
  <Menu
    class="rw-menu"
    as="div"
    v-slot="{ open, close }"
  >
    <MenuButton
      :class="[
        'rw-menu-button',
        {
          'rw-menu-button__active': open,
        },
      ]"
    >
      <slot
        name="activatorSlot"
        :open="open"
        :close="close"
      />
    </MenuButton>

    <MenuItems
      :class="[
        'rw-menu-items',
        {
          'rw-menu-items__active': open,
        },
      ]"
    >
      <slot
        name="itemsSlot"
        :open="open"
        :close="close"
      />
    </MenuItems>
  </Menu>
</template>

<style lang="scss">
.rw-menu {
  position: relative;

  .rw-menu-button {
    outline: none;
    border: none;
    padding: 0;
    background-color: transparent;
  }

  .rw-menu-items {
    display: flex;
    flex-direction: column;
    padding: 5px;
    width: inherit;
    border-radius: 3px;
    position: absolute;
    top: 110%;
    box-shadow: 0 1px 5px #0003, 0 2px 2px #00000024, 0 3px 1px -2px #0000001f;

    .rw-menu-item {
      text-decoration: none;
      padding: 5px 11px;
      border-radius: 3px;
    }
  }
}
</style>
