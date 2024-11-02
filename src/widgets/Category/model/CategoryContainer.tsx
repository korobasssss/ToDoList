import { FC, SetStateAction } from "react"
import { ICategory } from "@/shared/interfaces"
import { ItemComponent } from "@/features/Item"

interface IOneTaskComponent {
    category: ICategory
    index: number
    setIsEditOpenPopup: React.Dispatch<SetStateAction<boolean>>
    setIsDeleteOpenPopup: React.Dispatch<SetStateAction<boolean>>
    setCurrIndex: React.Dispatch<SetStateAction<number>>
}

export const CategoryContainer: FC<IOneTaskComponent> = (
    {
        category,
        index,
        setIsEditOpenPopup,
        setIsDeleteOpenPopup,
        setCurrIndex
    }
) => {


    return (
        <ItemComponent
            index={index}
            setCurrIndex={setCurrIndex}
            name={category.name}
            category={null}
            description={category.description}
            setIsEditOpenPopup={setIsEditOpenPopup}
            setIsDeleteOpenPopup={setIsDeleteOpenPopup}
        />
    )
}