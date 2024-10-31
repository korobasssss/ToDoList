import { FC, useMemo, useState } from "react"
import { ITask, ISelectOptions } from "#shared/interfaces"
import { DeleteItemPopupContainer } from "../model/DeleteItemPopupContainer"
import { EditItemPopupContainer } from "../model/EditItemPopupContainer"
import { UlItemLayout } from "#shared/ui/UlItemLayout"
import { fetchCategoriesApi } from "#shared/api"
import { findCategory } from "../utils"

interface IOneTaskComponent {
    task: ITask
}

export const OneTaskComponent: FC<IOneTaskComponent> = (
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
        <>
            <UlItemLayout
                name={task.name}
                category={category?.label ?? null}
                description={task.description}

                handleSetIsDeleteOpenPopup={setIsDeleteOpenPopup}
                handleSetIsEditOpenPopup={setIsEditOpenPopup}
            />
            
            {isEditOpenPopup && (
                <EditItemPopupContainer
                    task={task}
                    category={category}
                    handleIsPopupOpen={setIsEditOpenPopup}
                    isPopupOpen={isEditOpenPopup}
                />
            )}
            {isDeleteOpenPopup && (
                <DeleteItemPopupContainer
                    task={task}
                    handleIsPopupOpen={setIsDeleteOpenPopup}
                    isPopupOpen={isDeleteOpenPopup}
                />
            )}
        </>
    )
}