import { useCallback, useState } from "react"
import { MainLayout } from "../../../base/components"
import { TasksComponent } from "../../components"
import { CreateItemPopupContainer } from "../ItemPopupContainer/CreateItemPopupContainer"
import { fetchTasksApi } from "../../api"

export const TasksContainer = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false)

    const {data: tasks} = fetchTasksApi.useFetchGetTasksQuery();

    const handleButtonClick = useCallback(() => {
        setIsPopupOpen(!isPopupOpen)
    }, [isPopupOpen])

    return (
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
    )
}