<template>
  <RwSkeletonBuilder
    :structure="structure"
    :loading="loading"
    :horizontal="true"
    behavior="gradient"
  >
    <div>content</div>
  </RwSkeletonBuilder>
</template>

<script setup lang="ts">
import {ref} from "vue";

const structure: string[][] = [
  ['circle'],
  [
    'square',
    'rectangle',
    'bar',
  ]
]

const loading = ref(true);
</script>
