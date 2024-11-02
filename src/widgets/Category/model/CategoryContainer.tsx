import { FC, SetStateAction } from "react"
import { ICategory } from "@/shared/interfaces"
import { ItemComponent } from "@/entity/Item"

interface IOneTaskComponent {
    category: ICategory
    setIsEditOpenPopup: React.Dispatch<SetStateAction<boolean>>
    setIsDeleteOpenPopup: React.Dispatch<SetStateAction<boolean>>
    setCurrCategory: React.Dispatch<SetStateAction<ICategory | null>>
}

export const CategoryContainer: FC<IOneTaskComponent> = (
    {
        category,
        setIsEditOpenPopup,
        setIsDeleteOpenPopup,
        setCurrCategory
    }
) => {

    const setCurrentCategory = () => {
        setCurrCategory(category)
    }

    const handleOpenPopupEdit = () => {
        setIsEditOpenPopup(true)
        setCurrentCategory()
    }

    const handleOpenPopupDelete = () => {
        setIsDeleteOpenPopup(true)
        setCurrentCategory()
    }


    return (
        <ItemComponent
            name={category.name}
            category={null}
            description={category.description}
            setIsEditOpenPopup={handleOpenPopupEdit}
            setIsDeleteOpenPopup={handleOpenPopupDelete}
        />
    )
}