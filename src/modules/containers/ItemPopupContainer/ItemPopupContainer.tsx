import { FC, useCallback, useEffect, useState } from "react"
import { ISelectOptions } from "../../../base/interfaces"
import { ItemPopupComponent } from "../../components"
import { ItemPopupContext } from "../../contexts"
import { fetchCategoriesApi } from "../../api"
import { changeToSelectOptions } from "../../utils"

interface ICreateItemPopupContainer {
    handleIsPopupOpen: (isPopupOpen: boolean) => void
    isPopupOpen: boolean

    name: string
    category: ISelectOptions | null
    description: string
    handleSubmitForm: (name: string, category: ISelectOptions | null, description: string) => void

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
    const [input_name, setInput_name] = useState<string>('')
    const [input_category, setInput_category] = useState<ISelectOptions | null>(null)
    const [input_description, setInput_description] = useState<string>('')

    const [selectOptions, setSelectOptions] = useState<ISelectOptions[]>([])

    const {data: options} = fetchCategoriesApi.useFetchGetCategoriesQuery()

    useEffect(() => {
        setInput_name(name)
        setInput_description(description)
        setInput_category(category)
    }, [name, description, category])

    useEffect(() => {
        if (options) setSelectOptions(changeToSelectOptions(options))
    }, [options])

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

            options: selectOptions,

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