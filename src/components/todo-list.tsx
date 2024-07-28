import React, { useContext } from 'react'
import Item from './todo-item'
import { TodoCT } from '../context/todoContext'
import { ITodo } from '../interface/todo'



const List = () => {
  const {todos, onDelete} = useContext(TodoCT)
  return (
    <div className='todo-list'>
      {(todos) &&
        <div>
          {todos.map((todo:ITodo) => (
            <Item key={todo.id} todo={todo} onDelete={onDelete}/>
          ))}
        </div>
      }
    </div>
  )
}

export default List