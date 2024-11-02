import { ICategory, ITask } from "@/shared/interfaces"
import { ISelectOptions } from "@/shared/interfaces"
import { findCategory } from "./findCategory"

export const FCategory = (task: ITask | null, categories: ICategory[] | undefined) : ISelectOptions<number, string> | null => {
    if (!task || !task.categoryId) return null
    if (categories && categories.length > 0) {
        return findCategory<number, string>(Number(task.categoryId), categories)
    }
    return null
}