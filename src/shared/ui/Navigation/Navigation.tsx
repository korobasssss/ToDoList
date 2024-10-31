import { FC } from 'react'
import { useLocation } from 'react-router-dom'
import { TPaths } from '../../types'
import { Link } from '../Link'
import { Icon } from '../Icon'
import {LineIcon} from '../../assets'
import styles from './styles.module.scss'

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
            {Object.values(links).map(({ title, url }, index) => (
                index !== 0 ? (
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
                ) : null
            ))}
        </nav>
    )
}