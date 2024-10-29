import { FC, useCallback, useEffect, useState } from "react"
import { CategoryPopupComponent } from "../../components"
import { CategoryPopupContext } from "../../contexts"
import { Popup } from "../../../base/components"

interface ICreateItemPopupContainer {
    handleIsPopupOpen: (isPopupOpen: boolean) => void
    isPopupOpen: boolean

    name: string
    description: string
    handleSubmitForm: (name: string, description: string) => void

    popupTitle: string
    buttonSubmitTitle? : string
    buttonCancelTitle : string
}

export const CategoryPopupContainer: FC<ICreateItemPopupContainer> = (
    {
        handleIsPopupOpen,
        isPopupOpen,
        name,
        description,
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

    const handleSubmit = useCallback(() => {
        if (!input_name) {
            setErrorName('Поле должно быть обязательным')
        } else {
            handleSubmitForm(input_name, input_description)
            handleClosePopup()
        }
    }, [input_name, input_description])

    const handleClosePopup = useCallback(() => {
        handleIsPopupOpen(false)
    }, [])

    return (
        <Popup
            title={popupTitle}
            isOpen={isPopupOpen}
            handlerCancel={handleClosePopup}
            buttonCancelName={buttonCancelTitle}
            handlerSubmit={handleSubmit}
            buttonSubmitName={buttonSubmitTitle}
            size='m'
        >
            <CategoryPopupContext.Provider value={{
                input_name,
                input_description,
                errorName: errorName,

                handleSetInputName: setInput_name,
                handleSetInputDescription: setInput_description,
                handleSetErrorName: setErrorName
            }}>
                <CategoryPopupComponent/>
            </CategoryPopupContext.Provider>
        </Popup>
    )
}