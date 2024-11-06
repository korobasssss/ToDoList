import { useEffect, useState } from "react"
import { MainLayout } from "@/shared/ui/MainLayout"
import { CategoriesComponent } from "../ui/CategoriesComponent"
import { fetchCategoriesApi } from "@/shared/api"
import { CreateCategoryPopupContainer } from "@/widgets/CategoryPopup"
import { ICategory } from "@/shared/interfaces"
import { useFilterContext, useSearchContext } from "@/app/hooks"
import { filterCategories, filterOptions } from "../utils"
import { FilterComponent } from "@/entity/Filter"
import { search } from "@/shared/utils"

export const CategoriesContainer = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false)
    const {data: categories, isLoading} = fetchCategoriesApi.useFetchGetCategoriesQuery()

    const [filteredCategories, setFilteredCategories] = useState<ICategory[] | null>(null);
    const { searchValue } = useSearchContext();
    const { filterValue } = useFilterContext();

    useEffect(() => {
        if (categories) {
            const searchArr = searchValue ? search(categories, searchValue) : categories
            const filterArr = filterValue ? filterCategories(categories, filterValue?.value) : categories

            setFilteredCategories(searchArr && filterArr ? filterArr.filter(item => searchArr.includes(item)) : [])
        }
    }, [categories, searchValue, filterValue])

    return (
        <>
            <MainLayout
                title='ToDo List'
                buttonName='Добавить категорию'
                isLoading={isLoading}
                handleButtonClick={setIsPopupOpen}
            >
                <FilterComponent
                    options={filterOptions}
                />
                <CategoriesComponent
                    categories={filteredCategories}
                />
                <CreateCategoryPopupContainer
                        isPopupOpen={isPopupOpen}
                        handleIsPopupOpen={setIsPopupOpen}
                />
            </MainLayout>
        </>
    )
}