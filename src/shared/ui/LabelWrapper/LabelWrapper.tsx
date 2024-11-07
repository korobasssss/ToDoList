import { FC, ReactNode, useMemo } from "react"
import cx from 'classnames'
import styles from './styles.module.scss'
import { ErrorText } from "../ErrorText"

interface ILabelWrapper {
    label?: string
    error?: string
    isRequired?: boolean
    children: ReactNode
    bottom?: string
}

export const LabelWrapper: FC<ILabelWrapper> = (
    {
        bottom,
        label,
        error,
        isRequired,
        children
    }
) => {

    const stylesLabelWrapper = useMemo(() => {
        return (
            cx(
                styles.SElementWrapper,
                {
                    [styles['SElementWrapper_error']]: error
                }
            )
        )
    }, [error])


    const stylesLabel = useMemo(() => {
        return (
            cx(
                styles.SLabel,
                {
                    [styles['SLabel_required']] : isRequired
                }
            )
        )
    }, [error])
    
    return (
        <div>
            <div className={stylesLabelWrapper}
            >
                {label && (
                    <span 
                        className={styles.ILabelWrapper}
                        style={{bottom}}
                    >
                        <label
                            className={stylesLabel}
                        >
                            {label}
                        </label>
                    </span>
                )}
                {children}
            </div>
            {error && (
                <ErrorText
                    classNames={styles.SError}
                    message={error}
                />
            )}
        </div>
    )
}