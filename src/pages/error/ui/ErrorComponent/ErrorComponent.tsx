
import { EPaths } from '#shared/enums/EPaths'
import { Link } from '#shared/ui/Link'
import styles from './styles.module.scss'

export const ErrorComponent = () => {
    return (
        <section className={styles.SErrorWrapper}>
            <main className={styles.SError}>
                <header className={styles.SErrorHeader}>
                    Упс.... Такой страницы не существует :(
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
                        главную
                    </Link>
                </div>
            </main>
        </section>
    )
}