import { ISelectOptions } from "@/shared/interfaces"
import { Select } from "@/shared/ui/Select"
import styles from './styles.module.scss'
import { setFilterValue, useAppDispatch, useAppSelector } from "@/shared/store"
import { EOptionCategory, EOptionTask } from "@/shared/enums"

interface IFilterComponent<V extends EOptionCategory | EOptionTask, K extends string> {
    options: ISelectOptions<V, K>[]
}

export const FilterComponent = <V extends EOptionCategory | EOptionTask, K extends string>(
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
            placeholder="Выберите значение..."
        />
    )
}