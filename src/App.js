/*import logo from './logo.svg';*/
import './App.css';
import { UseEffectHook, UseStateHook, UseMemoHook, UseContextHook, UseRefHook, UseReducerHook } from './Components';


function App() {
  return (
    <div className="App">
      <UseStateHook />
      <UseEffectHook />
      <UseMemoHook />
      <UseContextHook />
      <UseRefHook />
      <UseReducerHook />
    </div>
  )
};


export default App;
