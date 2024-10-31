import { FC } from "react"
import { ITask } from "#shared/interfaces/ITask"
import { OneTaskComponent } from "./OneTaskComponent"
import { NoData } from "#shared/ui/NoData"

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