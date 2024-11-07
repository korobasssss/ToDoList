import { FC } from "react"
import styles from './styles.module.scss'

export interface INoData {
    message: string
}

export const NoData: FC<INoData> = (
    {
        message
    }
) => {
    return (
        <p className={styles.SMessage}>
            {message}
        </p>
    )
}