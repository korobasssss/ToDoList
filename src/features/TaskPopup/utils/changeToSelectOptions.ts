import { ISelectOptions, ICategory } from "#shared/interfaces";

export const changeToSelectOptions = <V extends string | number, K extends string>(categories: ICategory[]): ISelectOptions<V, K>[] => {
    return categories.map(category => {
        return {
            label: category.name as K,
            value: category.id as V
        }
    })
}