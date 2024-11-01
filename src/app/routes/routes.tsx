import { createBrowserRouter, Navigate } from "react-router-dom";
import { CategoriesContainer } from "#pages/categories";
import { ErrorComponent } from "#pages/error";
import { TasksContainer } from "#pages/tasks";
import { EPaths } from "#shared/enums";

export const routes = createBrowserRouter([
    {
        path: EPaths.MAIN,
        element: <Navigate to={EPaths.TASKS}/>,
        errorElement: <ErrorComponent/>
    },
    {
        path: EPaths.TASKS,
        element: <TasksContainer/>,
        errorElement: <ErrorComponent/>
    },
    {
        path: EPaths.CATEGORIES,
        element: <CategoriesContainer/>,
        errorElement: <ErrorComponent/>
    },
])