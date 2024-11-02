import { FC, SetStateAction } from "react"
import styles from './styles.module.scss'
import {CategoryIcon, EditIcon, DeleteIcon} from '@/shared/assets'
import { ButtonIcon } from '../ButtonIcon'
import { Icon } from "../Icon"

interface IUlItemLayout {
    index: number
    name: string
    category: string | null
    description: string | null
    
    handleSetIsEditOpenPopup: React.Dispatch<SetStateAction<boolean>>
    handleSetIsDeleteOpenPopup: React.Dispatch<SetStateAction<boolean>>
    setCurrIndex: React.Dispatch<SetStateAction<number>>
}

export const UlItemLayout: FC<IUlItemLayout> = (
    {
        name,
        index,
        category,
        description,
        handleSetIsEditOpenPopup,
        handleSetIsDeleteOpenPopup,
        setCurrIndex
    }
) => {
    const handleEdit = () => {
        setCurrIndex(index)
        handleSetIsEditOpenPopup(true)
    }

    const handleDelete = () => {
        setCurrIndex(index)
        handleSetIsDeleteOpenPopup(true)
    }

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
                            onClick={handleEdit}
                        />
                        <ButtonIcon
                            icon={DeleteIcon}
                            alt='delete'
                            onClick={handleDelete}
                        />
                    </div>
                </div>
                <div className={styles.SDataLine}/>
            </div>
    )
}