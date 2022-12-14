<script lang="ts" setup>
import { computed, withDefaults } from 'vue';
import {
  Listbox, ListboxButton, ListboxOption, ListboxOptions, ListboxLabel,
} from '@headlessui/vue';
import { useVModel } from '@vueuse/core';
import RwIcon from '../RwIcon/RwIcon.vue';
import type { ParseFunction } from './types';

interface Props {
  modelValue: any,
  items?: any[],
  itemValue?: string | ParseFunction,
  itemTitle?: string | ParseFunction,
  disabledItems?: number[],
  multiple?: boolean,
  disabled?: boolean,
  required?: boolean,
}
const props = withDefaults(defineProps<Props>(), {
  items: () => [],
  itemValue: undefined,
  itemTitle: undefined,
  disabledItems: () => [],
  multiple: false,
  disabled: false,
  required: false,
});

interface RwSelectEmits {
  (e: 'update:modelValue', value: unknown): void;
}
const emit = defineEmits<RwSelectEmits>();

const selectedValue = useVModel(props, 'modelValue', emit);

const getProp = (item: any): ParseFunction => (prop) => {
  if (prop === undefined) {
    return item;
  }

  return item[prop];
};

const options = computed(() => props.items.map((item, index) => {
  const parsedValue = props.itemValue instanceof Function
    ? props.itemValue(item)
    : getProp(item)(props.itemValue as string);

  const parsedTitle = props.itemTitle instanceof Function
    ? props.itemTitle(item)
    : getProp(item)(props.itemTitle as string);

  return {
    item,
    value: parsedValue,
    title: parsedTitle,
    isSelected: parsedValue === selectedValue.value,
    isDisabled: Boolean(props.disabledItems[index]),
  };
}));

const selectedOption = computed(() => {
  if (selectedValue.value === null) {
    return null;
  }

  return options.value.find((option) => option.isSelected);
});

const selectedOptionTitle = computed(() => selectedOption.value?.title || null);
const selectedOptionItem = computed(() => selectedOption.value?.item || null);
</script>

<template>
  <Listbox
    class="rw-select"
    v-model="selectedValue"
    :multiple="multiple"
    :disabled="disabled"
    v-slot="{ open }"
    as="div"
  >
    <slot
      name="labelSlot"
      v-bind="{ open, disabled }"
    >
      <ListboxLabel
        :class="[
          'rw-select__label',
          {
            'rw-select__label__open': open,
            'rw-select__label__disabled': disabled,
          },
        ]"
      >
        <slot /> <span v-if="required">
          *
        </span>
      </ListboxLabel>
    </slot>

    <slot
      name="activatorSlot"
      v-bind="{
        value: selectedValue,
        item: selectedOptionItem,
        open,
      }"
    >
      <ListboxButton
        :class="[
          'rw-select__button',
          {
            'rw-select__button__active': open,
          },
        ]"
      >
        <slot
          v-if="selectedOptionTitle"
          name="selectedSlot"
          v-bind="{
            value: selectedValue,
            item: selectedOptionItem,
            open,
          }"
        >
          {{ selectedOptionTitle }}
        </slot>

        <slot
          v-else
          name="placeholderSlot"
        />

        <slot
          name="iconSlot"
          v-bind="{
            value: selectedValue,
            item: selectedOptionItem,
            open,
          }"
        >
          <RwIcon
            v-if="!open"
            name="mdi:chevron-down"
          />
          <RwIcon
            v-else
            name="mdi:chevron-up"
          />
        </slot>
      </ListboxButton>
    </slot>

    <ListboxOptions
      v-show="open"
      static
      :class="[
        'rw-select__list',
        {
          'rw-select__list__active': open,
        },
      ]"
    >
      <ListboxOption
        v-for="(option, index) in options"
        v-slot="{ active, selected }"
        :class="[
          'rw-select__list-item',
          {
            'rw-select__list-item__focused': active,
            'rw-select__list-item__selected': selected,
            'rw-select__list-item__disabled': disabled || option.isDisabled,
          },
        ]"
        :key="index"
        :value="option.value"
        :disabled="disabled || option.isDisabled"
      >
        <slot
          name="itemSlot"
          v-bind="{
            item: option.item,
            active,
            selected,
            disabled: disabled || option.isDisabled,
          }"
        >
          {{ option.title }}
        </slot>
      </ListboxOption>
    </ListboxOptions>
  </Listbox>
</template>

<style lang="scss">
.rw-select {
  position: relative;

  &__button {
    display: flex;
    align-items: center;
    border: 1px solid #cccccc;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
  }

  &__list {
    position: absolute;
    display: inline-block;
    max-width: 95vw;
    box-shadow: 0 1px 5px #0003, 0 2px 2px #00000024, 0 3px 1px -2px #0000001f;
    background: #ffffff;
    border-radius: 4px;
    overflow-y: auto;
    overflow-x: hidden;
    max-height: 65vh;

    &-item {
      padding: 8px 16px;
      transition: all .2s;
      cursor: pointer;

      &:hover {
        background: #cccccc;
      }
    }
  }
}
</style>
