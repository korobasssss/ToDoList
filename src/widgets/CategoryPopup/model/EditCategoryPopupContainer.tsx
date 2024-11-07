import { FC, SetStateAction } from "react"
import { ICategory } from "@/shared/interfaces"
import { fetchCategoriesApi } from "@/shared/api"
import { OverlayLoader } from "@/shared/ui/OverlayLoader"
import { CategoryPopupContainer } from "../../../features/CategoryPopup"

interface IEditCategoryPopupContainer {
    category: ICategory | null
    handleIsPopupOpen: React.Dispatch<SetStateAction<boolean>>
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

    const handleSubmit = async (inputName: string, inputDescription: string | null) => {
        if (!category) return false
        try {
            const res: unknown = await fetchUpdateCategory({
                id: category.id,
                name: inputName,
                description: inputDescription ?? null
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
                name={category ? category.name : ''}
                description={category ? category.description ?? '' : ''}
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