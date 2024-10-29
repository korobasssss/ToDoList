import { useCallback, useState } from "react"
import { MainLayout } from "../../../base/components"
import { TasksComponent } from "../../components"
import { CreateItemPopupContainer } from "../CreateItemPopupContainer"

export const TasksContainer = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false)

    const handleButtonClick = useCallback(() => {
        setIsPopupOpen(!isPopupOpen)
    }, [isPopupOpen])

    return (
        <MainLayout
            title='ToDo List'
            buttonName='Добавить задачу'
            handleButtonClick={handleButtonClick}
        > 
            <TasksComponent/>
            {isPopupOpen && (
                <CreateItemPopupContainer
                    isPopupOpen={isPopupOpen}
                    handleIsPopupOpen={setIsPopupOpen}
                />
            )}
        </MainLayout>
    )
}