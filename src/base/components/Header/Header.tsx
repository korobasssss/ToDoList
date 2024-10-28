import { FC } from 'react'
import styles from './styles/styles.module.scss'
import { Button, Navigation } from '../'
import { PATHS } from '../../routing'

interface IHeader {
    title: string,
    handleButtonClick: () => void
}

export const Header: FC<IHeader> = (
    {
        title,
        handleButtonClick
    }
) => {
    return (
        <header
            className={styles.SHeader}
        >
            <h1
                className={styles.SHeaderTitle}
            >
                {title}
            </h1>
            <Navigation 
                links={PATHS}
            />
            <Button
                theme='none'
                onClick={handleButtonClick}
            >
                Добавить задачу
            </Button>
        </header>
    )
}