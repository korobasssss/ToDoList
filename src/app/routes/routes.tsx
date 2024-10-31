import { createBrowserRouter, Navigate } from "react-router-dom";
import { CategoriesPage } from "#pages/categories";
import { ErrorPage } from "#pages/error";
import { TasksPage } from "#pages/tasks";
import { EPaths } from "#shared/enums";

export const routes = createBrowserRouter([
    {
        path: EPaths.MAIN,
        element: <Navigate to={EPaths.TASKS}/>,
        errorElement: <ErrorPage/>
    },
    {
        path: EPaths.TASKS,
        element: <TasksPage/>,
        errorElement: <ErrorPage/>
    },
    {
        path: EPaths.CATEGORIES,
        element: <CategoriesPage/>,
        errorElement: <ErrorPage/>
    },
])