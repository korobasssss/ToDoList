import { FC } from "react"
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

    const handleSubmit = () => {
        fetchDeleteTask({
            id: task.id
        })
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