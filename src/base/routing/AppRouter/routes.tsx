import { createBrowserRouter, Navigate } from "react-router-dom";
import { CategoriesPage, TasksPage } from "../../../pages";
import { EPaths } from "../../enums";

export const routes = createBrowserRouter([
    {
        path: EPaths.MAIN,
        element: <Navigate to={EPaths.TASKS}/>
    },
    {
        path: EPaths.TASKS,
        element: <TasksPage/>
    },
    {
        path: EPaths.CATEGORIES,
        element: <CategoriesPage/>
    }
])