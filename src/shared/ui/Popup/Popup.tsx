import { FC, ReactNode, useEffect, useState } from "react"
import cx from 'classnames'
import styles from './style.module.scss'
import { CloseIcon } from '#shared/assets'
import { ButtonIcon } from "../ButtonIcon"
import { Button } from "../Button"
import { OverlayPopup } from "../OverlayPopup"
import { Portal } from "../Portal"

interface IPopup {
    title: string
    isOpen: boolean
    handlerSubmit?: () => boolean
    buttonSubmitName?: string
    handlerCancel: (isOpen: boolean) => void
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

    useEffect(() => {
        if (!isOpenCopy) {
            setTimeout(() => {
                handlerCancel(false)
            }, 200)
        }
    }, [isOpenCopy]);

    const submit = () => {
        if (handlerSubmit) {
            if (handlerSubmit()) {
                setIsOpenCopy(false)
            }
            
        }
    }

    return (
        <Portal>
            <OverlayPopup
                handlerCLose={() => setIsOpenCopy(false)}
                isOpen={isOpenCopy}
            >
                <section
                    className={cx(
                        styles.SPopup,
                        styles[`SPopup_size_${size}`]
                    )}
                >
                    <header className={styles.SPHeader}>
                        <h1 className={styles.SPTitle}>
                            {title}
                        </h1>
                        <ButtonIcon 
                            icon={CloseIcon} 
                            alt='close'
                            onClick={() => setIsOpenCopy(false)}
                        />
                    </header>
                    {children}
                    <footer className={styles.SPFooter}>
                        {handlerSubmit && (
                            <Button
                                theme='primary'
                                onClick={submit}
                            >
                                {buttonSubmitName}
                            </Button>
                        )}
                        <Button
                            theme='secondary'
                            onClick={() => setIsOpenCopy(false)}
                        >
                            {buttonCancelName}
                        </Button>
                    </footer>
                </section>
            </OverlayPopup>
        </Portal>
    )
}