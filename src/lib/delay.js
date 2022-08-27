function debounce(callback, delay) {
  let time;
  let timeout;
  return (...args) => {
    let oldTime = time;
    time = Date.now();
    if (timeout !== undefined && time - oldTime <= delay) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => callback(...args), delay);
  };
}

function throttle(callback, delay) {
  let time;
  return (...args) => {
    let oldTime = time;
    time = Date.now();
    if (oldTime === undefined || time - oldTime > delay) {
      callback(...args);
    }
  };
}

export { debounce, throttle };
