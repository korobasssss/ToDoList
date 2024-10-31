import { useState } from "react"
import { MainLayout } from "#shared/ui/MainLayout"
import { OverlayLoader } from "#shared/ui/OverlayLoader"
import { CategoriesComponent } from "../ui/CategoriesComponent"
import { CreateCategoryPopupContainer } from "../ui/CategoriesComponent/ui/OneCategoryComponent/model/CreateCategoryPopupContainer"
import { fetchCategoriesApi } from "#shared/api/fetchCategoriesApi"

export const CategoriesContainer = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false)
    const {data: categories, isLoading} = fetchCategoriesApi.useFetchGetCategoriesQuery()

    return (
        <>
            <MainLayout
                title='ToDo List'
                buttonName='Добавить категорию'
                handleButtonClick={setIsPopupOpen}
            > 
                <CategoriesComponent
                    categories={categories}
                />
                {isPopupOpen && (
                    <CreateCategoryPopupContainer
                        isPopupOpen={isPopupOpen}
                        handleIsPopupOpen={setIsPopupOpen}
                    />
                )}
            </MainLayout>
            {isLoading && (
                <OverlayLoader/>
            )}
        </>
    )
}