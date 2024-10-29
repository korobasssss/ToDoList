import { FC, useCallback, useEffect, useState } from "react"
import { CategoryPopupComponent } from "../../components"
import { CategoryPopupContext } from "../../contexts"

interface ICreateItemPopupContainer {
    handleIsPopupOpen: (isPopupOpen: boolean) => void
    isPopupOpen: boolean

    name: string | undefined
    description: string | undefined
    handleSubmitForm: (name: string, description: string | undefined) => void

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
    const [input_name, setInput_name] = useState<string | undefined>()
    const [input_description, setInput_description] = useState<string | undefined>()

    useEffect(() => {
        setInput_name(name ? name : undefined)
        setInput_description(description ? description : undefined)
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