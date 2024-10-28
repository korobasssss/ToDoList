import { FC } from 'react'
import styles from './styles/styles.module.scss'
import { Button, Navigation } from '../'
import { PATHS } from '../../routing'

interface IHeader {
    title: string,
}

export const Header: FC<IHeader> = (
    {
        title
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
            >
                Добавить задачу
            </Button>
        </header>
    )
}