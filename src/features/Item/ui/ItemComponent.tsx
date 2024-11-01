import { FC, ReactNode } from "react"
import { UlItemLayout } from "#shared/ui/UlItemLayout"

interface IItemComponent {
    name: string
    category : string | null
    description: string | null
    EditPopupComponent: ReactNode
    DeletePopupComponent: ReactNode

    isEditOpenPopup: boolean
    isDeleteOpenPopup: boolean
    setIsEditOpenPopup: (isEditOpenPopup: boolean) => void
    setIsDeleteOpenPopup: (isDeleteOpenPopup: boolean) => void
}

export const ItemComponent: FC<IItemComponent> = (
    {
        name,
        category,
        description,
        EditPopupComponent,
        DeletePopupComponent,

        isEditOpenPopup,
        isDeleteOpenPopup,
        setIsEditOpenPopup,
        setIsDeleteOpenPopup
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
            {isEditOpenPopup && (
                EditPopupComponent
            )}
            {isDeleteOpenPopup && (
                DeletePopupComponent
            )}
        </>
    )
}