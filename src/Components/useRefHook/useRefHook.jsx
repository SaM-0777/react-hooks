import React, { useEffect, useRef, useState } from 'react';


/*

useRef hook takes initial value as an argument and returns an object with current property  {current : initialValue}
current propery get persisted between renders

ref is very similar to state and it persists between render of components

Note : 
refs are really easy to access dom elements 
Refs do not cause additional renders

use case :
1. A very common use case is to set focus on a component
2. Useful for persisting values at cross-renders without causing a re-render

Don't do's : 
Let React handle all states instead of refs

*/


const UseRefHook = () => {
  const [name, setName] = useState('')
  const prevName = useRef('')
  
  useEffect(() => {
    prevName.current = name
  }, [name])

  return (
    <div>
      <h1>useRef Hook</h1>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <div>My Name is {name} and it used to be {prevName.current}</div>
    </div>
  )
};


export default UseRefHook;
