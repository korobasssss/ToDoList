import { createBrowserRouter, Navigate } from "react-router-dom";
import { PATHS } from "../constants";
import { CategoriesPage, TasksPage } from "../../../pages";

export const routes = createBrowserRouter([
    {
        path: PATHS.MAIN,
        element: <Navigate to={PATHS.TASKS}/>
    },
    {
        path: PATHS.TASKS,
        element: <TasksPage/>
    },
    {
        path: PATHS.CATEGORIES,
        element: <CategoriesPage/>
    }
])