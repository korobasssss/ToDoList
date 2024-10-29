import { FC } from "react"
import styles from './styles/styles.module.scss'
import category_icon from '../../../assets/category.svg'
import edit from '../../../assets/edit.svg'
import delete_icon from '../../../assets/delete.svg'
import { ButtonIcon, Icon } from "../../../base/components"

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
                                    icon={category_icon} 
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
                            icon={edit}
                            alt='edit'
                            onClick={handleSetIsEditOpenPopup}
                        />
                        <ButtonIcon
                            icon={delete_icon}
                            alt='delete'
                            onClick={handleSetIsDeleteOpenPopup}
                        />
                    </div>
                </div>
                <div className={styles.SDataLine}/>
            </div>
    )
}