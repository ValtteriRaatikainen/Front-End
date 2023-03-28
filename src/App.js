import React from 'react';
import './App.css';
import Todolist from './components/Todolist';
import Home from './components/Home';
import Contact from './components/Contact';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/">Home</Link>{' '}
        <Link to="/todo">Todo</Link>{' '}
        <Link to="/contact">Contact</Link>{' '}
        <Routes>
          <Route path="/todo" element={<Todolist/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route exact path="/" element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
