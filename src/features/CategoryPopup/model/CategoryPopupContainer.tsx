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
    const [input_name, setInput_name] = useState<string>('')
    const [input_description, setInput_description] = useState<string>('')
    const [errorName, setErrorName] = useState('')
    const [errorCommon, setErrorCommon] = useState('')

    useEffect(() => {
        setInput_name(name)
        setInput_description(description)
    }, [])

    const handleSubmit = async () => {
        if (!input_name) {
            setErrorName('Поле должно быть обязательным')
        } else {
            if (await handleSubmitForm(input_name, input_description)) {
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
                input_name={input_name}
                input_description={input_description}
                errorName={errorName}
                errorCommon={errorCommon}

                handleSetInputName={setInput_name}
                handleSetInputDescription={setInput_description}
                handleSetErrorName={setErrorName}
            />
        </Popup>
    )
}