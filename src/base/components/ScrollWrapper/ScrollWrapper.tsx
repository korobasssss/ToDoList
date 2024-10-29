import { FC, ReactNode } from "react";
import styles from './styles/styles.module.scss'

interface IScrollWrapper {
    children: ReactNode;
}

export const ScrollWrapper: FC<IScrollWrapper> = (
    {
        children
    }
) => {

    return (
        <div
            className={styles.scroll_wrapper}
        >
            {children}
        </div>
    )
}