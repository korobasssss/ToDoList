import { ICategory } from "@/shared/interfaces";
import { EOptionCategory } from "../enums";

export const filterCategories = ( tasks: ICategory[], selectedOption: string): ICategory[] | null => {
    switch (selectedOption) {
        case EOptionCategory.ALL : {
            return tasks
        }
        case EOptionCategory.HAS_DESCRIPTION : {
            return tasks.filter(task => task.description)
        }
        case EOptionCategory.HAS_NO_DESCRIPTION : {
            return tasks.filter(task => !task.description)
        }
        default : {
            return null
        }
   }
};