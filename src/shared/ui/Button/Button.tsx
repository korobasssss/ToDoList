import { ButtonHTMLAttributes, FC, ReactNode, useMemo } from 'react'
import cx from 'classnames';
import { IClassName } from '@/shared/interfaces'
import styles from './styles.module.scss'

export interface IButton
    extends ButtonHTMLAttributes<HTMLButtonElement>, IClassName {
    children: ReactNode
    theme: 'primary' | 'secondary' | 'none'
}

export const Button: FC<IButton> = (
    {
        classNames,
        theme,
        type,
        children,
        disabled,
        onClick,
        ...restProps
    }
) => {

    const stylesButton = useMemo(() => {
        return (
            cx(
                classNames,
                styles.SButton,
                styles[`SButton_${theme}`],
            )
        )
    }, [theme])

    return (
        <button
            type={type}
            className={stylesButton}
            disabled={disabled}
            onClick={onClick}
            {...restProps}
        >
            {children}
        </button>
    )
}