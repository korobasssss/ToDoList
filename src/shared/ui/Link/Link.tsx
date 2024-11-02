import { FC, LinkHTMLAttributes, ReactNode } from "react"
import cx from 'classnames'
import { IClassName } from "@/shared/interfaces"

import styles from './styles.module.scss'

interface ILink
extends LinkHTMLAttributes<HTMLLinkElement>, IClassName {
    url: string
    isSelected: boolean
    children: ReactNode
}

export const Link: FC<ILink> = (
    {
        classNames,
        url,
        isSelected,
        children
    }
) => {
    return (
        <a
            className={cx(
                classNames,
                styles.SLink,
                {
                    [styles['SLink_selected']]: isSelected
                }
            )}
            href={url}
        >
            {children}
        </a>
    )
}