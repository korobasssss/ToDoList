import { FC, useEffect, useState } from "react"
import { ISelectOptions } from "#shared/interfaces"
import { fetchCategoriesApi } from "#shared/api"
import { changeToSelectOptions } from '../utils'
import { Popup } from "#shared/ui/Popup"
import { TaskPopupComponent } from '../ui/TaskPopupComponent'

interface ICreateItemPopupContainer {
    handleIsPopupOpen: (isPopupOpen: boolean) => void
    isPopupOpen: boolean

    name: string
    category: ISelectOptions | null
    description: string
    handleSubmitForm: (name: string, category: ISelectOptions | null, description: string) => Promise<boolean>

    popupTitle: string
    buttonSubmitTitle? : string
    buttonCancelTitle : string
}

export const TaskPopupContainer: FC<ICreateItemPopupContainer> = (
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
    const [errorCommon, setErrorCommon] = useState('')
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

    const handleSubmit = async () => {
        if (!input_name) {
            setErrorName('Поле должно быть обязательным')
        } else {
            if (await handleSubmitForm(input_name, input_category, input_description)) {
                return true
            } else {
                setErrorCommon('Возникла ошибка, попробуйте позже')
            }
        }
        return false
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
            <TaskPopupComponent
                input_name={input_name}
                input_category={input_category}
                input_description={input_description}
                errorName={errorName}
                errorCommon={errorCommon}
                options={selectOptions}
                handleSetInputName={setInput_name}
                handleSetInputCategory={setInput_category}
                handleSetInputDescription={setInput_description}
                handleSetErrorName={setErrorName}
            />
        </Popup>
    )
}