import { ISelectOptions, ICategory } from "@/shared/interfaces";

export const findCategory = <V extends string | number, K extends string>( 
    categoryId: V, categories: ICategory[]
): ISelectOptions<V, K> | null => {
    const category = categories.find(oneCategory => oneCategory.id === categoryId);

    if (!category) {
        return null;
    }

    return {
        value: category.id as V,
        label: category.name as K
    };
};