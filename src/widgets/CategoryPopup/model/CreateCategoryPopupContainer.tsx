import { FC } from "react"
import { CategoryPopupContainer } from "#features/CategoryPopup"
import { fetchCategoriesApi } from "#shared/api"
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

    const handleSubmit = async (input_name: string, input_description: string) => {
        try {
            const res: unknown = await fetchCreateCategory({
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