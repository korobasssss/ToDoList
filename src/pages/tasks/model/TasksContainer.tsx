import { useState } from "react"
import { MainLayout } from "@/shared/ui/MainLayout"
import { TasksComponent } from "../ui/TasksComponent"
import { fetchTasksApi } from "@/shared/api"
import { CreateItemPopupContainer } from "@/widgets/TaskPopup"
import { FilterComponent } from "@/entity/Filter"
import { filterOptions } from "../utils"

export const TasksContainer = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false)
    const { data: tasks, isLoading } = fetchTasksApi.useFetchGetTasksQuery();

    return (
        <>
            <MainLayout
                title='ToDo List'
                buttonName='Добавить задачу'
                isLoading={isLoading}
                handleButtonClick={setIsPopupOpen}
            > 
                <FilterComponent
                    options={filterOptions}
                />
                <TasksComponent
                    tasks={tasks}
                />
                <CreateItemPopupContainer
                        isPopupOpen={isPopupOpen}
                        handleIsPopupOpen={setIsPopupOpen}
                />
            </MainLayout>
        </>
    )
}