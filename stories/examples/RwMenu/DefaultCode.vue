<template>
  <RwMenu v-slot="{ open, close }">
    <template #activatorSlot>
      Example menu
    </template>

    <template #itemsSlot>
      <RwMenuItem v-slot="{ active, disabled }">
        <a href="#">Example link 1</a>
      </RwMenuItem>

      <RwMenuItem v-slot="{ active, disabled }">
        <a href="#">Example link 2</a>
      </RwMenuItem>

      <RwMenuItem v-slot="{ active, disabled }">
        <a href="#">Example link 3</a>
      </RwMenuItem>
    </template>
  </RwMenu>
</template>
