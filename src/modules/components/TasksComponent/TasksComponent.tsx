import { FC } from "react"
import { ITask } from "../../interfaces"
import { OneTaskComponent } from "./OneTaskComponent"

interface ITaskComponent {
    tasks: ITask[] | undefined
}

export const TasksComponent: FC<ITaskComponent> = (
    {
        tasks
    }
) => {
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