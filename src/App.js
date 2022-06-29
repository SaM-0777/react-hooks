/*import logo from './logo.svg';*/
import './App.css';
import { UseEffectHook, UseStateHook, UseMemoHook, UseContextHook, UseRefHook } from './Components';


function App() {
  return (
    <div className="App">
      <UseStateHook />
      <UseEffectHook />
      <UseMemoHook />
      <UseContextHook />
      <UseRefHook />
    </div>
  )
};


export default App;
