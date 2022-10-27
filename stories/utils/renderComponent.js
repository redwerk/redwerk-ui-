export const renderSlot = (slot, args) => {
  const vSlot = slot === 'default' ? 'v-slot' : `v-slot:${slot}`;

  return `<template v-if="${slot in args}" ${vSlot}>${args[slot]}</template>`;
};

export const renderSlots = (slots, args) => slots.map((slot) => renderSlot(slot, args)).join('');

export const renderComponent = ({ Component, slots }) => (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: `<Component v-bind="args">${renderSlots(slots, args)}</Component>`,
});
