import { ICategory } from "@/shared/interfaces"
import { ISelectOptions } from "@/shared/interfaces"
import { findCategory } from "./findCategory"

export const FCategory = (categoryIndex: number | string | null, categories: ICategory[] | undefined) : ISelectOptions<number, string> | null => {
    if (!categoryIndex) return null
    if (categories && categories.length > 0) {
        return findCategory<number, string>(Number(categoryIndex), categories)
    }
    return null
}