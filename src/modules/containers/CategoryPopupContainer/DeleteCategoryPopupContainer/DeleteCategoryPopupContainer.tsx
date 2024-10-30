import { FC } from "react"
import { OverlayLoader, Popup } from "../../../../base/components"
import { DeletePopupComponent } from "../../../components"
import { ICategory } from "../../../interfaces"
import { fetchCategoriesApi } from "../../../api"

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
        handleIsPopupOpen(false)
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
            <DeletePopupComponent
                message={`Вы уверены, что хотите удалить категорию “${category.name}”?`}
            />
            </Popup>
            {isLoading && (
                <OverlayLoader/>
            )}
        </>
        
    )
}