<template>
  <RwRating v-model="value" />
</template>

<script setup lang="ts">
import {ref} from "vue";
import RwRating from 'redwerk-ui-/RwRating'

const value = ref(3.5)
</script>
