import { LoaderStepOneIcon, LoaderStepTwoIcon, LoaderStepThreeIcon, LoaderStepFourIcon } from '../../assets'
import { Icon } from '../Icon'
import styles from './styles.module.scss'

export const Loader = () => {
    const allSteps = [LoaderStepOneIcon, LoaderStepTwoIcon, LoaderStepThreeIcon, LoaderStepFourIcon];

    return (
        <div className={styles.SLoader}>
            {allSteps.map((icon, index) => {
                return (
                    <Icon 
                        classNames={styles.SItem}
                        icon={icon}
                        key={index}
                    />
                )
            })}
        </div>
    )
}