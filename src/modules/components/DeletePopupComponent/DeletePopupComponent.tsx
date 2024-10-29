import { FC } from "react"
import styles from './styles/styles.module.scss'

interface IDeletePopupComponent {
    message: string
}

export const DeletePopupComponent: FC<IDeletePopupComponent> = (
    {
        message
    }
) => {
    return (
        <p
            className={styles.SDeleteMessage}
        >
            {message}
        </p>
    )
}