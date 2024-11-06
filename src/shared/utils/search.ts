import { ICategory, ITask } from "../interfaces"

export const search = <T extends ITask | ICategory>(categories: T[], searchValue: string): T[] | null => {
    return categories.filter(category => 
        category.name.toLowerCase().includes(searchValue) || 
        category.description?.toLowerCase().includes(searchValue)
    )
}