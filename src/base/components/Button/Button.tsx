import { ButtonHTMLAttributes, FC, ReactNode } from 'react'
import cx from 'classnames';
import { IClassName } from '../../interfaces'
import styles from './styles/styles.module.scss'

interface IButton
    extends ButtonHTMLAttributes<HTMLButtonElement>, IClassName {
    children: ReactNode
    theme: 'primary' | 'secondary' | 'none'
}

export const Button: FC<IButton> = (
    {
        classNames,
        theme,
        children,
        disabled,
        onClick,
        ...restProps
    }
) => {
    return (
        <button
            className={cx(
                classNames,
                styles.SButton,
                styles[`SButton_${theme}`],
            )}
            disabled={disabled}
            onClick={onClick}
            {...restProps}
        >
            {children}
        </button>
    )
}