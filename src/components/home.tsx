import React, { useState } from 'react'
import List from './todo-list'
import { Link, useLocation, useNavigate, useNavigation } from 'react-router-dom'
import TodoAdd from './todo-add'
import TodoEdit from './todo-edit'

type Props = {}

const Home = (props: Props) => {
  // const [isAdd, setIsAdd] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isAdd = location.pathname === '/add-todo';
  const isEdit = location.pathname.startsWith('/edit-todo/')

  const handleClick = () =>{
    if (isAdd ) {
      navigate('/');
    }else{
      navigate('/add-todo');
    }
  }

  return (
    <div className='md:col-span-3 bg-white p-6 rounded-lg shadow-lg'>
        <div className="mb-6 flex flex-col md:flex-row items-center justify-between">
            <h2 className="text-3xl font-semibold text-gray-800">{isAdd ? 'Add Todo Form' : isEdit ? 'Edit Todo Form' : 'Todo List'}</h2>
            {!isAdd && !isEdit && (
              <div className="flex mt-4 md:mt-0 items-center space-x-4">
                  <div className="relative w-full md:w-72">
                      <input type="text" placeholder="Search todo" className="p-2 pr-10 border border-gray-300 rounded-md w-full" />
                      <button className="absolute top-1/2 right-2 transform -translate-y-1/2">
                          <svg className="w-6 h-6 text-gray-800 hover:text-gray-600 transition-colors duration-200 ease-in-out" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                              <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
                          </svg>
                      </button>
                  </div>
              </div>
            )}
        </div>
        {isAdd ? <TodoAdd /> : isEdit ? <TodoEdit /> : <List />}
        {!isEdit && (
        <div className='mt-5 flex justify-end p-4'>
          <button onClick={handleClick} className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            {isAdd ? 'Back to List' : 'Add'}
          </button>
        </div>
      )}
    </div>
  )
}

export default Home