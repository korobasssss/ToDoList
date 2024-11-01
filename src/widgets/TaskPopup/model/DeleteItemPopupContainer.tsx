import { FC } from "react"
import { ITask } from "#shared/interfaces"
import { fetchTasksApi } from "#shared/api"
import { DeletePopup } from "#features/DeletePopup"

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

    const handleSubmit = async () => {
        try {
            const res: unknown = await fetchDeleteTask({
                id: task.id
            })
            if (res && typeof res === 'object' && 'error' in res) {
                return false;
            } else {
                return true;
            }
        } catch {
            return false;
        }
    }

    return (
        <DeletePopup
            handleCancel={handleIsPopupOpen}
            isPopupOpen={isPopupOpen}
            handleSubmit={handleSubmit}
            name={task.name}
            popupTitle={"Удаление категории"}
            buttonSubmitTitle={'Да'}
            buttonCancelTitle={'Нет'}
            isLoading={isLoading}
        />
    )
}