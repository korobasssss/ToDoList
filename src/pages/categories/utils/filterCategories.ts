import { ICategory } from "@/shared/interfaces";
import { TEOptionType } from "../types/TEOptionType";

export const filterCategories = ( tasks: ICategory[], selectedOption: TEOptionType): ICategory[] | null => {
    switch (selectedOption) {
        case 'all' : {
            return tasks
        }
        case 'hasDescription' : {
            return tasks.filter(task => task.description)
        }
        case 'hasNoDescription': {
            return tasks.filter(task => !task.description)
        }
        default : {
            return null
        }
   }
};