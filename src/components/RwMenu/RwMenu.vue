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
