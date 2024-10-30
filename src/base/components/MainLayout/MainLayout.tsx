import { FC, ReactNode } from "react"
import { Header, ScrollWrapper } from "../"
import styles from './styles/styles.module.scss'

interface IMainLayout {
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
        </ScrollWrapper>
    )
}