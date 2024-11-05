import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ICategory, IFormValue } from "../interfaces";
import { backendBaseUrl } from "../config";

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
        fetchPostCategory: built.mutation<ICategory, IFormValue>({
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
            async onQueryStarted(arg: { id: number }, { dispatch, queryFulfilled }) {
                const { id } = arg;
                const patchResult = dispatch(
                    fetchCategoriesApi.util.updateQueryData('fetchGetCategories', undefined, (draft) => {
                        const index = draft.findIndex(category => category.id === id);
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