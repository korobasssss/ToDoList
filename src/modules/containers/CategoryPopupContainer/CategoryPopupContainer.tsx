import { FC, useCallback, useEffect, useState } from "react"
import { CategoryPopupComponent } from "../../components"
import { CategoryPopupContext } from "../../contexts"

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

    useEffect(() => {
        setInput_name(name)
        setInput_description(description)
    }, [])

    const handleSubmit = useCallback(() => {
        if (input_name) {
            handleSubmitForm(input_name, input_description)
        }
    }, [input_name, input_description])

    return (
        <CategoryPopupContext.Provider value={{
            popupTitle,
            buttonSubmitTitle,
            buttonCancelTitle,

            input_name,
            input_description,

            handleSetInputName: setInput_name,
            handleSetInputDescription: setInput_description,

            handleIsPopupOpen,
            isPopupOpen,
            
            handleSubmitForm: handleSubmit
        }}>
            <CategoryPopupComponent/>
        </CategoryPopupContext.Provider>
    )
}