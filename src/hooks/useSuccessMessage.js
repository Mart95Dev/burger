import { useState } from "react";

export const useMessageSuccess = (timeDelay = 2000) => {
  //state
  const [isSubmitted, setIsSubmitted] = useState(false);
  //comportement
  const displayMessageSuccess = () => {
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, timeDelay);
  };

  return { isSubmitted, displayMessageSuccess };
};
