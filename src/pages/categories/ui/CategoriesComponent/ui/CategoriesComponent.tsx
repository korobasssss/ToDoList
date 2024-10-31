import { FC } from "react"
import { ICategory } from "../../../../../shared/interfaces/ICategory"
import { OneCategoryComponent } from "./OneCategoryComponent"
import { NoData } from "../../../../../shared/ui/NoData"

interface ICategoriesComponent {
    categories?: ICategory[]
}

export const CategoriesComponent: FC<ICategoriesComponent> = (
    {
        categories
    }
) => {
    if (!categories) {
        return (
            <NoData 
                message="Нет категорий..."
            />
        )
    }
    
    return (
        <ul>
            {categories?.map(category => {
                return (
                    <OneCategoryComponent
                        key={category.id}
                        category={category}
                    />
                )
            })}
        </ul>
    )
}