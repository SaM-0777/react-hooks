import React, { useState, useEffect } from 'react'


/*
useEffect takes a callback function as an argument and a dependencies array as an second argument
This hook is used as an side effect whenever a value or component changes

dependeancy Array           Action
[]                          Only runs when the page renders for the first time
[value1]                    Only runs when value1 changes and the page renders for the first time
[value1, value2]            Only runs if any of the value in array changes 

Note : 


*/


const useEffectHook = () => {
  const [language, setLanguage] = useState('JavaScript')
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    console.log('On Mount');
  }, [])

  useEffect(() => {
    console.log("On language Change");
  }, [language]);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  }

  /*
    UseEffect with clean Up

    clean Up is necessary as
    for example
    When we add a eventListener they are constantly being added without remove
    which can effect app performance

  */
  useEffect(() => {
    window.addEventListener('resize', handleResize)
    console.log('Event Listener added')
    return () => {
      window.removeEventListener('resize', handleResize)
      console.log("Event Listener removed");
    }
  }, [windowWidth])

  return (
    <div>
      <button onClick={() => setLanguage("Python")}>Python</button>
      <button onClick={() => setLanguage("JavaScript")}>JavaScript</button>
      <button onClick={() => setLanguage("C ++")}>C ++</button>
      <h1>{language}</h1>

      <div>
        <h1>Window Width</h1>
        <div>{windowWidth}</div>
      </div>
    </div>
  )
};


export default useEffectHook;
