import { FC, useEffect, useState } from "react"
import { ITask } from "@/shared/interfaces"
import { NoData } from "@/shared/ui/NoData"
import { TaskContainer } from "@/widgets/Task"
import { fetchCategoriesApi } from "@/shared/api"
import { DeleteItemPopupContainer, EditItemPopupContainer } from "@/widgets/TaskPopup"
import { FCategory } from "../utils"
import { ErrorMessages } from "@/shared/constants"

interface ITaskComponent {
    tasks?: ITask[]
}

export const TasksComponent: FC<ITaskComponent> = (
    {
        tasks
    }
) => {
    const {data: categories} = fetchCategoriesApi.useFetchGetCategoriesQuery()

    const [isEditOpenPopup, setIsEditOpenPopup] = useState(false)
    const [isDeleteOpenPopup, setIsDeleteOpenPopup] = useState(false)
    const [currTask, setCurrTask] = useState<ITask | null>(null)

    useEffect(() => {
        if (!isEditOpenPopup && !isDeleteOpenPopup) {
            setCurrTask(null)
        }
    }, [isEditOpenPopup, isDeleteOpenPopup])

    return (
        <>
            {tasks && tasks.length > 0 ? (
                tasks?.map((task) => {
                    return (
                        <TaskContainer
                            key={task.id}
                            category={task.categoryId ? FCategory(task, categories) : null}
                            task={task}
                            setCurrTask={setCurrTask}
                            setIsDeleteOpenPopup={setIsDeleteOpenPopup}
                            setIsEditOpenPopup={setIsEditOpenPopup}
                        />
                    )
                })
            ) : 
                <NoData
                    message={ErrorMessages.NO_TASKS}
                />
            }
            <EditItemPopupContainer
                task={currTask ?? null}
                category={FCategory(currTask, categories)}
                handleIsPopupOpen={setIsEditOpenPopup}
                isPopupOpen={isEditOpenPopup}
            />
            <DeleteItemPopupContainer
                task={currTask ?? null}
                handleIsPopupOpen={setIsDeleteOpenPopup}
                isPopupOpen={isDeleteOpenPopup}
            />
        </>
    )
}