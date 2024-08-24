import React, { useState, useEffect } from 'react'; // Nhập React từ thư viện để sử dụng trong component
import TodoForm from './TodoForm'; // Nhập component TodoForm từ cùng thư mục
import TodoList from './TodoList'; // Nhập component TodoList từ cùng thư mục
import '../../App.css'; // Nhập file CSS toàn cục để áp dụng kiểu dáng cho toàn bộ ứng dụng

// Định nghĩa kiểu dữ liệu cho nhiệm vụ TODO
interface Todo {
    id: number; // ID duy nhất cho mỗi nhiệm vụ
    text: string; // Nội dung mô tả của nhiệm vụ
    completed: boolean; // Trạng thái hoàn thành của nhiệm vụ
}

// Định nghĩa component AppTodoList là một React Function Component
const AppTodoList: React.FC = () => {
    // Khai báo trạng thái `todos` để lưu trữ danh sách nhiệm vụ
    // `todos` là một mảng các nhiệm vụ, `setTodos` là hàm để cập nhật trạng thái
    const [todos, setTodos] = React.useState<Todo[]>([]);

    // Hàm để thêm nhiệm vụ mới vào danh sách
    // Tham số `text` là nội dung của nhiệm vụ mới
    const addTodo = (text: string) => {
        // Tạo đối tượng nhiệm vụ mới với ID duy nhất và trạng thái hoàn thành là false
        const newTodo = { id: Date.now(), text, completed: false };
        // Cập nhật danh sách nhiệm vụ bằng cách thêm nhiệm vụ mới vào mảng hiện tại
        setTodos([...todos, newTodo]);
        
        console.log(todos);
    };

    // Hàm để chuyển đổi trạng thái hoàn thành của nhiệm vụ
    // Tham số `id` là ID của nhiệm vụ cần thay đổi
    const toggleComplete = (id: number) => {
        // Cập nhật trạng thái hoàn thành của nhiệm vụ dựa trên ID
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    // Hàm để xóa nhiệm vụ khỏi danh sách
    // Tham số `id` là ID của nhiệm vụ cần xóa
    const removeTodo = (id: number) => {
        // Cập nhật danh sách nhiệm vụ để loại bỏ nhiệm vụ với ID tương ứng
        setTodos(todos.filter((todo) => todo.id !== id));
    };
    
    useEffect(() => {
        console.log(todos);
      }, [todos]);
    // Hàm render JSX để hiển thị giao diện người dùng
    return (
        <div>
            <h1>TODO List</h1> {/* Tiêu đề của ứng dụng TODO list */}
            {/* Component TodoForm để người dùng thêm nhiệm vụ mới */}
            <TodoForm addTodo={addTodo} />
            {/* Component TodoList để hiển thị danh sách nhiệm vụ và các hành động */}
            <TodoList todos={todos} toggleComplete={toggleComplete} removeTodo={removeTodo} />
        </div>
    );
};

// Xuất component AppTodoList để có thể sử dụng ở các nơi khác trong ứng dụng
export default AppTodoList;
