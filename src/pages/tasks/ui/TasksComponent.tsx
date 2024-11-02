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
    const [currIdex, setCurrIndex] = useState(-1)

    useEffect(() => {
        if (!isEditOpenPopup) {
            setCurrIndex(-1)
        }
    }, [isEditOpenPopup])

    useEffect(() => {
        if (!isDeleteOpenPopup) {
            setCurrIndex(-1)
        }
    }, [isDeleteOpenPopup])

    return (
        <>
            {tasks && tasks.length > 0 ? (
                tasks?.map((task, index) => {
                    return (
                        <TaskContainer
                            index={index}
                            key={task.id}
                            category={task.categoryId ? FCategory(task.categoryId, categories) : null}
                            task={task}
                            setCurrIndex={setCurrIndex}
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
                task={currIdex === -1 || !tasks || tasks.length === 0 ? null : tasks[currIdex]}
                category={!tasks || currIdex === -1 ? null : FCategory(tasks[currIdex].categoryId, categories)}
                handleIsPopupOpen={setIsEditOpenPopup}
                isPopupOpen={isEditOpenPopup}
            />
            <DeleteItemPopupContainer
                task={currIdex === -1 || !tasks || tasks.length === 0 ? null : tasks[currIdex]}
                handleIsPopupOpen={setIsDeleteOpenPopup}
                isPopupOpen={isDeleteOpenPopup}
            />
        </>
    )
}