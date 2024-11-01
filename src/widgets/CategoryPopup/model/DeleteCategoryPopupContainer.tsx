import { FC, SetStateAction } from "react"
import { ICategory } from "#shared/interfaces"
import { fetchCategoriesApi } from "#shared/api"
import { DeletePopup } from "#features/DeletePopup"

interface IDeleteCategoryPopupContainer {
    category: ICategory
    handleIsPopupOpen: React.Dispatch<SetStateAction<boolean>>
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

    const handleSubmit = async () => {
        try {
            const res: unknown = await fetchDeleteTask({
                id: category.id
            })
            if (res && typeof res === 'object' && 'error' in res) {
                return false;
            } else {
                return true;
            }
        } catch {
            return false;
        }
    }

    return (
        <DeletePopup
            handleCancel={handleIsPopupOpen}
            isPopupOpen={isPopupOpen}
            handleSubmit={handleSubmit}
            popupTitle={"Удаление категории"}
            buttonSubmitTitle={'Да'}
            buttonCancelTitle={'Нет'}
            isLoading={isLoading}
            message={`Вы уверены, что хотите удалить категорию “${category.name}”?`}
        />
    )
}