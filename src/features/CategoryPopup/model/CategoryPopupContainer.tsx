import { FC, SetStateAction, useEffect, useState } from "react"
import { Popup } from "#shared/ui/Popup"
import { CategoryPopupComponent } from "../ui/CategoryPopupComponent"
import { ErrorMessages } from "#shared/constants"

interface ICreateItemPopupContainer {
    handleIsPopupOpen: React.Dispatch<SetStateAction<boolean>>
    isPopupOpen: boolean

    name?: string
    description?: string
    handleSubmitForm: (name: string, description: string) => Promise<boolean>

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
    const [inputName, setInputName] = useState<string>('')
    const [inputDescription , setInputDescription] = useState<string>('')
    const [errorName, setErrorName] = useState('')
    const [errorCommon, setErrorCommon] = useState('')

    useEffect(() => {
        setInputName(name)
        setInputDescription(description)
    }, [name, description])

    const resetData = () => {
        setInputName('')
        setInputDescription('')
        setErrorName('')
        setErrorCommon('')
    }

    const handleSubmit = async () => {
        if (!inputName) {
            setErrorName(ErrorMessages.INPUT_REQUIRED)
        } else {
            if (await handleSubmitForm(inputName, inputDescription )) {
                resetData()
                return true
            } else {
                setErrorCommon(ErrorMessages.POST_ERROR)
            }
        }
        return false
    }

    const handleCancel = () => {
        handleIsPopupOpen(false)
        resetData()
    }

    return (
        <Popup
            title={popupTitle}
            isOpen={isPopupOpen}
            handlerCancel={handleCancel}
            buttonCancelName={buttonCancelTitle}
            handlerSubmit={handleSubmit}
            buttonSubmitName={buttonSubmitTitle}
            size='m'
        >
            <CategoryPopupComponent
                inputName={inputName}
                inputDescription ={inputDescription }
                errorName={errorName}
                errorCommon={errorCommon}

                handleSetInputName={setInputName}
                handleSetInputDescription={setInputDescription}
                handleSetErrorName={setErrorName}
            />
        </Popup>
    )
}