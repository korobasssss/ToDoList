import { ISelectOptions } from "../../base/interfaces";
import { ICategory } from "../interfaces";

export const findCategory = (categoryId: number, categories: ICategory[]): ISelectOptions | null => {
    const category = categories.find(oneCategory => oneCategory.id === categoryId)
    if (category) {
        const option: ISelectOptions = {
            value: category?.id,
            label: category?.name
        }
        return option
    } else {
        return null
    }
}