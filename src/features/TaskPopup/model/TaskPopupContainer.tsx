import { FC, SetStateAction, useEffect, useState } from "react"
import { ISelectOptions } from "#shared/interfaces"
import { fetchCategoriesApi } from "#shared/api"
import { changeToSelectOptions } from '../utils'
import { Popup } from "#shared/ui/Popup"
import { TaskPopupComponent } from '../ui/TaskPopupComponent'

interface ICreateItemPopupContainer {
    handleIsPopupOpen: React.Dispatch<SetStateAction<boolean>>
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
    const [inputName, setInputName] = useState<string>('')
    const [inputCategory, setInputCategory] = useState<ISelectOptions | null>(null)
    const [inputDescription, setInputDescription] = useState<string>('')
    const [errorName, setErrorName] = useState('')
    const [errorCommon, setErrorCommon] = useState('')
    const [selectOptions, setSelectOptions] = useState<ISelectOptions[]>([])
    const {data: options} = fetchCategoriesApi.useFetchGetCategoriesQuery()

    useEffect(() => {
        setInputName(name)
        setInputDescription(description)
        setInputCategory(category)
    }, [name, description, category])

    useEffect(() => {
        if (options) setSelectOptions(changeToSelectOptions(options))
    }, [options])

    const handleSubmit = async () => {
        if (!inputName) {
            setErrorName('Поле должно быть обязательным')
        } else {
            if (await handleSubmitForm(inputName, inputCategory, inputDescription)) {
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
                inputName={inputName}
                inputCategory={inputCategory}
                inputDescription={inputDescription}
                errorName={errorName}
                errorCommon={errorCommon}
                options={selectOptions}
                handleSetInputName={setInputName}
                handleSetInputCategory={setInputCategory}
                handleSetInputDescription={setInputDescription}
                handleSetErrorName={setErrorName}
            />
        </Popup>
    )
}