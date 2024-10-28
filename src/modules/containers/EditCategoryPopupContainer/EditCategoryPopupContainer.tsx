import { FC, useCallback, useState } from "react"
import { CategoryPopupComponent } from "../../components"

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
    const [input_name, setInput_name] = useState('')
    const [input_description, setInput_description] = useState('')

    const handleSubmit = useCallback(() => {
        console.log(input_name, input_description)
    }, [input_name, input_description])

    return (
        <CategoryPopupComponent
            popupTitle='Редактирование категории'
            buttonSubmitTitle='Сохранить'
            buttonCancelTitle='Закрыть'
            input_name={input_name}
            input_description={input_description}
            handleSetInputName={setInput_name}
            handleSetInputDescription={setInput_description}
            isPopupOpen={isPopupOpen}
            handleIsPopupOpen={handleIsPopupOpen}
            handleSubmitForm={handleSubmit}
        />
    )
}