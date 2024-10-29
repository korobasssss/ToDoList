import { useCallback, useState } from "react"
import { MainLayout } from "../../../base/components"
import { CategoriesComponent } from "../../components"
import { CreateCategoryPopupContainer } from "../CategoryPopupContainer/CreateCategoryPopupContainer"
import { fetchCategoriesApi } from "../../api"

export const CategoriesContainer = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false)

    const {data: categories} = fetchCategoriesApi.useFetchGetCategoriesQuery()

    const handleButtonClick = useCallback(() => {
        setIsPopupOpen(!isPopupOpen)
    }, [isPopupOpen])

    console.log(categories)

    return (
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
    )
}