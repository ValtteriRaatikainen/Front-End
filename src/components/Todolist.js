import React, { useState } from 'react';
import Todotable from './Todotable';

export default function Todolist() {
    const [todo, setTodo] = useState({
        description: '',
        date: ''
    });
    const [todos, setTodos] = useState([]);

    const addTodo = () => {
        setTodos([todo, ...todos]);
        setTodo({ description: '', date: '' });
    }

    const deleteTodo = (row) => {
        setTodos(todos.filter((todo, index) => row !== index));
    }
    return (
        <div>
            <input
                placeholder='Description'
                type="text"
                value={todo.description}
                onChange={e => setTodo({ ...todo, description: e.target.value })} />
            <input
                placeholder='Date'
                type="date"
                value={todo.date}
                onChange={e => setTodo({ ...todo, date: e.target.value })} />
            <button onClick={addTodo}>Add</button>
            <Todotable todo={todos}/>
        </div>
    );
}
