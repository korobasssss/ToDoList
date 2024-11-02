import { FC, SetStateAction } from "react"
import { UlItemLayout } from "@/shared/ui/UlItemLayout"

interface IItemComponent {
    index: number
    name: string
    category : string | null
    description: string | null
    
    setIsEditOpenPopup: React.Dispatch<SetStateAction<boolean>>
    setIsDeleteOpenPopup: React.Dispatch<SetStateAction<boolean>>
    setCurrIndex: React.Dispatch<SetStateAction<number>>
}

export const ItemComponent: FC<IItemComponent> = (
    {
        name,
        index,
        category,
        description,
        setIsEditOpenPopup,
        setIsDeleteOpenPopup,
        setCurrIndex
    }
) => {
    return (
        <>
            <UlItemLayout
                index={index}
                setCurrIndex={setCurrIndex}
                name={name}
                category={category}
                description={description}

                handleSetIsDeleteOpenPopup={setIsDeleteOpenPopup}
                handleSetIsEditOpenPopup={setIsEditOpenPopup}
            />
        </>
    )
}