
import { EPaths } from '@/shared/enums'
import { Link } from '@/shared/ui/Link'
import styles from './styles.module.scss'

export const ErrorComponent = () => {
    return (
        <section className={styles.SErrorWrapper}>
            <main className={styles.SError}>
                <header className={styles.SErrorHeader}>
                    Упс.... Произошла ошибка :(
                </header>
                <div className={styles.SErrorMessage}>
                    <p>
                        Перейдите на 
                    </p>
                    <Link 
                        url={EPaths.MAIN} 
                        isSelected={false}
                        classNames={styles.SErrorLink}
                    >
                        главную страницу
                    </Link>
                </div>
            </main>
        </section>
    )
}