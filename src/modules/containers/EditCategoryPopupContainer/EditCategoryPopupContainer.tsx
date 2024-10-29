import { FC, useCallback } from "react"
import { CategoryPopupContainer } from "../CategoryPopupContainer"

interface IEditCategoryPopupContainer {
    handleIsPopupOpen: (isPopupOpen: boolean) => void
    isPopupOpen: boolean
}

export const EditCategoryPopupContainer: FC<IEditCategoryPopupContainer> = (
    {
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
            name={'блабла1'}
            description={'тожебалбла'}
            isPopupOpen={isPopupOpen}
            handleIsPopupOpen={handleIsPopupOpen}
            handleSubmitForm={handleSubmit}
        />
    )
}