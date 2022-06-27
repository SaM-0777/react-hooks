import React, { useState } from 'react'


/*
useState takes a default state or a callback function as an argument
and returns an array => [state, setState]
  state => current state
  setState => function to update the current state

Note : 
useState do not trigger re-render
In class component useState always run for the first time but in function component it runs everytime component renders


*/

const renderX = () => {
  console.log('X rendered')
  return 0
}

const renderY = () => {
  console.log("Y rendered");
  return 0;
}

const UseStateHook = () => {
  const [count, setCount] = useState(() => {
    console.log('page rendered');
    return 0
  })

  const [x, setX] = useState(renderX())        // This method can slow down the app because the function gets called whenevr setX is called
  const [y, setY] = useState(() => renderY()) // or useState(renderY)

  const [obj, setObj] = useState({ num: 4, str: 'This is a string' })
  const num = obj.num
  const str = obj.str

  return (
    <>
      <div>
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
        <span>{count}</span>
        <button onClick={() => setCount((prevCount) => prevCount - 1)}>-</button>
      </div>
      <div>
        <div>
          <span>{x}</span>
          <button onClick={() => setX((prevX) => prevX + 1)}>+</button>
        </div>
        <div>
          <span>{y}</span>
          <button onClick={() => setY((prevY) => prevY - 1)}>-</button>
        </div>
        <div>
          <button onClick={() => setObj((prevObj) => { return { ...prevObj, num: prevObj.num + 1 } })}>+</button>
          <span>{num}  {str}</span>
          <button onClick={() => setObj((prevObj) => { return { ...prevObj, num: prevObj.num - 1 } })}>-</button>
        </div>
      </div>
    </>
  )
}


export default UseStateHook
