import { useCallback, useState } from "react"
import { UlSection } from "../"
import { DeleteItemPopupContainer, EditItemPopupContainer } from "../../containers"
import { OverlayLoader } from "../../../base/components"

export const TasksComponent = () => {
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
            <UlSection
                handleEdit={handleSetIsEditOpenPopup}
                handleDelete={handleSetIsDeleteOpenPopup}
            />
            {isEditOpenPopup && (
                <EditItemPopupContainer
                    handleIsPopupOpen={setIsEditOpenPopup}
                    isPopupOpen={isEditOpenPopup}
                />
            )}
            {isDeleteOpenPopup && (
                <DeleteItemPopupContainer
                    handleIsPopupOpen={setIsDeleteOpenPopup}
                    isPopupOpen={isDeleteOpenPopup}
                />
            )}
        </>
    )
}