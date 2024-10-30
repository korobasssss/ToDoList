import { FC } from "react"
import { CategoryPopupContainer } from ".."
import { ICategory } from "../../../interfaces"
import { fetchCategoriesApi } from "../../../api"
import { OverlayLoader } from "../../../../base/components"

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
        fetchUpdateCategory({
            id: category.id,
            name: input_name,
            description: input_description === '' ? null : input_description
        })
        console.log(input_name, input_description)
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