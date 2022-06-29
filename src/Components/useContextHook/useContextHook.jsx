import React, { useContext, useState } from 'react';


/* 
useContext is for passing down props essentially all the way down to any of the children.
useContext is broken into 2 different sections
1. Context Provider => Wrap all the components which required the value.
2. Single Prop called value which is the value of the context

Note : 
value can be an object or a function
*/


const ThemeContext = React.createContext();

const UseContextHook = () => {
  const [isDark, setIsDark] = useState(false);
  const theme = {
    backgroundColor: isDark ? '#333' : '#CCC',
    color: isDark ? '#CCC' : '#333',
    padding: '2rem',
    margin: '2rem'
  }

  const toggleTheme = () => {
    setIsDark(prevTheme => !prevTheme)
  }

  return (
    <div>
      <h1>useContext Hook</h1>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <ThemeSection />
      </ThemeContext.Provider>
    </div>
  );
};

const ThemeSection = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  
  return (
    <div>
      <div style={theme} >Hello World!</div>
      <button onClick={() => toggleTheme(prevTheme => !prevTheme)} >Toggle Theme</button>
    </div>
  )
};


export default UseContextHook;
