import { FC } from "react"
import { ICategory } from "#shared/interfaces"
import { NoData } from "#shared/ui/NoData"
import { CategoryContainer } from "#widgets/Category"

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
                    <CategoryContainer
                        key={category.id}
                        category={category}
                    />
                )
            })}
        </ul>
    )
}