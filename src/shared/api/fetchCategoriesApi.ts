import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ICategory } from "../interfaces";
import { backendBaseUrl } from "../config";

export interface ICategoryCreate {
    name: string
    description: string | null
}

export const fetchCategoriesApi = createApi({
    reducerPath: 'fetchCategoriesApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${backendBaseUrl}/api/ToDoList` }),
    tagTypes: ['Category'],
    endpoints: (built) => ({
        fetchGetCategories: built.query<ICategory[], void>({
            providesTags: (result) => 
                result ? 
                    [...result.map(({ id }) => ({ type: 'Category' as const, id })), 'Category'] : 
                    ['Category'],
            query: () => '/GetCategories'
        }),
        fetchPostCategory: built.mutation<ICategory, ICategoryCreate>({
            query: ({ ...patch }) => ({
                url: '/AddCategory',
                method: 'POST',
                body: patch
            }),
            invalidatesTags: ['Category']
        }),
        fetchUpdateCategory: built.mutation<ICategory, ICategory>({
            query: ({ ...patch }) => ({
                url: '/UpdateCategory',
                method: 'POST',
                body: patch
            }),
            invalidatesTags: ['Category']
        }),
        fetchDeleteCategory: built.mutation<void, {id: number}>({
            query: ({ id }) => ({
                url: `RemoveCategory/${id}`,
                method: 'GET'
            }),
            invalidatesTags: ['Category']
        })
    })
})