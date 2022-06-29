import React, { useReducer, useState } from 'react';


/*

useReducer also manage state and re-render components whenever state changes just like useState
useReducer gives you more concrete way to handle complex states

It gives set of actions that can be formed on the state and it's going to convert the state based on the action

useReducer takes 2 arguments
1. reducer function which in turns take 2 arguments
  1. state : 
  2. action :
2. initial value
And It returns an array of state and dispatch
1. state : It is the object that needs to be changed
2. dispatch : It is the function that used to update the state

whenever dispatch function is called its going to get set on action variable
current state will be in the state variable
and reducer is going to return the new updated state

useReducer also helps to manage state as expected not in weired way

Note :
useReducer is not that helpful for small simple states
useReducer cleans up the props

*/


const ACTIONS = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
};

const TODOACTIONS = {
  ADD_TODO: 'add-todo',
  TOGGLE_TODO: 'toggle-todo',
  DELETE_TODO: 'delete-todo'
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 }
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 }
    default:
      return state
  }
};

const todoReducer = (state, action) => {
  switch (action.type) {
    case TODOACTIONS.ADD_TODO:
      return [...state, newTodo(action.payload.name)]
    case TODOACTIONS.TOGGLE_TODO:
      return state.map((todo) => {
        if (todo.id === action.payload.id) return { ...todo, complete: !todo.complete }
        else return state
      })
    case TODOACTIONS.DELETE_TODO:
      return state.filter(todo => todo.id !== action.payload.id)
    default:
      return state
  }
};

const newTodo = (name) => {
  return { id: Date.now().toString(), name: name, complete: false }
};

const UseReducerHook = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 })  // objects are more convenient then actual values
  const [todos, todoDispatch] = useReducer(todoReducer, [])
  const [name, setName] = useState('')

  const decrement = () => {
    dispatch({ type: ACTIONS.DECREMENT })
  }
  
  const increment = () => {
    dispatch({ type: ACTIONS.INCREMENT })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    todoDispatch({ type: TODOACTIONS.ADD_TODO, payload: { name: name } })
    setName('')
  }

  return (
    <div>
      <h1>useReducer Hook</h1>
      <div>
        <button onClick={decrement} >-</button>
        <span>{state.count}</span>
        <button onClick={increment} >+</button>
      </div>
      <h2>To Do List</h2>
      <form action="" onSubmit={handleSubmit} >
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
      </form>
      <div>
        {todos.map((todo) => {
          return (
            <div key={todo.id} >
              <span style={{ color: todo.complete ? '#AAA' : '#000' }} >{todo.name}</span>
              <button onClick={() => todoDispatch({ type: TODOACTIONS.TOGGLE_TODO, payload: { id: todo.id } })} >Toggle</button>
              <button onClick={() => todoDispatch({ type: TODOACTIONS.DELETE_TODO, payload: { id: todo.id } })} >Delete</button>
            </div>
          )
        })}
      </div>
    </div>
  )
};


export default UseReducerHook;
