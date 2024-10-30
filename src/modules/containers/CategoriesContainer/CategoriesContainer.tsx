import { useState } from "react"
import { MainLayout, OverlayLoader } from "../../../base/components"
import { CategoriesComponent } from "../../components"
import { CreateCategoryPopupContainer } from "../CategoryPopupContainer/CreateCategoryPopupContainer"
import { fetchCategoriesApi } from "../../api"

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