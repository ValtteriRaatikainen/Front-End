import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [desc, setDesc] = useState('');
  const [todos, setTodos] = useState([]);

  const inputChanged = (event) => {
    setDesc(event.target.value);
  }

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, desc]);
  }
  return (
    <div className="App">
      <form onSubmit={addTodo}>
        <input type="text" value={desc} onChange={inputChanged} />
        <input type="submit" value="Add"/>
      </form>
      <table>
        <tbody>
          {
            todos.map((todo, index) => 
            <tr key={index}>
            <td>{todo}</td>
            </tr>
            )
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
