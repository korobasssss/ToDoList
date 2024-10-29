import { FC, useCallback, useState } from "react"
import { ITask } from "../../../interfaces"
import { DeleteItemPopupContainer, EditItemPopupContainer } from "../../../containers"
import { UlItemLayout } from "../../"

interface IOneTaskComponent {
    task: ITask
}

export const OneTaskComponent: FC<IOneTaskComponent> = (
    {
        task
    }
) => {
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
                category={task.categoryId.toString()}
                description={task.description}

                handleSetIsDeleteOpenPopup={handleSetIsDeleteOpenPopup}
                handleSetIsEditOpenPopup={handleSetIsEditOpenPopup}
            />
            {isEditOpenPopup && (
                <EditItemPopupContainer
                    task={task}
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