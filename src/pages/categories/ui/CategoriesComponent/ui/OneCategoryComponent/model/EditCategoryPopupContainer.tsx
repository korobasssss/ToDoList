import { FC } from "react"
import { ICategory } from "#shared/interfaces"
import { fetchCategoriesApi } from "#shared/api/fetchCategoriesApi"
import { OverlayLoader } from "#shared/ui/OverlayLoader"
import { CategoryPopupContainer } from "./CategoryPopupContainer"

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

    const handleSubmit = (input_name: string, input_description: string) => {
        try {
            fetchUpdateCategory({
                id: category.id,
                name: input_name,
                description: input_description === '' ? null : input_description
            }).unwrap()
            return true
        }
        catch(error: unknown) {
            return false
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