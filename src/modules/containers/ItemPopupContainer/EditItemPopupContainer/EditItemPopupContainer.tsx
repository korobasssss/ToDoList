import { FC, useCallback, useEffect, useState } from "react"
import { ISelectOptions } from "../../../../base/interfaces"
import { ItemPopupContainer } from "../"
import { ITask } from "../../../interfaces"
import { fetchCategoriesApi, fetchTasksApi } from "../../../api"
import { findCategory } from "../../../utils"
import { OverlayLoader } from "../../../../base/components"

interface IEditItemPopupContainer {
    task: ITask
    handleIsPopupOpen: (isPopupOpen: boolean) => void
    isPopupOpen: boolean
}

export const EditItemPopupContainer: FC<IEditItemPopupContainer> = (
    {
        task,
        handleIsPopupOpen,
        isPopupOpen
    }
) => {
    const {data: categories} = fetchCategoriesApi.useFetchGetCategoriesQuery()
    const [fetchUpdateItem, {isLoading}] = fetchTasksApi.useFetchUpdateTaskMutation()

    const [category, setCategory] = useState<ISelectOptions | null>(null)

    useEffect(() => {
        if (task.categoryId && categories) {
            console.log(findCategory(task.categoryId, categories))
            setCategory(findCategory(task.categoryId, categories))
        }
    }, [categories])

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