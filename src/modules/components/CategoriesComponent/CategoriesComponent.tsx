import { FC } from "react"
import { ICategory } from "../../interfaces"
import { OneCategoryComponent } from "./OneCategoryComponent"
import { NoData } from "../../../base/components"

interface ICategoriesComponent {
    categories: ICategory[] | undefined
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