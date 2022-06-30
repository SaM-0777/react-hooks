/*import logo from './logo.svg';*/
import './App.css';
import {
  UseEffectHook,
  UseStateHook,
  UseMemoHook,
  UseContextHook,
  UseRefHook,
  UseReducerHook,
  UseCallbackHook
} from './Components';
import { ToggleComponent } from './Components/CustomHooks';


function App() {
  return (
    <div className="App">
      <UseStateHook />
      <UseEffectHook />
      <UseMemoHook />
      <UseContextHook />
      <UseRefHook />
      <UseReducerHook />
      <UseCallbackHook />
      <h1>Custom Hooks</h1>
      <ToggleComponent />
    </div>
  )
};


export default App;
