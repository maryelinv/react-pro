import { useState } from 'react';

const INITIAL_VAL = 0;

export const useProduct = () => {
  const [counter, setCounter] = useState(INITIAL_VAL);

  const increaseBy = (value: number) => {
    setCounter(prev => Math.max(prev + value, 0));
  }

  return {
    counter,
    increaseBy
  }
}