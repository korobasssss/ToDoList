import { FC, ReactNode } from "react"
import cx from 'classnames'
import styles from './styles/styles.module.scss'
import { IClassName } from "../../interfaces"

interface ILabelWrapper
extends IClassName {
    label?: string
    error?: string
    isRequired?: boolean
    children: ReactNode
}

export const LabelWrapper: FC<ILabelWrapper> = (
    {
        classNames, // только для изменения положения описания
        label,
        error,
        isRequired,
        children
    }
) => {
    return (
        <div>
            <div className={cx(
                    styles.SElementWrapper,
                    {
                        [styles['SElementWrapper_error']]: error
                    }
                )}
            >
                {label && (
                    <span 
                        className={cx(
                            styles.ILabelWrapper,
                            classNames
                        )}
                    >
                        <label
                            className={cx(
                                styles.SLabel
                            )}
                        >
                            {label}
                        </label>
                        {isRequired && (
                            <span className={styles.SRequired}>
                                *
                            </span>
                        )}
                    </span>
                )}
                {children}
            </div>
            {error && (
                <p className={styles.SError}>
                    {error}
                </p>
            )}
        </div>
    )
}