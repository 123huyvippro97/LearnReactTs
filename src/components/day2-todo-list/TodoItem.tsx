import React from 'react';
import styles from './TodoStyles.module.css';

interface TodoItemProps {
    todo: { id: number; text: string; completed: boolean };
    toggleComplete: (id: number) => void;
    removeTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleComplete, removeTodo }) => {
    return (
        <div
            className={`${styles.todoItem} ${todo.completed ? styles.completed : ''}`}
        >
            <span onClick={() => toggleComplete(todo.id)}>{todo.text}</span>
            <button onClick={() => removeTodo(todo.id)}>Delete</button>
        </div>
    );
};

export default TodoItem;