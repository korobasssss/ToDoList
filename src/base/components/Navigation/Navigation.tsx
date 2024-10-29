import { FC } from 'react'
import { TPaths } from '../../types'
import { Link } from '../Link'
import line from '../../../assets/line.svg'
import { Icon } from '../Icon'
import styles from './styles/styles.module.scss'
import { useLocation } from 'react-router-dom'

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
                            <Icon icon={line}/>
                        ) : null}
                    </div>
                ) : null
            ))}
        </nav>
    )
}