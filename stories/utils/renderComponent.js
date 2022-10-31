export const renderSlot = (slot, args) => {
  const vSlot = slot === 'default' ? 'v-slot' : `v-slot:${slot}`;

  return `<template v-if="${slot in args}" ${vSlot}>${args[slot]}</template>`;
};

export const renderSlots = (slots, args) => slots.map((slot) => renderSlot(slot, args)).join('');

export const renderVModel = (model) => {
  const vModel = model === 'modelValue' ? 'v-model' : `v-model:${model}`;

  return `${vModel}="${model}"`;
};

export const renderVModels = (vModels) => vModels.map((model) => renderVModel(model)).join(' ');

export const renderComponent = ({ Component, slots = [], vModels = [] }) => (args) => ({
  components: { Component },
  data() {
    const vModelData = {};

    vModels.forEach((model) => {
      vModelData[model] = args[model];
    });

    return vModelData;
  },
  setup() {
    return { args };
  },
  template: `<Component v-bind="args" ${renderVModels(vModels)}>${renderSlots(slots, args)}</Component>`,
});
