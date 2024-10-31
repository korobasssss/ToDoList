import { FC } from "react"
import { CategoryPopupContainer } from "./CategoryPopupContainer"
import { fetchCategoriesApi } from "#shared/api/fetchCategoriesApi"
import { OverlayLoader } from "#shared/ui/OverlayLoader"

interface ICreateCategoryPopupContainer {
    handleIsPopupOpen: (isPopupOpen: boolean) => void
    isPopupOpen: boolean
}

export const CreateCategoryPopupContainer: FC<ICreateCategoryPopupContainer> = (
    {
        handleIsPopupOpen,
        isPopupOpen
    }
) => {
    const [fetchCreateCategory, {isLoading}] = fetchCategoriesApi.useFetchPostCategoryMutation()

    const handleSubmit = (input_name: string, input_description: string) => {
        try {
            fetchCreateCategory({
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
                popupTitle='Создание категории'
                buttonSubmitTitle='Создать'
                buttonCancelTitle='Закрыть'
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