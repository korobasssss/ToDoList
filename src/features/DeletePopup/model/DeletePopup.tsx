import { ErrorMessages } from "@/shared/constants"
import { DialogPopup } from "@/shared/ui/DialogPopup"
import { ErrorText } from "@/shared/ui/ErrorText"
import { Popup } from "@/shared/ui/Popup"
import { FC, SetStateAction, useState } from "react"

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
    const [error, setError] = useState('')

    const handleSubmitAction = async () => {
        if (await handleSubmit()) {
            return true
        }
        setError(ErrorMessages.POST_ERROR)
        return false
    }

    const handleCancelAction = () => {
        setError('')
        handleCancel(false)
    }

    return (
        <Popup
            title={popupTitle}
            isOpen={isPopupOpen}
            handlerCancel={handleCancelAction}
            buttonCancelName={buttonCancelTitle}
            handlerSubmit={handleSubmitAction}
            buttonSubmitName={buttonSubmitTitle}
            isLoading={isLoading}
            size='s'
        >
            <DialogPopup
                message={message}
            />
            {error && (
                <ErrorText message={error}/>
            )}
        </Popup>
    )
}