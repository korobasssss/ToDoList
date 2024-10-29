import { useCallback, useState } from "react"
import { MainLayout, OverlayLoader } from "../../../base/components"
import { TasksComponent } from "../../components"
import { CreateItemPopupContainer } from "../ItemPopupContainer/CreateItemPopupContainer"
import { fetchTasksApi } from "../../api"

export const TasksContainer = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false)

    const {data: tasks, isLoading} = fetchTasksApi.useFetchGetTasksQuery();

    const handleButtonClick = useCallback(() => {
        setIsPopupOpen(!isPopupOpen)
    }, [isPopupOpen])

    return (
        <>
            <MainLayout
                title='ToDo List'
                buttonName='Добавить задачу'
                handleButtonClick={handleButtonClick}
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