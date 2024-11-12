import { SetStateAction, useEffect, useState } from "react"
import { ISelectOptions } from "@/shared/interfaces"
import { fetchCategoriesApi } from "@/shared/api"
import { changeToSelectOptions } from '../utils'
import { Popup } from 'ui-kit-todo-list/main'
import { TaskPopupComponent } from '../ui/TaskPopupComponent'

interface ICreateItemPopupContainer<V extends string | number, K extends string> {
    handleIsPopupOpen: React.Dispatch<SetStateAction<boolean>>
    isPopupOpen: boolean

    name: string
    category: ISelectOptions<V, K> | null
    description: string
    handleSubmitForm: (name: string, category: ISelectOptions<V, K> | null, description: string | null) => Promise<boolean>

    popupTitle: string
    buttonSubmitTitle? : string
    buttonCancelTitle : string
}

export const TaskPopupContainer = <V extends string | number, K extends string> (
    {
        handleIsPopupOpen,
        isPopupOpen,
        name,
        category,
        description,
        handleSubmitForm,
        popupTitle,
        buttonSubmitTitle,
        buttonCancelTitle,
    }: ICreateItemPopupContainer<V, K>
): JSX.Element => {
    const [selectOptions, setSelectOptions] = useState<ISelectOptions<V, K>[]>([])
    const {data: options} = fetchCategoriesApi.useFetchGetCategoriesQuery()

    useEffect(() => {
        if (options) setSelectOptions(changeToSelectOptions<V, K>(options))
    }, [options])

    const handlerCancel = () => {
        handleIsPopupOpen(false)
    }

    return (
        <Popup
            title={popupTitle}
            isOpen={isPopupOpen}
            handlerCancel={handlerCancel}
            size='m'
        >
            <TaskPopupComponent
                initialValues={{name: name, description: description}}
                options={selectOptions}
                handleCancel={handlerCancel}
                category={category}
                handleSubmitForm={handleSubmitForm}
                buttonSubmitTitle={buttonSubmitTitle}
                buttonCancelTitle={buttonCancelTitle}
            />
        </Popup>
    )
}