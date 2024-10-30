import { FC, InputHTMLAttributes } from "react"
import cx from 'classnames'
import { IClassName } from "../../interfaces"

import styles from './styles/style.module.scss'
import { LabelWrapper } from "../LabelWrapper"

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
        <LabelWrapper
            label={label}
            error={error}
            isRequired={isRequired}
        >
            <input
                value={value}
                className={cx(
                    styles.SInput,
                    {
                        [styles['SInput_error']] : error
                    }
                )}
                placeholder={placeholder}
                onChange={onChange}
                {...restProps}
                />
        </LabelWrapper>
    )
}