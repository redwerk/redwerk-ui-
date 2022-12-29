<script setup lang="ts">
</script>

<template>
  <div class="rw-skeleton" />
</template>

<style lang="scss">
.rw-skeleton {
  border-radius: 4px;
  background-color: #D3D3D3;
  margin: 3px;

  &.gradient {
    background: linear-gradient(-45deg, #F0F0F0, #D3D3D3);
    background-size: 400% 400%;
    animation: gradient 2s ease infinite;
  }

  &.fade {
    animation: fade 1s infinite alternate;
  }

  &.wave {
    background-image: linear-gradient(115deg, #D3D3D3 20%, #F0F0F0 30%, #F0F0F0 35%, #D3D3D3 40%);
    background-position: 0 0;
    background-size: 300% 300%;
    animation: wave 3s ease infinite;
  }

  &.circle {
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }

  &.square {
    width: 50px;
    height: 50px;
  }

  &.rectangle {
    min-width: 200px;
    width: 100%;
    height: 50px;
  }

  &.bar {
    min-width: 200px;
    width: 100%;
    height: 16px;
  }

  @keyframes gradient {
    0% {
      background-position: 0 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0 50%;
    }
  }

  @keyframes fade {
    from {
      background-color: #F0F0F0;
    }
    to {
      background-color: #D3D3D3;
    }
  }

  @keyframes wave {
    0% {
      background-position: 100% 0;
    }
    60%, 100% {
      background-position: -50% 0;
    }
  }
}
</style>
