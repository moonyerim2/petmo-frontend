export const addArrayElement = (prevArray, newElement) => [
  ...prevArray,
  newElement,
];

export const removeArrayElement = (prevArray, newElement) =>
  prevArray.filter((el) => el !== newElement);
