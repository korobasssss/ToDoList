import loader_step1 from '../../../assets/loader_step1.svg'
import loader_step2 from '../../../assets/loader_step2.svg'
import loader_step3 from '../../../assets/loader_step3.svg'
import loader_step4 from '../../../assets/loader_step4.svg'
import { Icon } from '../'
import styles from './styles/styles.module.scss'

export const Loader = () => {
    const allSteps = [loader_step1, loader_step2, loader_step3, loader_step4];

    return (
        <div className={styles.SLoader}>
            {allSteps.map(icon => {
                return (
                    <Icon 
                        classNames={styles.SItem}
                        icon={icon}
                    />
                )
            })}
        </div>
    )
}