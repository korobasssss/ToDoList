import { FC, useEffect, useState } from "react"
import { ICategory } from "#shared/interfaces"
import { NoData } from "#shared/ui/NoData"
import { CategoryContainer } from "#widgets/Category"
import { DeleteCategoryPopupContainer, EditCategoryPopupContainer } from "#widgets/CategoryPopup"
import { ErrorMessages } from "#shared/constants"

interface ICategoriesComponent {
    categories?: ICategory[]
}

export const CategoriesComponent: FC<ICategoriesComponent> = (
    {
        categories
    }
) => {
    const [isEditOpenPopup, setIsEditOpenPopup] = useState(false)
    const [isDeleteOpenPopup, setIsDeleteOpenPopup] = useState(false)
    const [currIdex, setCurrIndex] = useState(-1)

    useEffect(() => {
        if (!isEditOpenPopup) {
            setCurrIndex(-1)
        }
    }, [isEditOpenPopup])

    useEffect(() => {
        if (!isDeleteOpenPopup) {
            setCurrIndex(-1)
        }
    }, [isDeleteOpenPopup])

    return (
        <>
            {categories && categories.length > 0 ? (
                categories?.map((category, index) => {
                    return (
                        <CategoryContainer
                            index={index}
                            key={category.id}
                            category={category}
                            setCurrIndex={setCurrIndex}
                            setIsDeleteOpenPopup={setIsDeleteOpenPopup}
                            setIsEditOpenPopup={setIsEditOpenPopup}
                    />
                    )
                })
            ) : 
                <NoData
                    message={ErrorMessages.NO_CATEGORIES}
                />
            }
            <EditCategoryPopupContainer
                category={currIdex === -1 || !categories || categories.length === 0 ? null : categories[currIdex]}
                handleIsPopupOpen={setIsEditOpenPopup}
                isPopupOpen={isEditOpenPopup}
            />
            <DeleteCategoryPopupContainer
                category={currIdex === -1 || !categories || categories.length === 0 ? null : categories[currIdex]}
                handleIsPopupOpen={setIsDeleteOpenPopup}
                isPopupOpen={isDeleteOpenPopup}
            />
        </>
    )
}