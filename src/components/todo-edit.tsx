import React, { useContext, useEffect } from 'react'
import { TodoCT } from '../context/todoContext'
import { useForm } from 'react-hook-form'
import { FormData } from '../interface/todo'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { GetById } from '../services/todo.service'

type Props = {}

const TodoEdit = (props: Props) => {
  const {onUpdate} = useContext(TodoCT)
  const { register, handleSubmit, reset } = useForm<FormData>()
  const param = useParams()
  useEffect(()=>{
    (async () =>{
        const todo = await GetById(param?.id as number|string)
        reset({
            text: todo.text,
            tag: todo.tag,
            priority: todo.priority,
            dueDate: todo.dueDate
        })
    })()
  },[])
  const onSubmit = (data:FormData)=>{
    onUpdate(data,param?.id as number|string)
  }
  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)} className="p-6 bg-white rounded-lg shadow-lg space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Todo Text</label>
        <input
          type="text"
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          {...register('text', { required: 'Todo text is required' })}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Tag</label>
        <input
          type="text"
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          {...register('tag', { required: 'Tag is required' })}
        />
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
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Due Date</label>
        <input
          type="date"
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          {...register('dueDate')}
        />
      </div>
      <button type="submit" className="bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-900">Update Todo</button>
    </form>
    <div className='flex justify-end px-4 py-2 mt-8'>
    <Link to='/'  className=" bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-900">Back to List</Link>
    </div>
    </>
  )
}

export default TodoEdit