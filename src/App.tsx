import { useRoutes } from 'react-router-dom'
import './App.css'
import Dashbroad from './layout/dashboard'
import Home from './components/home'
import TodoContext from './context/todoContext'
// import TodoEdit from './components/todo-edit'

function App() {
  const router = useRoutes([
    {path:'', element:<TodoContext><Dashbroad/></TodoContext>,children:[
      {path:'',element:<Home/>},
      {path:'/add-todo',element:<Home/>},
      {path:'/edit-todo/:id',element:<Home/>}
    ]}
  ])
  return router
}

export default App
