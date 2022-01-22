import TodoItem from "./TodoItem";
import React from "react";
import {Itodo} from "../Interface";
import {useSelector} from 'react-redux';
import {RootState} from "../store";

const TodoList = () => {

    const todos = useSelector((state: RootState) => state.todos.todos)

    return (
        <ul>
            {
                todos.map((todo: Itodo) => {
                    return (
                        <TodoItem key={todo.id} {...todo}/>
                    )
                })
            }
        </ul>
    );
};

export default TodoList;
