import { FC, useCallback, useEffect, useState } from "react"
import { ISelectOptions } from "../../../base/interfaces"
import { ItemPopupComponent } from "../../components"
import { ItemPopupContext } from "../../contexts"

interface ICreateItemPopupContainer {
    handleIsPopupOpen: (isPopupOpen: boolean) => void
    isPopupOpen: boolean

    name: string | undefined
    category: ISelectOptions | null
    description: string | undefined
    handleSubmitForm: (name: string, category: ISelectOptions | null, description: string | undefined) => void

    popupTitle: string
    buttonSubmitTitle? : string
    buttonCancelTitle : string
}

export const ItemPopupContainer: FC<ICreateItemPopupContainer> = (
    {
        handleIsPopupOpen,
        isPopupOpen,
        name,
        category,
        description,
        handleSubmitForm,
        popupTitle,
        buttonSubmitTitle,
        buttonCancelTitle,
    }
) => {
    const [input_name, setInput_name] = useState<string | undefined>()
    const [input_category, setInput_category] = useState<ISelectOptions | null>(null)
    const [input_description, setInput_description] = useState<string | undefined>()

    useEffect(() => {
        setInput_name(name ? name : undefined)
        setInput_description(description ? description : undefined)
        setInput_category(category ? category : null)
    }, [])

    const handleSubmit = useCallback(() => {
        if (input_name) {
            handleSubmitForm(input_name, input_category, input_description)
        }
    }, [input_name, input_category, input_description])

    return (
        <ItemPopupContext.Provider value={{
            popupTitle,
            buttonSubmitTitle,
            buttonCancelTitle,

            input_name,
            input_category,
            input_description,

            handleSetInputName: setInput_name,
            handleSetInputCategory: setInput_category,
            handleSetInputDescription: setInput_description,

            handleIsPopupOpen,
            isPopupOpen,
            
            handleSubmitForm: handleSubmit
        }}>
            <ItemPopupComponent/>
        </ItemPopupContext.Provider>
    )
}