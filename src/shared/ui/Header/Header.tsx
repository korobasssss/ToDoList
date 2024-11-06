import { FC } from 'react'
import styles from './styles.module.scss'
import { Button } from '../Button'
import { Navigation } from '../Navigation'
import { PATHS } from '@/shared/constants'
import { SearchComponent } from '@/entity/Search'

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
    console.log('header')
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
            <SearchComponent/>
            <Button
                theme='none'
                onClick={handleButtonClick}
            >
                {buttonName}
            </Button>
        </header>
    )
}