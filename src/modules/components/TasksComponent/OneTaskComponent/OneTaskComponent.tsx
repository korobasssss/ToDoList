import { FC, useEffect, useState } from "react"
import { ITask } from "../../../interfaces"
import { DeleteItemPopupContainer, EditItemPopupContainer } from "../../../containers"
import { UlItemLayout } from "../../"
import { fetchCategoriesApi } from "../../../api"
import { ISelectOptions } from "../../../../base/interfaces"
import { findCategory } from "../../../utils"

interface IOneTaskComponent {
    task: ITask
}

export const OneTaskComponent: FC<IOneTaskComponent> = (
    {
        task
    }
) => {
    const {data: categories} = fetchCategoriesApi.useFetchGetCategoriesQuery()

    const [category, setCategory] = useState<ISelectOptions | null>(null)

    useEffect(() => {
        if (task.categoryId && categories) {
            setCategory(findCategory(task.categoryId, categories))
        }
    }, [categories])

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