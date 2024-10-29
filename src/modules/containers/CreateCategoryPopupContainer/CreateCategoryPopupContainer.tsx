import { FC, useCallback } from "react"
import { CategoryPopupContainer } from "../CategoryPopupContainer"

interface ICreateCategoryPopupContainer {
    handleIsPopupOpen: (isPopupOpen: boolean) => void
    isPopupOpen: boolean
}

export const CreateCategoryPopupContainer: FC<ICreateCategoryPopupContainer> = (
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
            popupTitle='Создание категории'
            buttonSubmitTitle='Создать'
            buttonCancelTitle='Закрыть'
            name={''}
            description={''}
            isPopupOpen={isPopupOpen}
            handleIsPopupOpen={handleIsPopupOpen}
            handleSubmitForm={handleSubmit}
        />
    )
}