import React from 'react';
import './App.css';
import TodoList from "./components/TodoList";
import Input from "./components/Input";

function App() {

    return (
        <div className="App">
            <h1>Todo app</h1>
            <Input/>
            <TodoList/>
        </div>
    );
}

export default App;
