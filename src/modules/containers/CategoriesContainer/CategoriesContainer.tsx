import { useCallback, useState } from "react"
import { MainLayout, OverlayLoader } from "../../../base/components"
import { CategoriesComponent } from "../../components"
import { CreateCategoryPopupContainer } from "../CategoryPopupContainer/CreateCategoryPopupContainer"
import { fetchCategoriesApi } from "../../api"

export const CategoriesContainer = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false)

    const {data: categories, isLoading} = fetchCategoriesApi.useFetchGetCategoriesQuery()

    const handleButtonClick = useCallback(() => {
        setIsPopupOpen(!isPopupOpen)
    }, [isPopupOpen])

    return (
        <>
            <MainLayout
                title='ToDo List'
                buttonName='Добавить категорию'
                handleButtonClick={handleButtonClick}
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