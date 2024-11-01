import { FC, useMemo, useState } from "react"
import { ITask, ISelectOptions } from "#shared/interfaces"
import { DeleteItemPopupContainer, EditItemPopupContainer } from "../../TaskPopup"
import { fetchCategoriesApi } from "#shared/api"
import { ItemComponent } from "#features/Item"
import { findCategory } from "../utils"

interface ITaskContainer {
    task: ITask
}

export const TaskContainer: FC<ITaskContainer> = (
    {
        task
    }
) => {
    const {data: categories} = fetchCategoriesApi.useFetchGetCategoriesQuery()

    const category: ISelectOptions | null = useMemo(() => {
        return task.categoryId && categories ? findCategory(task.categoryId, categories) : null
    }, [task.categoryId, categories])

    const [isEditOpenPopup, setIsEditOpenPopup] = useState(false)
    const [isDeleteOpenPopup, setIsDeleteOpenPopup] = useState(false)

    return (
        <ItemComponent
            name={task.name}
            category={category?.label ?? null}
            description={task.description}
            EditPopupComponent={
                <EditItemPopupContainer
                    task={task}
                    category={category}
                    handleIsPopupOpen={setIsEditOpenPopup}
                    isPopupOpen={isEditOpenPopup}
                />
            }
            DeletePopupComponent={
                <DeleteItemPopupContainer
                    task={task}
                    handleIsPopupOpen={setIsDeleteOpenPopup}
                    isPopupOpen={isDeleteOpenPopup}
                />
            }
            isEditOpenPopup={isEditOpenPopup}
            isDeleteOpenPopup={isDeleteOpenPopup}
            setIsEditOpenPopup={setIsEditOpenPopup}
            setIsDeleteOpenPopup={setIsDeleteOpenPopup}
        />
    )
}