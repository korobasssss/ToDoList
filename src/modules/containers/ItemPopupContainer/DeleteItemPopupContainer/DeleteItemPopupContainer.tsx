import { FC, useCallback } from "react"
import { OverlayLoader, Popup } from "../../../../base/components"
import { DeletePopupComponent } from "../../../components"
import { ITask } from "../../../interfaces"
import { fetchTasksApi } from "../../../api"

interface IDeleteItemPopupContainer {
    task: ITask
    handleIsPopupOpen: (isPopupOpen: boolean) => void
    isPopupOpen: boolean
}

export const DeleteItemPopupContainer: FC<IDeleteItemPopupContainer> = (
    {
        task,
        handleIsPopupOpen,
        isPopupOpen
    }
) => {
    const [fetchDeleteTask, { isLoading }] = fetchTasksApi.useFetchDeleteTaskMutation();

    const handleSubmit = useCallback(() => {
        handleClosePopup()
    }, [])

    const handleClosePopup = useCallback(() => {
        fetchDeleteTask({
            id: task.id
        })
        handleIsPopupOpen(false)
    }, [])

    return (
        <>
            <Popup
                title='Удаление задачи'
                isOpen={isPopupOpen}
                handlerCancel={handleClosePopup}
                buttonCancelName='Нет'
                handlerSubmit={handleSubmit}
                buttonSubmitName='Да'
                size='s'
            >
                <DeletePopupComponent
                    message={`Вы уверены, что хотите удалить задачу “${task.name}”?`}
                />
            </Popup>
            {isLoading && (
                <OverlayLoader/>
            )}
        </>
    )
}