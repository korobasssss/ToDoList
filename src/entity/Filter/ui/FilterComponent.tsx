import { ISelectOptions } from "@/shared/interfaces"
import { Select } from "@/shared/ui/Select"
import styles from './styles.module.scss'
import { setFilterValue, useAppDispatch, useAppSelector } from "@/shared/store"

interface IFilterComponent<V extends string, K extends string> {
    options: ISelectOptions<V, K>[]
}

export const FilterComponent = <V extends string, K extends string>(
    {
        options
    }
     : IFilterComponent<V, K>
): JSX.Element => {
    const { filterValue } = useAppSelector(state => state.filter)
    const dispatch = useAppDispatch();
    
    return (
        <Select
            label="Фильтр"
            value={filterValue}
            options={options}
            setSelected={(value) => dispatch(setFilterValue(value))}
            classNames={styles.SFilterWrapper}
        />
    )
}