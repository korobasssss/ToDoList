import { SetStateAction } from "react"
import { ISelectOptions } from "#shared/interfaces"
import { fetchTasksApi } from "#shared/api"
import { OverlayLoader } from "#shared/ui/OverlayLoader"
import { TaskPopupContainer } from "#features/TaskPopup"

interface ICreateItemPopupContainer {
    handleIsPopupOpen: React.Dispatch<SetStateAction<boolean>>
    isPopupOpen: boolean
}

export const CreateItemPopupContainer = <V extends string | number, K extends string> (
    {
        handleIsPopupOpen,
        isPopupOpen,
    }: ICreateItemPopupContainer
): JSX.Element => {
    const [fetchPostItem, {isLoading}] = fetchTasksApi.useFetchPostTaskMutation()

    const handleSubmit = async (inputName: string, inputCategory: ISelectOptions<V, K> | null, inputDescription: string) => {
        try {
            const res: unknown = await fetchPostItem({
                name: inputName,
                description: inputDescription ?? null,
                categoryId: inputCategory?.value ?? null
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