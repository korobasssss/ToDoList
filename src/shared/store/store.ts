import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { fetchCategoriesApi, fetchTasksApi } from "../api";

export const reducers = combineReducers({
    [fetchTasksApi.reducerPath] : fetchTasksApi.reducer,
    [fetchCategoriesApi.reducerPath] : fetchCategoriesApi.reducer,
})

export const rootStore = () => 
    configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
        fetchTasksApi.middleware, 
        fetchCategoriesApi.middleware
    )
})