import React, { useState, useMemo, useEffect } from 'react';


/*
when a state is updated, React re-renders the whole component which means the entire function runs each time

useMemo hook is essentially an idea of caching a value so it don't have to re-compute it every single time.
useMemo takes a callback function as an argument and that callback function return the slowFunction
useMemo also takes a second param called dependencies array which is list of value if gets change then it's going to
run the callback function

Note :
useMemo also gives a CPU and Memory overhead

Use Cases of useMemo :
1. To cache slow function : Whenever the input changes the function returns value accordingly,
                            and useMemo only runs the slow function when it needs to be run and
                            in this case everytime the input changes.
2. Referential Equality : Whenever you want to make sure that reference of an object is exactly
                          the same as it was the last time.
                          useMemo only update whenever the actual content of the object changes.

*/


const UseMemoHook = () => {
  const [num, setNum] = useState(0)
  const [dark, setDark] = useState(false)

  /*
    Example of caching a slow function
  */
  const doubleNumber = useMemo(() => {
    return slowFunction(num);
  }, [num])

  /*
    Example of referential Equality
  */
  const themeStyle = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    }
  }, [dark])

  useEffect(() => {
    console.log("Theme Changed");
  }, [themeStyle])

  return (
    <div>
      <input
        type="number"
        name=""
        id=""
        value={num}
        onChange={(e) => setNum(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Change Theme
      </button>
      <div style={themeStyle}>{doubleNumber}</div>
    </div>
  )
};


const slowFunction = (num) => {
  console.log('Calling slow function')
  for (let i = 0; i <= 1000000000; i++) { }
  return num * 2
};


export default UseMemoHook;
