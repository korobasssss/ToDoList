import { FC, ReactNode } from "react"
import { Header, ScrollWrapper } from "../"
import styles from './styles/styles.module.scss'

interface IMainLayout {
    title: string
    children: ReactNode
    handleButtonClick: () => void
}

export const MainLayout: FC<IMainLayout> = (
    {
        title,
        children,
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
                    handleButtonClick={handleButtonClick}
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