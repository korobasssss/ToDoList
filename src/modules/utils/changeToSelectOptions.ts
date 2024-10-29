import { ISelectOptions } from "../../base/interfaces";
import { ICategory } from "../interfaces";

export const changeToSelectOptions = (categories: ICategory[]): ISelectOptions[] => {
    const options: ISelectOptions[] = []

    categories.forEach(oneCategory => {
        options.push({
            label: oneCategory.name,
            value: oneCategory.id
        })
    })

    return options
}