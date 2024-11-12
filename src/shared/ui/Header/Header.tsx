import { FC } from 'react'
import styles from './styles.module.scss'
import { Navigation } from '../Navigation'
import { PATHS } from '@/shared/constants'
import { SearchComponent } from '@/entity/Search'
import { Button } from 'ui-kit-todo-list/main'

export interface IHeader {
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