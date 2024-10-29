import { FC, useCallback } from "react"
import { Popup } from "../../../base/components"
import { DeletePopupComponent } from "../../components"

interface IDeleteCategoryPopupContainer {
    handleIsPopupOpen: (isPopupOpen: boolean) => void
    isPopupOpen: boolean
}

export const DeleteCategoryPopupContainer: FC<IDeleteCategoryPopupContainer> = (
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
            title='Удаление категории'
            isOpen={isPopupOpen}
            handlerCancel={handleClosePopup}
            buttonCancelName='Нет'
            handlerSubmit={handleSubmit}
            buttonSubmitName='Да'
            size='s'
        >
            <DeletePopupComponent
                message='Вы уверены, что хотите удалить категорию “Категория1”?'
            />
        </Popup>
    )
}