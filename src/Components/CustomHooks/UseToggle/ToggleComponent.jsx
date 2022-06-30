/*import React, { useState } from 'react';*/
import useToggle from './useToggle';


const ToggleComponent = () => {
  const [value, setValue] = useToggle(false)
  
  return (
    <div>
      <h1>useToggle Hook</h1>
      <div>{value.toString()}</div>
      <button onClick={setValue} >Toggle</button>
      <button onClick={() => setValue(true)} >Make True</button>
      <button onClick={() => setValue(false)} >Make False</button>
    </div>
  )
};


export default ToggleComponent;
