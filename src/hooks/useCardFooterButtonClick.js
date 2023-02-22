import { useState } from "react";

function useCardFooterButtonClick(defaultCountState, defaultCheckState) {
  const [count, setCount] = useState(defaultCountState);
  const [isChecked, setIsChecked] = useState(defaultCheckState);

  const handleButtonClick = () => {
    setIsChecked((isChecked) => (isChecked ? false : true));
    setCount((prevCount) => (isChecked ? prevCount - 1 : prevCount + 1));
  };

  return { isChecked, count, handleButtonClick };
}

export default useCardFooterButtonClick;
