import { FC, useCallback, useContext, useState } from "react"
import { CreateEditCategoryPopupComponent } from "./CreateEditCategoryPopupComponent"
import { Popup } from "../../../base/components"
import { CategoryPopupContext } from "../../contexts"

export const CategoryPopupComponent: FC = () => {
    const context = useContext(CategoryPopupContext)

    if (!context) {
        return null;
    }

    const {
        input_name,
        input_description,
        handleSubmitForm,
    
        handleIsPopupOpen,
        isPopupOpen,
    
        popupTitle,
        buttonSubmitTitle,
        buttonCancelTitle
    } = context


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
                errorName={errorName}
            />
        </Popup>
    )
}