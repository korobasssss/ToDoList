import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ITask, ITaskCreate } from "../interfaces";

export const fetchTasksApi = createApi({
    reducerPath: 'fetchTasksApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${process.env.SERVER_URL}/api/ToDoList` }),
    tagTypes: ['Task'],
    endpoints: (built) => ({
        fetchGetTasks: built.query<ITask[], void>({
            providesTags: (result) => 
                result ? 
                    [...result.map(({ id }) => ({ type: 'Task' as const, id })), 'Task'] : 
                    ['Task'],
            query: () => '/GetTasks'
        }),
        fetchPostTask: built.mutation<ITask, ITaskCreate>({
            query: ({ ...patch }) => ({
                url: '/AddTask',
                method: 'POST',
                body: patch
            }),
            invalidatesTags: ['Task']
        }),
        fetchUpdateTask: built.mutation<ITask, ITask>({
            query: ({ ...patch }) => ({
                url: '/UpdateTask',
                method: 'POST',
                body: patch
            }),
            invalidatesTags: ['Task']
        }),
        fetchDeleteTask: built.mutation<void, {id: number}>({
            query: ({ id }) => ({
                url: `RemoveTask/${id}`,
                method: 'GET'
            }),
            invalidatesTags: ['Task']
        })
    })
})