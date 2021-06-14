import { useState } from "react";

const useInputState = (initialVal) => {
  const [state, setState] = useState(initialVal);
  const handleChange = (evt) =>
    setState(([evt.target.name] = evt.target.value));

  const reset = () => setState("");

  return [state, handleChange, reset];
};
export default useInputState;
