import { FC, useEffect, useMemo, useState } from "react"
import { ITask } from "@/shared/interfaces"
import { NoData } from 'ui-kit-todo-list/main'
import { TaskContainer } from "@/widgets/Task"
import { fetchCategoriesApi } from "@/shared/api"
import { DeleteItemPopupContainer, EditItemPopupContainer } from "@/widgets/TaskPopup"
import { FCategory, filterTasks } from "../utils"
import { ErrorMessages } from "@/shared/constants"
import { useAppSelector } from "@/shared/store"
import { search } from "@/shared/utils"

interface ITaskComponent {
    tasks?: ITask[] | null
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

    const {searchValue, filterValue} = useAppSelector(state => state.filter)

    const filteredTasks = useMemo(() => {
        if (!tasks) return [];

        const searchArr = searchValue ? search(tasks, searchValue) : tasks;

        return filterValue ?  filterTasks(searchArr, filterValue.value): searchArr;
    }, [tasks, searchValue, filterValue]);

    useEffect(() => {
        if (!isEditOpenPopup && !isDeleteOpenPopup) {
            setCurrTask(null)
        }
    }, [isEditOpenPopup, isDeleteOpenPopup])

    return (
        <>
            {filteredTasks && filteredTasks.length > 0 ? (
                filteredTasks.map((task) => {
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