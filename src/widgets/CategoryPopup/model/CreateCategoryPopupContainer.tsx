import { FC, SetStateAction } from "react"
import { CategoryPopupContainer } from "@/features/CategoryPopup"
import { fetchCategoriesApi } from "@/shared/api"
import { OverlayLoader } from 'ui-kit-todo-list/main'

interface ICreateCategoryPopupContainer {
    handleIsPopupOpen: React.Dispatch<SetStateAction<boolean>>
    isPopupOpen: boolean
}

export const CreateCategoryPopupContainer: FC<ICreateCategoryPopupContainer> = (
    {
        handleIsPopupOpen,
        isPopupOpen
    }
) => {
    const [fetchCreateCategory, {isLoading}] = fetchCategoriesApi.useFetchPostCategoryMutation()

    const handleSubmit = async (inputName: string, inputDescription: string | null) => {
        try {
            const res: unknown = await fetchCreateCategory({
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