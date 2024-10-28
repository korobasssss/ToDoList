import { FC, useCallback, useState } from "react"
import { Popup } from "../../../base/components"
import { CreateEditItemPopupComponent } from "./CreateEditItemPopupComponent"
import { ISelectOptions } from "../../../base/interfaces"

interface IItemPopupComponent {
    popupTitle: string
    buttonSubmitTitle? : string
    buttonCancelTitle : string

    input_name: string
    input_category: ISelectOptions | null
    input_description: string
    handleSetInputName: (input_name: string) => void
    handleSetInputCategory: (input_category: ISelectOptions) => void
    handleSetInputDescription: (input_description: string) => void
    handleSubmitForm: () => void

    handleIsPopupOpen: (isPopupOpen: boolean) => void
    isPopupOpen: boolean
}

export const ItemPopupComponent: FC<IItemPopupComponent> = (
    {
        popupTitle,
        buttonSubmitTitle,
        buttonCancelTitle,
        input_name,
        input_category,
        input_description,
        handleSetInputName,
        handleSetInputCategory,
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
    }, [input_name, input_category, input_description])

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
            <CreateEditItemPopupComponent
                input_name={input_name}
                input_category={input_category}
                input_description={input_description}
                handleSetInputName={handleSetInputName}
                handleSetInputCategory={handleSetInputCategory}
                handleSetInputDescription={handleSetInputDescription}
                errorNameMessage={errorName}
            />
        </Popup>
    )
}