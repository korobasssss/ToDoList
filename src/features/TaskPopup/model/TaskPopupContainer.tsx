import { SetStateAction, useEffect, useState } from "react"
import { ISelectOptions } from "@/shared/interfaces"
import { fetchCategoriesApi } from "@/shared/api"
import { changeToSelectOptions } from '../utils'
import { Popup } from "@/shared/ui/Popup"
import { TaskPopupComponent } from '../ui/TaskPopupComponent'
import { ErrorMessages } from "@/shared/constants"

interface ICreateItemPopupContainer<V extends string | number, K extends string> {
    handleIsPopupOpen: React.Dispatch<SetStateAction<boolean>>
    isPopupOpen: boolean

    name: string
    category: ISelectOptions<V, K> | null
    description: string
    handleSubmitForm: (name: string, category: ISelectOptions<V, K> | null, description: string) => Promise<boolean>

    popupTitle: string
    buttonSubmitTitle? : string
    buttonCancelTitle : string
}

export const TaskPopupContainer = <V extends string | number, K extends string> (
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
    }: ICreateItemPopupContainer<V, K>
): JSX.Element => {
    const [inputName, setInputName] = useState<string>('')
    const [inputCategory, setInputCategory] = useState<ISelectOptions<V, K> | null>(null)
    const [inputDescription, setInputDescription] = useState<string>('')
    const [errorName, setErrorName] = useState('')
    const [errorCommon, setErrorCommon] = useState('')
    const [selectOptions, setSelectOptions] = useState<ISelectOptions<V, K>[]>([])
    const {data: options} = fetchCategoriesApi.useFetchGetCategoriesQuery()

    useEffect(() => {
        setInputName(name)
        setInputDescription(description)
        setInputCategory(category)
    }, [name, description, category])

    useEffect(() => {
        if (options) setSelectOptions(changeToSelectOptions<V, K>(options))
    }, [options])

    const resetData = () => {
        setInputName('')
        setInputCategory(null)
        setInputDescription('')
        setErrorName('')
        setErrorCommon('')
    }

    const handleSubmit = async () => {
        if (!inputName) {
            setErrorName(ErrorMessages.INPUT_REQUIRED)
        } else {
            if (await handleSubmitForm(inputName, inputCategory, inputDescription)) {
                resetData()
                return true
            } else {
                setErrorCommon(ErrorMessages.POST_ERROR)
            }
        }
        return false
    }

    const handlerCancel = () => {
        resetData()
        handleIsPopupOpen(false)
    }

    return (
        <Popup
            title={popupTitle}
            isOpen={isPopupOpen}
            handlerCancel={handlerCancel}
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