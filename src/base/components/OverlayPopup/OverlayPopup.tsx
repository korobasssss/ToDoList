import { FC, ReactNode } from "react"
import styles from './styles/styles.module.scss'
import cx from 'classnames'
import { IClassName } from "../../interfaces"

interface IOverlayPopup
extends IClassName {
    handlerCLose?: () => void
    children: ReactNode
    isOpen?: boolean
}

export const OverlayPopup: FC<IOverlayPopup> = (
    {
        classNames,
        handlerCLose,
        children,
        isOpen
    }
) => {
    return (
        <div
            className={cx(
                styles.SOverlayWrapper,
                {
                    [styles[`SOverlayWrapper_opened`]]: isOpen,
                    [styles[`SOverlayWrapper_closed`]]: !isOpen
                }
            
            )}
        >
            <div
                className={cx(
                    classNames,
                    styles.SOverlay
                )}
                onClick={handlerCLose}
            />
            {children}
        </div>
    )
}