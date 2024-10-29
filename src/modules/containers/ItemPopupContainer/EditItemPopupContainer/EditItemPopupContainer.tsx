import { FC, useCallback } from "react"
import { ISelectOptions } from "../../../base/interfaces"
import { ItemPopupContainer } from "../"
import { ITask } from "../../interfaces"

interface IEditItemPopupContainer {
    task: ITask
    handleIsPopupOpen: (isPopupOpen: boolean) => void
    isPopupOpen: boolean
}

export const EditItemPopupContainer: FC<IEditItemPopupContainer> = (
    {
        task,
        handleIsPopupOpen,
        isPopupOpen
    }
) => {
    const handleSubmit = useCallback((input_name: string, input_category: ISelectOptions | null, input_description: string | undefined) => {
        console.log(input_name, input_category, input_description)
    }, [])

    return (
        <ItemPopupContainer
            popupTitle='Редактирование задачи'
            buttonSubmitTitle='Сохранить'
            buttonCancelTitle='Закрыть'

            name={task.name}
            category={{value: '1', label: 'task.categoryId'}}
            description={task.description ?? ''}

            handleIsPopupOpen={handleIsPopupOpen}
            isPopupOpen={isPopupOpen}

            handleSubmitForm={handleSubmit}
        />
    )
}