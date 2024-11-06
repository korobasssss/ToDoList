import { SearchIcon } from "@/shared/assets"
import { Input } from "@/shared/ui/Input"
import styles from './styles.module.scss'
import { FC, memo } from "react"
import { useAppSelector, setSearchValue, useAppDispatch } from "@/shared/store"

export const SearchComponent: FC = memo(() => {
    const { searchValue } = useAppSelector(state => state.filter)
    const dispatch = useAppDispatch();

    return (
        <div>
            <Input
                value={searchValue}
                onChange={(event) => dispatch(setSearchValue(event.target.value))}
                leftIcon={SearchIcon}
                classNames={styles.SInputColor}
            />
        </div>
    )
})