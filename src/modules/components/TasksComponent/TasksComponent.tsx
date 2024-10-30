import { FC } from "react"
import { ITask } from "../../interfaces"
import { OneTaskComponent } from "./OneTaskComponent"
import { NoData } from "../../../base/components"

interface ITaskComponent {
    tasks?: ITask[]
}

export const TasksComponent: FC<ITaskComponent> = (
    {
        tasks
    }
) => {
    if (!tasks) {
        return (
            <NoData
                message="Нет задач..."
            />
        )
    }

    return (
        <ul>
            {tasks?.map(task => {
                return (
                    <OneTaskComponent
                        key={task.id}
                        task={task}
                    />
                )
            })}
        </ul>
    )
}