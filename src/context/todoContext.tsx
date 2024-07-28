import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import React, { createContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AddTodo, DeleteTodo, GetAlls, UpdateTodo } from '../services/todo.service'
import { FormData } from '../interface/todo'

type Props = {
    children: React.ReactNode
}

export const TodoCT = createContext({} as any)
const TodoContext = ({children}: Props) => {
    const queryClient = useQueryClient()
    const navigate = useNavigate()
    const {data:todos} = useQuery({
        queryKey:['todos'],
        queryFn: async() =>{
            const todo = await GetAlls()
            return todo
        }
    })

    const mutations = useMutation({
        mutationFn: async (data:FormData) =>{
            AddTodo(data)
        },
        onSuccess: () =>{
            alert('Add todos successfully.')
            queryClient.invalidateQueries({queryKey:['todos']})
            navigate('/')
        }
    })

    const deleteMutation = useMutation({
        mutationFn: async (id:number|string)=>{
           await DeleteTodo(id)
        },
        onSuccess: ()=>{
          alert('Delete todos successfully.')
          queryClient.invalidateQueries({ queryKey: ['todos'] })
        }
    })

    const UpdateMutation = useMutation({
        mutationFn: async (data:{todoData:FormData,id:number|string})=>{
           await UpdateTodo(data.todoData,data.id)
        },
        onSuccess: ()=>{
          alert('Update todos successfully.')
          queryClient.invalidateQueries({ queryKey: ['todos'] })
          navigate('/')
        }
    })

    const onDelete = async(id:number|string) =>{
        if (confirm('Are you sure?')) {
            deleteMutation.mutate(id)
        }
    }

    const onAdd = async(data:FormData) =>{
        mutations.mutate(data)
    }

    const onUpdate = async(data:FormData, id:number|string) =>{
        UpdateMutation.mutate({todoData:data, id:id})
    }

    

    return (
    <TodoCT.Provider value={{todos, onDelete, onAdd, onUpdate}}>
        {children}
    </TodoCT.Provider>
    )
}

export default TodoContext