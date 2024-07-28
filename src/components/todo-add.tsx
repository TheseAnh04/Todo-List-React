import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { TodoCT } from '../context/todoContext';
import { FormData } from '../interface/todo';
import { useNavigate } from 'react-router-dom';

const TodoAdd = () => {
  const { onAdd } = useContext(TodoCT);
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const navigate = useNavigate();

  const onSubmit = (data: FormData) => {
    onAdd(data);
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-6 bg-white rounded-lg shadow-lg space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Todo Text</label>
        <input
          type="text"
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          {...register('text', { required: 'Todo text is required' })}
        />
        {errors.text && <p className="text-red-600 text-xs">{errors.text.message}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Tag</label>
        <input
          type="text"
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          {...register('tag', { required: 'Tag is required' })}
        />
        {errors.tag && <p className="text-red-600 text-xs">{errors.tag.message}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Priority</label>
        <select
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          {...register('priority', { required: 'Priority is required' })}
        >
          <option value="">Select Priority</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        {errors.priority && <p className="text-red-600 text-xs">{errors.priority.message}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Due Date</label>
        <input
          type="date"
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          {...register('dueDate', {
            required: 'Due date is required',
            validate: {
              futureDate: (value) => {
                const today = new Date().toISOString().split('T')[0];
                return value >= today || 'Due date must be today or later';
              }
            }
          })}
        />
        {errors.dueDate && <p className="text-red-600 text-xs">{errors.dueDate.message}</p>}
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
      >
        Add Todo
      </button>
    </form>
  );
};

export default TodoAdd;
