import category from '../../../../assets/category.svg'
import edit from '../../../../assets/edit.svg'
import delete_icon from '../../../../assets/delete.svg'
import { ButtonIcon, Icon } from '../../../../base/components'
import styles from './styles/styles.module.scss'
import { FC } from 'react'

interface IUlItem {
    title: string
    categoryTitle?: string
    description: string
    handleEdit: () => void
    handleDelete: () => void
}

export const UlItem: FC<IUlItem> = (
    {
        title,
        categoryTitle,
        description,
        handleEdit,
        handleDelete
    }
) => {
    return (
        <div
            className={styles.SItemWrapper}
        >
            <div
            className={styles.SItem}
            >
                <div
                    className={styles.SDataWrapper}
                >
                    <header
                        className={styles.SDataHeader}
                    >
                        <h2
                            className={styles.SDataTitle}
                        >
                            {title}
                        </h2>
                        {categoryTitle && (
                            <div
                            className={styles.SDataCategoryWrapper}
                        >
                            <Icon 
                                icon={category} 
                                alt='category'
                            />
                            <span
                                className={styles.SDataCategoryTitle}
                            >
                                {categoryTitle}
                            </span>
                        </div>
                        )}
                    </header>
                    <p
                        className={styles.SDataDescription}
                    >
                        {description}
                    </p>
                </div>
                <div
                    className={styles.SDataButtonWrapper}
                >
                    <ButtonIcon
                        icon={edit}
                        alt='edit'
                        onClick={handleEdit}
                    />
                    <ButtonIcon
                        icon={delete_icon}
                        alt='delete'
                        onClick={handleDelete}
                    />
                </div>
            </div>
            <div
                className={styles.SDataLine}
            />
        </div>
    )
}