import { FC } from "react"
import styles from './styles.module.scss'

interface IDeletePopupComponent {
    message: string
}

export const DialogPopup: FC<IDeletePopupComponent> = (
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