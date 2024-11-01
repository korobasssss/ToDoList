import { FC, SetStateAction, useEffect, useState } from "react"
import { Popup } from "#shared/ui/Popup"
import { CategoryPopupComponent } from "../ui/CategoryPopupComponent"

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
    const [inputName, setInputName
    ] = useState<string>('')
    const [inputDescription , setInputDescription] = useState<string>('')
    const [errorName, setErrorName] = useState('')
    const [errorCommon, setErrorCommon] = useState('')

    useEffect(() => {
        setInputName(name)
        setInputDescription(description)
    }, [])

    const handleSubmit = async () => {
        if (!inputName) {
            setErrorName('Поле должно быть обязательным')
        } else {
            if (await handleSubmitForm(inputName, inputDescription )) {
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