import { FC, useEffect, useState } from "react"
import { ICategory } from "@/shared/interfaces"
import { NoData } from "@/shared/ui/NoData"
import { CategoryContainer } from "@/widgets/Category"
import { DeleteCategoryPopupContainer, EditCategoryPopupContainer } from "@/widgets/CategoryPopup"
import { ErrorMessages } from "@/shared/constants"

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
    const [currCategory, setCurrCategory] = useState<ICategory | null>(null)

    useEffect(() => {
        if (!isEditOpenPopup && !isDeleteOpenPopup) {
            setCurrCategory(null)
        }
    }, [isEditOpenPopup, isDeleteOpenPopup])

    return (
        <>
            {categories && categories.length > 0 ? (
                categories?.map((category) => {
                    return (
                        <CategoryContainer
                            key={category.id}
                            category={category}
                            setCurrCategory={setCurrCategory}
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
                category={currCategory ?? null}
                handleIsPopupOpen={setIsEditOpenPopup}
                isPopupOpen={isEditOpenPopup}
            />
            <DeleteCategoryPopupContainer
                category={currCategory ?? null}
                handleIsPopupOpen={setIsDeleteOpenPopup}
                isPopupOpen={isDeleteOpenPopup}
            />
        </>
    )
}