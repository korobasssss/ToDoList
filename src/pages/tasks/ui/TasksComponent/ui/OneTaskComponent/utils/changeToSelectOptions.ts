import { ISelectOptions } from "../../../../../../../shared/interfaces/ISelectOptions";
import { ICategory } from "../../../../../../../shared/interfaces/ICategory";

export const changeToSelectOptions = (categories: ICategory[]): ISelectOptions[] => {
    return categories.map(category => {
        return {
            label: category.name,
            value: category.id
        }
    })
}