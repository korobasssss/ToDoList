import { FC, useMemo, useState } from "react"
import { ITask } from "../../../interfaces"
import { DeleteItemPopupContainer, EditItemPopupContainer } from "../../../containers"
import { UlItemLayout } from "../../"
import { fetchCategoriesApi } from "../../../api"
import { findCategory } from "../../../utils"
import { ISelectOptions } from "../../../../base/interfaces"

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