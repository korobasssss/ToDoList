import { FC } from "react"
import { OverlayLoader} from "#shared/ui/OverlayLoader"
import { Popup } from "#shared/ui/Popup"
import { DialogPopup } from "#shared/ui/DialogPopup"
import { ICategory } from "#shared/interfaces"
import { fetchCategoriesApi } from "#shared/api"

interface IDeleteCategoryPopupContainer {
    category: ICategory
    handleIsPopupOpen: (isPopupOpen: boolean) => void
    isPopupOpen: boolean
}

export const DeleteCategoryPopupContainer: FC<IDeleteCategoryPopupContainer> = (
    {
        category,
        handleIsPopupOpen,
        isPopupOpen
    }
) => {
    const [fetchDeleteTask, { isLoading }] = fetchCategoriesApi.useFetchDeleteCategoryMutation();


    const handleSubmit = () => {
        fetchDeleteTask({
            id: category.id
        })
        return true
    }

    return (
        <>
            <Popup
                title='Удаление категории'
                isOpen={isPopupOpen}
                handlerCancel={handleIsPopupOpen}
                buttonCancelName='Нет'
                handlerSubmit={handleSubmit}
                buttonSubmitName='Да'
                size='s'
            >
            <DialogPopup
                message={`Вы уверены, что хотите удалить категорию “${category.name}”?`}
            />
            </Popup>
            {isLoading && (
                <OverlayLoader/>
            )}
        </>
        
    )
}