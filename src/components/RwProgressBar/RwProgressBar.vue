<script setup lang="ts">
import { computed } from 'vue';
import { percentage } from '../../utils/percentage';

interface RwProgressBarEvents {}
interface RwProgressBarProps extends RwProgressBarEvents {
  min?: number,
  max?: number,
  value: number,
  orientation?: 'horizontal' | 'vertical',
}

const props = withDefaults(defineProps<RwProgressBarProps>(), {
  min: 0,
  max: 100,
  value: 0,
  orientation: 'horizontal',
});

const className = computed(() => `rw-progress-bar__${props.orientation}`);

const text = computed(() => {
  const progress = Math.round(percentage(props.value, props.max, props.min));
  return `${progress}%`;
});

const style = computed(() => {
  const dimension = percentage(props.value, props.max, props.min);
  const property = props.orientation === 'horizontal'
    ? 'width'
    : 'height';

  return {
    [property]: `${dimension}%`,
  };
});
</script>

<template>
  <div
    :class="['rw-progress-bar', className]"
    role="progressbar"
    :aria-valuemin="min"
    :aria-valuemax="max"
    :aria-valuenow="value"
    :aria-valuetext="text"
  >
    <div class="rw-progress-bar__track">
      <div
        class="rw-progress-bar__value"
        :style="style"
      />
    </div>

    <div class="rw-progress-bar__text">
      {{ text }}
    </div>
  </div>
</template>

<style scoped lang="scss">
.rw-progress-bar {
  position: relative;
  border: 1px solid #aaa;
  width: 100%;
  height: 100%;

  &__horizontal {
    .rw-progress-bar__track {
      .rw-progress-bar__value {
        top: 0;
      }
    }
  }

  &__vertical {
    width: fit-content;

    .rw-progress-bar__track {
      .rw-progress-bar__value {
        top: 0;
        bottom: auto;
        right: 0;
        width: 100%;
      }
    }
  }

  &__track {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    .rw-progress-bar__value {
      position: absolute;
      bottom: 0;
      left: 0;
      background: #ddd;
      height: 100%;
    }
  }

  &__text {
    position: relative;
    text-align: center;
  }
}
</style>
