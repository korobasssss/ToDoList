import { FC, ReactNode, SetStateAction } from "react"
import { Header } from "../Header"
import { ScrollWrapper } from "../ScrollWrapper"
import styles from './styles.module.scss'
import { OverlayLoader } from "../OverlayLoader"

interface IMainLayout {
    isLoading?: boolean
    title: string
    children: ReactNode
    buttonName: string
    handleButtonClick: React.Dispatch<SetStateAction<boolean>>
}

export const MainLayout: FC<IMainLayout> = (
    {
        title,
        children,
        buttonName,
        isLoading,
        handleButtonClick
    }
) => {
    return (
        <>
            <section
                className={styles.SMainLayout}
            >
                <Header
                    title={title}
                    buttonName={buttonName}
                    handleButtonClick={() => handleButtonClick(true)}
                />
                <ScrollWrapper
                    classNames={styles.SMainLayoutChildren}
                >
                    {children}
                </ScrollWrapper>
            </section> 
            {isLoading && (
                <OverlayLoader/>
            )}
        </>
    )
}