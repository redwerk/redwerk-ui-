export function severalTypes(types) {
  if (!Array.isArray(types)) {
    return '';
  }
  return types.join(' | ');
}
export const Types = {
  String: 'string',
  Html: 'VNode',
  Boolean: 'boolean',
  Number: 'number',
  Slot: severalTypes(['string', 'VNode']),
};
