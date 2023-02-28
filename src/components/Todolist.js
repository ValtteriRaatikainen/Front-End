import React, { useState } from 'react';


export default function Todolist() {
  const [todo, setTodo] = useState({
    description: '',
    date: ''
  });
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    setTodos([todo, ...todos]);
    setTodo({description:'', date:''});
  }
  return (
    <div>
        <input 
            placeholder='Description'
            type="text" 
            value={todo.description} 
            onChange={e => setTodo({...todo, description: e.target.value})} />
        <input 
        placeholder='Date'
            type="text" 
            value={todo.date} 
            onChange={e => setTodo({...todo, date: e.target.value})} />
        <button onClick={addTodo}>Add</button>
      <table>
        <tbody>
          {
            todos.map((todo, index) => 
            <tr key={index}>
            <td>{todo.description}</td>
            <td>{todo.date}</td>
            </tr>
            )
          }
        </tbody>
      </table>
    </div>
  );
}
