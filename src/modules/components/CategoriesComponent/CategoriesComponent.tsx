import { FC } from "react"
import { ICategory } from "../../interfaces"
import { OneCategoryComponent } from "./OneCategoryComponent"

interface ICategoriesComponent {
    categories: ICategory[] | undefined
}

export const CategoriesComponent: FC<ICategoriesComponent> = (
    {
        categories
    }
) => {
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