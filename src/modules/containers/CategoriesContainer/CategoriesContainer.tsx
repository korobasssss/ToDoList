import { useCallback, useState } from "react"
import { MainLayout } from "../../../base/components"
import { CategoriesComponent } from "../../components"
import { CreateItemPopupContainer } from "../CreateItemPopupContainer"

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
                <CreateItemPopupContainer
                    isPopupOpen={isPopupOpen}
                    handleIsPopupOpen={setIsPopupOpen}
                />
            )}
        </MainLayout>
    )
}