import { FC, ReactNode, useCallback, useState } from "react"
import { MainLayout } from "../../../base/components"
import { CreateItemPopupContainer } from "../CreateItemPopupContainer"

interface IMainContainer {
    children: ReactNode
}

export const MainContainer: FC<IMainContainer> = (
    {
        children
    }
) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false)

    const handleButtonClick = useCallback(() => {
        setIsPopupOpen(!isPopupOpen)
    }, [isPopupOpen])

    return (
        <MainLayout
            title="ToDo List"
            handleButtonClick={handleButtonClick}
        > 
            {children}
            {isPopupOpen && (
                <CreateItemPopupContainer
                    isPopupOpen={isPopupOpen}
                    handleIsPopupOpen={setIsPopupOpen}
                />
            )}
        </MainLayout>
    )
}