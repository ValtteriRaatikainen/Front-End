import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Todolist from './components/Todolist';

function App() {
  const [desc, setDesc] = useState('');
  const [todos, setTodos] = useState([]);
  const [date, setDate] = useState ([]);

  const inputChanged = (event) => {
    setDesc(event.target.value);
  }

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, desc]);
  }
  return (
    <div className="App">
      < Todolist />
    </div>
  );
}

export default App;
