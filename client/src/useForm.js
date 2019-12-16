import { useState } from "react";

const useForm = () => {
  const [isEmail, setIsEmail] = useState(false);

  const onChange = e => {
    let valid = false;
    let input = e.target.value;

    if (input.includes("lalal")) {
      valid = true;
    } 
    else {
        valid = false
        setIsEmail(valid);
    }  
 };

  return [isEmail, onChange];
};

export default useForm;