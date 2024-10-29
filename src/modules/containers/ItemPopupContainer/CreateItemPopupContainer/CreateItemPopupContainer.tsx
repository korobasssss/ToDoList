import { FC, useCallback } from "react"
import { ISelectOptions } from "../../../../base/interfaces"
import { ItemPopupContainer } from ".."
import { fetchTasksApi } from "../../../api"
import { OverlayLoader } from "../../../../base/components"

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

    const handleSubmit = useCallback((input_name: string, input_category: ISelectOptions | null, input_description: string) => {
        fetchPostItem({
            name: input_name,
            description: input_description ?? null,
            categoryId: input_category?.value ?? null
        })
    }, [])

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