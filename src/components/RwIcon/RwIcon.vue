<script  lang="ts" setup="">
import { Icon } from '@iconify/vue';

interface RwIconProps {
  name: string
}
defineProps<RwIconProps>();

</script>

<template>
  <Icon :icon="name" />
</template>
