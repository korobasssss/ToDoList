import { FC, InputHTMLAttributes } from "react"
import cx from 'classnames'
import { IClassName } from "../../interfaces"

import styles from './styles/style.module.scss'

interface IInput 
extends InputHTMLAttributes<HTMLInputElement>, IClassName {
    label?: string
    error?: string
    isRequired?: boolean
}

export const Input: FC<IInput> = ({
    type,
    placeholder,
    value,
    label,
    error,
    onChange,
    isRequired,
    ...restProps
}) => {
    return (
        <div>
            <div
                className={cx(
                    styles.SInputWrapper,
                    {
                        [styles['SInputWrapper_error']] : error
                    }
                )}
            >
                {label && (
                    <span 
                        className={styles.IInputLabelWrapper}
                    >
                        <label
                            className={cx(
                                styles.SInputLabel
                            )}
                        >
                            {label}
                        </label>
                        {isRequired && (
                            <span
                                className={styles.SInputRequired}
                            >
                                *
                            </span>
                        )}
                    </span>
                )}
                <input
                    value={value}
                    className={cx(
                        styles.SInput
                    )}
                    placeholder={placeholder}
                    onChange={onChange}
                    {...restProps}
                />
            </div>
            {error && (
                <p
                    className={styles.SInputError}
                >
                    {error}
                </p>
            )}
        </div>
    )
}