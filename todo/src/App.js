import './App.css';
import React, { useReducer, useState } from 'react'
import todoReducer, { initialState, ADD_ITEM, TOGGLE_COMPLETED } from './reducers/todoReducer'

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  
  const [newTodo, setNewTodo] = useState();

  const handleChanges = e => {
    setNewTodo(e.target.value);
  }

  

  console.log(state);
  return (
    <div className="App">
      <h1>The Daily ToDos</h1>
      <div>
        {state.todos.map((todo, index)=>{
          return (
          <h3 onClick={()=> {
            dispatch({type: TOGGLE_COMPLETED, payload: todo.id})
          }}>{todo.task}</h3>

          )
        }
        )}
      </div>
      <div>
        <input
          className="todo-input"
          type='text'
          name="newTodo"
          value={newTodo}
          onChange={handleChanges}
        />
        <button
          onClick={() => {
            dispatch({type: ADD_ITEM, payload: newTodo})
          }}>
          Add Todo
        </button>
      </div>
    </div>
  );
}

export default App;
