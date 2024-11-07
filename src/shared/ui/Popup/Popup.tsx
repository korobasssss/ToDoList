import { FC, ReactNode, useMemo } from "react"
import cx from 'classnames'
import styles from './style.module.scss'
import { CloseIcon } from '@/shared/assets'
import { ButtonIcon } from "../ButtonIcon"
import { Button } from "../Button"
import { OverlayPopup } from "../OverlayPopup"
import { Portal } from "../Portal"
import { OverlayLoader } from "../OverlayLoader"

export interface IPopup {
    title: string
    isOpen: boolean
    handlerSubmit?: () => Promise<boolean>
    buttonSubmitName?: string
    handlerCancel: () => void
    buttonCancelName?: string
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

    const stylesPopup = useMemo(() => {
        return (
            cx(
                styles.SPopup,
                styles[`SPopup_size_${size}`]
            )
        )
    }, [size])

    return (
        <Portal>
            <OverlayPopup
                isOpen={isOpen}
            >
                <section
                    className={stylesPopup}
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
                    {(buttonSubmitName || buttonCancelName) && (
                        <footer className={styles.SPFooter}>
                        {buttonSubmitName && (
                            <Button
                                theme='primary'
                                type='submit'
                                onClick={submit}
                            >
                                {buttonSubmitName}
                            </Button>
                        )}
                        {buttonCancelName && (
                            <Button
                                theme='secondary'
                                onClick={handlerCancel}
                            >
                                {buttonCancelName}
                            </Button>
                        )}
                    </footer>
                    )}
                </section>
            </OverlayPopup>
            {isLoading && (
                <OverlayLoader/>
            )}
        </Portal>
    )
}