import { FC, useCallback, useState } from "react"
import { ICategory } from "../../../interfaces"
import { DeleteCategoryPopupContainer, EditCategoryPopupContainer } from "../../../containers"
import { UlItemLayout } from "../../"

interface IOneTaskComponent {
    category: ICategory
}

export const OneCategoryComponent: FC<IOneTaskComponent> = (
    {
        category
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
                name={category.name}
                category={null}
                description={category.description}
                
                handleSetIsDeleteOpenPopup={handleSetIsDeleteOpenPopup}
                handleSetIsEditOpenPopup={handleSetIsEditOpenPopup}
            />
            
            {isEditOpenPopup && (
                <EditCategoryPopupContainer
                    category={category}
                    handleIsPopupOpen={setIsEditOpenPopup}
                    isPopupOpen={isEditOpenPopup}
                />
            )}
            {isDeleteOpenPopup && (
                <DeleteCategoryPopupContainer
                    category={category}
                    handleIsPopupOpen={setIsDeleteOpenPopup}
                    isPopupOpen={isDeleteOpenPopup}
                />
            )}
        </>
    )
}