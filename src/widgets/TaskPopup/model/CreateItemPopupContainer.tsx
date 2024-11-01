import { FC } from "react"
import { ISelectOptions } from "#shared/interfaces"
import { fetchTasksApi } from "#shared/api"
import { OverlayLoader } from "#shared/ui/OverlayLoader"
import { TaskPopupContainer } from "#features/TaskPopup"

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

    const handleSubmit = async (input_name: string, input_category: ISelectOptions | null, input_description: string) => {
        try {
            const res: unknown = await fetchPostItem({
                name: input_name,
                description: input_description ?? null,
                categoryId: input_category?.value ?? null
            });
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
            <TaskPopupContainer
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