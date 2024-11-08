import { useEffect, useState } from "react";

export const useDebounce = (value, delay) => {
  const [depauncedValue, setDebaoncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebaoncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return depauncedValue;
};
