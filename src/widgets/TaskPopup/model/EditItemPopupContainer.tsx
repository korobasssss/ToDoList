import { SetStateAction } from "react"
import { ISelectOptions, ITask } from "#shared/interfaces"
import { fetchTasksApi } from "#shared/api"
import { OverlayLoader } from "#shared/ui/OverlayLoader"
import { TaskPopupContainer } from "#features/TaskPopup"

interface IEditItemPopupContainer<V extends string | number, K extends string> {
    task: ITask
    category: ISelectOptions<V, K> | null
    handleIsPopupOpen: React.Dispatch<SetStateAction<boolean>>
    isPopupOpen: boolean
}

export const EditItemPopupContainer = <V extends string | number, K extends string> (
    {
        task,
        category,
        handleIsPopupOpen,
        isPopupOpen
    }: IEditItemPopupContainer<V, K>
): JSX.Element => {
    const [fetchUpdateItem, {isLoading}] = fetchTasksApi.useFetchUpdateTaskMutation()

    const handleSubmit = async (inputName: string, inputCategory: ISelectOptions<V, K> | null, inputDescription: string) => {
        try {
            const res: unknown = await fetchUpdateItem({
                id: task.id,
                name: inputName,
                description: inputDescription ?? null,
                categoryId: inputCategory?.value ?? null 
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