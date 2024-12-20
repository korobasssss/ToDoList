import { useState } from "react"
import { MainLayout } from "@/shared/ui/MainLayout"
import { CategoriesComponent } from "../ui/CategoriesComponent"
import { fetchCategoriesApi } from "@/shared/api"
import { CreateCategoryPopupContainer } from "@/widgets/CategoryPopup"
import { filterOptions } from "../utils"
import { FilterComponent } from "@/entity/Filter"

export const CategoriesContainer = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false)
    const {data: categories, isLoading} = fetchCategoriesApi.useFetchGetCategoriesQuery()

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
                    categories={categories}
                />
                <CreateCategoryPopupContainer
                        isPopupOpen={isPopupOpen}
                        handleIsPopupOpen={setIsPopupOpen}
                />
            </MainLayout>
        </>
    )
}