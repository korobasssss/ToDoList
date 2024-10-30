import { FC, useEffect, useState } from "react"
import { ISelectOptions } from "../../../base/interfaces"
import { fetchCategoriesApi } from "../../api"
import { changeToSelectOptions } from "../../utils"
import { Popup } from "../../../base/components"
import { ItemPopupComponent } from "../../components"

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
    const [errorName, setErrorName] = useState('')
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


    const handleSubmit = () => {
        if (!input_name) {
            setErrorName('Поле должно быть обязательным')
        } else {
            handleSubmitForm(input_name, input_category, input_description)
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
            <ItemPopupComponent
                input_name={input_name}
                input_category={input_category}
                input_description={input_description}
                errorName={errorName}
                options={selectOptions}
                handleSetInputName={setInput_name}
                handleSetInputCategory={setInput_category}
                handleSetInputDescription={setInput_description}
                handleSetErrorName={setErrorName}
            />
        </Popup>
    )
}