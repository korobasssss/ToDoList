import { FC } from "react"
import { ISelectOptions } from "#shared/interfaces"
import { ItemPopupContainer } from './ItemPopupContainer'
import { fetchTasksApi } from "#shared/api"
import { OverlayLoader } from "#shared/ui/OverlayLoader"

interface ICreateItemPopupContainer {
    handleIsPopupOpen: (isPopupOpen: boolean) => void
    isPopupOpen: boolean
}

export const CreateItemPopupContainer: FC<ICreateItemPopupContainer> = (
    {
        handleIsPopupOpen,
        isPopupOpen,
    }
) => {
    const [fetchPostItem, {isLoading}] = fetchTasksApi.useFetchPostTaskMutation()

    const handleSubmit = (input_name: string, input_category: ISelectOptions | null, input_description: string) => {
        try {
            fetchPostItem({
                name: input_name,
                description: input_description ?? null,
                categoryId: input_category?.value ?? null
            }).unwrap()
            return true
        }
        catch(error: unknown) {
            return false
        }
    }

    return (
        <>
            <ItemPopupContainer
                popupTitle='Создание задачи'
                buttonSubmitTitle='Создать'
                buttonCancelTitle='Закрыть'

                name={''}
                category={null}
                description={''}

                handleIsPopupOpen={handleIsPopupOpen}
                isPopupOpen={isPopupOpen}

                handleSubmitForm={handleSubmit}
            />
            {isLoading && (
                <OverlayLoader/>
            )}
        </>
    )
}