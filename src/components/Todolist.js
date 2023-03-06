import React, { useState, useRef } from 'react';
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-material.css';

export default function Todolist() {
    const [todo, setTodo] = useState({
        description: '',
        date: '',
        priority: ''
    });

    const [todos, setTodos] = useState([]);

    const gridRef = useRef();


    const columns = [
        { field: "description", sortable: true, filter: true, floatingFilter: true, animateRows: true },
        { field: "date", sortable: true, filter: true, floatingFilter: true, animateRows: true },
        { field: "priority", sortable: true, filter: true, floatingFilter: true, animateRows: true, cellStyle: params => params.value === "High" ? { color: 'red' } : { color: 'black' } }
    ];



    const addTodo = () => {
        setTodos([todo, ...todos]);
        setTodo({ description: '', date: '', priority: '' });
    }

    const deleteTodo = () => {
        if (gridRef.current.getSelectedNodes().length > 0) {
            setTodos(todos.filter((todo, index) =>
                index !== gridRef.current.getSelectedNodes()[0].childIndex))
        }
        else {
            alert('Select row first');
        }
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
            <input
                placeholder='Priority'
                type="text"
                value={todo.priority}
                onChange={e => setTodo({ ...todo, priority: e.target.value })} />
            <button onClick={addTodo}>Add</button>
            <button onClick={deleteTodo}>Delete</button>
            <div className="ag-theme-material"
                style={{ height: '700px', width: '70%', margin: 'auto' }} >
                <AgGridReact
                    ref={gridRef}
                    onGridReady={params => gridRef.current = params.api}
                    rowSelection="single"
                    columnDefs={columns}
                    rowData={todos}
                    animateRows={true}>
                </AgGridReact>
            </div>

        </div>
    );
}
