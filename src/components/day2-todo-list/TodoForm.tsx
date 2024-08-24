import React, { useState } from 'react'; // Nhập React và hook useState từ thư viện react
import styles from './TodoStyles.module.css'; // Nhập file CSS module để áp dụng kiểu dáng cho component

// Định nghĩa kiểu dữ liệu của props mà component TodoForm nhận vào
interface TodoFormProps {
  addTodo: (text: string) => void; // Hàm addTodo nhận vào một chuỗi và không trả về giá trị nào
}

// Định nghĩa component TodoForm
const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  // Khai báo trạng thái `input` để lưu trữ nội dung của trường nhập
  // `input` là một chuỗi ký tự, `setInput` là hàm để cập nhật trạng thái này
  const [input, setInput] = useState<string>('');

  // Hàm xử lý sự kiện khi form được gửi
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Ngăn chặn hành động mặc định của form là làm mới trang
    if (input.trim()) { // Kiểm tra xem nội dung nhập có trống không sau khi loại bỏ khoảng trắng
      //debugger
      addTodo(input); // Gọi hàm addTodo được truyền từ props với nội dung nhập
      setInput(''); // Xóa nội dung trường nhập sau khi thêm nhiệm vụ
    }
  };

    // Hàm xử lý sự kiện khi giá trị của trường nhập thay đổi
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value; // Lấy giá trị mới của trường nhập
    //console.log(newValue); // Log giá trị mới ra console
    setInput(newValue); // Cập nhật trạng thái `input` với giá trị mới
  }
  // Render giao diện của component
  return (
    <form className={styles.todoForm} onSubmit={handleSubmit}>
      {/* Trường nhập cho nội dung của nhiệm vụ mới */}
      <input
        type="text"
        value={input} // Giá trị của trường nhập được liên kết với trạng thái `input`
        onChange={handleChange} // Cập nhật trạng thái `input` khi người dùng nhập dữ liệu
        placeholder="Add a new task" // Văn bản gợi ý hiển thị trong trường nhập
      />
      {/* Nút để gửi form và thêm nhiệm vụ mới */}
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TodoForm; // Xuất component TodoForm để có thể sử dụng ở các nơi khác trong ứng dụng
