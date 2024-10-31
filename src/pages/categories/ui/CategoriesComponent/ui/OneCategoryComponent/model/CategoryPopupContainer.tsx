import { FC, useEffect, useState } from "react"
import { CategoryPopupComponent } from "../ui/CategoryPopupComponent"
import { Popup } from "#shared/ui/Popup"

interface ICreateItemPopupContainer {
    handleIsPopupOpen: (isPopupOpen: boolean) => void
    isPopupOpen: boolean

    name?: string
    description?: string
    handleSubmitForm: (name: string, description: string) => void

    popupTitle: string
    buttonSubmitTitle? : string
    buttonCancelTitle : string
}

export const CategoryPopupContainer: FC<ICreateItemPopupContainer> = (
    {
        handleIsPopupOpen,
        isPopupOpen,
        name = '',
        description = '',
        handleSubmitForm,
        popupTitle,
        buttonSubmitTitle,
        buttonCancelTitle,
    }
) => {
    const [input_name, setInput_name] = useState<string>('')
    const [input_description, setInput_description] = useState<string>('')
    const [errorName, setErrorName] = useState('')

    useEffect(() => {
        setInput_name(name)
        setInput_description(description)
    }, [])

    const handleSubmit = () => {
        if (!input_name) {
            setErrorName('Поле должно быть обязательным')
            return false
        } else {
            handleSubmitForm(input_name, input_description)
            return true
        }
    }

    return (
        <Popup
            title={popupTitle}
            isOpen={isPopupOpen}
            handlerCancel={handleIsPopupOpen}
            buttonCancelName={buttonCancelTitle}
            handlerSubmit={handleSubmit}
            buttonSubmitName={buttonSubmitTitle}
            size='m'
        >
            <CategoryPopupComponent 
                input_name={input_name}
                input_description={input_description}
                errorName={errorName}

                handleSetInputName={setInput_name}
                handleSetInputDescription={setInput_description}
                handleSetErrorName={setErrorName}
            />
        </Popup>
    )
}