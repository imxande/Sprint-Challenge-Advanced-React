import React from 'react';
import useForm from './useForm';


const Form = () => {
    const [isValid, onEmailChange] = useForm();
  
    return (
      <div>
        <label htmlFor="email"> email: </label>
        <input onChange={onEmailChange}/>
        {!isValid && <p>Wrong... email goes here</p>}
      </div>
    );
  };
  
  export default Form;