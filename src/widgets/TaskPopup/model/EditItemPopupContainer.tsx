import { FC } from "react"
import { ISelectOptions, ITask } from "#shared/interfaces"
import { fetchTasksApi } from "#shared/api"
import { OverlayLoader } from "#shared/ui/OverlayLoader"
import { TaskPopupContainer } from "#features/TaskPopup"

interface IEditItemPopupContainer {
    task: ITask
    category: ISelectOptions | null
    handleIsPopupOpen: (isPopupOpen: boolean) => void
    isPopupOpen: boolean
}

export const EditItemPopupContainer: FC<IEditItemPopupContainer> = (
    {
        task,
        category,
        handleIsPopupOpen,
        isPopupOpen
    }
) => {
    const [fetchUpdateItem, {isLoading}] = fetchTasksApi.useFetchUpdateTaskMutation()

    const handleSubmit = async (input_name: string, input_category: ISelectOptions | null, input_description: string) => {
        try {
            const res: unknown = await fetchUpdateItem({
                id: task.id,
                name: input_name,
                description: input_description ?? null,
                categoryId: input_category?.value ?? null 
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
        <>
            <TaskPopupContainer
                popupTitle='Редактирование задачи'
                buttonSubmitTitle='Сохранить'
                buttonCancelTitle='Закрыть'

                name={task.name}
                category={category}
                description={task.description ?? ''}

                handleIsPopupOpen={handleIsPopupOpen}
                isPopupOpen={isPopupOpen}

                handleSubmitForm={handleSubmit}
            />
            {isLoading && (
                <OverlayLoader/>
            )}
        </>
    )
}