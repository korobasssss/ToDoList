import { useCallback, useState } from "react"
import { MainLayout } from "../../../base/components"
import { CategoriesComponent } from "../../components"
import { CreateCategoryPopupContainer } from "../CreateCategoryPopupContainer"

export const CategoriesContainer = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false)

    const handleButtonClick = useCallback(() => {
        setIsPopupOpen(!isPopupOpen)
    }, [isPopupOpen])

    return (
        <MainLayout
            title='ToDo List'
            buttonName='Добавить категорию'
            handleButtonClick={handleButtonClick}
        > 
            <CategoriesComponent/>
            {isPopupOpen && (
                <CreateCategoryPopupContainer
                    isPopupOpen={isPopupOpen}
                    handleIsPopupOpen={setIsPopupOpen}
                />
            )}
        </MainLayout>
    )
}