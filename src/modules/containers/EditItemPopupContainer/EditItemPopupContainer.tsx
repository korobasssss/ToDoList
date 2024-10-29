import { FC, useCallback } from "react"
import { ISelectOptions } from "../../../base/interfaces"
import { ItemPopupContainer } from "../"

interface IEditItemPopupContainer {
    handleIsPopupOpen: (isPopupOpen: boolean) => void
    isPopupOpen: boolean
}

export const EditItemPopupContainer: FC<IEditItemPopupContainer> = (
    {
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

            name={'блабла'}
            category={null}
            description={'блабла'}

            handleIsPopupOpen={handleIsPopupOpen}
            isPopupOpen={isPopupOpen}

            handleSubmitForm={handleSubmit}
        />
    )
}