const debounce = (callback: (...args: any[]) => void, delay: number) => {
  let timer: number;
  return (...args: any[]) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback(...args);
    }, delay);
  };
};

export default debounce;
