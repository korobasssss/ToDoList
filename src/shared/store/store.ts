import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { fetchCategoriesApi, fetchTasksApi } from "../api";
import { filterSlice } from "./reducers";

export const reducers = combineReducers({
    [fetchTasksApi.reducerPath] : fetchTasksApi.reducer,
    [fetchCategoriesApi.reducerPath] : fetchCategoriesApi.reducer,
    filter: filterSlice.reducer
})

export const rootStore = () => 
    configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
        fetchTasksApi.middleware, 
        fetchCategoriesApi.middleware
    )
})