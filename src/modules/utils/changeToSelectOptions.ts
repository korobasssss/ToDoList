import { ISelectOptions } from "../../base/interfaces";
import { ICategory } from "../interfaces";

export const changeToSelectOptions = (categories: ICategory[]): ISelectOptions[] => {
    return categories.map(category => {
        return {
            label: category.name,
            value: category.id
        }
    })
}