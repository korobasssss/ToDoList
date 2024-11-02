import { FC } from "react"
import { UlItemLayout } from "@/shared/ui/UlItemLayout"

interface IItemComponent {
    name: string
    category : string | null
    description: string | null
    
    setIsEditOpenPopup: () => void
    setIsDeleteOpenPopup: () => void
}

export const ItemComponent: FC<IItemComponent> = (
    {
        name,
        category,
        description,
        setIsEditOpenPopup,
        setIsDeleteOpenPopup,
    }
) => {
    return (
        <>
            <UlItemLayout
                name={name}
                category={category}
                description={description}

                handleSetIsDeleteOpenPopup={setIsDeleteOpenPopup}
                handleSetIsEditOpenPopup={setIsEditOpenPopup}
            />
        </>
    )
}