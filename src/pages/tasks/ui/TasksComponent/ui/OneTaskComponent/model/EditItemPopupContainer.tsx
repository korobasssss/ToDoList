import { FC } from "react"
import { ISelectOptions } from "../../../../../../../shared/interfaces/ISelectOptions"
import { ITask } from "../../../../../../../shared/interfaces/ITask"
import { fetchTasksApi } from "../../../../../../../shared/api/fetchTasksApi"
import { OverlayLoader } from "../../../../../../../shared/ui/OverlayLoader"
import { ItemPopupContainer } from "../../../../../model/ItemPopupContainer"

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

    const handleSubmit = (input_name: string, input_category: ISelectOptions | null, input_description: string) => {
        fetchUpdateItem({
            id: task.id,
            name: input_name,
            description: input_description ?? null,
            categoryId: input_category?.value ?? null 
        })
    }

    return (
        <>
            <ItemPopupContainer
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