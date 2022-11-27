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
  Slot: 'VNode[]',
};

export function prettyFunctionParams(params) {
  return JSON.stringify(params, null, '\t');
}

export function prettyFunction(params, returns) {
  const paramsString = prettyFunctionParams(params);
  const returnString = Array.isArray(returns) ? severalTypes(returns) : returns;

  return `(${paramsString}) => ${returnString}`;
}
