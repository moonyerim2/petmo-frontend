export const getKeyByValue = (obj, value) => {
  const keys = Object.keys(obj);

  return keys.find((key) => {
    if (Array.isArray(obj[key])) {
      return obj[key].includes(value);
    }
    return obj[key] === value;
  });
};
