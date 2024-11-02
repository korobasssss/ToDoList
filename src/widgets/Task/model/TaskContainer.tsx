import { SetStateAction } from "react"
import { ITask, ISelectOptions } from "@/shared/interfaces"
import { ItemComponent } from "@/features/Item"

interface ITaskContainer<V extends string | number, K extends string> {
    index: number
    task: ITask
    category: ISelectOptions<V, K> | null
    setIsEditOpenPopup: React.Dispatch<SetStateAction<boolean>>
    setIsDeleteOpenPopup: React.Dispatch<SetStateAction<boolean>>
    setCurrIndex: React.Dispatch<SetStateAction<number>>
}

export const TaskContainer = <V extends string | number, K extends string>(
    {
        task,
        index,
        category,
        setIsEditOpenPopup,
        setIsDeleteOpenPopup,
        setCurrIndex
    }: ITaskContainer<V, K>
): JSX.Element => {
    return (
        <ItemComponent
            index={index}
            name={task.name}
            category={category?.label ?? null}
            description={task.description}
            setIsEditOpenPopup={setIsEditOpenPopup}
            setIsDeleteOpenPopup={setIsDeleteOpenPopup}
            setCurrIndex={setCurrIndex}
        />
    )
}