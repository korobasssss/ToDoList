import { useEffect, useState } from "react"
import { MainLayout } from "@/shared/ui/MainLayout"
import { TasksComponent } from "../ui/TasksComponent"
import { fetchTasksApi } from "@/shared/api"
import { CreateItemPopupContainer } from "@/widgets/TaskPopup"
import { ITask } from "@/shared/interfaces"
import { useSearchContext } from "@/app/hooks"

export const TasksContainer = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false)
    const { data: tasks, isLoading } = fetchTasksApi.useFetchGetTasksQuery();
    const [searchTasks, setSearchTasks] = useState<ITask[] | null>(null);
    const { searchValue } = useSearchContext();

    useEffect(() => {
        if (tasks) {
            if (searchValue === '') {
                setSearchTasks(tasks);
            } else {
                setSearchTasks(
                    tasks.filter(task => task.name.includes(searchValue) || task.description?.includes(searchValue)
                ));
            }
        }
    }, [tasks, searchValue]);

    return (
        <>
            <MainLayout
                title='ToDo List'
                buttonName='Добавить задачу'
                isLoading={isLoading}
                handleButtonClick={setIsPopupOpen}
            > 
                <TasksComponent
                    tasks={searchTasks}
                />
                <CreateItemPopupContainer
                        isPopupOpen={isPopupOpen}
                        handleIsPopupOpen={setIsPopupOpen}
                />
            </MainLayout>
        </>
    )
}