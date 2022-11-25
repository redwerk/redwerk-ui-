<script lang="ts" setup>
import { Icon } from '@iconify/vue';

interface Props {
  name: string
}
defineProps<Props>();

</script>

<template>
  <Icon :icon="name" />
</template>
