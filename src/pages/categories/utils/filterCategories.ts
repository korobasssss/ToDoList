import { EOptionCategory } from "@/shared/enums";
import { ICategory } from "@/shared/interfaces";

export const filterCategories = ( categories: ICategory[] | null, selectedOption: EOptionCategory): ICategory[] | null => {

    if (!categories) return null
    switch (selectedOption) {
        case 'all' : {
            return categories
        }
        case 'hasDescription' : {
            return categories.filter(category => category.description)
        }
        case 'hasNoDescription': {
            return categories.filter(category => !category.description)
        }
        default : {
            return null
        }
   }
};