import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ITask } from "../interfaces";
import { backendBaseUrl } from "../config";

export interface ITaskCreate {
    name: string
    description: string | null
    categoryId: string | number | null
}

export const fetchTasksApi = createApi({
    reducerPath: 'fetchTasksApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${backendBaseUrl}/api/ToDoList` }),
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
        fetchDeleteTask: built.mutation<void, { id: number }>({
            query: ({ id }) => ({
                url: `RemoveTask/${id}`,
                method: 'GET'
            }),
            async onQueryStarted(arg: { id: number }, { dispatch, queryFulfilled }) {
                const { id } = arg;
                const patchResult = dispatch(
                    fetchTasksApi.util.updateQueryData('fetchGetTasks', undefined, (draft) => {
                        const index = draft.findIndex(task => task.id === id);
                        if (index !== -1) {
                            draft.splice(index, 1);
                        }
                    })
                );
                try {
                    await queryFulfilled;
                } catch {
                    patchResult.undo();
                }
            }
        })
    })
})