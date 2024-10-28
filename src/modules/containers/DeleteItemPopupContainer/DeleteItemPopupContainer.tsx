import { FC, useCallback } from "react"
import { Popup } from "../../../base/components"
import { DeletePopupComponent } from "../../components"

interface IDeleteItemPopupContainer {
    handleIsPopupOpen: (isPopupOpen: boolean) => void
    isPopupOpen: boolean
}

export const DeleteItemPopupContainer: FC<IDeleteItemPopupContainer> = (
    {
        handleIsPopupOpen,
        isPopupOpen
    }
) => {
    const handleSubmit = useCallback(() => {
        console.log('delete')
        handleClosePopup()
    }, [])

    const handleClosePopup = useCallback(() => {
        handleIsPopupOpen(false)
    }, [])

    return (
        <Popup
            title='Удаление задачи'
            isOpen={isPopupOpen}
            handlerCancel={handleClosePopup}
            buttonCancelName='Нет'
            handlerSubmit={handleSubmit}
            buttonSubmitName='Да'
            size='s'
        >
            <DeletePopupComponent
                message='Вы уверены, что хотите удалить задачу “Задача1”?'
            />
        </Popup>
    )
}