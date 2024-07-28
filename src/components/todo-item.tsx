import React, { useContext } from 'react'
import { ITodo } from '../interface/todo'
import { useNavigate } from 'react-router-dom'

type Props = {
  todo: ITodo
  onDelete: (id: number|string) => void  
}

const Item = ({ todo, onDelete }: Props) => {
  const navigate = useNavigate()
  const priorityClasses = {
    low: 'bg-green-100 text-green-800',
    medium: 'bg-yellow-100 text-yellow-800',
    high: 'bg-red-100 text-red-800',
  };

  // Nếu priority không có trong priorityClasses, sử dụng lớp mặc định
  const priorityClass = priorityClasses[todo.priority as keyof typeof priorityClasses] || 'bg-gray-100 text-gray-800';

  //Kiểm tra ngày đáo hạn 
  const isOverdue = new Date(todo.dueDate) < new Date();

  const handleEditClick = () => {
    navigate(`/edit-todo/${todo.id}`);
  };

  return (
    <div className={`flex items-center justify-between p-4 border-b border-gray-200 ${isOverdue ? 'bg-red-50 border-red-200' : ''}`}>
      <div className="flex items-center space-x-3 md:w-2/5">
        <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
        <span className={`text-lg  ${isOverdue ? 'text-red-600' : 'text-gray-800'}`}>{todo.text}</span>
        <span className={`bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full ${isOverdue ? 'border-red-300' : ''}`}>{todo.tag}</span>
      </div>
      <div className='md:w-1/5'>
      <span className={`text-[16px] p-2 rounded-full  ${priorityClass}`}>
        {todo.priority.charAt(0).toUpperCase() + todo.priority.slice(1)}
      </span>
      </div>
      <span className={`text-sm text-gray-500 md:w-1/5 ${isOverdue ? 'text-red-600' : 'text-gray-500'}`}>{todo.dueDate}</span>
      <div className='flex space-x-2 justify-end md:w-1/5'>
        <button onClick={handleEditClick} className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600">Edit</button>
        <button onClick={() => onDelete(todo.id)} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">Delete</button>
      </div>
    </div>
  )
}

export default Item
