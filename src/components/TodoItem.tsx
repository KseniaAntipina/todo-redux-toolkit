import React from 'react';
import {useDispatch} from "react-redux";
import {deleteTodo, toggleTodoComplete} from '../store/todoSlice';

const TodoItem = ({id, completed, text}: todoItemProps) => {

    const dispatch = useDispatch();

    return (
        <li key={id}>
            <input type={"checkbox"}
                   checked={completed}
                   onChange={() => dispatch(toggleTodoComplete({id}))}/>
            <span>{text}</span>
            <span className={"deleteBtn"} onClick={() => dispatch(deleteTodo({id}))}>&times;</span>
        </li>
    );
};

export default TodoItem;

interface todoItemProps {
    id: string,
    completed: boolean,
    text: string
}