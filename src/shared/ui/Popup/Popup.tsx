import { FC, ReactNode } from "react"
import cx from 'classnames'
import styles from './style.module.scss'
import { CloseIcon } from '#shared/assets'
import { ButtonIcon } from "../ButtonIcon"
import { Button } from "../Button"
import { OverlayPopup } from "../OverlayPopup"
import { Portal } from "../Portal"
import { OverlayLoader } from "../OverlayLoader"

interface IPopup {
    title: string
    isOpen: boolean
    handlerSubmit?: () => Promise<boolean>
    buttonSubmitName?: string
    handlerCancel: () => void
    buttonCancelName: string
    children: ReactNode
    isLoading?: boolean
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
        isLoading,
        size
    }
) => {

    const submit = async () => {
        if (handlerSubmit) {
            if ( await handlerSubmit()) {
                handlerCancel()
            }
        }
    }

    return (
        <Portal>
            <OverlayPopup
                handlerCLose={handlerCancel}
                isOpen={isOpen}
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
                            onClick={handlerCancel}
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
                            onClick={handlerCancel}
                        >
                            {buttonCancelName}
                        </Button>
                    </footer>
                </section>
            </OverlayPopup>
            {isLoading && (
                <OverlayLoader/>
            )}
        </Portal>
    )
}