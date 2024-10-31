import { useState } from "react"
import { MainLayout } from "../../../shared/ui/MainLayout"
import { OverlayLoader } from "../../../shared/ui/OverlayLoader"
import { TasksComponent } from "../ui/TasksComponent"
import { fetchTasksApi } from "../../../shared/api/fetchTasksApi"
import { CreateItemPopupContainer } from "../ui/TasksComponent/ui/OneTaskComponent/model/CreateItemPopupContainer"

export const TasksContainer = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false)
    const {data: tasks, isLoading} = fetchTasksApi.useFetchGetTasksQuery();

    return (
        <>
            <MainLayout
                title='ToDo List'
                buttonName='Добавить задачу'
                handleButtonClick={setIsPopupOpen}
            > 
                <TasksComponent
                    tasks={tasks}
                />
                {isPopupOpen && (
                    <CreateItemPopupContainer
                        isPopupOpen={isPopupOpen}
                        handleIsPopupOpen={setIsPopupOpen}
                    />
                )}
            </MainLayout>
            {isLoading && (
                <OverlayLoader/>
            )}
        </>
    )
}