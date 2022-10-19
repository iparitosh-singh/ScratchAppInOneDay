import { useEffect } from "react";

export const useDefault = (value, defaultValue, setValue) => {
  useEffect(() => {
      if(!value) {
        setValue(defaultValue)
      }
  }, [])

  return value;
}