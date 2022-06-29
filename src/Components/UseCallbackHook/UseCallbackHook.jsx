import React, { useCallback, useEffect, useState } from 'react';


/*

useCallback is just like useMemo, it's not going to re-render the component unless certain parameters change

A huge difference between useMemo and useCallback is
useMemo takes a function and returns the return value of that function
useCallback takes a function and that exactly what it returns

*/


const UseCallbackHook = () => {
  const [number, setNumber] = useState(1)
  const [items, setItems] = useState([])
  const [darkTheme, setDarkTheme] = useState(false)

  const getItems = useCallback((x) => {
    return [number, number + 1 + x, number + 2 + x]
  }, [number])

  const theme = {
    backgroundColor: darkTheme ? '#333' : '#FFF',
    color: darkTheme ? '#FFF' : '#333'
  }

  useEffect(() => {
    setItems(getItems(5))
  }, [getItems])

  return (
    <div style={theme} >
      <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))} />
      <button onClick={() => setDarkTheme(prevTheme => !prevTheme)} >Change Theme</button>
      <div>
        {items.map((item, index) => {
          return <div key={index}>{item}</div>;
        })}
      </div>
    </div>
  )
};


export default UseCallbackHook;
