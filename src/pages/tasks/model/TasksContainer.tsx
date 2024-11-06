import { useEffect, useState } from "react"
import { MainLayout } from "@/shared/ui/MainLayout"
import { TasksComponent } from "../ui/TasksComponent"
import { fetchTasksApi } from "@/shared/api"
import { CreateItemPopupContainer } from "@/widgets/TaskPopup"
import { ITask } from "@/shared/interfaces"
import { useFilterContext, useSearchContext } from "@/app/hooks"
import { FilterComponent } from "@/entity/Filter"
import { filterOptions, filterTasks } from "../utils"
import { search } from "@/shared/utils"

export const TasksContainer = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false)
    const { data: tasks, isLoading } = fetchTasksApi.useFetchGetTasksQuery();

    const [filteredTasks, setFilteredTasks] = useState<ITask[] | null>(null);
    const { searchValue } = useSearchContext();
    const { filterValue } = useFilterContext();

    useEffect(() => {
        if (tasks) {
            const searchArr = searchValue ? search(tasks, searchValue) : tasks
            const filterArr = filterValue ? filterTasks(tasks, filterValue?.value) : tasks

            setFilteredTasks(searchArr && filterArr ? filterArr.filter(item => searchArr.includes(item)) : [])
        }
    }, [tasks, searchValue, filterValue])

    return (
        <>
            <MainLayout
                title='ToDo List'
                buttonName='Добавить задачу'
                isLoading={isLoading}
                handleButtonClick={setIsPopupOpen}
            > 
                <FilterComponent
                    options={filterOptions}
                />
                <TasksComponent
                    tasks={filteredTasks}
                />
                <CreateItemPopupContainer
                        isPopupOpen={isPopupOpen}
                        handleIsPopupOpen={setIsPopupOpen}
                />
            </MainLayout>
        </>
    )
}