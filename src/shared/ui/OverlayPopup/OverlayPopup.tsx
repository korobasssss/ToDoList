import { FC, ReactNode, useMemo } from "react"
import styles from './styles.module.scss'
import cx from 'classnames'
import { IClassName } from "@/shared/interfaces"

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

    const styleOverlayWrapper = useMemo(() => {
        return (
            cx (
                styles.SOverlayWrapper,
                {
                    [styles[`SOverlayWrapper_opened`]]: isOpen,
                    [styles[`SOverlayWrapper_closed`]]: !isOpen
                }
            
            )
        )
    }, [isOpen])

    return (
        <div
            className={styleOverlayWrapper}
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