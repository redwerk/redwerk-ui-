<template>
  <RwExpansion>
    <template #activatorSlot="{ open }">
      <div class="title">
        <h3>title</h3>

        <RwIcon :name="open ? '-' : '+'" />
      </div>
    </template>

    <template #contentSlot>
      description
    </template>
  </RwExpansion>
</template>
<script setup>

</script>
