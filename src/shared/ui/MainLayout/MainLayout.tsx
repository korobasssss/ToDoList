import { FC, ReactNode } from "react"
import { Header } from "../Header"
import { ScrollWrapper } from "../ScrollWrapper"
import styles from './styles.module.scss'
import { OverlayLoader } from "../OverlayLoader"

interface IMainLayout {
    isLoading?: boolean
    title: string
    children: ReactNode
    buttonName: string
    handleButtonClick: (isOpen: boolean) => void
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
        <ScrollWrapper
        >
            <section
                className={styles.SMainLayout}
            >
                <Header
                    title={title}
                    buttonName={buttonName}
                    handleButtonClick={() => handleButtonClick(true)}
                />
                <main
                    className={styles.SMainLayoutChildren}
                >
                    {children}
                </main>
            </section> 
            {isLoading && (
                <OverlayLoader/>
            )}
        </ScrollWrapper>
    )
}