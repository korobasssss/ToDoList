import { FC } from "react"
import { CategoryPopupContainer } from ".."
import { fetchCategoriesApi } from "../../../api"
import { OverlayLoader } from "../../../../base/components"

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
        fetchCreateCategory({
            name: input_name,
            description: input_description === '' ? null : input_description
        })
        console.log(input_name, input_description)
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