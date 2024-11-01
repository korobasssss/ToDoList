import { FC } from "react"
import { Loader } from "../Loader"
import { OverlayPopup } from "../OverlayPopup"
import { Portal } from "../Portal"
import styles from './styles.module.scss'



export const OverlayLoader: FC = (
) => {
    return (
        <Portal>
            <OverlayPopup
                classNames={styles.SOverflow}
            >
                <div
                    className={styles.SOLoader}
                >
                    <Loader/>
                </div>
            </OverlayPopup>
        </Portal>
        
    )
}