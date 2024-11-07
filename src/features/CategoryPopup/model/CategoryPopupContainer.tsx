import { FC, SetStateAction } from "react"
import { Popup } from "@/shared/ui/Popup"
import { CategoryPopupComponent } from "../ui/CategoryPopupComponent"

interface ICreateItemPopupContainer {
    handleIsPopupOpen: React.Dispatch<SetStateAction<boolean>>
    isPopupOpen: boolean

    name?: string
    description?: string
    handleSubmitForm: (name: string, description: string | null) => Promise<boolean>

    popupTitle: string
    buttonSubmitTitle? : string
    buttonCancelTitle? : string
}

export const CategoryPopupContainer: FC<ICreateItemPopupContainer> = (
    {
        handleIsPopupOpen,
        isPopupOpen,
        name = '',
        description = '',
        handleSubmitForm,
        popupTitle,
        buttonSubmitTitle,
        buttonCancelTitle,
    }
) => {
    const handleCancel = () => {
        handleIsPopupOpen(false)
    }

    return (
        <Popup
            title={popupTitle}
            isOpen={isPopupOpen}
            handlerCancel={handleCancel}
            size='m'
        >
            <CategoryPopupComponent
                initialValues={{name, description}}
                handleCancel={handleCancel}
                handleSubmitForm={handleSubmitForm}
                buttonSubmitTitle={buttonSubmitTitle}
                buttonCancelTitle={buttonCancelTitle}
            />
        </Popup>
    )
}