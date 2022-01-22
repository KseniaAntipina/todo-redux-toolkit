import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Itodo} from "../Interface";

type SliceState = { todos: Array<Itodo> }

const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todos: []
    } as SliceState,
    reducers: {
        addTodo(state, action: PayloadAction<{text: string}>) {
            if (action.payload.text.trim().length > 0) {
                state.todos.push({
                    id: new Date().toISOString(),
                    text: action.payload.text,
                    completed: false,
                })
            }
        },
        deleteTodo(state, action: PayloadAction<{id: string}>) {
            state.todos = state.todos.filter((todo: Itodo) => todo.id !== action.payload.id)
        },
        toggleTodoComplete(state, action: PayloadAction<{id: string}>) {
            const toggledTodo = state.todos.find((todo: Itodo) => todo.id === action.payload.id )
            if (toggledTodo === undefined) {
                throw new TypeError('Значение не найдено');
            }
            toggledTodo.completed = !toggledTodo.completed
        }
    }
})

export const {addTodo, deleteTodo, toggleTodoComplete} = todoSlice.actions;

export default todoSlice.reducer;