import { useCallback, useState } from "react"
import { UlSection } from "../"
import { EditCategoryPopupContainer, DeleteCategoryPopupContainer } from "../../containers"

export const CategoriesComponent = () => {
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
                <EditCategoryPopupContainer
                    handleIsPopupOpen={setIsEditOpenPopup}
                    isPopupOpen={isEditOpenPopup}
                />
            )}
            {isDeleteOpenPopup && (
                <DeleteCategoryPopupContainer
                    handleIsPopupOpen={setIsDeleteOpenPopup}
                    isPopupOpen={isDeleteOpenPopup}
                />
            )}
        </>
    )
}