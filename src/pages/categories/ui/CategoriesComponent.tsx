import { FC, useEffect, useState } from "react"
import { ICategory } from "@/shared/interfaces"
import { NoData } from "@/shared/ui/NoData"
import { CategoryContainer } from "@/widgets/Category"
import { DeleteCategoryPopupContainer, EditCategoryPopupContainer } from "@/widgets/CategoryPopup"
import { ErrorMessages } from "@/shared/constants"
import { useAppSelector } from "@/shared/store"
import { search } from "@/shared/utils"
import { filterCategories } from "../utils"

interface ICategoriesComponent {
    categories?: ICategory[] | null
}

export const CategoriesComponent: FC<ICategoriesComponent> = (
    {
        categories
    }
) => {
    const [isEditOpenPopup, setIsEditOpenPopup] = useState(false)
    const [isDeleteOpenPopup, setIsDeleteOpenPopup] = useState(false)
    const [currCategory, setCurrCategory] = useState<ICategory | null>(null)

    const [filteredCategories, setFilteredCategories] = useState<ICategory[] | null>(null);

    const {searchValue, filterValue} = useAppSelector(state => state.filter)

    useEffect(() => {
        if (categories) {
            const searchArr = searchValue ? search(categories, searchValue) : categories
            const filterArr = filterValue ? filterCategories(categories, filterValue?.value) : categories

            setFilteredCategories(searchArr && filterArr ? filterArr.filter(item => searchArr.includes(item)) : [])
        }
    }, [categories, searchValue, filterValue])

    useEffect(() => {
        if (!isEditOpenPopup && !isDeleteOpenPopup) {
            setCurrCategory(null)
        }
    }, [isEditOpenPopup, isDeleteOpenPopup])

    return (
        <>
            {filteredCategories && filteredCategories.length > 0 ? (
                filteredCategories.map((category) => {
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