import { FC, ReactNode } from "react"
import { Header, ScrollWrapper } from "../"
import styles from './styles/styles.module.scss'

interface IMainLayout {
    children: ReactNode
}

export const MainLayout: FC<IMainLayout> = (
    {
        children
    }
) => {
    return (
        <ScrollWrapper
        >
            <section
                className={styles.SMainLayout}
            >
                <Header
                    title="ToDo List"
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