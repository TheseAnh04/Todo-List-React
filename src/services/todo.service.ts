import api from "../config/axios"
import { FormData } from "../interface/todo"

export const GetAlls = async () => {
    try {
        const {data} = await api.get('todos')
        return data
    } catch (error) {
        throw new Error('error')
    }
}

export const GetById = async (id:number|string) => {
    try {
        const {data} = await api.get(`todos/${id}`)
        return data
    } catch (error) {
        throw new Error('error')
    }
}

export const AddTodo = async(todoData:FormData) => {
    try {
        const {data} = await api.post(`todos`,todoData)
        return data
    } catch (error) {
        throw new Error('error')
    }
}

export const UpdateTodo = async(todoData:FormData, id:number|string) => {
    try {
        const {data} = await api.put(`todos/${id}`,todoData)
        return data
    } catch (error) {
        throw new Error('error')
    }
}

export const DeleteTodo = async(id:number|string) => {
    try {
        const {data} = await api.delete(`todos/${id}`)
        return data
    } catch (error) {
        throw new Error('error')
    }
}