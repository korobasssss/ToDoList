import { FC } from "react"
import { OverlayLoader } from "#shared/ui/OverlayLoader"
import { Popup } from "#shared/ui/Popup"
import { DialogPopup } from "#shared/ui/DialogPopup"
import { ITask } from "#shared/interfaces"
import { fetchTasksApi } from "#shared/api"

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

    const handleSubmit = () => {
        fetchDeleteTask({
            id: task.id
        })
        return true
    }

    return (
        <>
            <Popup
                title='Удаление задачи'
                isOpen={isPopupOpen}
                handlerCancel={handleIsPopupOpen}
                buttonCancelName='Нет'
                handlerSubmit={handleSubmit}
                buttonSubmitName='Да'
                size='s'
            >
                <DialogPopup
                    message={`Вы уверены, что хотите удалить задачу “${task.name}”?`}
                />
            </Popup>
            {isLoading && (
                <OverlayLoader/>
            )}
        </>
    )
}