import { ITask } from "@/shared/interfaces";
import { TEOptionType } from "../types";


export const filterTasks = ( tasks: ITask[], selectedOption: TEOptionType): ITask[] | null => {
    switch (selectedOption) {
        case 'all' : {
            return tasks
        }
        case 'hasCategory' : {
            return tasks.filter(task => task.categoryId)
        }
        case 'hasNoCategory' : {
            return tasks.filter(task => !task.categoryId)
        }
        case 'hasDescription' : {
            return tasks.filter(task => task.description)
        }
        case 'hasNoDescription' : {
            return tasks.filter(task => !task.description)
        }
        default : {
            return null
        }
   }
};