import { FC } from "react"
import styles from './styles.module.scss'
import {CategoryIcon, EditIcon, DeleteIcon} from '@/shared/assets'
import { ButtonIcon } from '../ButtonIcon'
import { Icon } from "../Icon"

interface IUlItemLayout {
    name: string
    category: string | null
    description: string | null
    
    handleSetIsEditOpenPopup: () => void
    handleSetIsDeleteOpenPopup: () => void
}

export const UlItemLayout: FC<IUlItemLayout> = (
    {
        name,
        category,
        description,
        handleSetIsEditOpenPopup,
        handleSetIsDeleteOpenPopup
    }
) => {
    return (
        <div className={styles.SItemWrapper}>
            <div className={styles.SItem}>
                <div className={styles.SDataWrapper}>
                    <header className={styles.SDataHeader}>
                        <h2 className={styles.SDataTitle}>
                            {name}
                        </h2>
                        {category && (
                            <div className={styles.SDataCategoryWrapper}>
                            <Icon
                                icon={CategoryIcon} 
                                alt='category'
                            />
                            <span className={styles.SDataCategoryTitle}>
                                {category}
                            </span>
                        </div>
                        )}
                    </header>
                    <p className={styles.SDataDescription}>
                        {description}
                    </p>
                </div>
                <div className={styles.SDataButtonWrapper}>
                    <ButtonIcon
                        icon={EditIcon}
                        alt='edit'
                        onClick={handleSetIsEditOpenPopup}
                    />
                    <ButtonIcon
                        icon={DeleteIcon}
                        alt='delete'
                        onClick={handleSetIsDeleteOpenPopup}
                    />
                </div>
            </div>
            <div className={styles.SDataLine}/>
        </div>
    )
}