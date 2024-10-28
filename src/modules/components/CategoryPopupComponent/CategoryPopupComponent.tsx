import { FC, useCallback, useState } from "react"
import { CreateEditCategoryPopupComponent } from "./CreateEditCategoryPopupComponent"
import { Popup } from "../../../base/components"

interface ICategoryPopupComponent {
    popupTitle: string
    buttonSubmitTitle? : string
    buttonCancelTitle : string

    input_name: string
    input_description: string
    handleSetInputName: (input_name: string) => void
    handleSetInputDescription: (input_description: string) => void
    handleSubmitForm: () => void

    handleIsPopupOpen: (isPopupOpen: boolean) => void
    isPopupOpen: boolean
}

export const CategoryPopupComponent: FC<ICategoryPopupComponent> = (
    {
        popupTitle,
        buttonSubmitTitle,
        buttonCancelTitle,
        input_name,
        input_description,
        handleSetInputName,
        handleSetInputDescription,
        handleIsPopupOpen,
        handleSubmitForm,
        isPopupOpen
    }
) => {
    const [errorName, setErrorName] = useState('')

    const handleSubmit = useCallback(() => {
        if (!input_name) {
            setErrorName('Поле должно быть обязательным')
        } else {
            handleSubmitForm()
            handleClosePopup()
        }
    }, [input_name, input_description])

    const handleClosePopup = useCallback(() => {
        handleIsPopupOpen(false)
    }, [])

    return (
        <Popup
            title={popupTitle}
            isOpen={isPopupOpen}
            handlerCancel={handleClosePopup}
            buttonCancelName={buttonCancelTitle}
            handlerSubmit={handleSubmit}
            buttonSubmitName={buttonSubmitTitle}
            size='m'
        >
            <CreateEditCategoryPopupComponent
                input_name={input_name}
                errorName={errorName}
                input_description={input_description}
                handleSetInputName={handleSetInputName}
                handleSetInputDescription={handleSetInputDescription}
            />
        </Popup>
    )
}