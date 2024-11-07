import { FC, useEffect, useMemo, useState } from "react"
import { ICategory } from "@/shared/interfaces"
import { NoData } from "@/shared/ui/NoData"
import { CategoryContainer } from "@/widgets/Category"
import { DeleteCategoryPopupContainer, EditCategoryPopupContainer } from "@/widgets/CategoryPopup"
import { ErrorMessages } from "@/shared/constants"
import { useAppSelector } from "@/shared/store"
import { search } from "@/shared/utils"
import { filterCategories } from "../utils"
import { EOptionCategory } from "@/shared/enums"

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

    const {searchValue, filterValue} = useAppSelector(state => state.filter)

    const filteredCategories = useMemo(() => {
        if (!categories) return [];

        const searchArr = searchValue ? search(categories, searchValue) : categories;

        return filterValue ? filterCategories(searchArr, filterValue.value as EOptionCategory) : searchArr;
    }, [categories, searchValue, filterValue]);

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