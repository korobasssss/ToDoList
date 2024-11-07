import { FC, InputHTMLAttributes } from "react"
import cx from 'classnames'
import { IClassName } from "@/shared/interfaces"
import styles from './style.module.scss'
import { LabelWrapper } from "../LabelWrapper"
import { Icon } from "../Icon"

export interface IInput 
extends InputHTMLAttributes<HTMLInputElement>, IClassName {
    label?: string
    error?: string
    isRequired?: boolean
    rightIcon?: string
    leftIcon?: string
    isFocused?: boolean
}

export const Input: FC<IInput> = ({
    classNames,
    type,
    placeholder,
    value,
    label,
    error,
    onChange,
    isRequired,
    rightIcon,
    leftIcon,
    isFocused,
    ...restProps
}) => {
    return (
        <LabelWrapper
            label={label}
            error={error}
            isRequired={isRequired}
        >
            <div className={styles.SInputWrapper}>
                {leftIcon && (
                        <Icon 
                            icon={leftIcon}
                            classNames={styles.SLeftIcon}
                        />
                )}
                <input
                    value={value}
                    className={cx(
                        styles.SInput,
                        {
                            [styles['SInput_error']] : error,
                            [styles['SInput_rightIcon']] : rightIcon,
                            [styles['SInput_leftIcon']] : leftIcon,
                        },
                        classNames
                    )}
                    placeholder={placeholder}
                    onChange={onChange}
                    {...restProps}
                />
                {rightIcon && (
                    <Icon 
                        icon={rightIcon}
                        classNames={cx(
                            styles.SRightIcon,
                            {
                                [styles[`SRightIcon_rotate`]]: isFocused
                            }
                        )}
                    />
                )}
            </div>
        </LabelWrapper>
    )
}