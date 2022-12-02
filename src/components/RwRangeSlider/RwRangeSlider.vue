<script setup lang="ts">

interface Props {
  min?: number,
  max?: number,
  value: number,
}
const props = withDefaults(defineProps<Props>(), {
  min: 0,
  max: 100,
  value: 0,
});
</script>

<template>
  <div class="rw-range-slider">
    <input
      class="input-left"
      type="range"
      :min="min"
      :max="max"
      :value="value"
    >
    <input
      class="input-right"
      type="range"
      :min="min"
      :max="max"
      :value="value"
    >

    <div class="slider">
      <div class="track" />
      <div class="range" />
      <div class="thumb left" />
      <div class="thumb right" />
    </div>
  </div>
</template>

<style lang="scss">
.rw-range-slider {
  .slider {
    position: relative;
    z-index: 1;
    height: 10px;
    margin: 0 15px;

    .track {
      position: absolute;
      z-index: 1;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      border-radius: 5px;
      background-color: #c6aee7;
    }

    .range {
      position: absolute;
      z-index: 2;
      left: 25%;
      right: 25%;
      top: 0;
      bottom: 0;
      border-radius: 5px;
      background-color: #6200ee;
    }

    .thumb {
      position: absolute;
      z-index: 3;
      width: 30px;
      height: 30px;
      background-color: #6200ee;
      border-radius: 50%;
      box-shadow: 0 0 0 0 rgba(98,0,238,.1);
      transition: box-shadow .3s ease-in-out;
    }

    .thumb.left {
      left: 25%;
      transform: translate(-15px, -10px);
    }

    .thumb.right {
      right: 25%;
      transform: translate(15px, -10px);
    }

    .thumb.hover {
      box-shadow: 0 0 0 20px rgba(98,0,238,.1);
    }

    .thumb.active {
      box-shadow: 0 0 0 40px rgba(98,0,238,.2);
    }
  }

  input[type=range] {
    position: absolute;
    pointer-events: none;
    -webkit-appearance: none;
    z-index: 2;
    height: 10px;
    width: 100%;
    opacity: 0;

    &::-webkit-slider-thumb {
      pointer-events: all;
      width: 30px;
      height: 30px;
      border-radius: 0;
      border: 0 none;
      background-color: red;
      -webkit-appearance: none;
    }
  }
}
</style>
