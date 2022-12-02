<template>
  <RwRangeSlider v-model="value" min="0" max="100"/>
</template>

<script setup lang="ts">
import {ref} from "vue";
import RwRangeSlider from 'redwerk-ui-/RwRangeSlider'

const value = ref(100);
</script>
