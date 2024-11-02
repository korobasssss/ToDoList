import { SetStateAction } from "react"
import { ITask, ISelectOptions } from "@/shared/interfaces"
import { ItemComponent } from "@/entity/Item"

interface ITaskContainer<V extends string | number, K extends string> {
    task: ITask
    category: ISelectOptions<V, K> | null
    setIsEditOpenPopup: React.Dispatch<SetStateAction<boolean>>
    setIsDeleteOpenPopup: React.Dispatch<SetStateAction<boolean>>
    setCurrTask: React.Dispatch<SetStateAction<ITask | null>>
}

export const TaskContainer = <V extends string | number, K extends string>(
    {
        task,
        category,
        setIsEditOpenPopup,
        setIsDeleteOpenPopup,
        setCurrTask
    }: ITaskContainer<V, K>
): JSX.Element => {

    const setCurrentCategory = () => {
        setCurrTask(task)
    }

    const handleOpenPopupEdit = () => {
        setIsEditOpenPopup(true)
        setCurrentCategory()
    }

    const handleOpenPopupDelete = () => {
        setIsDeleteOpenPopup(true)
        setCurrentCategory()
    }

    return (
        <ItemComponent
            name={task.name}
            category={category?.label ?? null}
            description={task.description}
            setIsEditOpenPopup={handleOpenPopupEdit}
            setIsDeleteOpenPopup={handleOpenPopupDelete}
        />
    )
}