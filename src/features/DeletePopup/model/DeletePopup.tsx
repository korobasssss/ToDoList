import { DialogPopup } from "#shared/ui/DialogPopup"
import { Popup } from "#shared/ui/Popup"
import { FC, SetStateAction } from "react"

interface IDeletePopup {
    handleCancel: React.Dispatch<SetStateAction<boolean>>
    isPopupOpen: boolean
    handleSubmit: () => Promise<boolean>
    popupTitle: string
    buttonSubmitTitle? : string
    buttonCancelTitle : string
    isLoading: boolean,
    message: string
}

export const DeletePopup: FC<IDeletePopup> = (
    {
        handleCancel,
        isPopupOpen,
        handleSubmit,
        popupTitle,
        buttonSubmitTitle,
        buttonCancelTitle,
        isLoading,
        message
    }
) => {
    return (
        <Popup
            title={popupTitle}
            isOpen={isPopupOpen}
            handlerCancel={handleCancel}
            buttonCancelName={buttonCancelTitle}
            handlerSubmit={handleSubmit}
            buttonSubmitName={buttonSubmitTitle}
            isLoading={isLoading}
            size='s'
        >
            <DialogPopup
                message={message}
            />
        </Popup>
    )
}