import { SearchIcon } from "@/shared/assets"
import { Input } from "@/shared/ui/Input"
import styles from './styles.module.scss'
import { FC } from "react"
import { useSearchContext } from "@/app/hooks"

export const SearchComponent: FC = () => {
    const {searchValue, setSearchValue} = useSearchContext()

    return (
        <div>
            <Input
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}
                leftIcon={SearchIcon}
                classNames={styles.SInputColor}
            />
        </div>
    )
}