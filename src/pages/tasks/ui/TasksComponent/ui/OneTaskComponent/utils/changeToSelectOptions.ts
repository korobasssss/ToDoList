import { ISelectOptions, ICategory } from "#shared/interfaces";

export const changeToSelectOptions = (categories: ICategory[]): ISelectOptions[] => {
    return categories.map(category => {
        return {
            label: category.name,
            value: category.id
        }
    })
}