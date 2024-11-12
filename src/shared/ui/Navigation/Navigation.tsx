import { FC } from 'react'
import { useLocation } from 'react-router-dom'
import { TPaths } from '@/shared/types'
import { Link, Icon } from 'ui-kit-todo-list/main'
import {LineIcon} from '@/shared/assets'
import styles from './styles.module.scss'
import { EPaths } from '@/shared/enums'

interface INavigation {
    links: TPaths
}

export const Navigation: FC<INavigation> = (
    {
        links
    }
) => {
    const location = useLocation()

    return (
        <nav
            className={styles.SNavigation}
        >
            {Object.values(links).map(({ title, url }, index) => {
                if (url === EPaths.MAIN) return null
                return (
                        <div 
                            key={index}
                            className={styles.SLinkWrapper}
                        >
                        <Link 
                            url={url} 
                            isSelected={location.pathname === url}
                        >
                            {title}
                        </Link>
                        {index !== Object.values(links).length - 1 ? (
                            <Icon icon={LineIcon}/>
                        ) : null}
                    </div>
                )
            })}
        </nav>
    )
}