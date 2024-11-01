import { FC } from "react"
import cx from 'classnames'
import styles from './styles.module.scss'
import { IClassName } from "#shared/interfaces/IClassName.ts"

interface IErrorText
extends IClassName {
    message: string
}

export const ErrorText: FC<IErrorText> = (
    {
        classNames,
        message
    }
) => {
    return (
        <p className={cx(
            styles.SError, 
            classNames
        )}>
            {message}
        </p>
    )
}