import { FC } from "react"
import styles from './styles/styles.module.scss'

interface INoData {
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