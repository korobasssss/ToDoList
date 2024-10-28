import { FC, useCallback, useState } from "react"
import { Popup } from "../../../base/components"
import { CreateCategoryPopupComponent } from "../../components"

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
    const [input_name, setInput_name] = useState('')
    const [input_description, setInput_description] = useState('')

    const handleSubmit = useCallback(() => {
        console.log(input_name, input_description)
        handleClosePopup()
    }, [input_name, input_description])

    const handleClosePopup = useCallback(() => {
        handleIsPopupOpen(false)
    }, [])

    return (
        <Popup
            title="Создание категории"
            isOpen={isPopupOpen}
            handlerCancel={handleClosePopup}
            buttonCancelName='Закрыть'
            handlerSubmit={handleSubmit}
            buttonSubmitName="Создать"
            size='m'
        >
            <CreateCategoryPopupComponent
                input_name={input_name}
                input_description={input_description}
                handleSetInputName={setInput_name}
                handleSetInputDescription={setInput_description}
            />
        </Popup>
    )
}