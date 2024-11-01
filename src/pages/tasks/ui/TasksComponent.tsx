import { FC } from "react"
import { ITask } from "#shared/interfaces/ITask"
import { NoData } from "#shared/ui/NoData"
import { TaskContainer } from "#widgets/Task/index.ts"

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
                    <TaskContainer
                        key={task.id}
                        task={task}
                    />
                )
            })}
        </ul>
    )
}