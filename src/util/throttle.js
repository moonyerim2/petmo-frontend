export const throttle = (callback, time) => {
  let timer = null;

  return (...params) => {
    if (!timer) {
      timer = setTimeout(() => {
        callback(...params);
        timer = null;
      }, time);
    }
  };
};

export default throttle;
