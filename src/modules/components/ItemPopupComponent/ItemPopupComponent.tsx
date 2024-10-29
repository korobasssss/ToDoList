import { FC, useCallback, useContext, useState } from "react"
import { Popup } from "../../../base/components"
import { CreateEditItemPopupComponent } from "./CreateEditItemPopupComponent"
import { ItemPopupContext } from "../../contexts"

export const ItemPopupComponent: FC = () => {
    const context = useContext(ItemPopupContext)

    if (!context) {
        return null;
    }

    const {input_name,
        input_category,
        input_description,
        handleSubmitForm,
    
        handleIsPopupOpen,
        isPopupOpen,
    
        popupTitle,
        buttonSubmitTitle,
        buttonCancelTitle} = context

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
                errorNameMessage={errorName}
            />
        </Popup>
    )
}