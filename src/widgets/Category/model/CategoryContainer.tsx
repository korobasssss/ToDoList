import { FC, useState } from "react"
import { ICategory } from "#shared/interfaces"
import { DeleteCategoryPopupContainer, EditCategoryPopupContainer } from "../../CategoryPopup"
import { ItemComponent } from "#features/Item"

interface IOneTaskComponent {
    category: ICategory
}

export const CategoryContainer: FC<IOneTaskComponent> = (
    {
        category
    }
) => {
    const [isEditOpenPopup, setIsEditOpenPopup] = useState(false)
    const [isDeleteOpenPopup, setIsDeleteOpenPopup] = useState(false)

    return (
        <ItemComponent
            name={category.name}
            category={null}
            description={category.description}
            EditPopupComponent={
                <EditCategoryPopupContainer
                    category={category}
                    handleIsPopupOpen={setIsEditOpenPopup}
                    isPopupOpen={isEditOpenPopup}
                />
            }
            DeletePopupComponent={
                <DeleteCategoryPopupContainer
                    category={category}
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