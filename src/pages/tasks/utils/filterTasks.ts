import { ITask } from "@/shared/interfaces";
import { EOptionTask } from "../enum";


export const filterTasks = ( tasks: ITask[], selectedOption: string): ITask[] | null => {
    switch (selectedOption) {
        case EOptionTask.ALL : {
            return tasks
        }
        case EOptionTask.HAS_CATEGORY : {
            return tasks.filter(task => task.categoryId)
        }
        case EOptionTask.HAS_NO_CATEGORY : {
            return tasks.filter(task => !task.categoryId)
        }
        case EOptionTask.HAS_DESCRIPTION : {
            return tasks.filter(task => task.description)
        }
        case EOptionTask.HAS_NO_DESCRIPTION : {
            return tasks.filter(task => !task.description)
        }
        default : {
            return null
        }
   }
};