import { FC, useCallback, useEffect, useState } from "react"
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

    const handleSetIsEditOpenPopup = useCallback(() => {
        setIsEditOpenPopup(!isEditOpenPopup)
    }, [isEditOpenPopup])


    const handleSetIsDeleteOpenPopup = useCallback(() => {
        setIsDeleteOpenPopup(!isDeleteOpenPopup)
    }, [isEditOpenPopup])

    return (
        <>
            <UlItemLayout
                name={task.name}
                category={category?.label ?? null}
                description={task.description}

                handleSetIsDeleteOpenPopup={handleSetIsDeleteOpenPopup}
                handleSetIsEditOpenPopup={handleSetIsEditOpenPopup}
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