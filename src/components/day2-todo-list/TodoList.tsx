import React from 'react';
import TodoItem from './TodoItem';
import styles from './TodoStyles.module.css'; // Import file CSS module

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

interface TodoListProps {
    todos: Todo[]; // Danh sách nhiệm vụ
    toggleComplete: (id: number) => void; // Hàm để đánh dấu nhiệm vụ là hoàn thành
    removeTodo: (id: number) => void; // Hàm để xóa nhiệm vụ
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleComplete, removeTodo }) => {
    return (
        <div className={styles.todoList}>
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    toggleComplete={toggleComplete}
                    removeTodo={removeTodo}
                />
            ))} {/* Hiển thị danh sách nhiệm vụ bằng cách map qua mảng todos */}
        </div>
    );
};

export default TodoList;
