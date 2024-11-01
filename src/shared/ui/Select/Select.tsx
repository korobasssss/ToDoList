import { FC, SetStateAction, useEffect, useMemo, useState } from "react"
import cx from 'classnames'
import { ISelectOptions } from "#shared/interfaces"
import { Input} from "../Input"
import { NoData} from "../NoData"
import { ScrollWrapper} from "../ScrollWrapper"
import styles from './styles.module.scss'
import {SelectArrowIcon} from '#shared/assets'

interface ISelect {
    label?: string
    value: ISelectOptions | null
    placeholder?: string
    options: ISelectOptions[],
    setSelected: React.Dispatch<SetStateAction<ISelectOptions | null>>
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
    const [inputValue, setInputValue] = useState('');

    const filteredOptions: ISelectOptions[] | null = useMemo(() => {
        return options.filter(option =>
            option.label.toLowerCase().includes(inputValue.toLowerCase())
        );
    }, [options, inputValue]);

    useEffect(() => {
        setInputValue(value?.label ?? '')
    }, [value])

    const handleSetInputValue = (value: string) => {
        setInputValue(value)
        setSelected(null)
    }

    const handleSetSelected = (option: ISelectOptions) => {
        setSelected(option)
        setInputValue(option.label)
        setIsFocused(false)
    }

    return (
        <div   
            className={styles.SSelectWrapper}
            onClick={() => setIsFocused(!isFocused)}
        >
            <Input
                label={label}
                value={inputValue}
                onChange={(event) => handleSetInputValue(event.target.value)}
                error={error}
                isRequired={isRequired}
                placeholder={placeholder}
                rightIcon={SelectArrowIcon}
                isFocused={isFocused}
            />
           {isFocused && (
            <ScrollWrapper>
                <ul className={cx(
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