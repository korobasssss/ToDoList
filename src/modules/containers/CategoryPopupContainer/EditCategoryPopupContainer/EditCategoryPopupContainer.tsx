import { FC, useCallback } from "react"
import { CategoryPopupContainer } from ".."
import { ICategory } from "../../../interfaces"

interface IEditCategoryPopupContainer {
    category: ICategory
    handleIsPopupOpen: (isPopupOpen: boolean) => void
    isPopupOpen: boolean
}

export const EditCategoryPopupContainer: FC<IEditCategoryPopupContainer> = (
    {
        category,
        handleIsPopupOpen,
        isPopupOpen
    }
) => {

    const handleSubmit = useCallback((input_name: string, input_description: string | undefined) => {
        console.log(input_name, input_description)
    }, [])

    return (
        <CategoryPopupContainer
            popupTitle='Редактирование категории'
            buttonSubmitTitle='Создать'
            buttonCancelTitle='Закрыть'
            name={category.name}
            description={category.description ?? ''}
            isPopupOpen={isPopupOpen}
            handleIsPopupOpen={handleIsPopupOpen}
            handleSubmitForm={handleSubmit}
        />
    )
}