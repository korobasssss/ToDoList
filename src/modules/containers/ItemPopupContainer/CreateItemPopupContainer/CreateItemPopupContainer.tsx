import { FC, useCallback } from "react"
import { ISelectOptions } from "../../../../base/interfaces"
import { ItemPopupContainer } from ".."

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
    const handleSubmit = useCallback((input_name: string, input_category: ISelectOptions | null, input_description: string | undefined) => {
        console.log(input_name, input_category, input_description)
    }, [])

    return (
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
    )
}