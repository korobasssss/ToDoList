import { FC, useCallback, useState } from "react"
import { ISelectOptions } from "../../../base/interfaces"
import { ItemPopupComponent } from "../../components"

interface ICreateItemPopupContainer {
    handleIsPopupOpen: (isPopupOpen: boolean) => void
    isPopupOpen: boolean
}

export const CreateItemPopupContainer: FC<ICreateItemPopupContainer> = (
    {
        handleIsPopupOpen,
        isPopupOpen
    }
) => {
    const [input_name, setInput_name] = useState('')
    const [input_category, setInput_category] = useState<ISelectOptions | null>(null)
    const [input_description, setInput_description] = useState('')

    const handleSubmit = useCallback(() => {
        console.log(input_name, input_description)
    }, [input_name, input_description])

    return (
        <ItemPopupComponent
            popupTitle='Создание задачи'
            buttonSubmitTitle='Создать'
            buttonCancelTitle='Закрыть'
            input_name={input_name}
            input_category={input_category}
            input_description={input_description}
            handleSetInputName={setInput_name}
            handleSetInputCategory={setInput_category}
            handleSetInputDescription={setInput_description}
            handleIsPopupOpen={handleIsPopupOpen}
            isPopupOpen={isPopupOpen}
            handleSubmitForm={handleSubmit}
        />
    )
}