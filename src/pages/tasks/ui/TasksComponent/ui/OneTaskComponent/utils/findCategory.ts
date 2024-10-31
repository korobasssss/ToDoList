import { ISelectOptions } from "../../../../../../../shared/interfaces/ISelectOptions";
import { ICategory } from "../../../../../../../shared/interfaces/ICategory";

export const findCategory = (categoryId: number, categories: ICategory[]): ISelectOptions | null => {
    const category = categories.find(oneCategory => oneCategory.id === categoryId)
    
    return category ? {
        value: category?.id,
        label: category?.name
    } : null 
}