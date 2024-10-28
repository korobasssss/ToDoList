import { FC, ReactNode, useCallback, useEffect, useState } from "react"
import styles from './styles/style.module.scss'
import close from '../../../assets/close.svg'
import { ButtonIcon } from "../ButtonIcon"
import { Button } from "../Button"
import cx from 'classnames'
import { OverlayPopup } from "../OverlayPopup"
import { Portal } from "../Portal"

interface IPopup {
    title: string
    isOpen: boolean
    handlerSubmit?: () => void
    buttonSubmitName?: string
    handlerCancel: () => void
    buttonCancelName: string
    children: ReactNode
    size: 's' | 'm'
}

export const Popup: FC<IPopup> = (
    {
        title,
        isOpen,
        handlerSubmit,
        buttonSubmitName,
        handlerCancel,
        buttonCancelName,
        children,
        size
    }
) => {
    const [isOpenCopy, setIsOpenCopy] = useState(isOpen)

    const handleWillBeClosed = useCallback(() => {
        setIsOpenCopy(false)
    }, []);

    useEffect(() => {
        if (!isOpenCopy) {
            setTimeout(() => {
                handlerCancel()
            }, 200)
        }
    }, [handleWillBeClosed, isOpenCopy]);

    return (
        <Portal>
            <OverlayPopup
                handlerCLose={handleWillBeClosed}
                isOpen={isOpenCopy}
            >
                <section
                    className={cx(
                        styles.SPopup,
                        styles[`SPopup_size_${size}`]
                    )}
                >
                    <header
                        className={styles.SPHeader}
                    >
                        <h1
                            className={styles.SPTitle}
                        >
                            {title}
                        </h1>
                        <ButtonIcon 
                            icon={close} 
                            alt='close'
                            onClick={handleWillBeClosed}
                        />
                    </header>
                    {children}
                    <footer
                        className={styles.SPFooter}
                    >
                        {handlerSubmit && (
                            <Button
                                theme='primary'
                            >
                                {buttonSubmitName}
                            </Button>
                        )}
                        <Button
                                theme='secondary'
                                onClick={handleWillBeClosed}
                        >
                                {buttonCancelName}
                        </Button>
                    </footer>
                </section>
            </OverlayPopup>
        </Portal>
    )
}