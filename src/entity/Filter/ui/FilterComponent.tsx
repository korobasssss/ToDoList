import { useFilterContext } from "@/app/hooks"
import { ISelectOptions } from "@/shared/interfaces"
import { Select } from "@/shared/ui/Select"
import styles from './styles.module.scss'

interface IFilterComponent<V extends string, K extends string> {
    options: ISelectOptions<V, K>[]
}

export const FilterComponent = <V extends string, K extends string>(
    {
        options
    }
     : IFilterComponent<V, K>
): JSX.Element => {
    const {filterValue, setFilterValue} = useFilterContext()

    return (
        <Select
            label="Фильтр"
            value={filterValue}
            options={options}
            setSelected={(value) => setFilterValue(value)}
            classNames={styles.SFilterWrapper}
        />
    )
}