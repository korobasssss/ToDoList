import { FC, ReactNode } from "react";
import styles from './styles.module.scss'
import { IClassName } from "@/shared/interfaces";
import cx from 'classnames'

interface IScrollWrapper
extends IClassName {
    children: ReactNode;
}

export const ScrollWrapper: FC<IScrollWrapper> = (
    {
        classNames,
        children
    }
) => {

    return (
        <div className={cx(
            styles.scroll_wrapper,
            classNames
        )}>
            {children}
        </div>
    )
}