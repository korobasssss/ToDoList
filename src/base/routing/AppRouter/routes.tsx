import { createBrowserRouter, Navigate } from "react-router-dom";
import { CategoriesPage, ErrorPage, TasksPage } from "../../../pages";
import { EPaths } from "../../enums";

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