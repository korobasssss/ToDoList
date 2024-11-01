import { FC } from "react"
import { ICategory } from "#shared/interfaces"
import { fetchCategoriesApi } from "#shared/api"
import { OverlayLoader } from "#shared/ui/OverlayLoader"
import { CategoryPopupContainer } from "../../../features/CategoryPopup"

interface IEditCategoryPopupContainer {
    category: ICategory
    handleIsPopupOpen: (isPopupOpen: boolean) => void
    isPopupOpen: boolean
}

export const EditCategoryPopupContainer: FC<IEditCategoryPopupContainer> = (
    {
        category,
        handleIsPopupOpen,
        isPopupOpen
    }
) => {
    const [fetchUpdateCategory, { isLoading }] = fetchCategoriesApi.useFetchUpdateCategoryMutation();

    const handleSubmit = async (input_name: string, input_description: string) => {
        try {
            const res: unknown = await fetchUpdateCategory({
                id: category.id,
                name: input_name,
                description: input_description === '' ? null : input_description
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
        <>
            <CategoryPopupContainer
                popupTitle='Редактирование категории'
                buttonSubmitTitle='Сохранить'
                buttonCancelTitle='Закрыть'
                name={category.name}
                description={category.description ?? ''}
                isPopupOpen={isPopupOpen}
                handleIsPopupOpen={handleIsPopupOpen}
                handleSubmitForm={handleSubmit}
            />
            {isLoading && (
                <OverlayLoader/>
            )}
        </>
    )
}