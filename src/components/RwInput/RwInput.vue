<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<script setup lang="ts">
import {
  computed, defineAsyncComponent, ref,
} from 'vue';

const RwIcon = defineAsyncComponent(() => import('../RwIcon/RwIcon.vue'));

type ExtendedInputEvent = InputEvent & {
  target: {
    value: string,
  }
};

interface Props {
  modelValue: any,
  clearable?: boolean,
  name?: string,
  type?: string,
  inputmode?: string,
  required?: boolean,
  errors?: string | string[]
}
const props = withDefaults(defineProps<Props>(), {
  modelValue: undefined,
  type: 'text',
  clearable: false,
  name: undefined,
  inputmode: undefined,
  required: false,
  errors: () => [],
});
interface Emits {
  (e: 'update:modelValue', value: any): void;
  (e: 'input', event: InputEvent): void;
  (e: 'focus', event: FocusEvent): void;
  (e: 'blur', event: FocusEvent): void;

}
const emit = defineEmits<Emits>();

const inputRef = ref<HTMLInputElement>();

const isFocused = ref(false);

const canShowClearable = computed(() => props.clearable && Boolean(String(props.modelValue).length));

const visibleErrors = computed(() => {
  if (Array.isArray(props.errors)) {
    return props.errors;
  }

  return [props.errors];
});

function updateModelValue(value: any) {
  if (props.type === 'number' || props.inputmode === 'numeric') {
    value = String(value)
      .replace(/[^0-9.]/g, '')
      .replace(/(\..*?)\..*/g, '$1')
      .replace(/^0[^.]/, '0');
  }

  if (inputRef.value) {
    inputRef.value.value = value;
  }

  emit('update:modelValue', value);
}

function onInput(event: ExtendedInputEvent) {
  const value = event.target?.value;
  updateModelValue(value);
  emit('input', event);
}

function onFocus(event: FocusEvent) {
  isFocused.value = true;
  emit('focus', event);
}

function onBlur(event: FocusEvent) {
  isFocused.value = false;
  emit('blur', event);
}

function focusInput() {
  if (inputRef.value) {
    inputRef.value.focus();
  }
}

function clearInput() {
  updateModelValue('');

  focusInput();
}

defineExpose({
  focus: focusInput,
});
</script>

<template>
  <div
    :class="[
      'rw-input',
      {
        focused: isFocused,
        required,
        invalid: visibleErrors.length,
      },
    ]"
  >
    <label
      v-if="$slots.labelSlot"
      class="label-slot"
      :for="name"
    >
      <slot name="labelSlot" /><slot
        v-if="required"
        name="requiredSlot"
      ><span class="label-required">*</span></slot>
    </label>

    <div class="container">
      <div
        :class="['field-container', {
          'has-before': $slots.beforeSlot,
          'has-after': $slots.afterSlot,
          'has-before-after': $slots.beforeSlot && $slots.afterSlot,
        }]"
      >
        <div
          v-if="$slots.beforeSlot"
          class="before-slot"
        >
          <slot name="beforeSlot" />
        </div>

        <input
          class="field"
          v-bind="$attrs"
          ref="inputRef"
          :name="name"
          :value="modelValue"
          :required="required"
          @input="onInput"
          @focus="onFocus"
          @blur="onBlur"
        >

        <div
          v-if="$slots.afterSlot"
          class="after-slot"
        >
          <slot name="afterSlot" />
        </div>

        <slot
          v-if="canShowClearable"
          name="clearableSlot"
          :clear="clearInput"
        >
          <button
            class="clear-button"
            type="button"
            @click="clearInput"
          >
            <RwIcon name="mdi:close" />
          </button>
        </slot>
      </div>

      <div
        v-if="visibleErrors.length"
        class="bottom-slot"
      >
        <slot
          name="bottomSlot"
          :errors="errors"
        >
          <ul>
            <li
              v-for="(error, index) in visibleErrors"
              :key="index"
            >
              {{ error }}
            </li>
          </ul>
        </slot>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.rw-input {
  .label-slot {
    display: block;
  }

  .container {
    .field-container {
      display: inline-grid;
      grid-template-columns: auto max-content;
      align-items: center;
      width: 100%;
      border: 1px solid black;
      transition: border 0.2s ease;
      box-sizing: border-box;

      .field {
        border: none;
        outline: none;
        font-size: 16px;
        background: transparent;

        &:focus {
          outline: none;
        }
      }

      .clear-button {
        border: none;
        background: none;
        cursor: pointer;
        margin-left: 5px;
        padding: 0;
        display: grid;
        place-items: center;
      }

      .before-slot {
        margin-right: 5px;
      }

      .after-slot {
        margin-left: 5px;
      }

      &.has-after {
        grid-template-columns: auto repeat(2, max-content);
      }

      &.has-before,
      &.has-before-after {
        grid-template-columns: max-content auto repeat(2, max-content);
      }
    }
  }

  &.focused {
    .field-container {
      border: 1px solid dodgerblue;
    }
  }

  &.required {
    .label-required {
      color: red;
    }
  }

  &.invalid {
    .field-container {
      border: 1px solid red;
    }
  }
}
</style>
