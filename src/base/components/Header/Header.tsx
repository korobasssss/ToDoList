import { FC } from 'react'
import styles from './styles/styles.module.scss'
import { Button, Navigation } from '../'
import { PATHS } from '../../routing'

interface IHeader {
    title: string,
    buttonName: string
    handleButtonClick: () => void
}

export const Header: FC<IHeader> = (
    {
        title,
        handleButtonClick,
        buttonName
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
                {buttonName}
            </Button>
        </header>
    )
}