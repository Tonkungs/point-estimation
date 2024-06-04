"use client";
import { useState } from "react";

type SetValue<T> = (value: T | ((val: T) => T)) => void;

const useLocalStorage = <T>(key: string, initialValue: T): [T, SetValue<T>] => {
  const [state, setState] = useState<T>(() => {
    try {
      const value = window.localStorage.getItem(key);
      // Check if the local storage already has any values,
      // otherwise initialize it with the passed initialValue
      return value ? JSON.parse(value) : initialValue;
    } catch (error) {
      // console.log(error);
      return initialValue;
    }
  });

  const setValue: SetValue<T> = (value) => {
    try {
      // If the passed value is a callback function,
      // then call it with the existing state.
      const valueToStore = value instanceof Function ? value(state) : value;
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
      setState(valueToStore);
    } catch (error) {
      console.log(error);
    }
  };

  return [state, setValue];
};

export default useLocalStorage;
