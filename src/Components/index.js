import UseStateHook from "./UseStateHook/UseStateHook";
import UseEffectHook from "./UseEffectHook/UseEffectHook";
import useMemoHook from "./useMemoHook/useMemoHook";
import useContextHook from "./useContextHook/useContextHook";
import useRefHook from "./useRefHook/useRefHook";
import useReducerHook from "./useReducerHook/useReducerHook";


/*

React-Hook rules :

Only call hooks at the top level
    Don't call hooks inside loops, conditions, nested functions

Only call hooks from react functions
    Call hooks from react function components
    Call hooks from custom hooks

*/


export  {
    UseStateHook,
    UseEffectHook,
    useMemoHook,
    useRefHook,
    useReducerHook,
    useContextHook
}
