import React, {KeyboardEvent, useState} from "react";
import {addTodo} from "../store/todoSlice";
import {useDispatch} from "react-redux";

const Input = () => {

    const dispatch = useDispatch();

    const [text, setText] = useState<string>('');

    const addTask = () => {
        dispatch(addTodo({text}));
        setText('');
    }

    const addTaskEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            dispatch(addTodo({text}));
            setText('')
        }
    };

    return (
        <div className={'inputBar'}>
            <input value={text}
                   onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => addTaskEnter(e)}
                   placeholder={'Write a new task...'}
                   onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                       const value = e.currentTarget.value;
                       setText(value);
                   }}/>
            <button onClick={addTask}>Add todo</button>
        </div>
    )
}

export default Input;
