import { FC, useCallback } from "react"
import { ISelectOptions } from "../../../../base/interfaces"
import { ItemPopupContainer } from "../"
import { ITask } from "../../../interfaces"
import { fetchTasksApi } from "../../../api"
import { OverlayLoader } from "../../../../base/components"

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

    const handleSubmit = useCallback((input_name: string, input_category: ISelectOptions | null, input_description: string) => {
        fetchUpdateItem({
            id: task.id,
            name: input_name,
            description: input_description ?? null,
            categoryId: input_category?.value ?? null 
        })
        console.log(input_name, input_category, input_description)
    }, [])

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