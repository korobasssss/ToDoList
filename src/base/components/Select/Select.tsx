import { FC, useEffect, useState } from "react"
import cx from 'classnames'
import { ISelectOptions } from "../../interfaces"
import { Input, NoData, ScrollWrapper} from "../"
import styles from './styles/styles.module.scss'
import select_arrow from '../../../assets/select_arrow.svg'

interface ISelect {
    label?: string
    value: ISelectOptions | null
    placeholder?: string
    options: ISelectOptions[],
    setSelected(newValue: ISelectOptions | null) : void
    error?: string
    isRequired?: boolean
}

export const Select: FC<ISelect> = (
    {
        label,
        error,
        isRequired,
        placeholder,
        options,
        setSelected,
        value
    }
) => {
    const [isFocused, setIsFocused] = useState(false);
    const [input_value, setInput_value] = useState('');
    const [filteredOptions, setFilteredOptions] = useState<ISelectOptions[] | null>(options)

    useEffect(() => {
        setFilteredOptions(options)
    }, [options])

    const handleSetInputValue = (value: string) => {
        setInput_value(value)
        setFilteredOptions(options.filter(option => option.label.toLowerCase().includes(input_value.toLowerCase())))
        setSelected(null)
    }

    const handleSetSelected = (option: ISelectOptions) => {
        setSelected(option)
        setInput_value(option.label)
        setIsFocused(false)
    }

    return (
        <div   
            className={styles.SSelectWrapper}
            onClick={() => setIsFocused(!isFocused)}
        >
            <Input
                label={label}
                value={input_value}
                onChange={(event) => handleSetInputValue(event.target.value)}
                error={error}
                isRequired={isRequired}
                placeholder={placeholder}
                rightIcon={select_arrow}
                isFocused={isFocused}
            />
           {isFocused && (
            <ScrollWrapper>
                <ul
                    className={cx(
                        styles.SOptionsWrapper,
                        {
                            [styles['SOptionsWrapper_error']] : error
                        }
                    )}
                >
                    {filteredOptions && filteredOptions.length > 0 ?
                        filteredOptions.map(option => {
                            return (
                                <li
                                    key={option.value}
                                    className={cx(
                                        styles.SOption,
                                        {
                                            [styles['SOption_selected']] : option.value === value?.value
                                        }
                                    )}
                                    onClick={() => handleSetSelected(option)}
                                >
                                    <span className={styles.SOptionTitle}>
                                        {option.label}
                                    </span>
                                </li>
                            )
                        })
                    : <NoData message="Нет подходящих значений..."/>
                }
                </ul>
            </ScrollWrapper>
           )}
        </div>
    )
}