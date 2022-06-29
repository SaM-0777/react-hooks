/*import logo from './logo.svg';*/
import './App.css';
import { UseEffectHook, UseStateHook, UseMemoHook, UseContextHook } from './Components';


function App() {
  return (
    <div className="App">
      <UseStateHook />
      <UseEffectHook />
      <UseMemoHook />
      <UseContextHook />
    </div>
  )
};


export default App;
