import { DialogPopup } from "#shared/ui/DialogPopup"
import { Popup } from "#shared/ui/Popup"
import { FC, SetStateAction } from "react"

interface IDeletePopup {
    handleCancel: React.Dispatch<SetStateAction<boolean>>
    isPopupOpen: boolean
    handleSubmit: () => Promise<boolean>
    name: string
    popupTitle: string
    buttonSubmitTitle? : string
    buttonCancelTitle : string
    isLoading: boolean
}

export const DeletePopup: FC<IDeletePopup> = (
    {
        handleCancel,
        isPopupOpen,
        name,
        handleSubmit,
        popupTitle,
        buttonSubmitTitle,
        buttonCancelTitle,
        isLoading
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
                message={`Вы уверены, что хотите удалить задачу “${name}”?`}
            />
        </Popup>
    )
}