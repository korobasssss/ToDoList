import { ISelectOptions } from "../../base/interfaces";
import { ICategory } from "../interfaces";

export const findCategory = (categoryId: number, categories: ICategory[]): ISelectOptions | null => {
    const category = categories.find(oneCategory => oneCategory.id === categoryId)
    
    return category ? {
        value: category?.id,
        label: category?.name
    } : null 
}